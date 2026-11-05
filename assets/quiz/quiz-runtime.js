(function() {
  "use strict";
  function normalizeCompareConfig(config = {}) {
    const ignore = config.ignore || {};
    return {
      ignore: {
        spaces: ignore.spaces || "none",
        characters: ignore.characters || "",
        case: ignore.case === true,
        diacritics: ignore.diacritics === true
      },
      equivalence: config.equivalence || {}
    };
  }
  function normalizeAnswer(value, ignore) {
    let normalized = String(value ?? "");
    if (ignore.characters) {
      const escaped = String(ignore.characters).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      normalized = normalized.replace(
        new RegExp(`[${escaped}]`, "g"),
        ""
      );
    }
    if (ignore.spaces === "all") {
      normalized = normalized.replace(/\s+/g, "");
    } else if (ignore.spaces === "outside") {
      normalized = normalized.trim();
    } else if (ignore.spaces === "inside") {
      const leading = normalized.match(/^\s*/)?.[0] || "";
      const trailing = normalized.match(/\s*$/)?.[0] || "";
      const start = leading.length;
      const end = normalized.length - trailing.length;
      normalized = leading + normalized.slice(start, end).replace(/\s+/g, "") + trailing;
    }
    if (ignore.case) {
      normalized = normalized.toLowerCase();
    }
    if (ignore.diacritics) {
      normalized = normalized.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }
    return normalized;
  }
  function applyEquivalences(value, equivalence, caseInsensitive) {
    if (!equivalence || typeof equivalence !== "object") {
      return value;
    }
    const replacements = /* @__PURE__ */ new Map();
    for (const [canonical, variants] of Object.entries(equivalence)) {
      const canonicalKey = caseInsensitive ? canonical.toLowerCase() : canonical;
      for (const variant of Array.isArray(variants) ? variants : [variants]) {
        const variantKey = caseInsensitive ? String(variant).toLowerCase() : String(variant);
        replacements.set(variantKey, canonicalKey);
      }
    }
    if (replacements.size === 0) {
      return value;
    }
    const pattern = [...replacements.keys()].sort((left, right) => right.length - left.length).map((key) => key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
    return value.replace(
      new RegExp(pattern, "g"),
      (match) => replacements.get(match) ?? match
    );
  }
  function compareAnswers(userAnswer, correctAnswer, compareConfig = {}) {
    const { ignore, equivalence } = normalizeCompareConfig(compareConfig);
    const caseInsensitive = ignore.case === true;
    let user = normalizeAnswer(userAnswer, ignore);
    let correct = normalizeAnswer(correctAnswer, ignore);
    user = applyEquivalences(user, equivalence, caseInsensitive);
    correct = applyEquivalences(correct, equivalence, caseInsensitive);
    return user === correct;
  }
  function clampScore(score, pointsMax, minScore, clampMax = true) {
    let value = Number(score);
    if (clampMax) {
      value = Math.min(value, Number(pointsMax));
    }
    if (minScore !== null && minScore !== void 0) {
      const minimum = Number(minScore);
      if (minimum < Number(pointsMax)) {
        value = Math.max(value, minimum);
      }
    }
    return value;
  }
  function arraysEqual(left, right) {
    if (left.length !== right.length) {
      return false;
    }
    for (let index = 0; index < left.length; index += 1) {
      if (left[index] !== right[index]) {
        return false;
      }
    }
    return true;
  }
  function unquoteAtom(value) {
    const text = String(value).trim();
    if (text.length >= 2 && (text.startsWith('"') && text.endsWith('"') || text.startsWith("'") && text.endsWith("'"))) return text.slice(1, -1);
    return text;
  }
  function splitCompactList(inner) {
    const tokens = [];
    let current = "";
    let depth = 0;
    let quote = null;
    let escaped = false;
    const flush = () => {
      const value = current.trim();
      current = "";
      if (value) tokens.push(value);
    };
    for (const character of inner) {
      if (escaped) {
        current += character;
        escaped = false;
        continue;
      }
      if (character === "\\" && quote) {
        current += character;
        escaped = true;
        continue;
      }
      if (character === '"' || character === "'") {
        if (quote === character) quote = null;
        else if (quote === null) quote = character;
        current += character;
        continue;
      }
      if (quote) {
        current += character;
        continue;
      }
      if (character === "[") {
        depth += 1;
        current += character;
        continue;
      }
      if (character === "]") {
        depth = Math.max(0, depth - 1);
        current += character;
        continue;
      }
      if (depth === 0 && (character === "," || /\s/.test(character))) {
        flush();
        continue;
      }
      current += character;
    }
    flush();
    return tokens;
  }
  function parseBracketKey(key) {
    const value = String(key).trim();
    if (!value.startsWith("[") || !value.endsWith("]")) return null;
    const inner = value.slice(1, -1).trim();
    if (!inner) return [];
    return splitCompactList(inner).map((item) => {
      const nested = parseBracketKey(item);
      return nested === null ? unquoteAtom(item) : nested;
    });
  }
  function resolveScoreLimits(questionData, globalConfig = {}) {
    const minScore = questionData.min_score !== void 0 ? questionData.min_score : globalConfig.min_score !== void 0 ? globalConfig.min_score : null;
    const clampMax = questionData.clamp_max_score ?? globalConfig.clamp_max_score ?? true;
    return {
      minScore,
      clampMax
    };
  }
  function normalizedAtom(value) {
    return String(value ?? "").trim();
  }
  function splitPhraseKey(key) {
    const value = String(key ?? "").trim();
    if (!value) return [];
    return parseBracketKey(`[${value}]`) || [];
  }
  function normalizeSequence(value) {
    return (Array.isArray(value) ? value : [value]).map((item) => {
      if (Array.isArray(item)) return normalizeSequence(item);
      return normalizedAtom(item);
    });
  }
  function compareSequences(left, right) {
    if (!Array.isArray(left) || !Array.isArray(right) || left.length !== right.length) {
      return false;
    }
    return left.every((value, index) => Array.isArray(value) || Array.isArray(right[index]) ? compareSequences(value, right[index]) : normalizedAtom(value) === normalizedAtom(right[index]));
  }
  function sortedFlat(values) {
    return normalizeSequence(values).map((value) => JSON.stringify(value)).sort();
  }
  function compareSets(left, right) {
    return arraysEqual(sortedFlat(left), sortedFlat(right));
  }
  function parseRuleValue(key, kind) {
    const bracketed = parseBracketKey(key);
    if (bracketed !== null) return bracketed;
    if (kind === "sequence" || kind === "relations") return splitPhraseKey(key);
    return normalizedAtom(key);
  }
  function findErrorScoreRule(rules, candidate, kind = "scalar", options = {}) {
    for (const rule of rules || []) {
      const expected = parseRuleValue(rule.key, kind);
      let matches = false;
      if (kind === "scalar") {
        matches = normalizedAtom(candidate) === normalizedAtom(expected);
      } else if (kind === "set" || kind === "relations") {
        matches = Array.isArray(expected) && compareSets(candidate, expected);
      } else if (kind === "sequence") {
        matches = Array.isArray(expected) && compareSequences(normalizeSequence(candidate), normalizeSequence(expected));
      } else if (kind === "columns") {
        const leftColumns = normalizeSequence(candidate);
        const rightColumns = normalizeSequence(expected);
        matches = leftColumns.length === rightColumns.length && leftColumns.every((column, index) => options.ordered ? compareSequences(column, rightColumns[index]) : compareSets(column, rightColumns[index]));
      }
      if (matches) return rule;
    }
    return null;
  }
  function resolveErrorScore(errorScores, candidate, kind = "scalar", options = {}) {
    const rule = findErrorScoreRule(errorScores?.rules, candidate, kind, options);
    if (rule) return Number(rule.score);
    if (errorScores?.error_default !== null && errorScores?.error_default !== void 0) {
      return Number(errorScores.error_default);
    }
    return null;
  }
  function scoreQuestion$5(questionData, userAnswers, globalConfig = {}) {
    const points = Number(questionData.points || 1);
    const blanks = Array.isArray(questionData.blanks) ? questionData.blanks : [];
    const blankCount = blanks.length || 1;
    const scoringMode = questionData.scoring_mode || "proportional";
    const perBlank = points / blankCount;
    const errorsMode = questionData.error_scores || { blanks: [] };
    const compareConfig = questionData.compare_answers || questionData.quiz_compare_answers || globalConfig.blanks?.compare_answers || {};
    const questionDefaultFalse = questionData.error_default !== null && questionData.error_default !== void 0 ? Number(questionData.error_default) : null;
    const hasQuestionDefaultFalse = questionDefaultFalse !== null;
    let correctCount = 0;
    let anyWrongNonEmpty = false;
    const states = blanks.map((blank, index) => {
      const answer = String(userAnswers[index] ?? "");
      const accepted = Array.isArray(blank.answers) ? blank.answers : [];
      const isEmpty = answer.trim() === "";
      const isCorrect = !isEmpty && accepted.some(
        (expected) => compareAnswers(answer, expected, compareConfig)
      );
      if (isCorrect) {
        correctCount += 1;
      }
      if (!isCorrect && !isEmpty) {
        anyWrongNonEmpty = true;
      }
      return { answer, isCorrect, isEmpty };
    });
    const { minScore, clampMax } = resolveScoreLimits(
      questionData,
      globalConfig
    );
    const hasAnyBlankErrors = blanks.some((_, index) => {
      const error = errorsMode.blanks?.[index];
      return Boolean(
        error && (error.rules?.length > 0 || error.error_default !== null)
      );
    });
    if (scoringMode === "all_or_nothing" || scoringMode === "some_or_nothing" && hasAnyBlankErrors) {
      if (!hasAnyBlankErrors) {
        const allCorrect = correctCount === blanks.length;
        const base = allCorrect ? points : anyWrongNonEmpty && hasQuestionDefaultFalse ? questionDefaultFalse : 0;
        return clampScore(base, points, minScore, clampMax);
      }
      let total2 = 0;
      let uncovered = false;
      states.forEach((state, index) => {
        if (uncovered) {
          return;
        }
        if (state.isCorrect) {
          total2 += perBlank;
          return;
        }
        const error = errorsMode.blanks?.[index] || null;
        const blankDefault = error?.error_default !== null && error?.error_default !== void 0 ? Number(error.error_default) : null;
        const effectiveDefault = blankDefault !== null ? blankDefault : hasQuestionDefaultFalse ? questionDefaultFalse : null;
        if (state.isEmpty) {
          if (effectiveDefault !== null) {
            total2 += effectiveDefault;
          } else {
            uncovered = true;
          }
          return;
        }
        const rule = (error?.rules || []).find(
          (candidate) => compareAnswers(
            state.answer,
            candidate.answer,
            compareConfig
          )
        );
        if (rule) {
          total2 += Number(rule.score);
        } else if (effectiveDefault !== null) {
          total2 += effectiveDefault;
        } else {
          uncovered = true;
        }
      });
      return clampScore(
        uncovered ? 0 : total2,
        points,
        minScore,
        clampMax
      );
    }
    if (scoringMode === "some_or_nothing") {
      return clampScore(
        anyWrongNonEmpty ? 0 : perBlank * correctCount,
        points,
        minScore,
        clampMax
      );
    }
    let total = perBlank * correctCount;
    states.forEach((state, index) => {
      if (state.isCorrect) {
        return;
      }
      const error = errorsMode.blanks?.[index] || null;
      const blankDefault = error?.error_default !== null && error?.error_default !== void 0 ? Number(error.error_default) : null;
      const effectiveDefault = blankDefault !== null ? blankDefault : hasQuestionDefaultFalse ? questionDefaultFalse : 0;
      const rule = (error?.rules || []).find(
        (candidate) => compareAnswers(
          state.answer,
          candidate.answer,
          compareConfig
        )
      );
      total += rule ? Number(rule.score) : effectiveDefault;
    });
    return clampScore(total, points, minScore, clampMax);
  }
  function getCorrectionPresentation(isCorrect, acceptedAnswerCount) {
    const hasAlternatives = Number(acceptedAnswerCount) > 1;
    return {
      hasAlternatives,
      showCorrectMarker: Boolean(isCorrect) && hasAlternatives,
      showMenu: hasAlternatives
    };
  }
  function validate$5(quiz, quizId, dependencies) {
    const {
      createBlanksCorrectionDropdown,
      decryptAnswers,
      displayScorePoints,
      globalConfig,
      shouldShowCorrections,
      translate,
      typesetMath
    } = dependencies;
    const correctionData = decryptAnswers(quiz.dataset.encrypted);
    if (!correctionData) {
      globalThis.alert?.(
        translate("ui.error_downloading_corrections", "Error downloading corrections")
      );
      return;
    }
    const showCorrection = shouldShowCorrections(quiz);
    const droppedElements = [];
    let totalPoints = 0;
    let earnedPoints = 0;
    quiz.querySelectorAll(".mkq-question[data-question-id]").forEach(
      (questionElement) => {
        const questionId = Number.parseInt(
          questionElement.dataset.questionId,
          10
        );
        const questionData = correctionData.questions.find(
          (question) => question.number === questionId
        );
        if (!questionData) {
          return;
        }
        totalPoints += Number(questionData.points || 1);
        const inputs = [...questionElement.querySelectorAll(".mkq-blank-input")];
        const userAnswers = inputs.map((input) => input.value);
        questionData.quiz_compare_answers = correctionData.compare_answers || null;
        earnedPoints += scoreQuestion$5(questionData, userAnswers, globalConfig);
        if (!showCorrection) {
          return;
        }
        inputs.forEach((input, blankIndex) => {
          const blank = questionData.blanks[blankIndex];
          if (!blank) {
            return;
          }
          const compareConfig = questionData.compare_answers || correctionData.compare_answers || globalConfig.blanks?.compare_answers || {};
          const isCorrect = blank.answers.some(
            (answer) => compareAnswers(input.value, answer, compareConfig)
          );
          const correctionPresentation = getCorrectionPresentation(
            isCorrect,
            blank.answers.length
          );
          let next = input.nextSibling;
          while (next?.classList?.contains("mkq-blank-correction-wrapper") || next?.classList?.contains("mksq-blank-correct-marker")) {
            const toRemove = next;
            next = next.nextSibling;
            toRemove.remove();
          }
          if (isCorrect) {
            input.classList.add("correct");
            input.classList.remove("incorrect");
            if (correctionPresentation.hasAlternatives) {
              input.classList.remove("mksq-single-answer-correct");
              input.style.display = "none";
              const wrapper2 = document.createElement("span");
              wrapper2.className = "mkq-blank-correction-wrapper mksq-blank-correct-wrapper";
              wrapper2.appendChild(
                createBlanksCorrectionDropdown(
                  `mksq-fillblank-correct-${quizId}-q${questionId}-blank${blankIndex}`,
                  blank.answers,
                  input.value,
                  {
                    showCorrectMarker: correctionPresentation.showCorrectMarker,
                    showMenu: correctionPresentation.showMenu
                  }
                )
              );
              input.after(wrapper2);
              droppedElements.push(wrapper2);
            } else {
              input.style.display = "";
              input.classList.add("mksq-single-answer-correct");
              input.setAttribute(
                "aria-label",
                translate("ui.correct_answer", "Correct answer")
              );
            }
            return;
          }
          input.style.display = "none";
          input.classList.remove("correct", "mksq-single-answer-correct");
          input.classList.add("incorrect");
          const wrapper = document.createElement("span");
          wrapper.className = "mkq-blank-correction-wrapper";
          const label = document.createElement("span");
          label.className = "mkq-blank-wrong-label";
          const displayAnswer = input.value.trim();
          label.innerHTML = `<s>${displayAnswer || translate("ui.empty_answer", "(empty)")}</s>`;
          wrapper.appendChild(label);
          wrapper.appendChild(
            createBlanksCorrectionDropdown(
              `mkq-scdropdown-${quizId}-q${questionId}-blank${blankIndex}`,
              blank.answers,
              null,
              {
                showCorrectMarker: correctionPresentation.showCorrectMarker,
                showMenu: correctionPresentation.showMenu
              }
            )
          );
          input.after(wrapper);
          droppedElements.push(wrapper);
        });
      }
    );
    displayScorePoints(quizId, earnedPoints, totalPoints);
    if (droppedElements.length > 0) {
      typesetMath(droppedElements);
    }
  }
  const controller$5 = Object.freeze({
    type: "blanks",
    scoreQuestion: scoreQuestion$5,
    validate: validate$5
  });
  function normalize(values) {
    return [...values].map((value) => String(value).trim()).sort();
  }
  function findRule(rules, selectedTexts) {
    const selected = normalize(selectedTexts);
    for (const rule of rules || []) {
      const expected = parseBracketKey(rule.key);
      if (expected !== null && arraysEqual(selected, normalize(expected))) {
        return rule;
      }
    }
    return null;
  }
  function scoreQuestion$4(questionData, selectedTextsByDropdown, globalConfig = {}) {
    const dropdowns = Array.isArray(questionData.mcdropdowns) ? questionData.mcdropdowns : [];
    const points = Number(questionData.points || 1);
    const perDropdown = dropdowns.length > 0 ? points / dropdowns.length : points;
    const scoringMode = questionData.scoring_mode || "proportional";
    const errorsMode = questionData.error_scores || { mcdropdowns: [] };
    const { minScore, clampMax } = resolveScoreLimits(
      questionData,
      globalConfig
    );
    const typeDefault = questionData.error_default !== null && questionData.error_default !== void 0 ? Number(questionData.error_default) : null;
    const quizDefault = questionData.quiz_error_default !== null && questionData.quiz_error_default !== void 0 ? Number(questionData.quiz_error_default) : null;
    const questionDefault = questionData.question_error_default !== null && questionData.question_error_default !== void 0 ? Number(questionData.question_error_default) : null;
    let total = 0;
    dropdowns.forEach((dropdown, index) => {
      const selectedTexts = Array.isArray(selectedTextsByDropdown[index]) ? selectedTextsByDropdown[index] : [];
      const correctIndices = Array.isArray(dropdown.correct_indices) ? dropdown.correct_indices : [];
      const options = Array.isArray(dropdown.options) ? dropdown.options : [];
      const correctTexts = correctIndices.map(
        (optionIndex) => String(options[optionIndex] ?? "").trim()
      );
      const correctSet = new Set(correctTexts);
      const dropdownErrors = errorsMode.mcdropdowns?.[index] || null;
      const dropdownDefault = dropdownErrors?.error_default !== null && dropdownErrors?.error_default !== void 0 ? Number(dropdownErrors.error_default) : null;
      const effectiveDefault = dropdownDefault !== null ? dropdownDefault : questionDefault !== null ? questionDefault : quizDefault !== null ? quizDefault : typeDefault !== null ? typeDefault : 0;
      const hasRules = Array.isArray(dropdownErrors?.rules) && dropdownErrors.rules.length > 0;
      const hasAnyErrors = Boolean(
        hasRules || dropdownDefault !== null || questionDefault !== null || quizDefault !== null
      );
      const selected = selectedTexts.map((text) => String(text).trim());
      const isEmpty = selected.length === 0;
      const goodCount = selected.filter((text) => correctSet.has(text)).length;
      const wrongCount = selected.length - goodCount;
      const totalCorrect = correctTexts.length || 1;
      const exact = !isEmpty && arraysEqual(normalize(selected), normalize(correctTexts));
      if (exact) {
        total += perDropdown;
        return;
      }
      if (scoringMode === "all_or_nothing") {
        if (hasRules && !isEmpty) {
          const rule = findRule(dropdownErrors.rules, selected);
          total += rule ? Number(rule.score) : effectiveDefault;
        } else if (hasAnyErrors) {
          total += effectiveDefault;
        }
        return;
      }
      if (scoringMode === "some_or_nothing") {
        if (isEmpty && hasAnyErrors) {
          total += effectiveDefault;
        } else if (wrongCount === 0) {
          total += perDropdown * (goodCount / totalCorrect);
        } else if (hasRules) {
          const rule = findRule(dropdownErrors.rules, selected);
          total += rule ? Number(rule.score) : effectiveDefault;
        } else if (hasAnyErrors) {
          total += effectiveDefault;
        }
        return;
      }
      if (hasRules) {
        const rule = findRule(dropdownErrors.rules, selected);
        total += rule ? Number(rule.score) : effectiveDefault;
      } else {
        total += perDropdown * ((goodCount - wrongCount) / totalCorrect);
      }
    });
    return clampScore(total, points, minScore, clampMax);
  }
  function readSelectedTexts(dropdownElement) {
    let selectedIndices = [];
    try {
      selectedIndices = JSON.parse(
        dropdownElement.dataset.selectedIndices || "[]"
      );
    } catch {
      selectedIndices = [];
    }
    return selectedIndices.map((index) => dropdownElement.querySelector(
      `.mkq-custom-mcdropdown-option[data-value="${index}"]`
    )).filter(Boolean).map((option) => option.dataset.optionText || option.textContent.trim());
  }
  function applyCorrection$2(dropdownElement, dropdownData, selectedTexts, dependencies) {
    const {
      convertLatexDelimiters,
      translate,
      typesetMath
    } = dependencies;
    const options = dropdownData.options || [];
    const correctIndices = dropdownData.correct_indices || [];
    const correctTexts = correctIndices.map(
      (index) => String(options[index] ?? "").trim()
    );
    const isCorrect = selectedTexts.length > 0 && arraysEqual(
      [...selectedTexts].map((text) => text.trim()).sort(),
      [...correctTexts].sort()
    );
    const next = dropdownElement.nextSibling;
    if (next?.classList?.contains("mkq-mcdropdown-correction-wrapper") && next.dataset?.forId === dropdownElement.id) {
      next.remove();
    }
    if (isCorrect) {
      dropdownElement.style.display = "";
      dropdownElement.classList.remove("incorrect");
      dropdownElement.classList.add("correct");
      dropdownElement.querySelectorAll(".mkq-custom-mcdropdown-btn").forEach((button2) => {
        button2.onclick = null;
        button2.disabled = true;
        button2.style.pointerEvents = "none";
        button2.style.cursor = "default";
      });
      const arrow2 = dropdownElement.querySelector(".mkq-custom-mcdropdown-arrow");
      if (arrow2) {
        arrow2.textContent = "✓";
        arrow2.classList.add("mksq-correct-marker");
      }
      return;
    }
    const wrongLabel = selectedTexts.length === 0 ? translate("ui.empty_answer", "(empty)") : selectedTexts.map(convertLatexDelimiters).join(", ");
    dropdownElement.style.display = "none";
    const wrapper = document.createElement("span");
    wrapper.className = "mkq-mcdropdown-correction-wrapper";
    wrapper.dataset.forId = dropdownElement.id;
    wrapper.style.cssText = "display:inline-flex;align-items:center;gap:.5em;position:relative;";
    const wrong = document.createElement("span");
    wrong.className = "mkq-blank-wrong-label";
    wrong.innerHTML = `<s>${wrongLabel}</s>`;
    wrapper.appendChild(wrong);
    const correctDropdown = document.createElement("div");
    correctDropdown.className = "mkq-custom-mcdropdown correct";
    correctDropdown.style.cssText = "display:inline-block;pointer-events:none;";
    const button = document.createElement("button");
    button.type = "button";
    button.className = "mkq-custom-mcdropdown-btn correct";
    button.style.cursor = "default";
    const value = document.createElement("span");
    value.className = "mkq-custom-mcdropdown-value";
    value.innerHTML = correctTexts.map(convertLatexDelimiters).join(", ") || "--";
    const arrow = document.createElement("span");
    arrow.className = "mkq-custom-mcdropdown-arrow";
    arrow.textContent = "✓";
    arrow.style.color = "green";
    button.append(value, arrow);
    correctDropdown.appendChild(button);
    wrapper.appendChild(correctDropdown);
    dropdownElement.after(wrapper);
    typesetMath([wrapper]);
  }
  function validate$4(quiz, quizId, dependencies) {
    const {
      decryptAnswers,
      displayScorePoints,
      globalConfig,
      shouldShowCorrections,
      translate
    } = dependencies;
    const correctionData = decryptAnswers(quiz.dataset.encrypted);
    if (!correctionData) {
      globalThis.alert?.(
        translate(
          "ui.error_downloading_corrections",
          "Error downloading corrections"
        )
      );
      return;
    }
    const showCorrection = shouldShowCorrections(quiz);
    let totalPoints = 0;
    let earnedPoints = 0;
    quiz.querySelectorAll(".mkq-question[data-question-id]").forEach(
      (questionElement) => {
        const questionId = Number.parseInt(
          questionElement.dataset.questionId,
          10
        );
        const questionData = correctionData.questions.find(
          (question) => question.number === questionId
        );
        if (!questionData) {
          return;
        }
        totalPoints += Number(questionData.points || 1);
        const elements = [
          ...questionElement.querySelectorAll(".mkq-custom-mcdropdown")
        ];
        const dropdowns = Array.isArray(questionData.mcdropdowns) ? questionData.mcdropdowns : [];
        const count = Math.min(elements.length, dropdowns.length);
        const selectedTextsByDropdown = elements.slice(0, count).map(readSelectedTexts);
        earnedPoints += scoreQuestion$4(
          questionData,
          selectedTextsByDropdown,
          globalConfig
        );
        if (!showCorrection) {
          return;
        }
        elements.slice(0, count).forEach((element, index) => {
          applyCorrection$2(
            element,
            dropdowns[index],
            selectedTextsByDropdown[index],
            dependencies
          );
        });
      }
    );
    displayScorePoints(quizId, earnedPoints, totalPoints);
  }
  const controller$4 = Object.freeze({
    type: "mcdropdown",
    scoreQuestion: scoreQuestion$4,
    validate: validate$4
  });
  function sortedAnswers(values) {
    return [...values].map((value) => String(value).trim()).sort();
  }
  function findMatchingRule(rules, selectedTexts) {
    const selected = sortedAnswers(selectedTexts);
    for (const rule of rules) {
      const expected = parseBracketKey(rule.key);
      if (expected === null) {
        continue;
      }
      if (arraysEqual(selected, sortedAnswers(expected))) {
        return rule;
      }
    }
    return null;
  }
  function scoreQuestion$3(questionData, selectedTexts, globalConfig = {}) {
    const points = Number(questionData.points || 1);
    const scoringMode = questionData.scoring_mode || "all_or_nothing";
    const questionDefaultFalse = questionData.question_error_default;
    const hasQuestionDefaultFalse = questionDefaultFalse !== null && questionDefaultFalse !== void 0;
    const defaultFalse = hasQuestionDefaultFalse ? Number(questionDefaultFalse) : questionData.error_default !== null && questionData.error_default !== void 0 ? Number(questionData.error_default) : null;
    const hasDefaultFalse = defaultFalse !== null;
    const correctTexts = Array.isArray(questionData.correct_answers_text) ? questionData.correct_answers_text : [];
    const correctSet = new Set(
      correctTexts.map((text) => String(text).trim())
    );
    let goodCount = 0;
    let wrongCount = 0;
    selectedTexts.forEach((text) => {
      if (correctSet.has(String(text).trim())) {
        goodCount += 1;
      } else {
        wrongCount += 1;
      }
    });
    const totalCorrect = correctTexts.length || 1;
    const isEmpty = selectedTexts.length === 0;
    const exact = arraysEqual(
      sortedAnswers(selectedTexts),
      sortedAnswers(correctTexts)
    );
    const errorsMode = questionData.error_scores || null;
    const hasRules = Boolean(
      errorsMode && Array.isArray(errorsMode.rules) && errorsMode.rules.length > 0
    );
    const hasErrorsDefaultFalse = Boolean(
      errorsMode && errorsMode.error_default !== null && errorsMode.error_default !== void 0
    );
    const hasAnyErrorsMode = hasRules || hasErrorsDefaultFalse || hasQuestionDefaultFalse;
    const effectiveDefaultFalse = hasErrorsDefaultFalse ? Number(errorsMode.error_default) : hasDefaultFalse ? defaultFalse : 0;
    const { minScore, clampMax } = resolveScoreLimits(
      questionData,
      globalConfig
    );
    if (exact && !isEmpty) {
      return clampScore(points, points, minScore, clampMax);
    }
    if (scoringMode === "all_or_nothing") {
      let base2 = 0;
      if (hasRules && !isEmpty) {
        const matchingRule = findMatchingRule(
          errorsMode.rules,
          selectedTexts
        );
        base2 = matchingRule ? Number(matchingRule.score) : effectiveDefaultFalse;
      } else if (hasAnyErrorsMode) {
        base2 = effectiveDefaultFalse;
      }
      return clampScore(base2, points, minScore, clampMax);
    }
    if (scoringMode === "some_or_nothing") {
      if (isEmpty && hasAnyErrorsMode) {
        return clampScore(
          effectiveDefaultFalse,
          points,
          minScore,
          clampMax
        );
      }
      if (wrongCount === 0) {
        return clampScore(
          points * (goodCount / totalCorrect),
          points,
          minScore,
          clampMax
        );
      }
      if (!hasAnyErrorsMode) {
        return clampScore(0, points, minScore, clampMax);
      }
      let base2 = effectiveDefaultFalse;
      if (hasRules) {
        const matchingRule = findMatchingRule(
          errorsMode.rules,
          selectedTexts
        );
        if (matchingRule) {
          base2 = Number(matchingRule.score);
        }
      }
      return clampScore(base2, points, minScore, clampMax);
    }
    let base = points * ((goodCount - wrongCount) / totalCorrect);
    if (hasRules) {
      const matchingRule = findMatchingRule(
        errorsMode.rules,
        selectedTexts
      );
      base = matchingRule ? Number(matchingRule.score) : effectiveDefaultFalse;
    } else if (hasAnyErrorsMode) {
      base = points * (goodCount / totalCorrect) + effectiveDefaultFalse * wrongCount;
    }
    return clampScore(base, points, minScore, clampMax);
  }
  function applyCorrection$1(questionElement, questionData, translate) {
    const correctTexts = new Set(
      (questionData.correct_answers_text || []).map((text) => String(text).trim())
    );
    questionElement.querySelectorAll(".mkq-answer").forEach((label) => {
      const input = label.querySelector('input[type="checkbox"]');
      const feedback = label.querySelector(".mkq-answer-feedback");
      label.classList.remove("correct", "incorrect");
      if (feedback) {
        feedback.style.display = "none";
        feedback.textContent = "";
        feedback.classList.remove("correct", "incorrect");
      }
      const answerText = String(
        label.dataset.answerText || ""
      ).trim();
      const isChecked = Boolean(input?.checked);
      const isCorrectAnswer = correctTexts.has(answerText);
      if (isCorrectAnswer) {
        label.classList.add("correct");
        if (feedback) {
          feedback.textContent = translate(
            "feedback.correct",
            "Correct"
          );
          feedback.classList.add("correct");
          feedback.style.display = "inline";
        }
      } else if (isChecked) {
        label.classList.add("incorrect");
        if (feedback) {
          feedback.textContent = translate(
            "feedback.incorrect",
            "Incorrect"
          );
          feedback.classList.add("incorrect");
          feedback.style.display = "inline";
        }
      }
    });
  }
  function validate$3(quiz, quizId, dependencies) {
    const {
      decryptAnswers,
      displayScorePoints,
      globalConfig,
      shouldShowCorrections,
      translate
    } = dependencies;
    const correctionData = decryptAnswers(
      quiz.dataset.encrypted
    );
    if (!correctionData) {
      globalThis.alert?.(
        translate(
          "ui.error_downloading_corrections",
          "Error downloading corrections"
        )
      );
      return;
    }
    const showCorrection = shouldShowCorrections(quiz);
    const questions = quiz.querySelectorAll(
      ".mkq-question[data-question-id]"
    );
    let totalPoints = 0;
    let earnedPoints = 0;
    questions.forEach((questionElement) => {
      const questionId = Number.parseInt(
        questionElement.dataset.questionId,
        10
      );
      const questionData = correctionData.questions.find(
        (question) => question.number === questionId
      );
      if (!questionData) {
        return;
      }
      totalPoints += Number(questionData.points || 1);
      const selectedTexts = Array.from(
        questionElement.querySelectorAll(
          'input[type="checkbox"]:checked'
        )
      ).map((input) => input.closest(".mkq-answer")).map((label) => label?.dataset.answerText || "").filter((text) => text !== "");
      earnedPoints += scoreQuestion$3(
        questionData,
        selectedTexts,
        globalConfig
      );
      if (showCorrection) {
        applyCorrection$1(
          questionElement,
          questionData,
          translate
        );
      }
    });
    displayScorePoints(
      quizId,
      earnedPoints,
      totalPoints
    );
  }
  const controller$3 = Object.freeze({
    type: "mcquiz",
    scoreQuestion: scoreQuestion$3,
    validate: validate$3
  });
  function kendallTauScore(userOrder, itemCount) {
    if (itemCount <= 1) {
      return 1;
    }
    const maxInversions = itemCount * (itemCount - 1) / 2;
    let inversions = 0;
    for (let left = 0; left < userOrder.length; left += 1) {
      for (let right = left + 1; right < userOrder.length; right += 1) {
        if (userOrder[left] > userOrder[right]) {
          inversions += 1;
        }
      }
    }
    return 1 - inversions / maxInversions;
  }
  function scoreQuestion$2(questionData, userOrder, globalConfig = {}) {
    const points = Number(questionData.points || 1);
    const scoringMode = questionData.scoring_mode || "proportional";
    const itemCount = Array.isArray(questionData.items) ? questionData.items.length : 0;
    const { minScore, clampMax } = resolveScoreLimits(
      questionData,
      globalConfig
    );
    const perfect = userOrder.length === itemCount && userOrder.every((index, position) => index === position);
    if (scoringMode === "all_or_nothing") {
      return clampScore(
        perfect ? points : 0,
        points,
        minScore,
        clampMax
      );
    }
    return clampScore(
      points * kendallTauScore(userOrder, itemCount),
      points,
      minScore,
      clampMax
    );
  }
  function scoreColumns({
    points,
    mode,
    totalScorable,
    correctCount,
    wrongCount,
    distractorPlacedCount,
    distractorCorrectCount = 0,
    distractorIncorrectCount = distractorPlacedCount,
    distractorCorrectScore = 0,
    distractorIncorrectScore = 0,
    distractorPenalty = 0,
    minScore
  }) {
    const maximum = Number(points);
    const count = Number(totalScorable) || 1;
    const placedCount = Number(distractorPlacedCount || 0);
    const correctDistractors = Number(distractorCorrectCount || 0);
    const incorrectDistractors = Number(
      distractorIncorrectCount ?? placedCount
    );
    const correctDistractorValue = Number(distractorCorrectScore || 0);
    const incorrectDistractorValue = Number(
      distractorIncorrectScore ?? distractorPenalty ?? 0
    );
    let score = 0;
    if (mode === "all_or_nothing") {
      score = correctCount === count && wrongCount === 0 && placedCount === 0 ? maximum : 0;
    } else if (mode === "some_or_nothing") {
      score = wrongCount === 0 && placedCount === 0 ? maximum * (correctCount / count) : 0;
    } else {
      score = maximum * (correctCount / count);
    }
    score += correctDistractorValue * correctDistractors;
    score += incorrectDistractorValue * incorrectDistractors;
    return Math.max(Math.min(score, maximum), Number(minScore ?? 0));
  }
  function longestCommonSubsequenceLength(leftTokens, rightTokens) {
    const left = Array.isArray(leftTokens) ? leftTokens : [];
    const right = Array.isArray(rightTokens) ? rightTokens : [];
    const previous = new Array(right.length + 1).fill(0);
    left.forEach((leftToken) => {
      let diagonal = 0;
      for (let column = 1; column <= right.length; column += 1) {
        const saved = previous[column];
        if (leftToken === right[column - 1]) {
          previous[column] = diagonal + 1;
        } else {
          previous[column] = Math.max(previous[column], previous[column - 1]);
        }
        diagonal = saved;
      }
    });
    return previous[right.length] || 0;
  }
  function sentencePositionRatio(placedTexts, referenceTokens) {
    if (!referenceTokens.length) {
      return 0;
    }
    const matches = referenceTokens.reduce(
      (count, token, position) => count + Number(placedTexts[position] === token),
      0
    );
    return matches / referenceTokens.length;
  }
  function sentenceOrderRatio(placedTexts, referenceTokens) {
    if (!referenceTokens.length) {
      return 0;
    }
    return longestCommonSubsequenceLength(placedTexts, referenceTokens) / referenceTokens.length;
  }
  function kendallTauSentence(placedTexts, referenceTokens) {
    if (!referenceTokens.length) {
      return 0;
    }
    const referencePositions = {};
    referenceTokens.forEach((token, index) => {
      if (!(token in referencePositions)) {
        referencePositions[token] = index;
      }
    });
    const positions = placedTexts.filter((token) => token in referencePositions).map((token) => referencePositions[token]);
    if (positions.length === 0) {
      return 0;
    }
    const itemCount = positions.length;
    const maxInversions = itemCount * (itemCount - 1) / 2;
    if (maxInversions === 0) {
      return positions.length / referenceTokens.length;
    }
    let inversions = 0;
    for (let left = 0; left < itemCount; left += 1) {
      for (let right = left + 1; right < itemCount; right += 1) {
        if (positions[left] > positions[right]) {
          inversions += 1;
        }
      }
    }
    const orderScore = 1 - inversions / maxInversions;
    const coverage = positions.length / referenceTokens.length;
    return orderScore * coverage;
  }
  function scoreSentenceSequence({
    placedTexts,
    referenceTokens,
    maxPoints,
    mode,
    distractorPenalty,
    distractorCount
  }) {
    const tokenCount = referenceTokens.length || 1;
    if (mode === "all_or_nothing") {
      return arraysEqual(placedTexts, referenceTokens) && distractorCount === 0 ? maxPoints : 0;
    }
    if (mode === "some_or_nothing") {
      if (distractorCount > 0) {
        return 0;
      }
      const correctCount = placedTexts.filter(
        (token, index) => token === referenceTokens[index]
      ).length;
      const wrongCount = placedTexts.length - correctCount - distractorCount;
      return wrongCount > 0 ? 0 : maxPoints * (correctCount / tokenCount);
    }
    const normalizedMode = mode === "proportional" ? "proportional.order" : mode;
    let ratio;
    if (normalizedMode === "proportional.position") {
      ratio = sentencePositionRatio(placedTexts, referenceTokens);
    } else if (normalizedMode === "proportional.kendall") {
      ratio = kendallTauSentence(placedTexts, referenceTokens);
    } else {
      ratio = sentenceOrderRatio(placedTexts, referenceTokens);
    }
    return maxPoints * ratio + Number(distractorPenalty || 0) * distractorCount;
  }
  function evaluateSentenceAnswer({
    sentenceData,
    placedTexts,
    distractorCount,
    maxPoints,
    mode,
    distractorPenalty
  }) {
    const answers = Array.isArray(sentenceData.answers) ? sentenceData.answers : [];
    if (answers.length === 0) {
      return {
        answer: null,
        answerIndex: -1,
        exact: false,
        positionalMatches: 0,
        recognizedTokens: 0,
        score: 0
      };
    }
    let best = null;
    answers.forEach((answer, answerIndex) => {
      const referenceTokens = Array.isArray(answer.tokens) ? answer.tokens : [];
      const exact = arraysEqual(placedTexts, referenceTokens);
      let score;
      if (answer.score_override !== null && answer.score_override !== void 0) {
        score = exact ? Number(answer.score_override) : Number.NEGATIVE_INFINITY;
      } else {
        score = scoreSentenceSequence({
          placedTexts,
          referenceTokens,
          maxPoints,
          mode,
          distractorPenalty,
          distractorCount
        });
      }
      const positionalMatches = placedTexts.filter(
        (token, position) => token === referenceTokens[position]
      ).length;
      const recognizedTokens = placedTexts.filter(
        (token) => referenceTokens.includes(token)
      ).length;
      const lengthDistance = Math.abs(
        placedTexts.length - referenceTokens.length
      );
      const candidate = {
        answer,
        answerIndex,
        exact,
        lengthDistance,
        positionalMatches,
        recognizedTokens,
        score
      };
      if (best === null || Number(candidate.exact) > Number(best.exact) || candidate.exact === best.exact && candidate.score > best.score || candidate.exact === best.exact && candidate.score === best.score && candidate.positionalMatches > best.positionalMatches || candidate.exact === best.exact && candidate.score === best.score && candidate.positionalMatches === best.positionalMatches && candidate.recognizedTokens > best.recognizedTokens || candidate.exact === best.exact && candidate.score === best.score && candidate.positionalMatches === best.positionalMatches && candidate.recognizedTokens === best.recognizedTokens && candidate.lengthDistance < best.lengthDistance) {
        best = candidate;
      }
    });
    if (best?.score === Number.NEGATIVE_INFINITY) {
      const answer = answers[0];
      const referenceTokens = Array.isArray(answer.tokens) ? answer.tokens : [];
      best = {
        answer,
        answerIndex: 0,
        exact: arraysEqual(placedTexts, referenceTokens),
        lengthDistance: Math.abs(placedTexts.length - referenceTokens.length),
        positionalMatches: placedTexts.filter(
          (token, position) => token === referenceTokens[position]
        ).length,
        recognizedTokens: placedTexts.filter(
          (token) => referenceTokens.includes(token)
        ).length,
        score: scoreSentenceSequence({
          placedTexts,
          referenceTokens,
          maxPoints,
          mode,
          distractorPenalty,
          distractorCount
        })
      };
    }
    return best;
  }
  function scoreSentenceAnswer({
    sentenceData,
    placedTexts,
    distractorCount,
    maxPoints,
    mode,
    distractorPenalty,
    minScore
  }) {
    const evaluation = evaluateSentenceAnswer({
      sentenceData,
      placedTexts,
      distractorCount,
      maxPoints,
      mode,
      distractorPenalty
    });
    return Math.max(
      Math.min(evaluation.score, maxPoints),
      Number(minScore ?? 0)
    );
  }
  function addBadge(itemElement, text, color, { showErrorMarker = false } = {}) {
    let badge = itemElement.querySelector(".mkq-order-position-badge");
    if (!badge) {
      badge = document.createElement("span");
      badge.className = "mkq-order-position-badge";
      itemElement.appendChild(badge);
    }
    badge.className = [
      "mkq-order-position-badge",
      showErrorMarker ? "mkq-order-position-badge-with-error" : ""
    ].filter(Boolean).join(" ");
    badge.textContent = text;
    badge.style.color = color;
  }
  function validateColumnsQuestion(questionElement, questionData, showCorrection) {
    const points = Number(questionData.points || 1);
    const mode = questionData.scoring_mode || "proportional";
    const ordered = questionData.ordered === true;
    const distractorScoring = questionData.distractor_scoring && typeof questionData.distractor_scoring === "object" ? questionData.distractor_scoring : {};
    const distractorCorrectScore = Number(distractorScoring.correct || 0);
    const distractorIncorrectScore = Number(
      distractorScoring.incorrect ?? questionData.distractor_penalty ?? 0
    );
    const minScore = questionData.min_score !== void 0 && questionData.min_score !== null ? Number(questionData.min_score) : 0;
    const categories = Array.isArray(questionData.categories) ? questionData.categories : [];
    const distractors = new Set(
      (questionData.distractors || []).map((value) => String(value).trim())
    );
    const expectedCategoryByText = {};
    const expectedByCategory = categories.map((category, categoryIndex) => {
      const expected = [];
      (category.items || []).forEach((item) => {
        if (!item.locked) {
          const text = String(item.text).trim();
          expectedCategoryByText[text] = categoryIndex;
          expected.push(text);
        }
      });
      return expected;
    });
    const totalScorable = Object.keys(expectedCategoryByText).length || 1;
    let correctCount = 0;
    let wrongCount = 0;
    let distractorPlacedCount = 0;
    const learnerColumns = [];
    questionElement.querySelectorAll(".mkq-order-column").forEach(
      (columnElement, categoryIndex) => {
        const placedItems = [
          ...columnElement.querySelectorAll(
            '.mkq-order-column-items .mkq-order-item:not([data-locked="true"])'
          )
        ];
        const learnerTexts = placedItems.map(
          (itemElement) => String(itemElement.dataset.itemText || "").trim()
        );
        learnerColumns.push(learnerTexts);
        placedItems.forEach((itemElement, position) => {
          const text = learnerTexts[position];
          if (distractors.has(text)) {
            distractorPlacedCount += 1;
            if (showCorrection) {
              itemElement.classList.remove(
                "correct",
                "incorrect",
                "mksq-columns-distractor-unmoved",
                "mksq-columns-distractor-moved"
              );
              itemElement.classList.add(
                "incorrect",
                "mksq-columns-distractor-moved"
              );
              addBadge(itemElement, "✗", "var(--mkq-error)");
            }
            return;
          }
          const expectedCategory = expectedCategoryByText[text];
          if (expectedCategory === void 0) return;
          const correctCategory = expectedCategory === categoryIndex;
          const correctPosition = !ordered || expectedByCategory[categoryIndex]?.[position] === text;
          const isCorrect = correctCategory && correctPosition;
          if (isCorrect) correctCount += 1;
          else wrongCount += 1;
          if (showCorrection) {
            itemElement.classList.remove("correct", "incorrect");
            itemElement.classList.add(isCorrect ? "correct" : "incorrect");
            let badgeText = "✓";
            if (!isCorrect) {
              const label = categories[expectedCategory]?.label || "?";
              const positionText = ordered ? ` · pos.${(expectedByCategory[expectedCategory] || []).indexOf(text) + 1}` : "";
              badgeText = `→ ${label}${positionText}`;
            }
            addBadge(
              itemElement,
              badgeText,
              "var(--mkq-success)",
              { showErrorMarker: !isCorrect }
            );
          }
        });
      }
    );
    if (showCorrection) {
      questionElement.querySelectorAll(".mkq-order-pool-items .mkq-order-item").forEach((itemElement) => {
        itemElement.classList.remove(
          "correct",
          "incorrect",
          "mksq-columns-distractor-unmoved",
          "mksq-columns-distractor-moved"
        );
        const text = String(itemElement.dataset.itemText || "").trim();
        const expectedCategory = expectedCategoryByText[text];
        if (distractors.has(text)) {
          itemElement.classList.add(
            "correct",
            "mksq-columns-distractor-unmoved"
          );
          addBadge(itemElement, "✓", "var(--mkq-success)");
        } else if (expectedCategory !== void 0) {
          itemElement.classList.add("incorrect");
          addBadge(
            itemElement,
            `→ ${categories[expectedCategory]?.label || "?"}`,
            "var(--mkq-success)",
            { showErrorMarker: true }
          );
        }
      });
    }
    const exact = distractorPlacedCount === 0 && learnerColumns.length === expectedByCategory.length && learnerColumns.every((column, index) => ordered ? column.length === expectedByCategory[index].length && column.every((value, position) => value === expectedByCategory[index][position]) : column.length === expectedByCategory[index].length && [...column].sort().every(
      (value, position) => value === [...expectedByCategory[index]].sort()[position]
    ));
    const distractorCorrectCount = Math.max(
      0,
      distractors.size - distractorPlacedCount
    );
    let score = scoreColumns({
      points,
      mode,
      totalScorable,
      correctCount,
      wrongCount,
      distractorPlacedCount,
      distractorCorrectCount,
      distractorIncorrectCount: distractorPlacedCount,
      distractorCorrectScore,
      distractorIncorrectScore,
      minScore
    });
    if (!exact) {
      const errorScore = resolveErrorScore(
        questionData.error_scores,
        learnerColumns,
        "columns",
        { ordered }
      );
      if (errorScore !== null) {
        score = clampScore(errorScore, points, minScore, questionData.clamp_max_score ?? true);
      }
    }
    return score;
  }
  function clearSentenceCorrection(sentenceElement) {
    sentenceElement.querySelectorAll(".mkq-sentence-token, .mkq-sentence-pool-token").forEach((element) => {
      element.classList.remove("correct", "incorrect", "alternative");
      element.querySelectorAll?.(".mkq-order-position-badge").forEach((badge2) => badge2.remove?.());
      const badge = element.querySelector?.(".mkq-order-position-badge");
      badge?.remove?.();
    });
  }
  function collectAcceptedPositions(answers) {
    const positionsByToken = /* @__PURE__ */ new Map();
    const alternativesByPosition = [];
    answers.forEach((answer) => {
      const tokens = Array.isArray(answer.tokens) ? answer.tokens : [];
      tokens.forEach((token, position) => {
        const text = String(token).trim();
        if (!alternativesByPosition[position]) {
          alternativesByPosition[position] = /* @__PURE__ */ new Set();
        }
        alternativesByPosition[position].add(text);
        if (!positionsByToken.has(text)) {
          positionsByToken.set(text, /* @__PURE__ */ new Set());
        }
        positionsByToken.get(text).add(position);
      });
    });
    return {
      alternativesByPosition,
      positionsByToken
    };
  }
  function firstAcceptedPosition(positionsByToken, text) {
    const positions = [...positionsByToken.get(text) || []].sort(
      (left, right) => left - right
    );
    return positions.length > 0 ? positions[0] : -1;
  }
  function showSentenceCorrection(sentenceElement, referenceAnswer, placedTexts, answers) {
    const zone = sentenceElement.querySelector(".mkq-sentence-zone");
    if (!zone) {
      return;
    }
    clearSentenceCorrection(sentenceElement);
    const referenceTokens = Array.isArray(referenceAnswer?.tokens) ? referenceAnswer.tokens.map((token) => String(token).trim()) : [];
    const acceptedAnswers = Array.isArray(answers) ? answers : [];
    const {
      alternativesByPosition,
      positionsByToken
    } = collectAcceptedPositions(acceptedAnswers);
    const placedElements = [
      ...zone.querySelectorAll('.mkq-sentence-token:not([data-locked="true"])')
    ];
    placedElements.forEach((element, position) => {
      const text = String(element.dataset.tokenText || "").trim();
      const acceptedPositions = positionsByToken.get(text);
      if (element.dataset.isDistractor === "true" || !acceptedPositions || acceptedPositions.size === 0) {
        element.classList.add("incorrect");
        addBadge(element, "✗", "var(--mkq-error)");
        return;
      }
      if (text === referenceTokens[position]) {
        element.classList.add("correct");
        addBadge(element, "✓", "var(--mkq-success)");
        return;
      }
      element.classList.add("incorrect");
      const correctPosition = firstAcceptedPosition(positionsByToken, text);
      addBadge(
        element,
        correctPosition >= 0 ? `→ pos.${correctPosition + 1}` : "✗",
        correctPosition >= 0 ? "var(--mkq-success)" : "var(--mkq-error)",
        { showErrorMarker: correctPosition >= 0 }
      );
    });
    const placedTextByPosition = placedElements.map(
      (element) => String(element.dataset.tokenText || "").trim()
    );
    const positionIsSatisfied = alternativesByPosition.map(
      (alternatives, position) => alternatives?.has(placedTextByPosition[position]) === true
    );
    sentenceElement.querySelectorAll(".mkq-sentence-pool-items .mkq-sentence-pool-token").forEach((element) => {
      const text = String(element.dataset.tokenText || "").trim();
      const acceptedPositions = [...positionsByToken.get(text) || []].sort(
        (left, right) => left - right
      );
      if (acceptedPositions.length === 0) {
        return;
      }
      const satisfiedPosition = acceptedPositions.find(
        (position) => positionIsSatisfied[position]
      );
      if (satisfiedPosition !== void 0) {
        element.classList.add("alternative");
        addBadge(
          element,
          `→ pos.${satisfiedPosition + 1}`,
          "var(--mksq-alternative, #087f5b)"
        );
        return;
      }
      const targetPosition = acceptedPositions[0];
      element.classList.add("incorrect");
      addBadge(
        element,
        `→ pos.${targetPosition + 1}`,
        "var(--mkq-success)",
        { showErrorMarker: true }
      );
    });
  }
  function validateSentenceQuestion(questionElement, questionData, showCorrection) {
    const points = Number(questionData.points || 1);
    const mode = questionData.scoring_mode || "all_or_nothing";
    const distractorPenalty = Number(questionData.distractor_penalty || 0);
    const minScore = questionData.min_score !== void 0 && questionData.min_score !== null ? Number(questionData.min_score) : 0;
    const sentenceElements = [
      ...questionElement.querySelectorAll(".mkq-sentence-wrapper")
    ];
    const sentences = Array.isArray(questionData.sentences) ? questionData.sentences : [];
    const totalSentences = Math.max(sentenceElements.length, sentences.length) || 1;
    let total = 0;
    sentenceElements.forEach((sentenceElement, index) => {
      const sentenceData = sentences[index];
      const zone = sentenceElement.querySelector(".mkq-sentence-zone");
      if (!sentenceData || !zone) {
        return;
      }
      const placedElements = [
        ...zone.querySelectorAll('.mkq-sentence-token:not([data-locked="true"])')
      ];
      const placedTexts = placedElements.map(
        (element) => String(element.dataset.tokenText || "").trim()
      );
      const distractorCount = placedElements.filter(
        (element) => element.dataset.isDistractor === "true"
      ).length;
      const maxPoints = points / totalSentences;
      const evaluation = evaluateSentenceAnswer({
        sentenceData,
        placedTexts,
        distractorCount,
        maxPoints,
        mode,
        distractorPenalty
      });
      let sentenceScore = evaluation.score;
      if (!evaluation.exact) {
        const configuredErrorScore = resolveErrorScore(
          questionData.error_scores,
          placedTexts,
          "sequence"
        );
        if (configuredErrorScore !== null) sentenceScore = configuredErrorScore;
      }
      total += clampScore(
        sentenceScore,
        maxPoints,
        minScore,
        questionData.clamp_max_score ?? true
      );
      if (showCorrection && evaluation.answer) {
        showSentenceCorrection(
          sentenceElement,
          evaluation.answer,
          placedTexts,
          sentenceData.answers
        );
      }
    });
    return Math.max(Math.min(total, points), minScore);
  }
  function validateVerticalQuestion(questionElement, questionData, showCorrection, globalConfig) {
    const container = questionElement.querySelector(".mkq-order-items");
    if (!container) {
      return 0;
    }
    const itemElements = [...container.querySelectorAll(".mkq-order-item")];
    const userOrder = itemElements.map((element) => Number.parseInt(element.dataset.originalIndex, 10));
    const userTexts = itemElements.map(
      (element) => String(element.dataset.itemText || element.textContent || "").trim()
    );
    const perfect = userOrder.length === (questionData.items || []).length && userOrder.every((value, position) => value === position);
    let score = scoreQuestion$2(questionData, userOrder, globalConfig);
    if (!perfect) {
      const configuredErrorScore = resolveErrorScore(
        questionData.error_scores,
        userTexts,
        "sequence"
      );
      if (configuredErrorScore !== null) {
        const points = Number(questionData.points || 1);
        score = clampScore(
          configuredErrorScore,
          points,
          questionData.min_score,
          questionData.clamp_max_score ?? true
        );
      }
    }
    if (showCorrection) {
      container.querySelectorAll(".mkq-order-item").forEach(
        (itemElement, position) => {
          itemElement.classList.remove("correct", "incorrect");
          const originalIndex = Number.parseInt(
            itemElement.dataset.originalIndex,
            10
          );
          const isCorrect = originalIndex === position;
          itemElement.classList.add(isCorrect ? "correct" : "incorrect");
          addBadge(
            itemElement,
            isCorrect ? "✓" : `→ pos. ${originalIndex + 1}`,
            "var(--mkq-success)",
            { showErrorMarker: !isCorrect }
          );
        }
      );
    }
    return score;
  }
  function validate$2(quiz, quizId, dependencies) {
    const {
      decryptAnswers,
      displayScorePoints,
      globalConfig,
      shouldShowCorrections,
      translate
    } = dependencies;
    const correctionData = decryptAnswers(quiz.dataset.encrypted);
    if (!correctionData) {
      globalThis.alert?.(
        translate(
          "ui.error_downloading_corrections",
          "Error downloading corrections"
        )
      );
      return;
    }
    const showCorrection = shouldShowCorrections(quiz);
    let totalPoints = 0;
    let earnedPoints = 0;
    quiz.querySelectorAll(".mkq-order-question[data-question-id]").forEach(
      (questionElement) => {
        const questionId = Number.parseInt(
          questionElement.dataset.questionId,
          10
        );
        const questionData = correctionData.questions.find(
          (question) => question.number === questionId
        );
        if (!questionData) {
          return;
        }
        totalPoints += Number(questionData.points || 1);
        if (questionData.order_mode === "columns") {
          earnedPoints += validateColumnsQuestion(
            questionElement,
            questionData,
            showCorrection
          );
        } else if (questionData.order_mode === "sentence") {
          earnedPoints += validateSentenceQuestion(
            questionElement,
            questionData,
            showCorrection
          );
        } else {
          earnedPoints += validateVerticalQuestion(
            questionElement,
            questionData,
            showCorrection,
            globalConfig
          );
        }
      }
    );
    displayScorePoints(quizId, earnedPoints, totalPoints);
  }
  const controller$2 = Object.freeze({
    type: "order",
    evaluateSentenceAnswer,
    clearSentenceCorrection,
    longestCommonSubsequenceLength,
    scoreColumns,
    scoreQuestion: scoreQuestion$2,
    scoreSentenceAnswer,
    sentenceOrderRatio,
    sentencePositionRatio,
    validate: validate$2
  });
  function scoreQuestion$1(questionData, selectedTexts, globalConfig = {}) {
    const dropdowns = Array.isArray(questionData.scdropdowns) ? questionData.scdropdowns : questionData.scdropdown ? [questionData.scdropdown] : [];
    const points = Number(questionData.points || 1);
    const perDropdown = dropdowns.length > 0 ? points / dropdowns.length : points;
    const scoringMode = questionData.scoring_mode || "all_or_nothing";
    const errorsMode = questionData.error_scores || { scdropdowns: [] };
    const questionDefault = questionData.error_default !== null && questionData.error_default !== void 0 ? Number(questionData.error_default) : null;
    const hasQuestionDefault = questionDefault !== null;
    const { minScore, clampMax } = resolveScoreLimits(questionData, globalConfig);
    const states = dropdowns.map((dropdown, index) => {
      const options = Array.isArray(dropdown.options) ? dropdown.options : [];
      const correctText = String(
        options[Number(dropdown.correct_index ?? 0)] ?? ""
      ).trim();
      const selectedText = selectedTexts[index] ?? null;
      const isEmpty = selectedText === null;
      const isCorrect = !isEmpty && String(selectedText).trim() === correctText;
      return { correctText, isCorrect, isEmpty, selectedText };
    });
    const hasAnyErrors = dropdowns.some((_, index) => {
      const error = errorsMode.scdropdowns?.[index];
      return Boolean(
        error && (error.rules?.length > 0 || error.error_default !== null)
      );
    });
    if (scoringMode === "all_or_nothing" || scoringMode === "some_or_nothing" && hasAnyErrors) {
      if (!hasAnyErrors) {
        const allCorrect = states.every((state) => state.isCorrect);
        const anyWrong = states.some(
          (state) => !state.isCorrect && !state.isEmpty
        );
        return clampScore(
          allCorrect ? points : anyWrong && hasQuestionDefault ? questionDefault : 0,
          points,
          minScore,
          clampMax
        );
      }
      let total2 = 0;
      let uncovered = false;
      states.forEach((state, index) => {
        if (uncovered) {
          return;
        }
        if (state.isCorrect) {
          total2 += perDropdown;
          return;
        }
        const error = errorsMode.scdropdowns?.[index] || null;
        const dropdownDefault = error?.error_default !== null && error?.error_default !== void 0 ? Number(error.error_default) : null;
        const effectiveDefault = dropdownDefault !== null ? dropdownDefault : hasQuestionDefault ? questionDefault : null;
        if (state.isEmpty) {
          if (effectiveDefault !== null) {
            total2 += effectiveDefault;
          } else {
            uncovered = true;
          }
          return;
        }
        const rule = (error?.rules || []).find(
          (candidate) => String(candidate.option).trim() === String(state.selectedText).trim()
        );
        if (rule) {
          total2 += Number(rule.score);
        } else if (effectiveDefault !== null) {
          total2 += effectiveDefault;
        } else {
          uncovered = true;
        }
      });
      return clampScore(
        uncovered ? 0 : total2,
        points,
        minScore,
        clampMax
      );
    }
    if (scoringMode === "some_or_nothing") {
      const anyWrong = states.some(
        (state) => !state.isCorrect && !state.isEmpty
      );
      const correctCount = states.filter((state) => state.isCorrect).length;
      return clampScore(
        anyWrong ? 0 : perDropdown * correctCount,
        points,
        minScore,
        clampMax
      );
    }
    let total = 0;
    states.forEach((state, index) => {
      if (state.isCorrect) {
        total += perDropdown;
        return;
      }
      if (state.isEmpty) {
        return;
      }
      const error = errorsMode.scdropdowns?.[index] || null;
      const dropdownDefault = error?.error_default !== null && error?.error_default !== void 0 ? Number(error.error_default) : null;
      const effectiveDefault = dropdownDefault !== null ? dropdownDefault : hasQuestionDefault ? questionDefault : 0;
      const rule = (error?.rules || []).find(
        (candidate) => String(candidate.option).trim() === String(state.selectedText).trim()
      );
      total += rule ? Number(rule.score) : effectiveDefault;
    });
    return clampScore(total, points, minScore, clampMax);
  }
  function validate$1(quiz, quizId, dependencies) {
    const {
      convertLatexDelimiters,
      decryptAnswers,
      displayScorePoints,
      globalConfig,
      shouldShowCorrections,
      translate,
      typesetMath
    } = dependencies;
    const correctionData = decryptAnswers(quiz.dataset.encrypted);
    if (!correctionData) {
      globalThis.alert?.(
        translate("ui.error_downloading_corrections", "Error downloading corrections")
      );
      return;
    }
    const showCorrection = shouldShowCorrections(quiz);
    let totalPoints = 0;
    let earnedPoints = 0;
    quiz.querySelectorAll(".mkq-question[data-question-id]").forEach(
      (questionElement) => {
        const questionId = Number.parseInt(
          questionElement.dataset.questionId,
          10
        );
        const questionData = correctionData.questions.find(
          (question) => question.number === questionId
        );
        if (!questionData) {
          return;
        }
        totalPoints += Number(questionData.points || 1);
        const elements = [...questionElement.querySelectorAll(".mkq-custom-scdropdown")];
        const dropdowns = Array.isArray(questionData.scdropdowns) ? questionData.scdropdowns : questionData.scdropdown ? [questionData.scdropdown] : [];
        const count = Math.min(elements.length, dropdowns.length);
        const selectedTexts = elements.slice(0, count).map((element) => {
          const rawValue = element.dataset.selectedValue;
          if (rawValue === void 0 || rawValue === null || rawValue === "") {
            return null;
          }
          const option = element.querySelector(
            `.mkq-custom-scdropdown-option[data-value="${rawValue}"]`
          );
          return option ? option.dataset.optionText || option.textContent.trim() : null;
        });
        earnedPoints += scoreQuestion$1(
          questionData,
          selectedTexts,
          globalConfig
        );
        if (!showCorrection) {
          return;
        }
        elements.slice(0, count).forEach((element, index) => {
          const dropdown = dropdowns[index];
          const selectedText = selectedTexts[index];
          const isEmpty = selectedText === null;
          const options = dropdown.options || [];
          const correctText = String(
            options[dropdown.correct_index] ?? ""
          ).trim();
          const isCorrect = !isEmpty && String(selectedText).trim() === correctText;
          const next = element.nextSibling;
          if (next?.classList?.contains("mkq-scdropdown-correction-wrapper") && next.dataset?.forId === element.id) {
            next.remove();
          }
          if (isCorrect) {
            element.style.display = "";
            element.classList.remove("incorrect");
            element.classList.add("correct");
            const button2 = element.querySelector(".mkq-custom-scdropdown-btn");
            if (button2) {
              button2.disabled = true;
              button2.style.pointerEvents = "none";
              button2.style.cursor = "default";
            }
            const arrow = element.querySelector(".mkq-custom-scdropdown-arrow");
            if (arrow) {
              arrow.textContent = "✓";
              arrow.classList.add("mksq-correct-marker");
            }
            return;
          }
          element.style.display = "none";
          const wrapper = document.createElement("span");
          wrapper.className = "mkq-scdropdown-correction-wrapper";
          wrapper.dataset.forId = element.id;
          wrapper.style.cssText = "display:inline-flex;align-items:center;gap:.5em;position:relative;";
          const wrongLabel = document.createElement("span");
          wrongLabel.className = "mkq-blank-wrong-label";
          wrongLabel.innerHTML = isEmpty ? translate("ui.empty_answer", "(empty)") : convertLatexDelimiters(String(selectedText));
          wrapper.appendChild(wrongLabel);
          const correctDropdown = document.createElement("div");
          correctDropdown.className = "mkq-custom-scdropdown correct";
          correctDropdown.style.cssText = "display:inline-block;pointer-events:none;";
          const button = document.createElement("button");
          button.type = "button";
          button.className = "mkq-custom-scdropdown-btn correct";
          button.style.cursor = "default";
          const value = document.createElement("span");
          value.className = "mkq-custom-scdropdown-value";
          value.innerHTML = convertLatexDelimiters(correctText);
          button.append(value);
          correctDropdown.appendChild(button);
          wrapper.appendChild(correctDropdown);
          element.after(wrapper);
          typesetMath([wrapper]);
        });
      }
    );
    displayScorePoints(quizId, earnedPoints, totalPoints);
  }
  const controller$1 = Object.freeze({
    type: "scdropdown",
    scoreQuestion: scoreQuestion$1,
    validate: validate$1
  });
  function scoreQuestion(questionData, selectedText, globalConfig = {}) {
    const points = Number(questionData.points || 1);
    const questionDefaultFalse = questionData.question_error_default;
    const hasQuestionDefaultFalse = questionDefaultFalse !== null && questionDefaultFalse !== void 0;
    const defaultFalse = hasQuestionDefaultFalse ? Number(questionDefaultFalse) : questionData.error_default !== null && questionData.error_default !== void 0 ? Number(questionData.error_default) : 0;
    const correctTexts = Array.isArray(questionData.correct_answers_text) ? questionData.correct_answers_text : [];
    const correctText = correctTexts.length ? correctTexts[0] : "";
    const normalizedSelection = String(selectedText ?? "").trim();
    const exact = normalizedSelection !== "" && normalizedSelection === String(correctText).trim();
    const errorsMode = questionData.error_scores || null;
    const hasRules = Boolean(
      errorsMode && Array.isArray(errorsMode.rules) && errorsMode.rules.length > 0
    );
    const hasErrorsDefaultFalse = Boolean(
      errorsMode && errorsMode.error_default !== null && errorsMode.error_default !== void 0
    );
    const hasErrorsMode = hasRules || hasErrorsDefaultFalse || hasQuestionDefaultFalse;
    let base = exact ? points : 0;
    if (!exact && !hasErrorsMode && defaultFalse !== 0) {
      base = defaultFalse;
    }
    if (!exact && hasErrorsMode) {
      if (hasRules) {
        const matchingRule = errorsMode.rules.find(
          (rule) => String(rule.key).trim() === normalizedSelection
        );
        if (matchingRule) {
          base = Number(matchingRule.score);
        } else if (hasErrorsDefaultFalse) {
          base = Number(errorsMode.error_default);
        } else {
          base = defaultFalse;
        }
      } else {
        base = hasErrorsDefaultFalse ? Number(errorsMode.error_default) : defaultFalse;
      }
    }
    const { minScore, clampMax } = resolveScoreLimits(
      questionData,
      {
        min_score: globalConfig.min_score ?? 0,
        clamp_max_score: globalConfig.clamp_max_score
      }
    );
    return clampScore(base, points, minScore, clampMax);
  }
  function applyCorrection(questionElement, questionData, translate) {
    const correctTexts = new Set(
      (questionData.correct_answers_text || []).map((text) => String(text).trim())
    );
    questionElement.querySelectorAll(".mkq-answer").forEach((label) => {
      const input = label.querySelector('input[type="radio"]');
      const feedback = label.querySelector(".mkq-answer-feedback");
      label.classList.remove("correct", "incorrect");
      if (feedback) {
        feedback.style.display = "none";
        feedback.textContent = "";
        feedback.classList.remove("correct", "incorrect");
      }
      const answerText = String(
        label.dataset.answerText || ""
      ).trim();
      const isChecked = Boolean(input?.checked);
      const isCorrectAnswer = correctTexts.has(answerText);
      if (isCorrectAnswer) {
        label.classList.add("correct");
        if (feedback) {
          feedback.textContent = translate(
            "feedback.correct",
            "Correct"
          );
          feedback.classList.add("correct");
          feedback.style.display = "inline";
        }
      } else if (isChecked) {
        label.classList.add("incorrect");
        if (feedback) {
          feedback.textContent = translate(
            "feedback.incorrect",
            "Incorrect"
          );
          feedback.classList.add("incorrect");
          feedback.style.display = "inline";
        }
      }
    });
  }
  function validate(quiz, quizId, dependencies) {
    const {
      decryptAnswers,
      displayScorePoints,
      globalConfig,
      shouldShowCorrections,
      translate
    } = dependencies;
    const correctionData = decryptAnswers(
      quiz.dataset.encrypted
    );
    if (!correctionData) {
      globalThis.alert?.(
        translate(
          "ui.error_downloading_corrections",
          "Error downloading corrections"
        )
      );
      return;
    }
    const showCorrection = shouldShowCorrections(quiz);
    const questions = quiz.querySelectorAll(
      ".mkq-question[data-question-id]"
    );
    let totalPoints = 0;
    let earnedPoints = 0;
    questions.forEach((questionElement) => {
      const questionId = Number.parseInt(
        questionElement.dataset.questionId,
        10
      );
      const questionData = correctionData.questions.find(
        (question) => question.number === questionId
      );
      if (!questionData) {
        return;
      }
      totalPoints += Number(questionData.points || 1);
      const selectedLabel = questionElement.querySelector('input[type="radio"]:checked')?.closest(".mkq-answer");
      const selectedText = selectedLabel?.dataset.answerText || "";
      earnedPoints += scoreQuestion(
        questionData,
        selectedText,
        globalConfig
      );
      if (showCorrection) {
        applyCorrection(
          questionElement,
          questionData,
          translate
        );
      }
    });
    displayScorePoints(
      quizId,
      earnedPoints,
      totalPoints
    );
  }
  const controller = Object.freeze({
    type: "scquiz",
    scoreQuestion,
    validate
  });
  function definition(type, cssCode, displayName, controller2 = null, handler = type) {
    return Object.freeze({ type, cssCode, displayName, controller: controller2, handler });
  }
  const definitions = [
    definition("mcquiz", "mc", "Multiple choice", controller$3),
    definition("scquiz", "sc", "Single choice", controller),
    definition("blanks", "fb", "Fill in the blanks", controller$5),
    definition("scdropdown", "scd", "Single-answer dropdown", controller$1),
    definition("mcdropdown", "mcd", "Multiple-answer dropdown", controller$4),
    definition("order", "ord", "Ordering", controller$2),
    definition("columns", "cols", "Columns", controller$2, "order"),
    definition("sentence", "sent", "Sentence ordering", controller$2, "order"),
    definition("match", "match", "Tap matching"),
    definition("match.line", "match-line", "Line matching", null, "linematch"),
    definition("match.bezier", "match-bezier", "Bezier matching", null, "linematch"),
    definition("image", "image", "Image matching", null, "linematch"),
    definition("path", "path", "Path", null, "linematch"),
    definition("graph", "graph", "Graph", null, "linematch"),
    definition("flashcard", "flashcard", "Flashcards", null, "match"),
    definition("matrix", "matrix", "Matrix", null, "match")
  ];
  const questionDefinitions = Object.freeze(
    Object.fromEntries(definitions.map((item) => [item.type, item]))
  );
  function getQuestionDefinition(type) {
    const item = questionDefinitions[type];
    if (!item) throw new Error(`Unknown question type: ${type}.`);
    return item;
  }
  function getQuestionController(type) {
    return getQuestionDefinition(type).controller;
  }
  function getQuestionHandler(type) {
    return getQuestionDefinition(type).handler;
  }
  function hasQuestionController(type) {
    return Boolean(questionDefinitions[type]?.controller);
  }
  function getQuestionStorageKey(quiz) {
    const pageUuid = String(
      quiz?.dataset?.pageUuid ?? ""
    ).trim();
    const quizId = String(
      quiz?.dataset?.quizId ?? ""
    ).trim();
    if (!pageUuid) {
      throw new Error(
        "Cannot persist question answers without data-page-uuid."
      );
    }
    if (!quizId) {
      throw new Error(
        "Cannot persist question answers without data-quiz-id."
      );
    }
    return `mksq:answers:${pageUuid}:${quizId}`;
  }
  const SELECTION_BASE_COLORS = Object.freeze([
    "#e63946",
    "#1d4ed8",
    "#16a34a",
    "#9333ea",
    "#ea580c",
    "#0891b2",
    "#db2777",
    "#65a30d",
    "#7c3aed",
    "#0f766e",
    "#b45309",
    "#475569"
  ]);
  function colorForSelectionIndex(index) {
    const normalized = Math.max(0, Number.parseInt(index, 10) || 0);
    if (normalized < SELECTION_BASE_COLORS.length) {
      return SELECTION_BASE_COLORS[normalized];
    }
    const hue = Math.round(normalized * 137.508 % 360);
    return `hsl(${hue} 68% 46%)`;
  }
  const selectionPalette = Object.freeze({
    baseColors: SELECTION_BASE_COLORS,
    colorForIndex: colorForSelectionIndex
  });
  function translateFromBundle(bundle, key, fallback = "") {
    const keys = String(key).split(".");
    let value = bundle;
    for (const part of keys) {
      if (value && typeof value === "object" && part in value) {
        value = value[part];
      } else {
        return fallback || key;
      }
    }
    return value || fallback || key;
  }
  function getPageLanguage(documentObject = globalThis.document, globalConfig = globalThis.QUIZ_CONFIG) {
    const quizWithPageLanguage = documentObject?.querySelector?.(
      ".mkdocs-superquiz[data-page-language]"
    );
    const firstQuestion = documentObject?.querySelector?.(
      ".mkdocs-superquiz"
    );
    return String(
      quizWithPageLanguage?.dataset?.pageLanguage || firstQuestion?.dataset?.language || globalConfig?.page_language || globalConfig?.language || "en"
    ).trim().toLowerCase();
  }
  function translateForLanguage(language, key, fallback = "", bundles = globalThis.MKSQ_I18N, fallbackBundle = globalThis.QUIZ_CONFIG?.i18n) {
    const normalizedLanguage = String(
      language || "en"
    ).trim().toLowerCase();
    const bundle = bundles?.[normalizedLanguage] || fallbackBundle;
    return translateFromBundle(
      bundle,
      key,
      fallback
    );
  }
  const runtime = Object.freeze({
    getPageLanguage,
    findErrorScoreRule,
    parseBracketKey,
    resolveErrorScore,
    getQuestionController,
    getQuestionHandler,
    getQuestionDefinition,
    getQuestionStorageKey,
    hasQuestionController,
    questionDefinitions,
    selectionPalette,
    translateForLanguage,
    translateFromBundle
  });
  globalThis.MKSQ_FRONTEND = runtime;
})();
