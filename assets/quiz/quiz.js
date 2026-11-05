// SuperQuiz configuration (injected by plugin)
window.QUIZ_CONFIG = window.QUIZ_CONFIG || {};
window.QUIZ_CONFIG.teacher_code_hash = '442cbf3fdf0f24777036e660c32d6e4b5f7621231bff2754673c5a188a2f614a';
window.QUIZ_CONFIG.qr_report_crypto = {};
window.QUIZ_CONFIG.language = 'en';
window.QUIZ_CONFIG.i18n = {"meta": {"language": "en", "language_name": "English", "contributors": ["Rodrigo Schwencke", "Community"]}, "quiz_configs": {"preamble_keywords": ["preamble", "pre"], "question_keywords": ["question", "q"], "answers_keywords": ["answers", "ans"], "scoring_mode": ["scoring_mode", "evaluation_mode", "scoring"], "all_or_nothing": ["all_or_nothing", "all-or-nothing"], "some_or_nothing": ["some_or_nothing", "some-or-nothing"], "proportional": ["proportional", "prop"], "show_correction": ["show_correction", "correction"], "yes": ["yes", "true", "on", "1"], "no": ["no", "false", "off", "0"], "on_demand": ["on_demand", "on-demand", "demand"], "min_score": ["min_score", "minimum_score", "min"], "clamp_max_score": ["clamp_max_score", "clamp_max", "clamp"], "none": ["none", "null", "no_minimum", "unlimited"], "save_answers": ["save_answers", "save", "persist"], "compare_answers": ["compare_answers", "compare"], "ignore": ["ignore"], "spaces": ["spaces"], "spaces_all": ["all"], "spaces_inside": ["inside"], "spaces_outside": ["outside", "strip", "trim"], "spaces_none": ["none", "no_spaces"], "characters": ["characters", "chars", "strip_chars"], "case": ["case", "case_insensitive"], "diacritics": ["diacritics", "accents", "ignore_accents"], "equivalence": ["equivalence", "equality", "equals", "replace", "equiv"], "score": ["score", "scoring", "points"], "mode": ["mode", "scoring_mode"], "min": ["min", "min_score", "minimum"], "errors": ["errors", "error_scores", "penalties", "wrong", "bad_answers"], "match": ["match", "compare_answers", "compare"], "randomize": ["randomize", "random", "shuffle"], "randomize_answers": ["answers", "answer"], "randomize_questions": ["questions", "question"], "randomize_all": ["all", "everything", "both"], "randomize_none": ["none", "false", "no", "off"], "show_reset_question": ["show_reset_question", "show_question_reset", "question_reset_button"], "auto_evaluation": ["auto_evaluation", "auto-evaluation", "self_evaluation", "self-evaluation"], "proportional.position": ["proportional.position", "proportional_position", "position"], "proportional.order": ["proportional.order", "proportional_order", "order"], "proportional.kendall": ["proportional.kendall", "proportional_kendall", "kendall"], "text": ["text", "text_alignment", "text-align", "alignment"], "magnet": ["magnet", "attract", "attractive", "inward", "inside"], "repel": ["repel", "repulse", "repulsive", "anti-magnet", "antimagnet", "outward", "outside"], "center": ["center", "centre", "centered", "centred"], "incorrect": ["incorrect"], "cases": ["cases"], "default": ["default"], "type": ["type"], "points": ["points"], "mark": ["mark"], "numbering": ["numbering"], "ordered": ["ordered"], "labels": ["labels"], "feedback": ["feedback"], "connections": ["connections"]}, "quiz_types": {"mcquiz": {"synonyms": []}, "scquiz": {"synonyms": []}, "blanks": {"synonyms": []}, "scdropdown": {"synonyms": []}, "mcdropdown": {"synonyms": []}, "order": {"synonyms": []}, "columns": {"synonyms": []}, "sentence": {"synonyms": []}, "match": {"synonyms": []}, "match.line": {"synonyms": []}, "match.bezier": {"synonyms": []}, "image": {"synonyms": []}, "path": {"synonyms": []}, "graph": {"synonyms": []}, "flashcard": {"synonyms": []}, "matrix": {"synonyms": []}}, "ui": {"validate_button": "Validate", "score_label": "Score", "reset_all_questions": "Reset all questions", "all_questions_have_been_reset": "All Questions have been Reset", "unlock_title": "Unlock Corrections", "unlock_type_label": "Type", "unlock_page_label": "Page", "unlock_question_label": "Question", "unlock_qr_instruction": "Ask your teacher to scan this QR code:", "unlock_code_label": "Unlock code (provided by teacher):", "please_enter_code": "Please enter a code", "unlock_code_placeholder": "e.g., A7F3E9C2", "unlock_validate": "Validate", "unlock_generated": "Unlock code", "unlock_instruction": "Communicate this code to the student orally", "copy_code": "Copy code", "code_copied": "Copied!", "teacher_code_label": "Master teacher code", "teacher_code_placeholder": "Your master code", "teacher_code_required": "Thanks to enter your Master code", "generate_unlock_code": "Generate unlock code", "unlock_type_question": "Question", "error": "Error", "error_no_library": "Error: No QR Code library has been downloaded", "error_generating_qrcode": "Error generating QR Code", "error_no_unlocking_context": "Error: Unlocking context not found", "error_no_data": "Error", "error_no_data_desc": "Unlock data missing", "error_decoding": "Error decoding data", "error_teacher_code": "Error: Incorrect teacher code", "error_downloading_corrections": "Error downloading corrections", "error_decrypting": "Decrypting Error", "success_unlocked": "Correction unlocked successfully!", "error_incorrect_code": "Incorrect code. Check with your teacher.", "lock_tooltip_open": "Corrections always visible", "lock_tooltip_locked": "Click to unlock corrections", "lock_tooltip_permanent": "Corrections locked", "unlocked_corrections": "Unlocked corrections", "accepted_answers": "Accepted answers", "empty_answer": "(empty)", "order_pool_label": "Items to place:", "lm_clear_connections": "Clear connections", "fc_correct": "Correct", "fc_incorrect": "Incorrect", "fc_flip_back": "Flip back", "fc_reveal": "Reveal", "fc_restart": "Restart", "fc_progress": "Card", "reset_this_question": "Reset this question", "question_has_been_reset": "This question has been reset", "errors_label": "Errors", "question_label": "Question", "validate_page": "Validate all", "reset_all": "Reset all", "page_score": "Score", "provisional_score_label": "Provisional score", "embedded_question_label": "Question", "question_navigation": "Question navigation", "evaluation_results": "Evaluation results", "violation_warning": "Evaluation rule violation", "violations_summary": "Violations summary", "violations_none": "No violation detected.", "violations_total": "Total", "violations_details": "Details", "evaluation_validated": "Evaluation validated", "evaluation_validation_blocked": "Validation blocked", "evaluation_validation_blocked_message": "This evaluation cannot be validated because of a blocking violation.", "evaluation_invalidated": "Evaluation invalidated", "violation_fullscreen_exit": "Fullscreen exited", "violation_visibility_hidden": "Page hidden", "violation_focus_lost": "Focus lost", "violation_reload_attempt": "Reload attempt", "violation_reload": "Page reloaded", "violation_page_leave": "Page leave", "violation_copy": "Copy", "violation_cut": "Cut", "violation_paste": "Paste", "violation_context_menu": "Context menu", "violation_print": "Print", "violation_storage_tampering": "Storage tampering", "evaluation_access_title": "Protected evaluation", "evaluation_password_label": "Evaluation password", "evaluation_password_placeholder": "Password", "evaluation_access_submit": "Start evaluation", "evaluation_password_required": "Enter the evaluation password.", "evaluation_password_incorrect": "Incorrect evaluation password.", "evaluation_password_error": "Unable to verify the evaluation password.", "qr_report_title": "Live violations QR report", "qr_report_heading": "Evaluation violations", "qr_report_eval": "Evaluation", "qr_report_session": "Session", "qr_report_snapshot": "Snapshot", "qr_report_page": "Page", "unlock_all_corrections": "Unlock All Corrections", "unlock_question_correction": "Unlock Question Correction", "unlock_type_all_questions": "All Questions", "lock_tooltip_all_questions": "Click to unlock all corrections", "lock_tooltip_all_questions_locked": "Unlock all corrections using the button on the first question", "correct_answer": "Correct answer", "lock_tooltip_question": "Click to unlock this question correction", "drag_toolbar": "Drag toolbar"}, "feedback": {"correct": "Correct", "incorrect": "Incorrect"}, "question": {"label": "Question", "aliases": ["question"]}};
window.MKSQ_I18N = {"de": {"meta": {"language": "de", "language_name": "Deutsch", "contributors": ["Rodrigo Schwencke", "Community"]}, "quiz_configs": {"preamble_keywords": ["praeambel", "einleitung", "vorwort"], "question_keywords": ["frage", "f"], "answers_keywords": ["antworten", "antwort", "a"], "scoring_mode": ["bewertungsmodus", "auswertung"], "all_or_nothing": ["alles_oder_nichts"], "some_or_nothing": ["teilweise_oder_nichts"], "proportional": ["proportional", "anteilig"], "show_correction": ["korrektur_anzeigen", "korrektur"], "yes": ["ja", "wahr", "an"], "no": ["nein", "falsch", "aus"], "on_demand": ["bei_bedarf"], "min_score": ["mindestpunktzahl", "minimum"], "clamp_max_score": ["maximalpunktzahl_begrenzen"], "none": ["keine", "ohne_minimum"], "save_answers": ["antworten_speichern", "speichern"], "compare_answers": ["antworten_vergleichen", "vergleichen"], "ignore": ["ignorieren"], "spaces": ["leerzeichen"], "spaces_all": ["alle"], "spaces_inside": ["innen"], "spaces_outside": ["aussen"], "spaces_none": ["keine"], "characters": ["zeichen"], "case": ["gross_kleinschreibung"], "diacritics": ["diakritische_zeichen", "akzente"], "equivalence": ["aequivalenz", "gleichwertigkeit"], "score": ["punktzahl", "bewertung"], "mode": ["modus"], "min": ["minimum"], "errors": ["fehler", "strafen"], "match": ["vergleich", "zuordnung"], "randomize": ["mischen", "zufaellig"], "randomize_answers": ["antworten"], "randomize_questions": ["fragen"], "randomize_all": ["alles", "beides"], "randomize_none": ["keine", "nein"], "show_reset_question": ["show_reset_question", "frage_reset_anzeigen", "frage_reset_knopf"], "proportional.position": ["proportional.position", "proportional.positionen", "positionen"], "proportional.order": ["proportional.order", "proportional.reihenfolge", "reihenfolge"], "proportional.kendall": ["proportional.kendall", "proportional.kendall", "kendall"], "incorrect": ["incorrect"], "cases": ["cases"], "default": ["default"], "type": ["type"], "points": ["points"], "mark": ["mark"], "numbering": ["numbering"], "ordered": ["ordered"], "labels": ["labels"], "feedback": ["feedback"], "connections": ["connections"]}, "quiz_types": {"mcquiz": {"synonyms": []}, "scquiz": {"synonyms": []}, "blanks": {"synonyms": []}, "scdropdown": {"synonyms": []}, "mcdropdown": {"synonyms": []}, "order": {"synonyms": []}, "columns": {"synonyms": []}, "sentence": {"synonyms": []}, "match": {"synonyms": []}, "match.line": {"synonyms": []}, "match.bezier": {"synonyms": []}, "image": {"synonyms": []}, "path": {"synonyms": []}, "graph": {"synonyms": []}, "flashcard": {"synonyms": []}, "matrix": {"synonyms": []}}, "ui": {"validate_button": "Pr\u00fcfen", "score_label": "Punktzahl", "reset_all_questions": "Alle Fragen zur\u00fccksetzen", "all_questions_have_been_reset": "Alle Fragen wurden zur\u00fcckgesetzt", "unlock_title": "Korrekturen entsperren", "unlock_type_label": "Typ", "unlock_page_label": "Seite", "unlock_question_label": "Frage", "unlock_qr_instruction": "Bitte die Lehrkraft, diesen QR-Code zu scannen:", "unlock_code_label": "Entsperrcode (von der Lehrkraft):", "please_enter_code": "Bitte einen Code eingeben", "unlock_code_placeholder": "z. B. A7F3E9C2", "unlock_validate": "Pr\u00fcfen", "unlock_generated": "Entsperrcode", "unlock_instruction": "Teile diesen Code dem Sch\u00fcler m\u00fcndlich mit", "copy_code": "Code kopieren", "code_copied": "Kopiert!", "teacher_code_label": "Mastercode der Lehrkraft", "teacher_code_placeholder": "Dein Mastercode", "teacher_code_required": "Bitte den Mastercode eingeben", "generate_unlock_code": "Entsperrcode erzeugen", "unlock_type_question": "Frage", "error": "Fehler", "error_no_library": "Fehler: QR-Code-Bibliothek wurde nicht geladen", "error_generating_qrcode": "Fehler beim Erzeugen des QR-Codes", "error_no_unlocking_context": "Fehler: Entsperrkontext nicht gefunden", "error_no_data": "Fehler", "error_no_data_desc": "Entsperrdaten fehlen", "error_decoding": "Fehler beim Decodieren", "error_teacher_code": "Fehler: falscher Lehrkraftcode", "error_downloading_corrections": "Fehler beim Laden der Korrekturen", "error_decrypting": "Entschl\u00fcsselungsfehler", "success_unlocked": "Korrektur erfolgreich entsperrt!", "error_incorrect_code": "Falscher Code. Frage die Lehrkraft.", "lock_tooltip_open": "Korrekturen immer sichtbar", "lock_tooltip_locked": "Klicken, um Korrekturen zu entsperren", "lock_tooltip_permanent": "Korrekturen gesperrt", "unlocked_corrections": "Entsperrte Korrekturen", "accepted_answers": "Akzeptierte Antworten", "empty_answer": "(leer)", "order_pool_label": "Zu platzierende Elemente:", "lm_clear_connections": "Verbindungen l\u00f6schen", "fc_correct": "Richtig", "fc_incorrect": "Falsch", "fc_flip_back": "Zur\u00fcckdrehen", "fc_reveal": "Aufdecken", "fc_restart": "Neu starten", "fc_progress": "Karte", "reset_this_question": "Diese Frage zur\u00fccksetzen", "question_has_been_reset": "Diese Frage wurde zur\u00fcckgesetzt", "errors_label": "Fehler", "question_label": "Frage", "validate_page": "Validate all", "reset_all": "Alles zur\u00fccksetzen", "page_score": "Score", "provisional_score_label": "Vorl\u00e4ufige Punktzahl", "embedded_question_label": "Frage", "question_navigation": "Fragennavigation", "evaluation_results": "Auswertungsergebnisse", "violation_warning": "Versto\u00df gegen die Bewertungsregeln", "violations_summary": "Zusammenfassung der Verst\u00f6\u00dfe", "violations_none": "Keine Verst\u00f6\u00dfe erkannt.", "violations_total": "Gesamt", "violations_details": "Details", "evaluation_validated": "Bewertung best\u00e4tigt", "evaluation_validation_blocked": "Validierung blockiert", "evaluation_validation_blocked_message": "Diese Bewertung kann wegen eines blockierenden Versto\u00dfes nicht validiert werden.", "evaluation_invalidated": "Bewertung ung\u00fcltig", "violation_fullscreen_exit": "Vollbild verlassen", "violation_visibility_hidden": "Seite ausgeblendet", "violation_focus_lost": "Fokus verloren", "violation_reload_attempt": "Neuladeversuch", "violation_reload": "Seite neu geladen", "violation_page_leave": "Seite verlassen", "violation_copy": "Kopieren", "violation_cut": "Ausschneiden", "violation_paste": "Einf\u00fcgen", "violation_context_menu": "Kontextmen\u00fc", "violation_print": "Drucken", "violation_storage_tampering": "Speichermanipulation", "evaluation_access_title": "Gesch\u00fctzte Bewertung", "evaluation_password_label": "Passwort der Bewertung", "evaluation_password_placeholder": "Passwort", "evaluation_access_submit": "Bewertung starten", "evaluation_password_required": "Gib das Passwort der Bewertung ein.", "evaluation_password_incorrect": "Falsches Passwort der Bewertung.", "evaluation_password_error": "Das Passwort der Bewertung konnte nicht \u00fcberpr\u00fcft werden.", "qr_report_title": "Live-QR der Regelverst\u00f6\u00dfe", "qr_report_heading": "Regelverst\u00f6\u00dfe der Bewertung", "qr_report_eval": "Bewertung", "qr_report_session": "Sitzung", "qr_report_snapshot": "Momentaufnahme", "qr_report_page": "Seite", "unlock_all_corrections": "Alle Korrekturen entsperren", "unlock_question_correction": "Korrektur der Frage entsperren", "unlock_type_all_questions": "Alle Fragen", "lock_tooltip_all_questions": "Klicken, um alle Korrekturen zu entsperren", "lock_tooltip_all_questions_locked": "Alle Korrekturen \u00fcber die Schaltfl\u00e4che der ersten Frage entsperren", "correct_answer": "Richtige Antwort", "lock_tooltip_question": "Klicken, um die Korrektur dieser Frage zu entsperren", "drag_toolbar": "Werkzeugleiste verschieben"}, "feedback": {"correct": "Richtig", "incorrect": "Falsch"}, "question": {"label": "Frage", "aliases": ["question", "frage"]}}, "en": {"meta": {"language": "en", "language_name": "English", "contributors": ["Rodrigo Schwencke", "Community"]}, "quiz_configs": {"preamble_keywords": ["preamble", "pre"], "question_keywords": ["question", "q"], "answers_keywords": ["answers", "ans"], "scoring_mode": ["scoring_mode", "evaluation_mode", "scoring"], "all_or_nothing": ["all_or_nothing", "all-or-nothing"], "some_or_nothing": ["some_or_nothing", "some-or-nothing"], "proportional": ["proportional", "prop"], "show_correction": ["show_correction", "correction"], "yes": ["yes", "true", "on", "1"], "no": ["no", "false", "off", "0"], "on_demand": ["on_demand", "on-demand", "demand"], "min_score": ["min_score", "minimum_score", "min"], "clamp_max_score": ["clamp_max_score", "clamp_max", "clamp"], "none": ["none", "null", "no_minimum", "unlimited"], "save_answers": ["save_answers", "save", "persist"], "compare_answers": ["compare_answers", "compare"], "ignore": ["ignore"], "spaces": ["spaces"], "spaces_all": ["all"], "spaces_inside": ["inside"], "spaces_outside": ["outside", "strip", "trim"], "spaces_none": ["none", "no_spaces"], "characters": ["characters", "chars", "strip_chars"], "case": ["case", "case_insensitive"], "diacritics": ["diacritics", "accents", "ignore_accents"], "equivalence": ["equivalence", "equality", "equals", "replace", "equiv"], "score": ["score", "scoring", "points"], "mode": ["mode", "scoring_mode"], "min": ["min", "min_score", "minimum"], "errors": ["errors", "error_scores", "penalties", "wrong", "bad_answers"], "match": ["match", "compare_answers", "compare"], "randomize": ["randomize", "random", "shuffle"], "randomize_answers": ["answers", "answer"], "randomize_questions": ["questions", "question"], "randomize_all": ["all", "everything", "both"], "randomize_none": ["none", "false", "no", "off"], "show_reset_question": ["show_reset_question", "show_question_reset", "question_reset_button"], "auto_evaluation": ["auto_evaluation", "auto-evaluation", "self_evaluation", "self-evaluation"], "proportional.position": ["proportional.position", "proportional_position", "position"], "proportional.order": ["proportional.order", "proportional_order", "order"], "proportional.kendall": ["proportional.kendall", "proportional_kendall", "kendall"], "text": ["text", "text_alignment", "text-align", "alignment"], "magnet": ["magnet", "attract", "attractive", "inward", "inside"], "repel": ["repel", "repulse", "repulsive", "anti-magnet", "antimagnet", "outward", "outside"], "center": ["center", "centre", "centered", "centred"], "incorrect": ["incorrect"], "cases": ["cases"], "default": ["default"], "type": ["type"], "points": ["points"], "mark": ["mark"], "numbering": ["numbering"], "ordered": ["ordered"], "labels": ["labels"], "feedback": ["feedback"], "connections": ["connections"]}, "quiz_types": {"mcquiz": {"synonyms": []}, "scquiz": {"synonyms": []}, "blanks": {"synonyms": []}, "scdropdown": {"synonyms": []}, "mcdropdown": {"synonyms": []}, "order": {"synonyms": []}, "columns": {"synonyms": []}, "sentence": {"synonyms": []}, "match": {"synonyms": []}, "match.line": {"synonyms": []}, "match.bezier": {"synonyms": []}, "image": {"synonyms": []}, "path": {"synonyms": []}, "graph": {"synonyms": []}, "flashcard": {"synonyms": []}, "matrix": {"synonyms": []}}, "ui": {"validate_button": "Validate", "score_label": "Score", "reset_all_questions": "Reset all questions", "all_questions_have_been_reset": "All Questions have been Reset", "unlock_title": "Unlock Corrections", "unlock_type_label": "Type", "unlock_page_label": "Page", "unlock_question_label": "Question", "unlock_qr_instruction": "Ask your teacher to scan this QR code:", "unlock_code_label": "Unlock code (provided by teacher):", "please_enter_code": "Please enter a code", "unlock_code_placeholder": "e.g., A7F3E9C2", "unlock_validate": "Validate", "unlock_generated": "Unlock code", "unlock_instruction": "Communicate this code to the student orally", "copy_code": "Copy code", "code_copied": "Copied!", "teacher_code_label": "Master teacher code", "teacher_code_placeholder": "Your master code", "teacher_code_required": "Thanks to enter your Master code", "generate_unlock_code": "Generate unlock code", "unlock_type_question": "Question", "error": "Error", "error_no_library": "Error: No QR Code library has been downloaded", "error_generating_qrcode": "Error generating QR Code", "error_no_unlocking_context": "Error: Unlocking context not found", "error_no_data": "Error", "error_no_data_desc": "Unlock data missing", "error_decoding": "Error decoding data", "error_teacher_code": "Error: Incorrect teacher code", "error_downloading_corrections": "Error downloading corrections", "error_decrypting": "Decrypting Error", "success_unlocked": "Correction unlocked successfully!", "error_incorrect_code": "Incorrect code. Check with your teacher.", "lock_tooltip_open": "Corrections always visible", "lock_tooltip_locked": "Click to unlock corrections", "lock_tooltip_permanent": "Corrections locked", "unlocked_corrections": "Unlocked corrections", "accepted_answers": "Accepted answers", "empty_answer": "(empty)", "order_pool_label": "Items to place:", "lm_clear_connections": "Clear connections", "fc_correct": "Correct", "fc_incorrect": "Incorrect", "fc_flip_back": "Flip back", "fc_reveal": "Reveal", "fc_restart": "Restart", "fc_progress": "Card", "reset_this_question": "Reset this question", "question_has_been_reset": "This question has been reset", "errors_label": "Errors", "question_label": "Question", "validate_page": "Validate all", "reset_all": "Reset all", "page_score": "Score", "provisional_score_label": "Provisional score", "embedded_question_label": "Question", "question_navigation": "Question navigation", "evaluation_results": "Evaluation results", "violation_warning": "Evaluation rule violation", "violations_summary": "Violations summary", "violations_none": "No violation detected.", "violations_total": "Total", "violations_details": "Details", "evaluation_validated": "Evaluation validated", "evaluation_validation_blocked": "Validation blocked", "evaluation_validation_blocked_message": "This evaluation cannot be validated because of a blocking violation.", "evaluation_invalidated": "Evaluation invalidated", "violation_fullscreen_exit": "Fullscreen exited", "violation_visibility_hidden": "Page hidden", "violation_focus_lost": "Focus lost", "violation_reload_attempt": "Reload attempt", "violation_reload": "Page reloaded", "violation_page_leave": "Page leave", "violation_copy": "Copy", "violation_cut": "Cut", "violation_paste": "Paste", "violation_context_menu": "Context menu", "violation_print": "Print", "violation_storage_tampering": "Storage tampering", "evaluation_access_title": "Protected evaluation", "evaluation_password_label": "Evaluation password", "evaluation_password_placeholder": "Password", "evaluation_access_submit": "Start evaluation", "evaluation_password_required": "Enter the evaluation password.", "evaluation_password_incorrect": "Incorrect evaluation password.", "evaluation_password_error": "Unable to verify the evaluation password.", "qr_report_title": "Live violations QR report", "qr_report_heading": "Evaluation violations", "qr_report_eval": "Evaluation", "qr_report_session": "Session", "qr_report_snapshot": "Snapshot", "qr_report_page": "Page", "unlock_all_corrections": "Unlock All Corrections", "unlock_question_correction": "Unlock Question Correction", "unlock_type_all_questions": "All Questions", "lock_tooltip_all_questions": "Click to unlock all corrections", "lock_tooltip_all_questions_locked": "Unlock all corrections using the button on the first question", "correct_answer": "Correct answer", "lock_tooltip_question": "Click to unlock this question correction", "drag_toolbar": "Drag toolbar"}, "feedback": {"correct": "Correct", "incorrect": "Incorrect"}, "question": {"label": "Question", "aliases": ["question"]}}, "es": {"meta": {"language": "es", "language_name": "Espa\u00f1ol", "contributors": ["Rodrigo Schwencke", "Community"]}, "quiz_configs": {"preamble_keywords": ["preambulo", "pre\u00e1mbulo", "pre"], "question_keywords": ["pregunta", "p", "q"], "answers_keywords": ["respuestas", "resp", "answers", "ans"], "scoring_mode": ["modo_evaluacion", "modo_evaluaci\u00f3n", "evaluacion", "puntuacion"], "all_or_nothing": ["todo_o_nada", "todo-o-nada"], "some_or_nothing": ["parcial_o_nada", "parcial-o-nada"], "proportional": ["proporcional", "prop"], "show_correction": ["mostrar_correccion", "mostrar_correcci\u00f3n", "correccion"], "yes": ["s\u00ed", "si", "verdad", "verdadero"], "no": ["no", "falso"], "on_demand": ["a_peticion", "a_petici\u00f3n", "peticion", "demanda"], "min_score": ["puntuacion_minima", "puntuaci\u00f3n_m\u00ednima", "minimo", "m\u00ednimo"], "clamp_max_score": ["limitar_puntuacion_max", "limitar_max"], "none": ["ninguno", "sin_minimo", "sin_m\u00ednimo", "ilimitado"], "save_answers": ["guardar_respuestas", "guardar", "persistir"], "compare_answers": ["comparar_respuestas", "comparar"], "ignore": ["ignorar"], "spaces": ["espacios"], "spaces_all": ["todos", "todo"], "spaces_inside": ["interior", "dentro", "adentro"], "spaces_outside": ["exterior", "fuera", "afuera", "recortar"], "spaces_none": ["ninguno", "ninguna"], "characters": ["caracteres", "car"], "case": ["mayusculas", "may\u00fasculas"], "diacritics": ["diacriticos", "diacr\u00edticos", "acentos"], "equivalence": ["equivalencia", "igualdad", "igual", "equiv", "iguales", "reemplazar"], "score": ["score", "puntuacion", "puntuaci\u00f3n", "nota"], "mode": ["modo", "modo_evaluacion"], "min": ["min", "minimo", "m\u00ednimo"], "errors": ["errores", "penalizaciones", "malus", "respuestas_incorrectas"], "match": ["coincidencia", "comparar", "comparacion", "comparaci\u00f3n"], "randomize": ["mezclar", "aleatorio", "aleatoria", "randomizar"], "randomize_answers": ["respuestas", "answers"], "randomize_questions": ["preguntas", "questions"], "randomize_all": ["todo", "todos", "all"], "randomize_none": ["ninguno", "ninguna", "no", "falso"], "show_reset_question": ["show_reset_question", "mostrar_reinicio_pregunta", "boton_reiniciar_pregunta"], "proportional.position": ["proportional.position", "proporcional.posicion", "posici\u00f3n"], "proportional.order": ["proportional.order", "proporcional.orden", "orden"], "proportional.kendall": ["proportional.kendall", "proporcional.kendall", "kendall"], "incorrect": ["incorrect"], "cases": ["cases"], "default": ["default"], "type": ["type"], "points": ["points"], "mark": ["mark"], "numbering": ["numbering"], "ordered": ["ordered"], "labels": ["labels"], "feedback": ["feedback"], "connections": ["connections"]}, "quiz_types": {"mcquiz": {"synonyms": []}, "scquiz": {"synonyms": []}, "blanks": {"synonyms": []}, "scdropdown": {"synonyms": []}, "mcdropdown": {"synonyms": []}, "order": {"synonyms": []}, "columns": {"synonyms": []}, "sentence": {"synonyms": []}, "match": {"synonyms": []}, "match.line": {"synonyms": []}, "match.bezier": {"synonyms": []}, "image": {"synonyms": []}, "path": {"synonyms": []}, "graph": {"synonyms": []}, "flashcard": {"synonyms": []}, "matrix": {"synonyms": []}}, "ui": {"validate_button": "Validar", "score_label": "Puntuaci\u00f3n", "reset_all_questions": "Reiniciar todas las preguntas", "all_questions_have_been_reset": "Todas las preguntas se han reiniciado", "unlock_title": "Desbloquear correcciones", "unlock_type_label": "Tipo", "unlock_page_label": "P\u00e1gina", "unlock_question_label": "Pregunta", "unlock_qr_instruction": "Pida a su profesor que escanee este c\u00f3digo QR:", "unlock_code_label": "C\u00f3digo de desbloqueo (proporcionado por el profesor):", "please_enter_code": "Por favor ingrese un c\u00f3digo", "unlock_code_placeholder": "ej: A7F3E9C2", "unlock_validate": "Validar", "unlock_generated": "C\u00f3digo de desbloqueo", "unlock_instruction": "Comunique este c\u00f3digo al estudiante oralmente", "copy_code": "Copiar c\u00f3digo", "code_copied": "\u00a1Copiado!", "teacher_code_label": "C\u00f3digo maestro del profesor", "teacher_code_placeholder": "Su c\u00f3digo maestro", "teacher_code_required": "Por favor ingrese su c\u00f3digo maestro", "generate_unlock_code": "Generar c\u00f3digo de desbloqueo", "unlock_type_question": "Pregunta", "error": "Error", "error_no_library": "Error: Biblioteca de c\u00f3digo QR no cargada", "error_generating_qrcode": "Error al generar el c\u00f3digo QR", "error_no_unlocking_context": "Error: Contexto de desbloqueo no encontrado", "error_no_data": "Error", "error_no_data_desc": "Datos de desbloqueo faltantes", "error_decoding": "Error al decodificar los datos", "error_teacher_code": "Error: C\u00f3digo de profesor incorrecto", "error_downloading_corrections": "Error al descargar las correcciones", "error_decrypting": "Error al descifrar", "success_unlocked": "\u00a1Correcci\u00f3n desbloqueada exitosamente!", "error_incorrect_code": "C\u00f3digo incorrecto. Consulte con su profesor.", "lock_tooltip_open": "Correcciones siempre visibles", "lock_tooltip_locked": "Haga clic para desbloquear las correcciones", "lock_tooltip_permanent": "Correcciones bloqueadas", "unlocked_corrections": "Correcciones desbloqueadas", "accepted_answers": "Respuestas aceptadas", "empty_answer": "(vac\u00edo)", "order_pool_label": "Elementos para colocar:", "lm_clear_connections": "Borrar conexiones", "fc_correct": "Correcto", "fc_incorrect": "Incorrecto", "fc_flip_back": "Voltear", "fc_reveal": "Revelar", "fc_restart": "Reiniciar", "fc_progress": "Tarjeta", "reset_this_question": "Reiniciar esta pregunta", "question_has_been_reset": "Esta pregunta se ha reiniciado", "errors_label": "Errores", "question_label": "Pregunta", "validate_page": "Validate all", "reset_all": "Reiniciar todo", "page_score": "Score", "provisional_score_label": "Puntuaci\u00f3n provisional", "embedded_question_label": "Pregunta", "question_navigation": "Navegaci\u00f3n de preguntas", "evaluation_results": "Resultados de la evaluaci\u00f3n", "violation_warning": "Infracci\u00f3n de las reglas de la evaluaci\u00f3n", "violations_summary": "Resumen de infracciones", "violations_none": "No se detect\u00f3 ninguna infracci\u00f3n.", "violations_total": "Total", "violations_details": "Detalles", "evaluation_validated": "Evaluaci\u00f3n validada", "evaluation_validation_blocked": "Validaci\u00f3n bloqueada", "evaluation_validation_blocked_message": "Esta evaluaci\u00f3n no puede validarse debido a una infracci\u00f3n bloqueante.", "evaluation_invalidated": "Evaluaci\u00f3n invalidada", "violation_fullscreen_exit": "Salida de pantalla completa", "violation_visibility_hidden": "P\u00e1gina oculta", "violation_focus_lost": "P\u00e9rdida de foco", "violation_reload_attempt": "Intento de recarga", "violation_reload": "P\u00e1gina recargada", "violation_page_leave": "Salida de la p\u00e1gina", "violation_copy": "Copiar", "violation_cut": "Cortar", "violation_paste": "Pegar", "violation_context_menu": "Men\u00fa contextual", "violation_print": "Imprimir", "violation_storage_tampering": "Alteraci\u00f3n del almacenamiento", "evaluation_access_title": "Evaluaci\u00f3n protegida", "evaluation_password_label": "Contrase\u00f1a de la evaluaci\u00f3n", "evaluation_password_placeholder": "Contrase\u00f1a", "evaluation_access_submit": "Comenzar la evaluaci\u00f3n", "evaluation_password_required": "Introduce la contrase\u00f1a de la evaluaci\u00f3n.", "evaluation_password_incorrect": "Contrase\u00f1a de la evaluaci\u00f3n incorrecta.", "evaluation_password_error": "No se puede verificar la contrase\u00f1a de la evaluaci\u00f3n.", "qr_report_title": "QR de infracciones en directo", "qr_report_heading": "Infracciones de la evaluaci\u00f3n", "qr_report_eval": "Evaluaci\u00f3n", "qr_report_session": "Sesi\u00f3n", "qr_report_snapshot": "Instant\u00e1nea", "qr_report_page": "P\u00e1gina", "unlock_all_corrections": "Desbloquear todas las correcciones", "unlock_question_correction": "Desbloquear la correcci\u00f3n de la pregunta", "unlock_type_all_questions": "Todas las preguntas", "lock_tooltip_all_questions": "Haz clic para desbloquear todas las correcciones", "lock_tooltip_all_questions_locked": "Desbloquea todas las correcciones con el bot\u00f3n de la primera pregunta", "correct_answer": "Respuesta correcta", "lock_tooltip_question": "Haz clic para desbloquear la correcci\u00f3n de esta pregunta", "drag_toolbar": "Mover la barra de herramientas"}, "feedback": {"correct": "Correcto", "incorrect": "Incorrecto"}, "question": {"label": "Pregunta", "aliases": ["question", "pregunta"]}}, "fr": {"meta": {"language": "fr", "language_name": "Fran\u00e7ais", "contributors": ["Rodrigo Schwencke", "Community"]}, "quiz_configs": {"preamble_keywords": ["preambule", "pr\u00e9ambule", "pre"], "question_keywords": ["question", "q"], "answers_keywords": ["r\u00e9ponses", "reponses", "r\u00e9p", "rep", "r\u00e9ponse", "reponse"], "scoring_mode": ["mode_evaluation", "mode_de_scoring", "evaluation"], "all_or_nothing": ["tout_ou_rien", "tout-ou-rien"], "some_or_nothing": ["partiel_ou_rien", "partiel-ou-rien"], "proportional": ["proportionnel", "prop"], "show_correction": ["afficher_correction", "correction"], "yes": ["oui", "vrai"], "no": ["non", "faux"], "on_demand": ["a_la_demande", "\u00e0_la_demande", "demande"], "min_score": ["score_minimum", "score_min", "minimum"], "clamp_max_score": ["limiter_score_max", "limiter_max"], "none": ["aucun", "illimite", "illimit\u00e9", "sans_minimum"], "save_answers": ["sauvegarder_reponses", "sauvegarder", "persistance"], "compare_answers": ["comparer_reponses", "comparer"], "ignore": ["ignorer"], "spaces": ["espaces"], "spaces_all": ["tous", "tout"], "spaces_inside": ["interieur", "int\u00e9rieur", "dedans"], "spaces_outside": ["exterieur", "ext\u00e9rieur", "dehors", "rogner"], "spaces_none": ["aucun", "aucune"], "characters": ["caracteres", "caract\u00e8res", "car"], "case": ["casse", "majuscules"], "diacritics": ["diacritiques", "accents"], "equivalence": ["equivalence", "\u00e9quivalence", "egalite", "\u00e9galit\u00e9", "equiv", "egaux", "\u00e9gaux"], "score": ["score", "notation", "points"], "mode": ["mode", "mode_evaluation"], "min": ["min", "minimum", "score_min"], "errors": ["erreurs", "penalites", "p\u00e9nalit\u00e9s", "malus", "mauvaises_reponses"], "match": ["correspondance", "comparer", "comparaison"], "randomize": ["melanger", "m\u00e9langer", "aleatoire", "al\u00e9atoire", "randomiser"], "randomize_answers": ["reponses", "r\u00e9ponses", "answers"], "randomize_questions": ["questions"], "randomize_all": ["tout", "tous", "all"], "randomize_none": ["aucun", "aucune", "non", "faux"], "show_reset_question": ["show_reset_question", "afficher_reinitialisation_question", "bouton_reinitialiser_question"], "proportional.position": ["proportional.position", "proportionnel.position", "position"], "proportional.order": ["proportional.order", "proportionnel.ordre", "ordre"], "proportional.kendall": ["proportional.kendall", "proportionnel.kendall", "kendall"], "incorrect": ["incorrect"], "cases": ["cases"], "default": ["default"], "type": ["type"], "points": ["points"], "mark": ["mark"], "numbering": ["numbering"], "ordered": ["ordered"], "labels": ["labels"], "feedback": ["feedback"], "connections": ["connections"]}, "quiz_types": {"mcquiz": {"synonyms": []}, "scquiz": {"synonyms": []}, "blanks": {"synonyms": []}, "scdropdown": {"synonyms": []}, "mcdropdown": {"synonyms": []}, "order": {"synonyms": []}, "columns": {"synonyms": []}, "sentence": {"synonyms": []}, "match": {"synonyms": []}, "match.line": {"synonyms": []}, "match.bezier": {"synonyms": []}, "image": {"synonyms": []}, "path": {"synonyms": []}, "graph": {"synonyms": []}, "flashcard": {"synonyms": []}, "matrix": {"synonyms": []}}, "ui": {"validate_button": "Valider", "score_label": "Score", "reset_all_questions": "R\u00e9initialiser toutes les questions", "all_questions_have_been_reset": "Toutes les questions ont \u00e9t\u00e9 r\u00e9initialis\u00e9es", "unlock_title": "D\u00e9bloquer les corrections", "unlock_type_label": "Type", "unlock_page_label": "Page", "unlock_question_label": "Question", "unlock_qr_instruction": "Demandez \u00e0 votre professeur de scanner ce code QR :", "unlock_code_label": "Code de d\u00e9blocage (fourni par le professeur) :", "please_enter_code": "Veuillez entrer un code", "unlock_code_placeholder": "ex : A7F3E9C2", "unlock_validate": "Valider", "unlock_generated": "Code de d\u00e9blocage", "unlock_instruction": "Communiquez ce code \u00e0 l'\u00e9l\u00e8ve oralement", "copy_code": "Copier le code", "code_copied": "Copi\u00e9 !", "teacher_code_label": "Code ma\u00eetre enseignant", "teacher_code_placeholder": "Votre code ma\u00eetre", "teacher_code_required": "Merci d'entrer votre code ma\u00eetre", "generate_unlock_code": "G\u00e9n\u00e9rer un code de d\u00e9blocage", "unlock_type_question": "Question", "error": "Erreur", "error_no_library": "Erreur : Biblioth\u00e8que QR Code non charg\u00e9e", "error_generating_qrcode": "Erreur lors de la g\u00e9n\u00e9ration du code QR", "error_no_unlocking_context": "Erreur : Contexte de d\u00e9blocage introuvable", "error_no_data": "Erreur", "error_no_data_desc": "Donn\u00e9es de d\u00e9blocage manquantes", "error_decoding": "Erreur de d\u00e9codage des donn\u00e9es", "error_teacher_code": "Erreur : Code enseignant incorrect", "error_downloading_corrections": "Erreur lors du t\u00e9l\u00e9chargement des corrections", "error_decrypting": "Erreur de d\u00e9cryptage", "success_unlocked": "Correction d\u00e9bloqu\u00e9e avec succ\u00e8s !", "error_incorrect_code": "Code incorrect. V\u00e9rifiez avec votre professeur.", "lock_tooltip_open": "Corrections toujours visibles", "lock_tooltip_locked": "Cliquez pour d\u00e9bloquer les corrections", "lock_tooltip_permanent": "Corrections verrouill\u00e9es", "unlocked_corrections": "Corrections d\u00e9bloqu\u00e9es", "accepted_answers": "R\u00e9ponses accept\u00e9es", "empty_answer": "(vide)", "order_pool_label": "\u00c9l\u00e9ments \u00e0 placer :", "lm_clear_connections": "Effacer les connexions", "fc_correct": "Correct", "fc_incorrect": "Incorrect", "fc_flip_back": "Retourner", "fc_reveal": "R\u00e9v\u00e9ler", "fc_restart": "Recommencer", "fc_progress": "Carte", "reset_this_question": "R\u00e9initialiser cette question", "question_has_been_reset": "Cette question a \u00e9t\u00e9 r\u00e9initialis\u00e9e", "errors_label": "Erreurs", "question_label": "Question", "validate_page": "Tout valider", "reset_all": "Tout r\u00e9initialiser", "page_score": "Score", "provisional_score_label": "Score provisoire", "embedded_question_label": "Question", "question_navigation": "Navigation des questions", "evaluation_results": "R\u00e9sultats de l\u2019\u00e9valuation", "violation_warning": "Infraction aux r\u00e8gles de l\u2019\u00e9valuation", "violations_summary": "R\u00e9sum\u00e9 des infractions", "violations_none": "Aucune infraction d\u00e9tect\u00e9e.", "violations_total": "Total", "violations_details": "D\u00e9tails", "evaluation_validated": "\u00c9valuation valid\u00e9e", "evaluation_validation_blocked": "Validation bloqu\u00e9e", "evaluation_validation_blocked_message": "Cette \u00e9valuation ne peut pas \u00eatre valid\u00e9e \u00e0 cause d\u2019une infraction bloquante.", "evaluation_invalidated": "\u00c9valuation invalid\u00e9e", "violation_fullscreen_exit": "Sortie du plein \u00e9cran", "violation_visibility_hidden": "Page masqu\u00e9e", "violation_focus_lost": "Perte de focus", "violation_reload_attempt": "Tentative de rechargement", "violation_reload": "Page recharg\u00e9e", "violation_page_leave": "Sortie de la page", "violation_copy": "Copie", "violation_cut": "Couper", "violation_paste": "Collage", "violation_context_menu": "Menu contextuel", "violation_print": "Impression", "violation_storage_tampering": "Alt\u00e9ration du stockage", "evaluation_access_title": "\u00c9valuation prot\u00e9g\u00e9e", "evaluation_password_label": "Mot de passe de l\u2019\u00e9valuation", "evaluation_password_placeholder": "Mot de passe", "evaluation_access_submit": "Commencer l\u2019\u00e9valuation", "evaluation_password_required": "Entre le mot de passe de l\u2019\u00e9valuation.", "evaluation_password_incorrect": "Mot de passe de l\u2019\u00e9valuation incorrect.", "evaluation_password_error": "Impossible de v\u00e9rifier le mot de passe de l\u2019\u00e9valuation.", "qr_report_title": "QR des infractions en direct", "qr_report_heading": "Infractions de l\u2019\u00e9valuation", "qr_report_eval": "\u00c9valuation", "qr_report_session": "Session", "qr_report_snapshot": "Instantan\u00e9", "qr_report_page": "Page", "unlock_all_corrections": "D\u00e9bloquer toutes les corrections", "unlock_question_correction": "D\u00e9bloquer la correction de la question", "unlock_type_all_questions": "Toutes les questions", "lock_tooltip_all_questions": "Cliquez pour d\u00e9bloquer toutes les corrections", "lock_tooltip_all_questions_locked": "D\u00e9bloquez toutes les corrections avec le bouton de la premi\u00e8re question", "correct_answer": "R\u00e9ponse correcte", "lock_tooltip_question": "Cliquez pour d\u00e9bloquer la correction de cette question", "drag_toolbar": "D\u00e9placer la barre d\u2019outils"}, "feedback": {"correct": "Correct", "incorrect": "Incorrect"}, "question": {"label": "Question", "aliases": ["question"]}}, "it": {"meta": {"language": "it", "language_name": "Italiano", "contributors": ["Rodrigo Schwencke", "Community"]}, "quiz_configs": {"preamble_keywords": ["preambolo", "introduzione", "pre"], "question_keywords": ["domanda", "d"], "answers_keywords": ["risposte", "risposta", "r"], "scoring_mode": ["modalita_punteggio", "valutazione"], "all_or_nothing": ["tutto_o_niente"], "some_or_nothing": ["parziale_o_niente"], "proportional": ["proporzionale"], "show_correction": ["mostra_correzione", "correzione"], "yes": ["si", "vero", "attivo"], "no": ["no", "falso", "disattivo"], "on_demand": ["su_richiesta"], "min_score": ["punteggio_minimo", "minimo"], "clamp_max_score": ["limita_punteggio_massimo"], "none": ["nessuno", "senza_minimo"], "save_answers": ["salva_risposte", "salva"], "compare_answers": ["confronta_risposte", "confronta"], "ignore": ["ignora"], "spaces": ["spazi"], "spaces_all": ["tutti"], "spaces_inside": ["interni"], "spaces_outside": ["esterni"], "spaces_none": ["nessuno"], "characters": ["caratteri"], "case": ["maiuscole_minuscole"], "diacritics": ["diacritici", "accenti"], "equivalence": ["equivalenza", "equivalenze"], "score": ["punteggio", "valutazione"], "mode": ["modalita"], "min": ["minimo"], "errors": ["errori", "penalita"], "match": ["confronto", "corrispondenza"], "randomize": ["mescola", "casuale"], "randomize_answers": ["risposte"], "randomize_questions": ["domande"], "randomize_all": ["tutto", "entrambi"], "randomize_none": ["nessuno", "no"], "show_reset_question": ["show_reset_question", "mostra_reset_domanda", "pulsante_reset_domanda"], "proportional.position": ["proportional.position", "proporzionale.posizione", "posizione"], "proportional.order": ["proportional.order", "proporzionale.ordine", "ordine"], "proportional.kendall": ["proportional.kendall", "proporzionale.kendall", "kendall"], "incorrect": ["incorrect"], "cases": ["cases"], "default": ["default"], "type": ["type"], "points": ["points"], "mark": ["mark"], "numbering": ["numbering"], "ordered": ["ordered"], "labels": ["labels"], "feedback": ["feedback"], "connections": ["connections"]}, "quiz_types": {"mcquiz": {"synonyms": []}, "scquiz": {"synonyms": []}, "blanks": {"synonyms": []}, "scdropdown": {"synonyms": []}, "mcdropdown": {"synonyms": []}, "order": {"synonyms": []}, "columns": {"synonyms": []}, "sentence": {"synonyms": []}, "match": {"synonyms": []}, "match.line": {"synonyms": []}, "match.bezier": {"synonyms": []}, "image": {"synonyms": []}, "path": {"synonyms": []}, "graph": {"synonyms": []}, "flashcard": {"synonyms": []}, "matrix": {"synonyms": []}}, "ui": {"validate_button": "Convalida", "score_label": "Punteggio", "reset_all_questions": "Reimposta tutte le domande", "all_questions_have_been_reset": "Tutte le domande sono state reimpostate", "unlock_title": "Sblocca correzioni", "unlock_type_label": "Tipo", "unlock_page_label": "Pagina", "unlock_question_label": "Domanda", "unlock_qr_instruction": "Chiedi al docente di scansionare questo codice QR:", "unlock_code_label": "Codice di sblocco (fornito dal docente):", "please_enter_code": "Inserisci un codice", "unlock_code_placeholder": "es. A7F3E9C2", "unlock_validate": "Convalida", "unlock_generated": "Codice di sblocco", "unlock_instruction": "Comunica oralmente questo codice allo studente", "copy_code": "Copia codice", "code_copied": "Copiato!", "teacher_code_label": "Codice principale docente", "teacher_code_placeholder": "Il tuo codice principale", "teacher_code_required": "Inserisci il codice principale", "generate_unlock_code": "Genera codice di sblocco", "unlock_type_question": "Domanda", "error": "Errore", "error_no_library": "Errore: libreria QR Code non caricata", "error_generating_qrcode": "Errore durante la generazione del codice QR", "error_no_unlocking_context": "Errore: contesto di sblocco non trovato", "error_no_data": "Errore", "error_no_data_desc": "Dati di sblocco mancanti", "error_decoding": "Errore di decodifica", "error_teacher_code": "Errore: codice docente errato", "error_downloading_corrections": "Errore durante il caricamento delle correzioni", "error_decrypting": "Errore di decrittazione", "success_unlocked": "Correzione sbloccata!", "error_incorrect_code": "Codice errato. Verifica con il docente.", "lock_tooltip_open": "Correzioni sempre visibili", "lock_tooltip_locked": "Clicca per sbloccare le correzioni", "lock_tooltip_permanent": "Correzioni bloccate", "unlocked_corrections": "Correzioni sbloccate", "accepted_answers": "Risposte accettate", "empty_answer": "(vuoto)", "order_pool_label": "Elementi da posizionare:", "lm_clear_connections": "Cancella collegamenti", "fc_correct": "Corretto", "fc_incorrect": "Errato", "fc_flip_back": "Gira indietro", "fc_reveal": "Mostra", "fc_restart": "Ricomincia", "fc_progress": "Carta", "reset_this_question": "Reimposta questa domanda", "question_has_been_reset": "Questa domanda \u00e8 stata reimpostata", "errors_label": "Errori", "question_label": "Domanda", "validate_page": "Validate all", "reset_all": "Reimposta tutto", "page_score": "Score", "provisional_score_label": "Punteggio provvisorio", "embedded_question_label": "Domanda", "question_navigation": "Navigazione delle domande", "evaluation_results": "Risultati della valutazione", "violation_warning": "Violazione delle regole della valutazione", "violations_summary": "Riepilogo delle violazioni", "violations_none": "Nessuna violazione rilevata.", "violations_total": "Totale", "violations_details": "Dettagli", "evaluation_validated": "Valutazione convalidata", "evaluation_validation_blocked": "Convalida bloccata", "evaluation_validation_blocked_message": "Questa valutazione non pu\u00f2 essere convalidata a causa di una violazione bloccante.", "evaluation_invalidated": "Valutazione invalidata", "violation_fullscreen_exit": "Uscita dallo schermo intero", "violation_visibility_hidden": "Pagina nascosta", "violation_focus_lost": "Perdita di focus", "violation_reload_attempt": "Tentativo di ricaricamento", "violation_reload": "Pagina ricaricata", "violation_page_leave": "Uscita dalla pagina", "violation_copy": "Copia", "violation_cut": "Taglia", "violation_paste": "Incolla", "violation_context_menu": "Menu contestuale", "violation_print": "Stampa", "violation_storage_tampering": "Alterazione dello storage", "evaluation_access_title": "Valutazione protetta", "evaluation_password_label": "Password della valutazione", "evaluation_password_placeholder": "Password", "evaluation_access_submit": "Inizia la valutazione", "evaluation_password_required": "Inserisci la password della valutazione.", "evaluation_password_incorrect": "Password della valutazione errata.", "evaluation_password_error": "Impossibile verificare la password della valutazione.", "qr_report_title": "QR delle violazioni in tempo reale", "qr_report_heading": "Violazioni della valutazione", "qr_report_eval": "Valutazione", "qr_report_session": "Sessione", "qr_report_snapshot": "Istantanea", "qr_report_page": "Pagina", "unlock_all_corrections": "Sblocca tutte le correzioni", "unlock_question_correction": "Sblocca la correzione della domanda", "unlock_type_all_questions": "Tutte le domande", "lock_tooltip_all_questions": "Fai clic per sbloccare tutte le correzioni", "lock_tooltip_all_questions_locked": "Sblocca tutte le correzioni con il pulsante della prima domanda", "correct_answer": "Risposta corretta", "lock_tooltip_question": "Fai clic per sbloccare la correzione di questa domanda", "drag_toolbar": "Sposta la barra degli strumenti"}, "feedback": {"correct": "Corretto", "incorrect": "Errato"}, "question": {"label": "Domanda", "aliases": ["question", "domanda"]}}, "pt": {"meta": {"language": "pt", "language_name": "Portugu\u00eas", "contributors": ["Rodrigo Schwencke", "Community"]}, "quiz_configs": {"preamble_keywords": ["preambulo", "introducao", "pre"], "question_keywords": ["pergunta", "p"], "answers_keywords": ["respostas", "resposta", "r"], "scoring_mode": ["modo_pontuacao", "avaliacao"], "all_or_nothing": ["tudo_ou_nada"], "some_or_nothing": ["parcial_ou_nada"], "proportional": ["proporcional"], "show_correction": ["mostrar_correcao", "correcao"], "yes": ["sim", "verdadeiro", "ativo"], "no": ["nao", "falso", "inativo"], "on_demand": ["sob_demanda"], "min_score": ["pontuacao_minima", "minimo"], "clamp_max_score": ["limitar_pontuacao_maxima"], "none": ["nenhum", "sem_minimo"], "save_answers": ["salvar_respostas", "salvar"], "compare_answers": ["comparar_respostas", "comparar"], "ignore": ["ignorar"], "spaces": ["espacos"], "spaces_all": ["todos"], "spaces_inside": ["internos"], "spaces_outside": ["externos"], "spaces_none": ["nenhum"], "characters": ["caracteres"], "case": ["maiusculas_minusculas"], "diacritics": ["diacriticos", "acentos"], "equivalence": ["equivalencia", "equivalencias"], "score": ["pontuacao", "avaliacao"], "mode": ["modo"], "min": ["minimo"], "errors": ["erros", "penalidades"], "match": ["comparacao", "correspondencia"], "randomize": ["embaralhar", "aleatorio"], "randomize_answers": ["respostas"], "randomize_questions": ["perguntas"], "randomize_all": ["tudo", "ambos"], "randomize_none": ["nenhum", "nao"], "show_reset_question": ["show_reset_question", "mostrar_reiniciar_pergunta", "botao_reiniciar_pergunta"], "proportional.position": ["proportional.position", "proporcional.posicao", "posi\u00e7\u00e3o"], "proportional.order": ["proportional.order", "proporcional.ordem", "ordem"], "proportional.kendall": ["proportional.kendall", "proporcional.kendall", "kendall"], "incorrect": ["incorrect"], "cases": ["cases"], "default": ["default"], "type": ["type"], "points": ["points"], "mark": ["mark"], "numbering": ["numbering"], "ordered": ["ordered"], "labels": ["labels"], "feedback": ["feedback"], "connections": ["connections"]}, "quiz_types": {"mcquiz": {"synonyms": []}, "scquiz": {"synonyms": []}, "blanks": {"synonyms": []}, "scdropdown": {"synonyms": []}, "mcdropdown": {"synonyms": []}, "order": {"synonyms": []}, "columns": {"synonyms": []}, "sentence": {"synonyms": []}, "match": {"synonyms": []}, "match.line": {"synonyms": []}, "match.bezier": {"synonyms": []}, "image": {"synonyms": []}, "path": {"synonyms": []}, "graph": {"synonyms": []}, "flashcard": {"synonyms": []}, "matrix": {"synonyms": []}}, "ui": {"validate_button": "Validar", "score_label": "Pontua\u00e7\u00e3o", "reset_all_questions": "Reiniciar todas as perguntas", "all_questions_have_been_reset": "Todas as perguntas foram reiniciadas", "unlock_title": "Desbloquear corre\u00e7\u00f5es", "unlock_type_label": "Tipo", "unlock_page_label": "P\u00e1gina", "unlock_question_label": "Pergunta", "unlock_qr_instruction": "Pe\u00e7a ao professor para digitalizar este c\u00f3digo QR:", "unlock_code_label": "C\u00f3digo de desbloqueio (fornecido pelo professor):", "please_enter_code": "Digite um c\u00f3digo", "unlock_code_placeholder": "ex.: A7F3E9C2", "unlock_validate": "Validar", "unlock_generated": "C\u00f3digo de desbloqueio", "unlock_instruction": "Comunique este c\u00f3digo oralmente ao aluno", "copy_code": "Copiar c\u00f3digo", "code_copied": "Copiado!", "teacher_code_label": "C\u00f3digo mestre do professor", "teacher_code_placeholder": "Seu c\u00f3digo mestre", "teacher_code_required": "Digite o c\u00f3digo mestre", "generate_unlock_code": "Gerar c\u00f3digo de desbloqueio", "unlock_type_question": "Pergunta", "error": "Erro", "error_no_library": "Erro: biblioteca de QR Code n\u00e3o carregada", "error_generating_qrcode": "Erro ao gerar QR Code", "error_no_unlocking_context": "Erro: contexto de desbloqueio n\u00e3o encontrado", "error_no_data": "Erro", "error_no_data_desc": "Dados de desbloqueio ausentes", "error_decoding": "Erro ao decodificar dados", "error_teacher_code": "Erro: c\u00f3digo do professor incorreto", "error_downloading_corrections": "Erro ao carregar corre\u00e7\u00f5es", "error_decrypting": "Erro de descriptografia", "success_unlocked": "Corre\u00e7\u00e3o desbloqueada com sucesso!", "error_incorrect_code": "C\u00f3digo incorreto. Consulte o professor.", "lock_tooltip_open": "Corre\u00e7\u00f5es sempre vis\u00edveis", "lock_tooltip_locked": "Clique para desbloquear as corre\u00e7\u00f5es", "lock_tooltip_permanent": "Corre\u00e7\u00f5es bloqueadas", "unlocked_corrections": "Corre\u00e7\u00f5es desbloqueadas", "accepted_answers": "Respostas aceitas", "empty_answer": "(vazio)", "order_pool_label": "Itens para posicionar:", "lm_clear_connections": "Limpar conex\u00f5es", "fc_correct": "Correto", "fc_incorrect": "Incorreto", "fc_flip_back": "Virar para tr\u00e1s", "fc_reveal": "Revelar", "fc_restart": "Recome\u00e7ar", "fc_progress": "Cart\u00e3o", "reset_this_question": "Reiniciar esta pergunta", "question_has_been_reset": "Esta pergunta foi reiniciada", "errors_label": "Erros", "question_label": "Pergunta", "validate_page": "Validate all", "reset_all": "Reiniciar tudo", "page_score": "Score", "provisional_score_label": "Pontua\u00e7\u00e3o provis\u00f3ria", "embedded_question_label": "Pergunta", "question_navigation": "Navega\u00e7\u00e3o das perguntas", "evaluation_results": "Resultados da avalia\u00e7\u00e3o", "violation_warning": "Viola\u00e7\u00e3o das regras da avalia\u00e7\u00e3o", "violations_summary": "Resumo das viola\u00e7\u00f5es", "violations_none": "Nenhuma viola\u00e7\u00e3o detetada.", "violations_total": "Total", "violations_details": "Detalhes", "evaluation_validated": "Avalia\u00e7\u00e3o validada", "evaluation_validation_blocked": "Valida\u00e7\u00e3o bloqueada", "evaluation_validation_blocked_message": "Esta avalia\u00e7\u00e3o n\u00e3o pode ser validada devido a uma viola\u00e7\u00e3o bloqueante.", "evaluation_invalidated": "Avalia\u00e7\u00e3o invalidada", "violation_fullscreen_exit": "Sa\u00edda do ecr\u00e3 inteiro", "violation_visibility_hidden": "P\u00e1gina oculta", "violation_focus_lost": "Perda de foco", "violation_reload_attempt": "Tentativa de recarregamento", "violation_reload": "P\u00e1gina recarregada", "violation_page_leave": "Sa\u00edda da p\u00e1gina", "violation_copy": "Copiar", "violation_cut": "Cortar", "violation_paste": "Colar", "violation_context_menu": "Menu de contexto", "violation_print": "Imprimir", "violation_storage_tampering": "Altera\u00e7\u00e3o do armazenamento", "evaluation_access_title": "Avalia\u00e7\u00e3o protegida", "evaluation_password_label": "Palavra-passe da avalia\u00e7\u00e3o", "evaluation_password_placeholder": "Palavra-passe", "evaluation_access_submit": "Iniciar avalia\u00e7\u00e3o", "evaluation_password_required": "Introduza a palavra-passe da avalia\u00e7\u00e3o.", "evaluation_password_incorrect": "Palavra-passe da avalia\u00e7\u00e3o incorreta.", "evaluation_password_error": "N\u00e3o foi poss\u00edvel verificar a palavra-passe da avalia\u00e7\u00e3o.", "qr_report_title": "QR das viola\u00e7\u00f5es em tempo real", "qr_report_heading": "Viola\u00e7\u00f5es da avalia\u00e7\u00e3o", "qr_report_eval": "Avalia\u00e7\u00e3o", "qr_report_session": "Sess\u00e3o", "qr_report_snapshot": "Instant\u00e2neo", "qr_report_page": "P\u00e1gina", "unlock_all_corrections": "Desbloquear todas as corre\u00e7\u00f5es", "unlock_question_correction": "Desbloquear a corre\u00e7\u00e3o da pergunta", "unlock_type_all_questions": "Todas as perguntas", "lock_tooltip_all_questions": "Clique para desbloquear todas as corre\u00e7\u00f5es", "lock_tooltip_all_questions_locked": "Desbloqueie todas as corre\u00e7\u00f5es com o bot\u00e3o da primeira pergunta", "correct_answer": "Resposta correta", "lock_tooltip_question": "Clique para desbloquear a corre\u00e7\u00e3o desta pergunta", "drag_toolbar": "Mover a barra de ferramentas"}, "feedback": {"correct": "Correto", "incorrect": "Incorreto"}, "question": {"label": "Pergunta", "aliases": ["question", "pergunta"]}}};
window.QUIZ_CONFIG.encryption_key = 'default-key-change-me';
window.QUIZ_CONFIG.min_score = 0;
window.QUIZ_CONFIG.clamp_max_score = true;
window.QUIZ_CONFIG.correction_icons = {"locked": "❌", "unlock": "🔐", "open": "✅", "unlocked": "🔓"};
window.QUIZ_CONFIG.mcquiz = {"show_reset_question": false, "scoring_mode": "proportional", "error_default": 0, "default_points": 1, "show_correction": "on_demand", "save_answers": true, "randomize_answers": false, "randomize_questions": false, "synonyms": [], "auto_evaluation": false, "min_score": 0, "text": "magnet", "clamp_max_score": true, "show_question_scores": true};
window.QUIZ_CONFIG.scquiz = {"show_reset_question": false, "scoring_mode": "all_or_nothing", "error_default": 0, "default_points": 1, "show_correction": "on_demand", "save_answers": true, "randomize_answers": false, "randomize_questions": false, "synonyms": [], "auto_evaluation": false, "min_score": 0, "text": "magnet", "clamp_max_score": true, "show_question_scores": true};
window.QUIZ_CONFIG.blanks = {"show_reset_question": false, "scoring_mode": "proportional", "error_default": 0, "default_points": 1, "show_correction": "on_demand", "save_answers": true, "randomize_answers": false, "randomize_questions": false, "synonyms": [], "compare_answers": {"ignore": {"spaces": "none", "characters": "", "case": false, "diacritics": false}, "equivalence": {}}, "auto_evaluation": false, "min_score": 0, "text": "magnet", "clamp_max_score": true, "show_question_scores": true};
window.QUIZ_CONFIG.scdropdown = {"show_reset_question": false, "scoring_mode": "all_or_nothing", "error_default": 0, "default_points": 1, "show_correction": "on_demand", "save_answers": true, "randomize_answers": false, "randomize_questions": false, "synonyms": [], "auto_evaluation": false, "min_score": 0, "text": "magnet", "clamp_max_score": true, "show_question_scores": true};
window.QUIZ_CONFIG.mcdropdown = {"show_reset_question": false, "scoring_mode": "proportional", "error_default": 0, "default_points": 1, "show_correction": "on_demand", "save_answers": true, "randomize_answers": false, "randomize_questions": false, "synonyms": [], "auto_evaluation": false, "min_score": 0, "text": "magnet", "clamp_max_score": true, "show_question_scores": true};
window.QUIZ_CONFIG.order = {"show_reset_question": false, "scoring_mode": "proportional", "default_points": 1, "show_correction": "on_demand", "save_answers": true, "randomize_answers": false, "randomize_questions": true, "ordered": true, "synonyms": [], "auto_evaluation": false, "min_score": 0, "text": "magnet", "clamp_max_score": true, "show_question_scores": true};
window.QUIZ_CONFIG.columns = {"show_reset_question": false, "scoring_mode": "proportional", "default_points": 1, "show_correction": "on_demand", "save_answers": true, "randomize_answers": true, "randomize_questions": false, "ordered": false, "distractors": {"correct": 0, "incorrect": 0}, "distractor_penalty": 0, "synonyms": [], "auto_evaluation": false, "min_score": 0, "text": "magnet", "clamp_max_score": true, "show_question_scores": true};
window.QUIZ_CONFIG.sentence = {"show_reset_question": false, "scoring_mode": "all_or_nothing", "default_points": 1, "show_correction": "on_demand", "save_answers": true, "randomize_answers": true, "randomize_questions": false, "synonyms": [], "auto_evaluation": false, "min_score": 0, "text": "magnet", "clamp_max_score": true, "show_question_scores": true};
window.QUIZ_CONFIG.match = {"show_reset_question": false, "show_correction": false, "scoring_mode": "proportional", "randomize_answers": true, "feedback": "deferred", "min_score": 0, "distractor_penalty": 0, "text": "magnet", "direction": {"mismatch": "wrong", "partial_credit": 0.5}, "auto_evaluation": false, "clamp_max_score": true, "show_question_scores": true};
window.QUIZ_CONFIG['match.line'] = {"show_reset_question": false, "show_correction": false, "scoring_mode": "proportional", "save_answers": false, "randomize_answers": true, "connections": "1.1", "min_score": 0, "distractor_penalty": 0, "line": "straight", "text": "magnet", "circle_size": 24, "direction": {"mismatch": "wrong", "partial_credit": 0.5}, "auto_evaluation": false, "clamp_max_score": true, "show_question_scores": true};
window.QUIZ_CONFIG['match.bezier'] = {"show_reset_question": false, "show_correction": false, "scoring_mode": "proportional", "save_answers": false, "randomize_answers": true, "connections": "1.1", "min_score": 0, "distractor_penalty": 0, "line": "bezier", "text": "magnet", "circle_size": 24, "direction": {"mismatch": "wrong", "partial_credit": 0.5}, "auto_evaluation": false, "clamp_max_score": true, "show_question_scores": true};
window.QUIZ_CONFIG.image = {"show_reset_question": false, "show_correction": false, "scoring_mode": "proportional", "save_answers": false, "randomize_answers": true, "connections": "1.1", "min_score": 0, "distractor_penalty": 0, "text": "magnet", "circle_size": 24, "direction": {"mismatch": "wrong", "partial_credit": 0.5}, "auto_evaluation": false, "clamp_max_score": true, "show_question_scores": true};
window.QUIZ_CONFIG.path = {"show_reset_question": false, "show_correction": false, "scoring_mode": "all_or_nothing", "save_answers": false, "randomize_answers": false, "min_score": 0, "line": "straight", "circle_size": 24, "direction": {"mismatch": "wrong", "partial_credit": 0.5}, "auto_evaluation": false, "text": "magnet", "clamp_max_score": true, "show_question_scores": true};
window.QUIZ_CONFIG.graph = {"show_reset_question": false, "show_correction": false, "scoring_mode": "proportional", "save_answers": false, "randomize_answers": false, "min_score": 0, "line": "bezier", "circle_size": 24, "direction": {"mismatch": "wrong", "partial_credit": 0.5}, "auto_evaluation": false, "text": "magnet", "clamp_max_score": true, "show_question_scores": true};
window.QUIZ_CONFIG.flashcard = {"show_reset_question": false, "show_correction": false, "scoring_mode": "all_or_nothing", "randomize_answers": true, "auto_evaluation": false, "min_score": 0, "text": "magnet", "clamp_max_score": true, "show_question_scores": true};
window.QUIZ_CONFIG.matrix = {"show_reset_question": false, "show_correction": false, "scoring_mode": "proportional", "randomize_answers": false, "min_score": 0, "text": "magnet", "auto_evaluation": false, "clamp_max_score": true, "show_question_scores": true};
console.log('✅ QUIZ_CONFIG loaded:', window.QUIZ_CONFIG);

/**
 * mkdocs-superquiz - Main browser runtime.
 *
 * The previous fully commented copy that previously preceded this runtime
 * was removed. Keep executable code only in this file.
 */

window.QUIZ_CONFIG = window.QUIZ_CONFIG || {};

function translateFromBundle(bundle, key, fallback = "") {
    const helper = window.MKSQ_FRONTEND?.translateFromBundle;
    if (typeof helper === 'function') {
        return helper(bundle, key, fallback);
    }

    const keys = key.split('.');
    let value = bundle;
    for (const k of keys) {
        if (value && typeof value === 'object') value = value[k];
        else return fallback || key;
    }
    return value || fallback || key;
}

function translateForLanguage(language, key, fallback = "") {
    const helper = window.MKSQ_FRONTEND?.translateForLanguage;
    if (typeof helper === 'function') {
        return helper(
            language,
            key,
            fallback,
            window.MKSQ_I18N,
            window.QUIZ_CONFIG?.i18n,
        );
    }

    const normalizedLanguage = String(
        language || window.QUIZ_CONFIG?.language || 'en',
    ).trim().toLowerCase();
    const bundle = window.MKSQ_I18N?.[normalizedLanguage]
        || window.QUIZ_CONFIG?.i18n;
    return translateFromBundle(bundle, key, fallback);
}

function getPageLanguage() {
    const helper = window.MKSQ_FRONTEND?.getPageLanguage;
    if (typeof helper === 'function') {
        return helper(document, window.QUIZ_CONFIG);
    }

    return String(
        document.querySelector(
            '.mkdocs-superquiz[data-page-language]',
        )?.dataset?.pageLanguage
        || document.querySelector(
            '.mkdocs-superquiz',
        )?.dataset?.language
        || window.QUIZ_CONFIG?.page_language
        || window.QUIZ_CONFIG?.language
        || 'en',
    ).trim().toLowerCase();
}

function t(key, fallback = "") {
    return translateFromBundle(window.QUIZ_CONFIG?.i18n, key, fallback);
}

function tForPage(key, fallback = "") {
    return translateForLanguage(getPageLanguage(), key, fallback);
}

function tForQuestion(quiz, key, fallback = "") {
    const language = quiz?.dataset?.language
        || window.QUIZ_CONFIG?.language
        || 'en';
    return translateForLanguage(language, key, fallback);
}

function getQuestionStorageKey(quiz) {
    const helper = window.MKSQ_FRONTEND?.getQuestionStorageKey;
    if (typeof helper === 'function') return helper(quiz);

    const pageUuid = String(quiz?.dataset?.pageUuid || '').trim();
    const quizId = String(quiz?.dataset?.quizId || '').trim();
    return `mksq:answers:${pageUuid}:${quizId}`;
}


function findQuestionElementById(quiz, elementId) {
    return Array.from(quiz.querySelectorAll('[id]'))
        .find((element) => element.id === elementId) || null;
}

function getQuizRootElement(quizId) {
    const id = String(quizId || '').trim();
    if (!id) return null;
    return document.querySelector(
        `.mkdocs-superquiz[data-quiz-id="${CSS.escape(id)}"]`,
    );
}

let currentUnlockContext = null;
let _mksqUnlockModalMountState = null;

function _mountUnlockModalForFullscreen(modal) {
    if (!modal) return;
    const fullscreen = document.fullscreenElement || document.webkitFullscreenElement || null;
    if (!fullscreen || fullscreen.contains(modal)) return;
    _restoreUnlockModalMount();
    const parent = modal.parentNode;
    if (!parent) return;
    const placeholder = document.createComment('mkdocs-superquiz unlock modal mount');
    parent.insertBefore(placeholder, modal);
    _mksqUnlockModalMountState = { placeholder, parent };
    fullscreen.appendChild(modal);
}

function _restoreUnlockModalMount() {
    const state = _mksqUnlockModalMountState;
    if (!state) return;
    const modal = document.getElementById('mkq-unlock-modal');
    if (modal) {
        if (state.placeholder?.parentNode) {
            state.placeholder.parentNode.insertBefore(modal, state.placeholder);
            state.placeholder.remove();
        } else if (state.parent?.isConnected) {
            state.parent.appendChild(modal);
        }
    }
    _mksqUnlockModalMountState = null;
}

function createUnlockModal() {
    const modal = document.createElement('div');
    modal.id = 'mkq-unlock-modal';
    modal.className = 'mkq-modal';
    modal.innerHTML = `
        <div class="mkq-modal-content">
            <button class="mkq-modal-close" onclick="closeUnlockModal()">×</button>
            <h3 id="mkq-unlock-title">${t("ui.unlock_title", "Unlock Corrections")}</h3>
            <div class="qr-code-section">
                <p id="mkq-unlock-instruction">${t("ui.unlock_qr_instruction", "Ask your teacher to scan this QR code:")}</p>
                <div id="qr-code-container"></div>
            </div>
            <div class="unlock-input-section">
                <label id="mkq-unlock-code-label" for="mkq-unlock-code-input">${t("ui.unlock_code_label", "Unlock code (provided by teacher):")}</label>
                <input type="text" id="mkq-unlock-code-input" placeholder="${t("ui.unlock_code_placeholder", "e.g., A7F3E9C2")}">
                <button id="mkq-unlock-code-submit" onclick="validateUnlockCode()">${t("ui.unlock_validate", "Validate")}</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

const MKSQ_UNLOCK_TYPES = new Set(['question', 'all_questions']);
const MKSQ_UNLOCK_FIELD_SEPARATOR = '\u001f';

function getUnlockContextLanguage(type, quizId = null) {
    if (type === 'question' && quizId) {
        return getQuizRootElement(quizId)?.dataset?.language || getPageLanguage();
    }
    return getPageLanguage();
}

function updateUnlockModalTranslations(language) {
    const instruction = document.getElementById('mkq-unlock-instruction');
    if (instruction) {
        instruction.textContent = translateForLanguage(
            language,
            'ui.unlock_qr_instruction',
            'Ask your teacher to scan this QR code:',
        );
    }

    const label = document.getElementById('mkq-unlock-code-label');
    if (label) {
        label.textContent = translateForLanguage(
            language,
            'ui.unlock_code_label',
            'Unlock code (provided by teacher):',
        );
    }

    const input = document.getElementById('mkq-unlock-code-input');
    if (input) {
        input.placeholder = translateForLanguage(
            language,
            'ui.unlock_code_placeholder',
            'e.g., A7F3E9C2',
        );
    }

    const submit = document.getElementById('mkq-unlock-code-submit');
    if (submit) {
        submit.textContent = translateForLanguage(
            language,
            'ui.unlock_validate',
            'Validate',
        );
    }
}

function getSiteUrl() {
    const currentOrigin = window.location.origin;
    const currentPath = window.location.pathname;
    const baseElement = document.querySelector('base');
    if (baseElement && baseElement.href) {
        const baseUrl = new URL(baseElement.href);
        return baseUrl.origin + baseUrl.pathname.replace(/\/$/, '');
    }
    const pathParts = currentPath.split('/').filter(p => p);
    if (pathParts.length > 0) {
        const firstPart = pathParts[0];
        const isProjectName = !firstPart.includes('.html') && !firstPart.includes('.') &&
            firstPart !== 'search' && firstPart !== 'assets';
        if (currentPath.includes('/mkdocs-superquiz/')) return currentOrigin + '/mkdocs-superquiz';
        const knownPages = ['index', 'sample_quiz', 'search', 'sitemap'];
        if (isProjectName && !knownPages.includes(firstPart)) return currentOrigin + '/' + firstPart;
    }
    return currentOrigin;
}

function _normalizeUnlockContext(type, quizId = null, questionId = null, evalId = null) {
    if (!MKSQ_UNLOCK_TYPES.has(type)) {
        throw new Error(`Unsupported unlock type: ${type}`);
    }

    const quiz = quizId ? getQuizRootElement(quizId) : null;
    const resolvedEvalId = String(evalId || quiz?.dataset?.evalId || '').trim();
    const evalRoot = resolvedEvalId
        ? document.querySelector(
            `.mkdocs-superquiz[data-display-mode="eval"]` +
            `[data-eval-id="${CSS.escape(resolvedEvalId)}"]`,
        )
        : null;
    const pageUuid = quiz?.dataset?.pageUuid
        || evalRoot?.dataset?.pageUuid
        || document.querySelector('.mkdocs-superquiz')?.dataset?.pageUuid;

    if (!pageUuid) return null;

    const language = getUnlockContextLanguage(type, quizId);
    const data = {
        type,
        page_id: String(pageUuid),
        page_title: document.title,
        site_url: getSiteUrl(),
        language,
    };

    if (resolvedEvalId) data.eval_id = resolvedEvalId;

    if (type === 'question') {
        if (!quizId) throw new Error('Question unlock requires quiz_id.');
        data.quiz_id = String(quizId);
        if (questionId !== null && questionId !== undefined && String(questionId) !== '') {
            data.question_id = String(questionId);
        }

        const questionElement = data.question_id
            ? quiz?.querySelector(
                `[data-question-id="${CSS.escape(data.question_id)}"]`,
            )
            : null;
        const textElement = questionElement?.querySelector('.mkq-question-text');
        const titleElement = quiz?.querySelector('.mksq-quiz-title')
            || quiz?.querySelector('.admonition-title');
        let questionTitle = textElement?.textContent || titleElement?.textContent || '';
        questionTitle = questionTitle
            .replace(/\n/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
        if (questionTitle) data.question_title = questionTitle;
    }

    return data;
}

function showUnlockModal(type, quizId = null, questionId = null, evalId = null) {
    const modal = document.getElementById('mkq-unlock-modal');
    if (!modal) return;

    let data;
    try {
        data = _normalizeUnlockContext(type, quizId, questionId, evalId);
    } catch (error) {
        console.error('[mkdocs-superquiz] Cannot create unlock context:', error);
        return;
    }
    if (!data) return;

    currentUnlockContext = data;
    updateUnlockModalTranslations(data.language);

    const translate = (key, fallback) => translateForLanguage(
        data.language,
        key,
        fallback,
    );
    const titleElement = document.getElementById('mkq-unlock-title');
    if (titleElement) {
        titleElement.textContent = data.type === 'all_questions'
            ? translate('ui.unlock_all_corrections', 'Unlock All Corrections')
            : translate('ui.unlock_question_correction', 'Unlock Question Correction');
    }

    generateQRCode(data);
    _mountUnlockModalForFullscreen(modal);
    modal.classList.add('active');
}

function generateQRCode(data) {
    const container = document.getElementById('qr-code-container');
    if (!container) return;
    const jsonString = JSON.stringify(data);
    const utf8Bytes = new TextEncoder().encode(jsonString);
    let binaryString = '';
    for (let i = 0; i < utf8Bytes.length; i++) binaryString += String.fromCharCode(utf8Bytes[i]);
    const encodedData = btoa(binaryString);
    const unlockUrl = `${data.site_url}/quiz-unlock.html?data=${encodedData}`;
    if (typeof qrcode === 'undefined') {
        container.innerHTML = `<p style="color:red;">${translateForLanguage(data.language, "ui.error_no_library", "Error: No QR Code library has been downloaded")}</p>`;
        return;
    }
    try {
        const qr = qrcode(0, 'H');
        qr.addData(unlockUrl);
        qr.make();
        container.innerHTML = qr.createSvgTag(4, 4);
        const svg = container.querySelector('svg');
        if (svg) {
            svg.style.display = 'block'; svg.style.maxWidth = '256px'; svg.style.height = 'auto';
            svg.style.margin = '0 auto'; svg.style.padding = '10px'; svg.style.background = 'white';
            svg.style.borderRadius = '8px'; svg.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
        }
    } catch (error) {
        container.innerHTML = `<p style="color:red;">${translateForLanguage(data.language, "ui.error_generating_qrcode", "Error generating QR Code")}</p>`;
    }
}

function closeUnlockModal() {
    const modal = document.getElementById('mkq-unlock-modal');
    if (modal) modal.classList.remove('active');
    _restoreUnlockModalMount();
    const input = document.getElementById('mkq-unlock-code-input');
    if (input) input.value = '';
}

async function validateUnlockCode() {
    const input = document.getElementById('mkq-unlock-code-input');
    if (!input) return;
    const code = input.value.trim().toUpperCase();
    const language = currentUnlockContext?.language || getPageLanguage();
    if (!code) {
        alert(translateForLanguage(language, 'ui.please_enter_code', 'Please enter a code'));
        return;
    }
    if (!currentUnlockContext) {
        alert(translateForLanguage(language, 'ui.error_no_unlocking_context', 'Error: Unlocking context not found'));
        return;
    }
    const expectedCode = await calculateUnlockCode(currentUnlockContext);
    if (code === expectedCode) {
        unlockCorrections(currentUnlockContext);
        saveUnlockState(currentUnlockContext);
        closeUnlockModal();
    } else {
        alert(translateForLanguage(language, 'ui.error_incorrect_code', 'Incorrect code. Check with your teacher.'));
    }
}

function _unlockCodePayload(teacherCodeHash, context) {
    if (!MKSQ_UNLOCK_TYPES.has(context?.type)) {
        throw new Error(`Unsupported unlock type: ${context?.type || ''}`);
    }
    return [
        teacherCodeHash,
        context.page_id,
        context.type,
        context.eval_id ?? '',
        context.quiz_id ?? '',
        context.question_id ?? '',
    ].map((value) => String(value ?? '')).join(MKSQ_UNLOCK_FIELD_SEPARATOR);
}

async function calculateUnlockCode(context) {
    const teacherCodeHash = window.QUIZ_CONFIG.teacher_code_hash || '';
    const hash = await sha256(_unlockCodePayload(teacherCodeHash, context));
    return hash.substring(0, 8).toUpperCase();
}

async function sha256(str) {
    const buffer = new TextEncoder().encode(str);
    const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

function _correctionStateIconTarget(element) {
    return element?.querySelector?.('.mksq-correction-state-icon') || element || null;
}

function updateLockIcon(element, unlocked) {
    if (!element) return;
    const iconTarget = _correctionStateIconTarget(element);
    const icon = unlocked
        ? element.dataset.correctionUnlockedIcon
        : element.dataset.correctionUnlockIcon;
    if (iconTarget && icon !== undefined) iconTarget.textContent = icon;

    if (unlocked) {
        element.classList.remove('locked', 'open');
        element.classList.add('unlocked');
        element.setAttribute('data-lock-state', 'unlocked');
        element.setAttribute('title', t('ui.unlocked_corrections', 'Unlocked corrections'));
        element.onclick = null;
        element.style.cursor = 'default';
    } else {
        element.classList.remove('unlocked', 'open');
        element.classList.add('locked');
        element.setAttribute('data-lock-state', 'locked');
        element.setAttribute('title', t('ui.lock_tooltip_locked', 'Click to unlock corrections'));
        element.style.cursor = '';
    }
}

const MKSQ_UNLOCK_STORAGE_KEY = 'mksq:unlocks';

function readUnlockStates() {
    const current = localStorage.getItem(MKSQ_UNLOCK_STORAGE_KEY);
    if (current === null) return [];
    try {
        const parsed = JSON.parse(current);
        return Array.isArray(parsed) ? parsed : [];
    } catch (_) {
        return [];
    }
}

function writeUnlockStates(unlocks) {
    localStorage.setItem(MKSQ_UNLOCK_STORAGE_KEY, JSON.stringify(unlocks));
}

function getQuestionHandlerType(quiz) {
    if (!quiz) return '';
    const explicit = quiz.dataset.quizHandler;
    if (explicit) return explicit;
    const type = quiz.dataset.quizType || '';
    try {
        return window.MKSQ_FRONTEND?.getQuestionHandler?.(type) || type;
    } catch (_) {
        return type;
    }
}

function shouldShowCorrections(quiz) {
    const lockIndicator = quiz.querySelector('.mkq-lock-indicator, .mkq-unlock-btn');
    if (!lockIndicator) return true;
    const lockState = lockIndicator.getAttribute('data-lock-state');
    if (lockState === 'locked-permanent') return false;
    if (lockState === 'open' || lockState === 'unlocked') return true;
    if (lockState === 'locked') {
        const pageUuid = quiz.dataset.pageUuid;
        const quizId = quiz.dataset.quizId;
        const evalId = quiz.dataset.evalId || '';
        const unlocks = readUnlockStates();
        return unlocks.some((unlock) => {
            if (unlock.page_id !== pageUuid) return false;
            if (unlock.type === 'all_questions') {
                return !unlock.eval_id || unlock.eval_id === evalId;
            }
            if (unlock.type === 'question') {
                return unlock.quiz_id === quizId
                    && (!unlock.eval_id || unlock.eval_id === evalId);
            }
            return false;
        });
    }
    return true;
}

function unlockCorrections(context) {
    if (context.type === 'all_questions') {
        let selector = `.mkdocs-superquiz[data-page-uuid="${CSS.escape(String(context.page_id || ''))}"]`;
        if (context.eval_id) {
            selector += `[data-eval-id="${CSS.escape(String(context.eval_id))}"]`;
        }
        document.querySelectorAll(selector).forEach((quiz) => {
            quiz.querySelectorAll(
                '[data-lock-scope="all_questions"][data-lock-state="locked"]'
            ).forEach((control) => updateLockIcon(control, true));
            const quizId = quiz.dataset.quizId;
            if (quizId) validateQuestion(quizId);
        });

        let toolbarSelector = `.mksq-eval-toolbar[data-page-uuid="${CSS.escape(String(context.page_id || ''))}"]`;
        if (context.eval_id) {
            toolbarSelector += `[data-eval-id="${CSS.escape(String(context.eval_id))}"]`;
        }
        document.querySelectorAll(
            `${toolbarSelector} .mksq-eval-toolbar-unlock-btn[data-lock-state="locked"]`
        ).forEach((button) => updateLockIcon(button, true));
        return;
    }

    if (context.type === 'question') {
        const quiz = getQuizRootElement(context.quiz_id);
        if (!quiz) return;
        if (context.question_id) {
            const question = quiz.querySelector(
                `[data-question-id="${CSS.escape(String(context.question_id))}"]`,
            );
            updateLockIcon(question?.querySelector('.mkq-unlock-btn'), true);
        } else {
            updateLockIcon(quiz.querySelector('.mkq-unlock-btn'), true);
        }
        validateQuestion(context.quiz_id);
    }
}

function saveUnlockState(context) {
    const unlocks = readUnlockStates();
    const normalized = {
        page_id: String(context.page_id || ''),
        type: context.type,
        eval_id: String(context.eval_id || ''),
        quiz_id: String(context.quiz_id || ''),
        question_id: String(context.question_id || ''),
        timestamp: new Date().toISOString(),
    };
    const sameScope = (unlock) => (
        unlock.page_id === normalized.page_id
        && unlock.type === normalized.type
        && String(unlock.eval_id || '') === normalized.eval_id
        && String(unlock.quiz_id || '') === normalized.quiz_id
        && String(unlock.question_id || '') === normalized.question_id
    );
    writeUnlockStates([...unlocks.filter((unlock) => !sameScope(unlock)), normalized]);
}

function restoreUnlockedCorrections() {
    const unlocks = readUnlockStates();
    const currentPageUuid = document.querySelector('.mkdocs-superquiz')?.dataset.pageUuid;
    if (!currentPageUuid) return;
    unlocks.forEach((unlock) => {
        if (unlock.page_id === currentPageUuid && MKSQ_UNLOCK_TYPES.has(unlock.type)) {
            unlockCorrections(unlock);
        }
    });
}

// Shared learner-selection palette. Match and LineMatch deliberately
// use the same first colors, with generated hues beyond the fixed palette.
function mksqSelectionColor(index) {
    const shared = window.MKSQ_FRONTEND?.selectionPalette?.colorForIndex;
    if (typeof shared === 'function') return shared(index);
    const fallback = [
        '#e63946', '#1d4ed8', '#16a34a', '#9333ea', '#ea580c', '#0891b2',
        '#db2777', '#65a30d', '#7c3aed', '#0f766e', '#b45309', '#475569',
    ];
    const normalized = Math.max(0, Number.parseInt(index, 10) || 0);
    if (normalized < fallback.length) return fallback[normalized];
    const hue = Math.round((normalized * 137.508) % 360);
    return `hsl(${hue} 68% 46%)`;
}

// ─────────────────────────────────────────────────────────────────────────────
// Randomisation côté client
// ─────────────────────────────────────────────────────────────────────────────

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function _linematchPathLayoutMetrics(qEl, canvas, nodeCount) {
    const rect = typeof canvas.getBoundingClientRect === 'function'
        ? canvas.getBoundingClientRect()
        : {};
    const width = Math.max(
        1,
        Number(canvas.clientWidth) || Number(rect.width) || 640,
    );
    let height = Math.max(
        1,
        Number(canvas.clientHeight) || Number(rect.height) || 360,
    );
    const circleSize = Math.max(
        8,
        Number.parseFloat(qEl.dataset.circleSize) || 24,
    );
    const desiredPadding = Math.max(28, circleSize * 1.5);
    const paddingX = Math.min(desiredPadding, width / 2);
    const paddingY = desiredPadding;
    const minDistance = Math.max(48, circleSize * 2.25);
    const usableWidth = Math.max(0, width - 2 * paddingX);
    const maxColumns = usableWidth >= minDistance
        ? Math.floor(usableWidth / minDistance) + 1
        : 1;
    const columns = Math.max(1, Math.min(nodeCount, maxColumns));
    const rows = Math.max(1, Math.ceil(nodeCount / columns));
    const requiredHeight = 2 * paddingY + Math.max(0, rows - 1) * minDistance;

    if (requiredHeight > height) {
        height = requiredHeight;
        if (canvas.style) canvas.style.minHeight = `${Math.ceil(height)}px`;
    }

    return {
        circleSize,
        columns,
        height,
        minDistance,
        paddingX,
        paddingY,
        rows,
        usableHeight: Math.max(0, height - 2 * paddingY),
        usableWidth,
        width,
    };
}

function _linematchPathFallbackPositions(nodeCount, metrics) {
    const positions = [];
    const {
        columns,
        height,
        paddingX,
        paddingY,
        rows,
        usableHeight,
        usableWidth,
        width,
    } = metrics;

    for (let index = 0; index < nodeCount; index++) {
        const column = index % columns;
        const row = Math.floor(index / columns);
        const x = columns === 1
            ? paddingX + usableWidth / 2
            : paddingX + column * (usableWidth / (columns - 1));
        const y = rows === 1
            ? paddingY + usableHeight / 2
            : paddingY + row * (usableHeight / (rows - 1));
        positions.push({
            x: Math.max(0, Math.min(width, x)),
            y: Math.max(0, Math.min(height, y)),
        });
    }

    // Even when rejection sampling cannot find a layout (for example in a
    // deterministic unit test), node identities still receive random slots.
    shuffleArray(positions);
    return positions;
}

function _linematchPathRandomPositions(nodeCount, metrics) {
    const positions = [];
    const {
        height,
        minDistance,
        paddingX,
        paddingY,
        usableHeight,
        usableWidth,
        width,
    } = metrics;
    const maxAttemptsPerNode = 500;

    for (let index = 0; index < nodeCount; index++) {
        let accepted = null;
        for (let attempt = 0; attempt < maxAttemptsPerNode; attempt++) {
            const candidate = {
                x: paddingX + Math.random() * usableWidth,
                y: paddingY + Math.random() * usableHeight,
            };
            const separated = positions.every((position) => (
                Math.hypot(candidate.x - position.x, candidate.y - position.y)
                >= minDistance
            ));
            if (separated) {
                accepted = candidate;
                break;
            }
        }
        if (!accepted) return _linematchPathFallbackPositions(nodeCount, metrics);
        positions.push(accepted);
    }

    return positions.map(({ x, y }) => ({
        x: Math.max(0, Math.min(width, x)),
        y: Math.max(0, Math.min(height, y)),
    }));
}

function _randomizeLinematchPathNodes(qEl) {
    if (qEl.dataset.nodeLayout !== 'auto') return false;
    if (qEl.dataset.autoLayoutApplied === 'true') return false;
    const canvas = qEl.querySelector('.mkq-lm-path-canvas');
    if (!canvas) return false;
    const nodes = Array.from(canvas.querySelectorAll('.mkq-lm-node[data-auto-position="true"]'));
    if (nodes.length === 0) return false;

    const metrics = _linematchPathLayoutMetrics(qEl, canvas, nodes.length);
    const positions = _linematchPathRandomPositions(nodes.length, metrics);
    positions.forEach((position, index) => {
        const node = nodes[index];
        if (!node?.style) return;
        node.style.left = `${(position.x / metrics.width) * 100}%`;
        node.style.top = `${(position.y / metrics.height) * 100}%`;
    });
    qEl.dataset.autoLayoutApplied = 'true';
    return true;
}

function _randomizeLinematchGraphNodes(qEl) {
    if (qEl.dataset.nodeLayout !== 'auto') return false;
    if (qEl.dataset.autoLayoutApplied === 'true') return false;
    const canvas = qEl.querySelector('.mkq-lm-graph-canvas');
    if (!canvas) return false;
    const nodes = Array.from(canvas.querySelectorAll('.mkq-lm-node[data-auto-position="true"]'));
    if (nodes.length === 0) return false;

    // GRAPH uses the same collision-free geometry contract as PATH. Only the
    // connector semantics differ; node placement is independent of line style.
    const metrics = _linematchPathLayoutMetrics(qEl, canvas, nodes.length);
    const positions = _linematchPathRandomPositions(nodes.length, metrics);
    positions.forEach((position, index) => {
        const node = nodes[index];
        if (!node?.style) return;
        node.style.left = `${(position.x / metrics.width) * 100}%`;
        node.style.top = `${(position.y / metrics.height) * 100}%`;
    });
    qEl.dataset.autoLayoutApplied = 'true';
    return true;
}

/**
 * Applique la randomisation sur tous les quiz de la page.
 * Appelé au DOMContentLoaded, AVANT loadSavedAnswers().
 */
function _randomizationHandlerType(quiz) {
    if (!quiz) return '';
    const explicit = quiz.dataset?.quizHandler;
    if (explicit) return explicit;
    const type = quiz.dataset?.quizType || '';
    const map = {
        mc: 'mcquiz', sc: 'scquiz', blanks: 'blanks', scd: 'scdropdown', mcd: 'mcdropdown',
        order: 'order', columns: 'order', sentence: 'order', match: 'match',
        'match.line': 'linematch', 'match.bezier': 'linematch', image: 'linematch',
        path: 'linematch', graph: 'linematch', flashcard: 'match', matrix: 'match',
    };
    return map[type] || type;
}

function _evalQuestionsInDocumentOrder(questions) {
    return [...questions].sort((left, right) => {
        if (left === right) return 0;
        const relation = left.compareDocumentPosition(right);
        return relation & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
    });
}

function _evalNavigation(pageUuid, evalId) {
    return document.querySelector(
        `.mksq-page-navigation[data-page-uuid="${CSS.escape(String(pageUuid))}"][data-eval-id="${CSS.escape(String(evalId))}"]`,
    );
}

function _renumberEvalQuestions(pageUuid, evalId, questions) {
    const typeCounters = new Map();

    questions.forEach((question, index) => {
        const sequenceNumber = index + 1;
        question.dataset.displayQuestionNumber = String(sequenceNumber);

        const scope = String(question.dataset.numberingScope || 'all').toLowerCase();
        let titleNumber = sequenceNumber;
        if (scope === 'type' || scope === 'per-type' || scope === 'per_type') {
            const type = String(question.dataset.quizType || 'question');
            titleNumber = (typeCounters.get(type) || 0) + 1;
            typeCounters.set(type, titleNumber);
        }
        question.dataset.displayTitleNumber = String(titleNumber);

        const numberingEnabled = question.dataset.numberingEnabled !== 'false';
        const mark = String(question.dataset.questionMark || '').trim();
        if (!numberingEnabled || mark) return;

        const titleElement = question.querySelector('.mksq-quiz-title');
        if (!titleElement) return;
        const label = String(question.dataset.questionLabel || '').trim();
        const authoredTitle = String(question.dataset.questionTitle || '').trim();
        const numberedPrefix = `${label} ${titleNumber}`.trim();
        titleElement.textContent = numberedPrefix && authoredTitle
            ? `${numberedPrefix} — ${authoredTitle}`
            : numberedPrefix || authoredTitle;
    });

    const navigation = _evalNavigation(pageUuid, evalId);
    const navigationInner = navigation?.querySelector('.mksq-page-navigation-inner');
    if (!navigation || !navigationInner) return;

    const prefix = String(navigation.dataset.prefix ?? '');
    const showTitles = navigation.dataset.showTitles === 'true';

    questions.forEach((question) => {
        const quizId = String(question.dataset.quizId || question.id || '');
        const link = navigationInner.querySelector(
            `.mksq-page-navigation-link[data-quiz-id="${CSS.escape(quizId)}"]`,
        );
        if (!link) return;

        navigationInner.appendChild(link);
        const displayNumber = String(question.dataset.displayQuestionNumber || '');
        const mark = String(question.dataset.questionMark || link.dataset.questionMark || '').trim();
        const authoredTitle = String(
            question.dataset.questionTitle || link.dataset.questionTitle || '',
        ).trim();
        const shortLabel = mark || displayNumber;
        const navigationLabel = prefix ? `${prefix}${shortLabel}` : shortLabel;

        // Keep every visible-number attribute synchronized with the final
        // evaluation order. data-question-number remains the stable authored
        // identity used to locate the question; data-eval-number is the
        // mutable visible position after randomization.
        link.dataset.evalNumber = displayNumber;
        link.dataset.displayQuestionNumber = displayNumber;
        link.textContent = showTitles && authoredTitle
            ? `${navigationLabel}. ${authoredTitle}`
            : navigationLabel;
    });

    // The terminal Validate entry is not a question and never participates in
    // numbering/randomization. Keep it physically last after question links
    // have been reordered to their final evaluation sequence.
    const terminalLink = navigationInner.querySelector(
        '.mksq-page-navigation-link[data-eval-terminal="true"]',
    );
    if (terminalLink) navigationInner.appendChild(terminalLink);
}

function _selectFirstEvalNavigationLink(pageUuid, evalId, questions) {
    if (!questions?.length) return;
    const navigation = _evalNavigation(pageUuid, evalId);
    if (!navigation) return;
    const firstQuizId = String(questions[0]?.dataset?.quizId || '');
    if (!firstQuizId) return;
    const firstLink = navigation.querySelector(
        `.mksq-page-navigation-link[data-quiz-id="${CSS.escape(firstQuizId)}"]`,
    );
    if (firstLink) _activateEvalNavigationLink(navigation, firstLink);
}

function _emitEvalRandomizationSettled(pageUuid, evalId, questions) {
    const firstQuestion = questions?.[0] || null;
    const revealRoot = firstQuestion?.closest?.('.mkdocs-revealjs-deck') || null;
    document.dispatchEvent(new CustomEvent('mkdocs-superquiz-eval-randomized', {
        detail: {
            pageUuid: String(pageUuid || ''),
            evalId: String(evalId || ''),
            deckId: String(firstQuestion?.dataset?.deckId || ''),
            root: revealRoot,
            orderedQuizIds: (questions || []).map((question) => String(question.dataset.quizId || '')),
        },
    }));
}

function _topLevelRevealSlide(question, slidesRoot) {
    let node = question.closest('section');
    if (!node || !slidesRoot) return null;
    while (node.parentElement && node.parentElement !== slidesRoot) {
        const parentSection = node.parentElement.closest('section');
        if (!parentSection) break;
        node = parentSection;
    }
    return node.parentElement === slidesRoot ? node : null;
}

function _randomizeRevealEval(questions) {
    if (questions.length < 2) return;
    const root = questions[0].closest('.mkdocs-revealjs-deck');
    const slidesRoot = root?.querySelector(':scope > .slides');
    if (!root || !slidesRoot) return;
    const groups = [];
    const seen = new Set();
    questions.forEach((question) => {
        const slide = _topLevelRevealSlide(question, slidesRoot);
        if (slide && !seen.has(slide)) {
            seen.add(slide);
            groups.push(slide);
        }
    });
    if (groups.length < 2) return;

    const slots = groups.map((slide) => {
        const marker = document.createComment('mksq-random-reveal-slide-slot');
        slidesRoot.insertBefore(marker, slide);
        return marker;
    });
    const randomized = [...groups];
    shuffleArray(randomized);
    slots.forEach((slot, index) => {
        slidesRoot.insertBefore(randomized[index], slot);
        slot.remove();
    });
    root._mkdocsRevealDeck?.sync?.();
}

function randomizeEvalQuestions() {
    const groups = new Map();
    document.querySelectorAll(
        '.mkdocs-superquiz[data-display-mode="eval"][data-eval-id]',
    ).forEach((quizEl) => {
        const pageUuid = String(quizEl.dataset.pageUuid || '').trim();
        const evalId = String(quizEl.dataset.evalId || '').trim();
        if (!pageUuid || !evalId) return;
        const key = `${pageUuid}::${evalId}`;
        if (!groups.has(key)) groups.set(key, { pageUuid, evalId, questions: [] });
        groups.get(key).questions.push(quizEl);
    });

    groups.forEach(({ pageUuid, evalId, questions }) => {
        const alreadyApplied = questions.every(
            (question) => question.dataset.evalRandomizationApplied === 'true',
        );
        if (!alreadyApplied) {
            const randomizable = questions.filter(
                (question) => question.dataset.randomizeQuestions === 'true',
            );
            if (randomizable.length > 1) {
                const revealRoot = randomizable[0].closest('.mkdocs-revealjs-deck');
                if (revealRoot && randomizable.every((q) => q.closest('.mkdocs-revealjs-deck') === revealRoot)) {
                    _randomizeRevealEval(randomizable);
                } else {
                    const parent = randomizable[0].parentElement;
                    if (!parent || randomizable.some((question) => question.parentElement !== parent)) {
                        console.warn(
                            `mkdocs-superquiz: cannot randomize evaluation ${evalId}; question blocks do not share one host.`,
                        );
                    } else {
                        const slots = randomizable.map((question) => {
                            const marker = document.createComment('mksq-random-question-slot');
                            parent.insertBefore(marker, question);
                            return marker;
                        });
                        const randomized = [...randomizable];
                        shuffleArray(randomized);
                        slots.forEach((slot, index) => {
                            parent.insertBefore(randomized[index], slot);
                            slot.remove();
                        });
                    }
                }
            }
            questions.forEach((question) => {
                question.dataset.evalRandomizationApplied = 'true';
            });
        }
        const orderedQuestions = _evalQuestionsInDocumentOrder(questions);
        _renumberEvalQuestions(pageUuid, evalId, orderedQuestions);

        // Reveal evaluations have a deterministic logical start after the
        // shuffle: the first question in the final DOM order. Select its menu
        // entry immediately so the quiz chrome never exposes an authored/original
        // number while Reveal is synchronizing its slide model.
        if (orderedQuestions[0]?.closest?.('.mkdocs-revealjs-deck')) {
            _selectFirstEvalNavigationLink(pageUuid, evalId, orderedQuestions);
        }

        // Publish the exact end of the synchronous randomize + reorder +
        // renumber transaction. RevealJS can now sync and navigate to slide 0
        // without racing SuperQuiz's initialization debounce.
        _emitEvalRandomizationSettled(pageUuid, evalId, orderedQuestions);
    });
}

function applyRandomization() {
    document.querySelectorAll('.mkdocs-superquiz').forEach(quizEl => {
        const quizRandomizeAnswers = quizEl.dataset.randomizeAnswers === 'true';
        const randomizeQuestions = quizEl.dataset.randomizeQuestions === 'true';
        const quizType = _randomizationHandlerType(quizEl);

        // ── randomize_answers ──────────────────────────────────────────────
        if (quizType === 'mcquiz' || quizType === 'scquiz') {
            quizEl.querySelectorAll('.mkq-question[data-question-id]').forEach(qEl => {
                const qId = qEl.dataset.questionId;
                if (!qId || qId === '0') return;

                const qRand = qEl.dataset.randomizeAnswers;
                let shouldRandomize;
                if (qRand === 'true') shouldRandomize = true;
                else if (qRand === 'false') shouldRandomize = false;
                else shouldRandomize = quizRandomizeAnswers; // "inherit" ou absent

                if (!shouldRandomize) return;
                const answersDiv = qEl.querySelector('.mkq-answers');
                if (!answersDiv) return;
                const labels = Array.from(answersDiv.querySelectorAll('.mkq-answer'));
                shuffleArray(labels);
                labels.forEach(l => answersDiv.appendChild(l));
            });
        } else if (quizType === 'scdropdown') {
            quizEl.querySelectorAll('.mkq-question[data-question-id]').forEach(qEl => {
                const qId = qEl.dataset.questionId;
                if (!qId || qId === '0') return;

                const qRand = qEl.dataset.randomizeAnswers;
                let shouldRandomize;
                if (qRand === 'true') shouldRandomize = true;
                else if (qRand === 'false') shouldRandomize = false;
                else shouldRandomize = quizRandomizeAnswers;

                if (!shouldRandomize) return;
                qEl.querySelectorAll('.mkq-custom-scdropdown').forEach(ddEl => {
                    const optionsDiv = ddEl.querySelector('.mkq-custom-scdropdown-options');
                    if (!optionsDiv) return;
                    const options = Array.from(optionsDiv.querySelectorAll('.mkq-custom-scdropdown-option'));
                    shuffleArray(options);
                    options.forEach((opt, newIdx) => {
                        opt.dataset.value = newIdx;
                        optionsDiv.appendChild(opt);
                    });
                });
            });
        } else if (quizType === 'mcdropdown') {
            quizEl.querySelectorAll('.mkq-question[data-question-id]').forEach(qEl => {
                const qId = qEl.dataset.questionId;
                if (!qId || qId === '0') return;

                const qRand = qEl.dataset.randomizeAnswers;
                let shouldRandomize;
                if (qRand === 'true') shouldRandomize = true;
                else if (qRand === 'false') shouldRandomize = false;
                else shouldRandomize = quizRandomizeAnswers;

                if (!shouldRandomize) return;
                qEl.querySelectorAll('.mkq-custom-mcdropdown').forEach(ddEl => {
                    const optionsDiv = ddEl.querySelector('.mkq-custom-mcdropdown-options');
                    if (!optionsDiv) return;
                    const options = Array.from(optionsDiv.querySelectorAll('.mkq-custom-mcdropdown-option'));
                    shuffleArray(options);
                    options.forEach((opt, newIdx) => {
                        opt.dataset.value = newIdx;
                        optionsDiv.appendChild(opt);
                    });
                    ddEl.dataset.selectedIndices = '[]';
                });
            });
        } else if (quizType === 'order') {
            // order mode: vertical — mélanger les items de chaque question
            quizEl.querySelectorAll('.mkq-order-question[data-question-id]').forEach(qEl => {
                // mode: vertical
                const itemsContainer = qEl.querySelector('.mkq-order-items');
                if (itemsContainer) {
                    const items = Array.from(itemsContainer.querySelectorAll('.mkq-order-item'));
                    if (items.length > 1) {
                        shuffleArray(items);
                        items.forEach(item => itemsContainer.appendChild(item));
                    }
                }
                // mode: columns — mélanger le pool
                const poolContainer = qEl.querySelector('.mkq-order-pool-items');
                if (poolContainer) {
                    const poolItems = Array.from(poolContainer.querySelectorAll('.mkq-order-item'));
                    if (poolItems.length > 1) {
                        shuffleArray(poolItems);
                        poolItems.forEach(item => poolContainer.appendChild(item));
                    }
                }
                // mode: sentence — mélanger chaque pool de phrase
                qEl.querySelectorAll('.mkq-sentence-pool-items').forEach(pool => {
                    const tokens = Array.from(pool.querySelectorAll('.mkq-sentence-token, .mkq-sentence-pool-token'));
                    if (tokens.length > 1) {
                        shuffleArray(tokens);
                        tokens.forEach(tok => pool.appendChild(tok));
                    }
                });
            });
        } else if (quizType === 'linematch') {
            if (quizRandomizeAnswers) {
                // columns — shuffle both lanes independently
                quizEl.querySelectorAll('.mkq-lm-columns-question').forEach(qEl => {
                    const leftCol  = qEl.querySelector('.mkq-lm-column-left');
                    const rightCol = qEl.querySelector('.mkq-lm-column-right');
                    if (leftCol) {
                        const items = Array.from(leftCol.querySelectorAll('.mkq-lm-item-left'));
                        if (items.length > 1) { shuffleArray(items); items.forEach(i => leftCol.appendChild(i)); }
                    }
                    if (rightCol) {
                        const items = Array.from(rightCol.querySelectorAll('.mkq-lm-item-right'));
                        if (items.length > 1) { shuffleArray(items); items.forEach(i => rightCol.appendChild(i)); }
                    }
                });

                // image — only source labels move. Authored anchors remain tied
                // to their exact image coordinates.
                quizEl.querySelectorAll('.mkq-lm-image-question').forEach(qEl => {
                    const labelsCol = qEl.querySelector('.mkq-lm-labels-col');
                    if (!labelsCol) return;
                    const labels = Array.from(labelsCol.querySelectorAll('.mkq-lm-label-item'));
                    if (labels.length > 1) {
                        shuffleArray(labels);
                        labels.forEach(label => labelsCol.appendChild(label));
                    }
                });

                // path — explicit x/y coordinates are immutable. Nodes without
                // coordinates opt into a collision-free random canvas layout.
                quizEl.querySelectorAll('.mkq-lm-path-question[data-node-layout="auto"]')
                    .forEach(qEl => _randomizeLinematchPathNodes(qEl));

                // graph — same automatic geometry contract as PATH. Authored
                // x/y coordinates remain immutable; only coordinate-free nodes
                // receive a random non-overlapping layout.
                quizEl.querySelectorAll('.mkq-lm-graph-question[data-node-layout="auto"]')
                    .forEach(qEl => _randomizeLinematchGraphNodes(qEl));
            }
        } else if (quizType === 'match') {
            if (quizRandomizeAnswers) {
                // pair — shuffle left and right columns
                quizEl.querySelectorAll('.mkq-mq-pair-question').forEach(qEl => {
                    const leftCol  = qEl.querySelector('.mkq-mq-pair-left');
                    const rightCol = qEl.querySelector('.mkq-mq-pair-right');
                    if (leftCol) {
                        const items = Array.from(leftCol.querySelectorAll('.mkq-mq-left-item'));
                        if (items.length > 1) { shuffleArray(items); items.forEach(i => leftCol.appendChild(i)); }
                    }
                    if (rightCol) {
                        const items = Array.from(rightCol.querySelectorAll('.mkq-mq-right-item'));
                        if (items.length > 1) { shuffleArray(items); items.forEach(i => rightCol.appendChild(i)); }
                    }
                });
                // category — move all items to pool and shuffle
                quizEl.querySelectorAll('.mkq-mq-category-question').forEach(qEl => {
                    const pool = qEl.querySelector('.mkq-mq-pool-items');
                    if (!pool) return;
                    qEl.querySelectorAll('.mkq-mq-category-items .mkq-mq-cat-item, .mkq-mq-category-items .mkq-mq-pool-item').forEach(item => pool.appendChild(item));
                    const all = Array.from(pool.querySelectorAll('.mkq-mq-cat-item, .mkq-mq-pool-item'));
                    shuffleArray(all);
                    all.forEach(i => pool.appendChild(i));
                });
                // flashcard — shuffle cards
                quizEl.querySelectorAll('.mkq-mq-flashcard-question').forEach(qEl => {
                    const deck = qEl.querySelector('.mkq-fc-deck');
                    if (!deck) return;
                    const cards = Array.from(deck.querySelectorAll('.mkq-fc-card'));
                    shuffleArray(cards);
                    cards.forEach((c, i) => { deck.appendChild(c); c.style.display = i === 0 ? '' : 'none'; });
                    const cur = qEl.querySelector('.mkq-fc-current');
                    if (cur) cur.textContent = '1';
                });
            }
        }
        if (randomizeQuestions && quizEl.dataset.displayMode !== 'eval') {
            const questionEls = Array.from(
                quizEl.querySelectorAll('.mkq-question[data-question-id]')
            ).filter(q => q.dataset.questionId !== '0');

            if (questionEls.length > 1) {
                const parent = questionEls[0].parentElement;
                const actionsDiv = parent.querySelector('.quiz-actions');
                shuffleArray(questionEls);
                questionEls.forEach((qEl, newIdx) => {
                    const numEl = qEl.querySelector('.mkq-number');
                    if (numEl) numEl.textContent = `${newIdx + 1}.`;
                    if (actionsDiv) {
                        parent.insertBefore(qEl, actionsDiv);
                    } else {
                        parent.appendChild(qEl);
                    }
                });
            }
        }
    });
    randomizeEvalQuestions();
}


// ─────────────────────────────────────────────────────────────────────────────
// Scoring helpers
// ─────────────────────────────────────────────────────────────────────────────

function clampScore(score, pointsMax, minScore, clampMax) {
    let s = score;
    if (clampMax) s = Math.min(s, pointsMax);
    if (minScore !== null && minScore !== undefined) {
        const min = Number(minScore);
        if (min < pointsMax) s = Math.max(s, min);
    }
    return s;
}

function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
    return true;
}

function normalizeLatexLoose(str) {
    return str.replace(/\s+/g, '').replace(/\*/g, '').replace(/²/g, '^2').replace(/³/g, '^3');
}

// ─────────────────────────────────────────────────────────────────────────────
// compareAnswers — NEW FORMAT ONLY
// ─────────────────────────────────────────────────────────────────────────────

function normalizeCompareConfig(cfg) {
    const DEFAULTS = { spaces: 'none', characters: '', case: false, diacritics: false };
    if (!cfg || typeof cfg !== 'object') {
        return { ignore: Object.assign({}, DEFAULTS), equivalence: {} };
    }
    const ignore = Object.assign({}, DEFAULTS, cfg.ignore || {});
    const validSpaces = ['all', 'inside', 'outside', 'none'];
    if (!validSpaces.includes(ignore.spaces)) ignore.spaces = 'none';
    const rawEquiv = cfg.equivalence || {};
    const equivalence = {};
    for (const [k, v] of Object.entries(rawEquiv)) {
        equivalence[k] = Array.isArray(v) ? v.map(String) : [String(v)];
    }
    return { ignore, equivalence };
}

function normalizeAnswer(str, ignore) {
    if (typeof str !== 'string') str = String(str ?? '');
    const chars = (ignore.characters != null) ? String(ignore.characters) : '';
    if (chars.length > 0) {
        const charSet = new Set([...chars]);
        str = [...str].filter(c => !charSet.has(c)).join('');
    }
    const spacesMode = (ignore.spaces != null) ? ignore.spaces : 'none';
    if (spacesMode === 'all') { str = str.replace(/\s+/g, ''); }
    else if (spacesMode === 'outside') { str = str.trim(); }
    else if (spacesMode === 'inside') {
        const leading = str.match(/^\s*/)[0];
        const trailing = str.match(/\s*$/)[0];
        const innerStart = leading.length;
        const innerEnd = str.length - trailing.length;
        const inner = str.slice(innerStart, innerEnd);
        str = leading + inner.replace(/\s+/g, '') + trailing;
    }
    if (ignore.case === true) str = str.toLowerCase();
    if (ignore.diacritics === true) str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return str;
}

function applyEquivalences(str, equivalence, caseInsensitive) {
    if (!equivalence || typeof equivalence !== 'object') return str;
    const repMap = new Map();
    for (const [canonical, variants] of Object.entries(equivalence)) {
        const canonKey = caseInsensitive ? canonical.toLowerCase() : canonical;
        for (const v of (Array.isArray(variants) ? variants : [variants])) {
            const vKey = caseInsensitive ? String(v).toLowerCase() : String(v);
            repMap.set(vKey, canonKey);
        }
    }
    if (repMap.size === 0) return str;
    const sortedKeys = [...repMap.keys()].sort((a, b) => b.length - a.length);
    const escaped = sortedKeys.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    const re = new RegExp(escaped.join('|'), 'g');
    return str.replace(re, match => repMap.get(match) ?? match);
}

function compareAnswers(userAnswer, correctAnswer, compareConfig) {
    const rawCfg = compareConfig
        || window.QUIZ_CONFIG?.blanks?.compare_answers
        || {};
    const cfg = normalizeCompareConfig(rawCfg);
    const { ignore, equivalence } = cfg;
    const caseInsensitive = (ignore.case === true);
    let user = normalizeAnswer(String(userAnswer ?? ''), ignore);
    let correct = normalizeAnswer(String(correctAnswer ?? ''), ignore);
    user = applyEquivalences(user, equivalence, caseInsensitive);
    correct = applyEquivalences(correct, equivalence, caseInsensitive);
    return user === correct;
}

// ─────────────────────────────────────────────────────────────────────────────
// Parse error_scores keys for mcquiz/mcdropdown: "[Paris, Londres]" → list
// ─────────────────────────────────────────────────────────────────────────────

function parseBracketKey(key) {
    const s = String(key).trim();
    if (!s.startsWith('[') || !s.endsWith(']')) return null;
    const inner = s.slice(1, -1).trim();
    if (!inner) return [];
    return inner.split(',').map(x => x.trim()).filter(Boolean);
}

// ─────────────────────────────────────────────────────────────────────────────
// Score functions
// ─────────────────────────────────────────────────────────────────────────────

/**
 * scoreChoiceQuestion — mcquiz
 */
function scoreChoiceQuestion(questionData, selectedTexts) {
    const controller = window.MKSQ_FRONTEND?.getQuestionController?.('mcquiz');
    if (!controller) {
        throw new Error('mcquiz frontend controller is not available.');
    }
    return controller.scoreQuestion(
        questionData,
        selectedTexts,
        window.QUIZ_CONFIG || {},
    );
}

/**
 * scoreScQuizQuestion — scquiz
 */
function scoreScQuizQuestion(questionData, selectedText) {
    const controller = window.MKSQ_FRONTEND?.getQuestionController?.('scquiz');
    if (!controller) {
        throw new Error('scquiz frontend controller is not available.');
    }
    return controller.scoreQuestion(
        questionData,
        selectedText,
        window.QUIZ_CONFIG || {},
    );
}

function scoreBlanksQuestion(questionData, userAnswers) {
    const points = Number(questionData.points || 1);
    const blanks = Array.isArray(questionData.blanks) ? questionData.blanks : [];
    const n = blanks.length || 1;
    const scoringMode = questionData.scoring_mode || 'proportional';
    const perFillblank = points / n;
    const em = questionData.error_scores || { blanks: [] };

    const compareCfg = questionData.compare_answers
        || questionData.quiz_compare_answers
        || window.QUIZ_CONFIG.blanks?.compare_answers
        || {};

    const questionDefaultFalse = (questionData.error_default !== null && questionData.error_default !== undefined)
        ? Number(questionData.error_default) : null;
    const hasQuestionDefaultFalse = (questionDefaultFalse !== null);

    let correctCount = 0, anyWrongNonEmpty = false;
    const blankStates = [];

    for (let i = 0; i < blanks.length; i++) {
        const blank = blanks[i];
        const ua = String(userAnswers[i] ?? '');
        const accepted = Array.isArray(blank.answers) ? blank.answers : [];
        const isEmpty = (ua.trim() === '');
        const isCorrect = !isEmpty && accepted.some(ans => compareAnswers(ua, ans, compareCfg));
        if (isCorrect) correctCount++;
        if (!isCorrect && !isEmpty) anyWrongNonEmpty = true;
        blankStates.push({ isCorrect, isEmpty, ua });
    }

    const minScore = (questionData.min_score !== undefined)
        ? questionData.min_score
        : (window.QUIZ_CONFIG.min_score !== undefined && window.QUIZ_CONFIG.min_score !== null)
            ? window.QUIZ_CONFIG.min_score : null;
    const clampMax = (questionData.clamp_max_score ?? window.QUIZ_CONFIG.clamp_max_score ?? true);

    const hasAnyFillblankEm = blanks.some((_, i) => em.blanks && em.blanks[i] &&
        (em.blanks[i].rules?.length > 0 || em.blanks[i].error_default !== null));

    if (scoringMode === 'all_or_nothing' || (scoringMode === 'some_or_nothing' && hasAnyFillblankEm)) {
        if (!hasAnyFillblankEm) {
            const allCorrect = (correctCount === blanks.length);
            const base = allCorrect ? points
                : (anyWrongNonEmpty && hasQuestionDefaultFalse) ? questionDefaultFalse
                : anyWrongNonEmpty ? 0 : 0;
            return clampScore(base, points, minScore, clampMax);
        }

        let total = 0;
        let hasUncoveredFillblank = false;

        for (let i = 0; i < blanks.length; i++) {
            const st = blankStates[i];
            if (st.isCorrect) { total += perFillblank; continue; }

            const fbEm = (em.blanks && em.blanks[i]) ? em.blanks[i] : null;
            const blankDf = fbEm && fbEm.error_default !== null && fbEm.error_default !== undefined
                ? Number(fbEm.error_default) : null;
            const hasFillblankDf = (blankDf !== null);
            const effectiveDf = hasFillblankDf ? blankDf
                : hasQuestionDefaultFalse ? questionDefaultFalse : null;
            const hasDf = (effectiveDf !== null);

            if (st.isEmpty) {
                if (hasDf) { total += effectiveDf; } else { hasUncoveredFillblank = true; break; }
                continue;
            }
            if (!fbEm || !fbEm.rules || fbEm.rules.length === 0) {
                if (hasDf) { total += effectiveDf; } else { hasUncoveredFillblank = true; break; }
                continue;
            }

            const rules = Array.isArray(fbEm.rules) ? fbEm.rules : [];
            let matched = null;
            for (const r of rules) { if (compareAnswers(st.ua, r.answer, compareCfg)) { matched = r; break; } }
            if (matched) { total += Number(matched.score); }
            else if (hasDf) { total += effectiveDf; }
            else { hasUncoveredFillblank = true; break; }
        }

        if (hasUncoveredFillblank) total = 0;
        return clampScore(total, points, minScore, clampMax);
    }

    if (scoringMode === 'some_or_nothing') {
        const base = anyWrongNonEmpty ? 0 : (perFillblank * correctCount);
        return clampScore(base, points, minScore, clampMax);
    }

    // proportional
    let total = perFillblank * correctCount;
    for (let i = 0; i < blanks.length; i++) {
        const st = blankStates[i];
        if (st.isCorrect) continue;
        const fbEm = (em.blanks && em.blanks[i]) ? em.blanks[i] : null;
        const blankDf = fbEm && fbEm.error_default !== null && fbEm.error_default !== undefined
            ? Number(fbEm.error_default) : null;
        const effectiveDf = (blankDf !== null) ? blankDf
            : hasQuestionDefaultFalse ? questionDefaultFalse : 0;
        const rules = fbEm ? (Array.isArray(fbEm.rules) ? fbEm.rules : []) : [];
        let matched = null;
        for (const r of rules) { if (compareAnswers(st.ua, r.answer, compareCfg)) { matched = r; break; } }
        if (matched) total += Number(matched.score);
        else total += effectiveDf;
    }
    return clampScore(total, points, minScore, clampMax);
}

function scoreScdropdownQuestion(questionData, selectedTexts) {
    const actual = Array.isArray(questionData.scdropdowns) ? questionData.scdropdowns
        : (questionData.scdropdown ? [questionData.scdropdown] : []);
    const per = actual.length > 0 ? Number(questionData.points || 1) / actual.length : Number(questionData.points || 1);
    const points = Number(questionData.points || 1);
    const scoringMode = questionData.scoring_mode || 'all_or_nothing';
    const em = questionData.error_scores || { scdropdowns: [] };

    const minScore = (questionData.min_score !== undefined)
        ? questionData.min_score
        : (window.QUIZ_CONFIG.min_score !== undefined && window.QUIZ_CONFIG.min_score !== null)
            ? window.QUIZ_CONFIG.min_score : null;
    const clampMax = (questionData.clamp_max_score ?? window.QUIZ_CONFIG.clamp_max_score ?? true);

    const questionDefaultFalse = (questionData.error_default !== null && questionData.error_default !== undefined)
        ? Number(questionData.error_default) : null;
    const hasQuestionDf = (questionDefaultFalse !== null);

    const hasAnyDdEm = actual.some((_, i) => em.scdropdowns && em.scdropdowns[i] &&
        (em.scdropdowns[i].rules?.length > 0 || em.scdropdowns[i].error_default !== null));

    const evalScdropdowns = () => actual.map((dd, i) => {
        const opts = Array.isArray(dd.options) ? dd.options : [];
        const correctText = String(opts[Number(dd.correct_index ?? 0)] ?? '').trim();
        const chosenText = selectedTexts[i] ?? null;
        const isEmpty = (chosenText === null);
        const isCorrect = !isEmpty && String(chosenText).trim() === correctText;
        return { isCorrect, isEmpty, chosenText, correctText };
    });

    if (scoringMode === 'all_or_nothing' || (scoringMode === 'some_or_nothing' && hasAnyDdEm)) {
        if (!hasAnyDdEm) {
            const states = evalScdropdowns();
            const allCorrect = states.every(s => s.isCorrect);
            const anyWrong = states.some(s => !s.isCorrect && !s.isEmpty);
            const base = allCorrect ? points
                : (anyWrong && hasQuestionDf) ? questionDefaultFalse
                : anyWrong ? 0 : 0;
            return clampScore(base, points, minScore, clampMax);
        }

        let total = 0, hasUncoveredDd = false;
        const states = evalScdropdowns();
        for (let i = 0; i < actual.length; i++) {
            const st = states[i];
            if (st.isCorrect) { total += per; continue; }
            const ddEm = (em.scdropdowns && em.scdropdowns[i]) ? em.scdropdowns[i] : null;
            const ddDf = ddEm && ddEm.error_default !== null && ddEm.error_default !== undefined
                ? Number(ddEm.error_default) : null;
            const effectiveDf = (ddDf !== null) ? ddDf : hasQuestionDf ? questionDefaultFalse : null;
            const hasDf = (effectiveDf !== null);
            if (st.isEmpty) {
                if (hasDf) { total += effectiveDf; } else { hasUncoveredDd = true; break; }
                continue;
            }
            if (!ddEm || !ddEm.rules || ddEm.rules.length === 0) {
                if (hasDf) { total += effectiveDf; } else { hasUncoveredDd = true; break; }
                continue;
            }
            const rules = Array.isArray(ddEm.rules) ? ddEm.rules : [];
            let matched = null;
            for (const r of rules) {
                if (String(r.option).trim() === String(st.chosenText).trim()) { matched = r; break; }
            }
            if (matched) { total += Number(matched.score); }
            else if (hasDf) { total += effectiveDf; }
            else { hasUncoveredDd = true; break; }
        }
        if (hasUncoveredDd) total = 0;
        return clampScore(total, points, minScore, clampMax);
    }

    if (scoringMode === 'some_or_nothing') {
        const states = evalScdropdowns();
        const anyWrong = states.some(s => !s.isCorrect && !s.isEmpty);
        const correctCount = states.filter(s => s.isCorrect).length;
        return clampScore(anyWrong ? 0 : (per * correctCount), points, minScore, clampMax);
    }

    // proportional
    const states = evalScdropdowns();
    let total = 0;
    for (let i = 0; i < actual.length; i++) {
        const st = states[i];
        if (st.isCorrect) { total += per; continue; }
        if (st.isEmpty) continue;
        const ddEm = (em.scdropdowns && em.scdropdowns[i]) ? em.scdropdowns[i] : null;
        const ddDf = ddEm && ddEm.error_default !== null && ddEm.error_default !== undefined
            ? Number(ddEm.error_default) : null;
        const effectiveDf = (ddDf !== null) ? ddDf : hasQuestionDf ? questionDefaultFalse : 0;
        const rules = ddEm ? (Array.isArray(ddEm.rules) ? ddEm.rules : []) : [];
        let matched = null;
        for (const r of rules) {
            if (String(r.option).trim() === String(st.chosenText).trim()) { matched = r; break; }
        }
        if (matched) total += Number(matched.score);
        else total += effectiveDf;
    }
    return clampScore(total, points, minScore, clampMax);
}

/**
 * scoreMcdropdownQuestion — mcdropdown
 */
function scoreMcdropdownQuestion(questionData, selectedTextsByDropdown) {
    const controller = window.MKSQ_FRONTEND?.getQuestionController?.('mcdropdown');
    if (!controller) {
        throw new Error('mcdropdown frontend controller is not available.');
    }
    return controller.scoreQuestion(
        questionData,
        selectedTextsByDropdown,
        window.QUIZ_CONFIG || {},
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// Order — Kendall tau scoring
// ─────────────────────────────────────────────────────────────────────────────

/**
 * kendallTauScore(userOrder, n)
 * userOrder : tableau d'indices originaux dans l'ordre soumis par l'utilisateur
 * Retourne un ratio [0, 1] : 1 = ordre parfait, 0 = ordre inversé complet
 * Formule : 1 - (inversions / inversions_max)
 * inversions_max = n*(n-1)/2
 */
function kendallTauScore(userOrder, n) {
    if (n <= 1) return 1;
    const maxInversions = n * (n - 1) / 2;
    let inversions = 0;
    for (let i = 0; i < userOrder.length; i++) {
        for (let j = i + 1; j < userOrder.length; j++) {
            if (userOrder[i] > userOrder[j]) inversions++;
        }
    }
    return 1 - (inversions / maxInversions);
}

/**
 * scoreOrderQuestion
 * userOrder : tableau d'indices originaux dans l'ordre soumis (lus depuis le DOM)
 * Modes supportés : all_or_nothing, proportional (Kendall tau)
 */
function scoreOrderQuestion(questionData, userOrder) {
    const controller = window.MKSQ_FRONTEND?.getQuestionController?.('order');
    if (!controller) {
        throw new Error('order frontend controller is not available.');
    }
    return controller.scoreQuestion(
        questionData,
        userOrder,
        window.QUIZ_CONFIG || {},
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// Submitted / editable state
// ─────────────────────────────────────────────────────────────────────────────

function setQuestionSubmittedState(quiz, submitted) {
    if (!quiz) return;
    const locked = Boolean(submitted);
    quiz.dataset.submitted = locked ? 'true' : 'false';
    quiz.classList.toggle('mksq-submitted', locked);

    const validateBtn = quiz.querySelector('.mkq-validate-btn');
    if (validateBtn) {
        validateBtn.disabled = locked;
        validateBtn.setAttribute('aria-disabled', locked ? 'true' : 'false');
    }

    quiz.querySelectorAll('input[type="checkbox"], input[type="radio"], .mkq-blank-input, .mkq-matrix-checkbox')
        .forEach(control => { control.disabled = locked; });

    quiz.querySelectorAll('.mkq-custom-scdropdown, .mkq-custom-mcdropdown').forEach(dropdown => {
        // Correction dropdowns are explanatory controls and remain readable.
        if (dropdown.closest('.mkq-scdropdown-correction-wrapper, .mkq-mcdropdown-correction-wrapper, .mkq-blank-correction-wrapper')) return;
        dropdown.classList.toggle('mksq-control-locked', locked);
        dropdown.setAttribute('aria-disabled', locked ? 'true' : 'false');
        dropdown.querySelectorAll('button').forEach(button => {
            button.disabled = locked;
            button.style.pointerEvents = locked ? 'none' : '';
        });
        if (locked) {
            dropdown.querySelectorAll('.mkq-custom-scdropdown-options, .mkq-custom-mcdropdown-options')
                .forEach(panel => { panel.style.display = 'none'; });
        }
    });

    quiz.querySelectorAll('.mkq-order-item, .mkq-sentence-token, .mkq-sentence-pool-token, .mkq-mq-cat-item, .mkq-mq-pool-item')
        .forEach(item => {
            const permanentlyLocked = item.dataset.locked === 'true';
            item.draggable = !locked && !permanentlyLocked;
            item.setAttribute('aria-disabled', locked ? 'true' : 'false');
        });

    quiz.querySelectorAll('.mkq-mq-left-item, .mkq-mq-right-item, .mkq-mq-item')
        .forEach(item => {
            item.classList.toggle('mksq-control-locked', locked);
            item.setAttribute('aria-disabled', locked ? 'true' : 'false');
            if (locked) {
                if (!item.dataset.mksqPreviousTabindex) {
                    item.dataset.mksqPreviousTabindex = item.getAttribute('tabindex') ?? '';
                }
                item.setAttribute('tabindex', '-1');
            } else {
                const previous = item.dataset.mksqPreviousTabindex;
                if (previous === undefined || previous === '') item.removeAttribute('tabindex');
                else item.setAttribute('tabindex', previous);
                delete item.dataset.mksqPreviousTabindex;
            }
        });

    quiz.querySelectorAll('.mkq-lm-clear-btn, .mkq-mq-clear-btn, .mkq-fc-btn, .mkq-fc-flip-btn, .mkq-fc-nav button')
        .forEach(button => { button.disabled = locked; });

    quiz.querySelectorAll('.mkq-lm-question').forEach(question => {
        question.classList.toggle('mksq-control-locked', locked);
    });
}

// ─────────────────────────────────────────────────────────────────────────────
// Validation
// ─────────────────────────────────────────────────────────────────────────────

function validateQuestion(quizId) {
    const quiz = getQuizRootElement(quizId);
    if (!quiz || quiz.dataset.submitted === 'true') return;

    // Do not freeze a quiz when its correction payload cannot be read.
    if (!decryptAnswers(quiz.dataset.encrypted)) return;

    const quizType = quiz.dataset.quizType;
    const quizHandler = getQuestionHandlerType(quiz);
    const controller = window.MKSQ_FRONTEND?.getQuestionController?.(quizType);

    if (controller?.validate) {
        controller.validate(
            quiz,
            quizId,
            {
                convertLatexDelimiters,
                createBlanksCorrectionDropdown: createBlanksMathJaxScdropdown,
                decryptAnswers,
                displayScorePoints,
                globalConfig: window.QUIZ_CONFIG || {},
                shouldShowCorrections,
                translate: (key, fallback) => tForQuestion(quiz, key, fallback),
                typesetMath: (elements) => {
                    setTimeout(() => {
                        if (window.MathJax?.typesetPromise) {
                            MathJax.typesetPromise(elements).catch(() => {});
                        }
                    }, 150);
                },
            },
        );
    } else if (quizHandler === 'blanks') {
        validateBlanksQuestion(quiz, quizId);
    } else if (quizHandler === 'scdropdown') {
        validateScdropdownQuestion(quiz, quizId);
    } else if (quizHandler === 'mcdropdown') {
        validateMcdropdownQuestion(quiz, quizId);
    } else if (quizHandler === 'order') {
        validateOrder(quiz, quizId);
    } else if (quizHandler === 'linematch') {
        validateLinematch(quiz, quizId);
    } else if (quizHandler === 'match') {
        validateMatch(quiz, quizId);
    } else {
        throw new Error(`No frontend validator registered for ${quizType}.`);
    }

    setQuestionSubmittedState(quiz, true);
    saveAnswers(quizId);
}

/**
 * validateChoiceQuestion — mcquiz / scquiz
 */
function validateChoiceQuestion(quiz, quizId) {
    const quizType = quiz.dataset.quizType;
    const controller = window.MKSQ_FRONTEND?.getQuestionController?.(quizType);

    if (!controller?.validate) {
        throw new Error(`No choice controller registered for ${quizType}.`);
    }

    controller.validate(
        quiz,
        quizId,
        {
            decryptAnswers,
            displayScorePoints,
            globalConfig: window.QUIZ_CONFIG || {},
            shouldShowCorrections,
            translate: (key, fallback) => tForQuestion(quiz, key, fallback),
        },
    );
}

function validateBlanksQuestion(quiz, quizId) {
    const questions = quiz.querySelectorAll('.mkq-question[data-question-id]');
    let totalPoints = 0, earnedPoints = 0;
    const correctionData = decryptAnswers(quiz.dataset.encrypted);
    if (!correctionData) { alert(t("ui.error_downloading_corrections", "Error downloading corrections")); return; }
    const showCorrection = shouldShowCorrections(quiz);
    const droppedElements = [];

    questions.forEach((questionEl) => {
        const questionId = parseInt(questionEl.dataset.questionId, 10);
        const qData = correctionData.questions.find(q => q.number === questionId);
        if (!qData) return;
        totalPoints += Number(qData.points || 1);
        const blankInputs = questionEl.querySelectorAll('.mkq-blank-input');
        const userAnswers = [];
        blankInputs.forEach((input) => userAnswers.push(input.value));

        qData.quiz_compare_answers = correctionData.compare_answers || null;
        earnedPoints += scoreBlanksQuestion(qData, userAnswers);

        if (!showCorrection) return;
        blankInputs.forEach((input, blankIndex) => {
            const userAnswer = input.value;
            const blank = qData.blanks[blankIndex];
            if (!blank) return;
            const compareCfg = qData.compare_answers
                || correctionData.compare_answers
                || window.QUIZ_CONFIG.blanks?.compare_answers
                || {};
            const isCorrect = blank.answers.some(answer => compareAnswers(userAnswer, answer, compareCfg));
            const hasAlternativeAnswers = blank.answers.length > 1;
            let nextSibling = input.nextSibling;
            while (nextSibling?.classList?.contains('mkq-blank-correction-wrapper')
                || nextSibling?.classList?.contains('mksq-blank-correct-marker')) {
                const toRemove = nextSibling;
                nextSibling = nextSibling.nextSibling;
                toRemove.remove();
            }
            if (isCorrect) {
                input.classList.add('correct'); input.classList.remove('incorrect');
                if (hasAlternativeAnswers) {
                    input.classList.remove('mksq-single-answer-correct');
                    input.style.display = 'none';
                    const wrapper = document.createElement('span');
                    wrapper.className = 'mkq-blank-correction-wrapper mksq-blank-correct-wrapper';
                    wrapper.appendChild(createBlanksMathJaxScdropdown(
                        `mksq-fillblank-correct-${quizId}-q${questionId}-blank${blankIndex}`,
                        blank.answers,
                        userAnswer,
                        { showCorrectMarker: true, showMenu: true },
                    ));
                    input.after(wrapper);
                    droppedElements.push(wrapper);
                } else {
                    input.style.display = '';
                    input.classList.add('mksq-single-answer-correct');
                    input.setAttribute('aria-label', t('ui.correct_answer', 'Correct answer'));
                }
            } else {
                input.style.display = 'none'; input.classList.remove('correct', 'mksq-single-answer-correct'); input.classList.add('incorrect');
                const wrapper = document.createElement('span');
                wrapper.className = 'mkq-blank-correction-wrapper';
                const label = document.createElement('span');
                label.className = 'mkq-blank-wrong-label';
                const displayAnswer = userAnswer.trim();
                label.innerHTML = `<s>${displayAnswer || t("ui.empty_answer", "(empty)")}</s>`;
                wrapper.appendChild(label);
                const scdropdown = createBlanksMathJaxScdropdown(
                    `mkq-scdropdown-${quizId}-q${questionId}-blank${blankIndex}`,
                    blank.answers,
                    null,
                    { showCorrectMarker: false, showMenu: hasAlternativeAnswers },
                );
                wrapper.appendChild(scdropdown);
                input.after(wrapper);
                droppedElements.push(wrapper);
            }
        });
    });
    displayScorePoints(quizId, earnedPoints, totalPoints);
    if (droppedElements.length > 0) {
        setTimeout(() => { if (window.MathJax?.typesetPromise) MathJax.typesetPromise(droppedElements).catch(() => { }); }, 150);
    }
}

/**
 * validateScdropdownQuestion
 */
function validateScdropdownQuestion(quiz, quizId) {
    const questions = quiz.querySelectorAll('.mkq-question[data-question-id]');
    let totalPoints = 0, earnedPoints = 0;
    const correctionData = decryptAnswers(quiz.dataset.encrypted);
    if (!correctionData) { alert(t("ui.error_downloading_corrections", "Error downloading corrections")); return; }
    const showCorrection = shouldShowCorrections(quiz);

    questions.forEach((questionEl) => {
        const questionId = parseInt(questionEl.dataset.questionId, 10);
        const qData = correctionData.questions.find(q => q.number === questionId);
        if (!qData) return;
        totalPoints += Number(qData.points || 1);

        const scdropdownEls = Array.from(questionEl.querySelectorAll('.mkq-custom-scdropdown'));
        const ddDataList = Array.isArray(qData.scdropdowns) ? qData.scdropdowns : (qData.scdropdown ? [qData.scdropdown] : []);
        const count = Math.min(scdropdownEls.length, ddDataList.length);

        const selectedTexts = [];
        for (let i = 0; i < count; i++) {
            const ddEl = scdropdownEls[i];
            const rawValue = ddEl.dataset.selectedValue;
            if (rawValue === undefined || rawValue === null || rawValue === '') {
                selectedTexts.push(null);
            } else {
                const selectedOptEl = ddEl.querySelector(`.mkq-custom-scdropdown-option[data-value="${rawValue}"]`);
                const optText = selectedOptEl ? (selectedOptEl.dataset.optionText || selectedOptEl.textContent.trim()) : null;
                selectedTexts.push(optText);
            }
        }

        earnedPoints += scoreScdropdownQuestion(qData, selectedTexts);

        if (!showCorrection) return;

        for (let i = 0; i < count; i++) {
            const scdropdown = scdropdownEls[i];
            const ddData = ddDataList[i];
            const chosenText = selectedTexts[i];
            const isEmpty = (chosenText === null);
            const allOptions = ddData.options || [];
            const correctText = String(allOptions[ddData.correct_index] ?? '').trim();
            const isCorrect = !isEmpty && String(chosenText).trim() === correctText;

            const next = scdropdown.nextSibling;
            if (next && next.classList?.contains('mkq-scdropdown-correction-wrapper') && next.dataset?.forId === scdropdown.id) next.remove();

            if (isCorrect) {
                scdropdown.style.display = '';
                scdropdown.classList.remove('incorrect');
                scdropdown.classList.add('correct');
                const selectedButton = scdropdown.querySelector('.mkq-custom-scdropdown-btn');
                if (selectedButton) {
                    selectedButton.disabled = true;
                    selectedButton.style.pointerEvents = 'none';
                    selectedButton.style.cursor = 'default';
                }
                const selectedArrow = scdropdown.querySelector('.mkq-custom-scdropdown-arrow');
                if (selectedArrow) {
                    selectedArrow.textContent = '✓';
                    selectedArrow.classList.add('mksq-correct-marker');
                }
            } else {
                const wrongAnswerHTML = isEmpty ? t("ui.empty_answer", "(empty)") : convertLatexDelimiters(String(chosenText));
                scdropdown.style.display = 'none';
                const wrapper = document.createElement('span');
                wrapper.className = 'mkq-scdropdown-correction-wrapper';
                wrapper.dataset.forId = scdropdown.id;
                wrapper.style.cssText = 'display:inline-flex;align-items:center;gap:.5em;position:relative;';
                const wrongLabel = document.createElement('span');
                wrongLabel.className = 'mkq-blank-wrong-label'; wrongLabel.innerHTML = wrongAnswerHTML;
                wrapper.appendChild(wrongLabel);
                const correctScdropdown = document.createElement('div');
                correctScdropdown.className = 'mkq-custom-scdropdown correct';
                correctScdropdown.style.cssText = 'display:inline-block;pointer-events:none;';
                const correctBtn = document.createElement('button');
                correctBtn.type = 'button'; correctBtn.className = 'mkq-custom-scdropdown-btn correct'; correctBtn.style.cursor = 'default';
                const correctValueSpan = document.createElement('span');
                correctValueSpan.className = 'mkq-custom-scdropdown-value';
                correctValueSpan.innerHTML = convertLatexDelimiters(correctText);
                correctBtn.appendChild(correctValueSpan);
                correctScdropdown.appendChild(correctBtn); wrapper.appendChild(correctScdropdown);
                scdropdown.after(wrapper);
                setTimeout(() => { if (window.MathJax?.typesetPromise) MathJax.typesetPromise([wrapper]).catch(() => { }); }, 150);
            }
        }
    });
    displayScorePoints(quizId, earnedPoints, totalPoints);
}

/**
 * validateMcdropdownQuestion
 */
function validateMcdropdownQuestion(quiz, quizId) {
    const questions = quiz.querySelectorAll('.mkq-question[data-question-id]');
    let totalPoints = 0, earnedPoints = 0;
    const correctionData = decryptAnswers(quiz.dataset.encrypted);
    if (!correctionData) { alert(t("ui.error_downloading_corrections", "Error downloading corrections")); return; }
    const showCorrection = shouldShowCorrections(quiz);

    questions.forEach((questionEl) => {
        const questionId = parseInt(questionEl.dataset.questionId, 10);
        const qData = correctionData.questions.find(q => q.number === questionId);
        if (!qData) return;
        totalPoints += Number(qData.points || 1);

        const ddEls = Array.from(questionEl.querySelectorAll('.mkq-custom-mcdropdown'));
        const ddDataList = Array.isArray(qData.mcdropdowns) ? qData.mcdropdowns : [];
        const count = Math.min(ddEls.length, ddDataList.length);

        const selectedTextsByDropdown = [];
        for (let i = 0; i < count; i++) {
            const ddEl = ddEls[i];
            let selectedIndices = [];
            try { selectedIndices = JSON.parse(ddEl.dataset.selectedIndices || '[]'); } catch(e) {}
            const texts = selectedIndices.map(idx => {
                const optEl = ddEl.querySelector(`.mkq-custom-mcdropdown-option[data-value="${idx}"]`);
                return optEl ? (optEl.dataset.optionText || optEl.textContent.trim()) : null;
            }).filter(t => t !== null);
            selectedTextsByDropdown.push(texts);
        }

        earnedPoints += scoreMcdropdownQuestion(qData, selectedTextsByDropdown);

        if (!showCorrection) return;

        for (let i = 0; i < count; i++) {
            const ddEl = ddEls[i];
            const ddData = ddDataList[i];
            const selectedTexts = selectedTextsByDropdown[i];
            const opts = ddData.options || [];
            const correctIndices = ddData.correct_indices || [];
            const correctTexts = correctIndices.map(idx => String(opts[idx] ?? '').trim());
            const correctSet = new Set(correctTexts);

            const selSorted = [...selectedTexts].map(t => t.trim()).sort();
            const corSorted = [...correctTexts].sort();
            const isCorrect = arraysEqual(selSorted, corSorted) && selSorted.length > 0;

            const next = ddEl.nextSibling;
            if (next && next.classList?.contains('mkq-mcdropdown-correction-wrapper') && next.dataset?.forId === ddEl.id) next.remove();

            if (isCorrect) {
                ddEl.style.display = ''; ddEl.classList.remove('incorrect'); ddEl.classList.add('correct');
                ddEl.querySelectorAll('.mkq-custom-mcdropdown-btn').forEach(btn => { btn.onclick = null; btn.style.pointerEvents = 'none'; });
            } else {
                const wrongLabel = selectedTexts.length === 0
                    ? t("ui.empty_answer", "(empty)")
                    : selectedTexts.map(convertLatexDelimiters).join(', ');

                ddEl.style.display = 'none';

                const wrapper = document.createElement('span');
                wrapper.className = 'mkq-mcdropdown-correction-wrapper';
                wrapper.dataset.forId = ddEl.id;
                wrapper.style.cssText = 'display:inline-flex;align-items:center;gap:.5em;position:relative;';

                const wLabel = document.createElement('span');
                wLabel.className = 'mkq-blank-wrong-label';
                wLabel.innerHTML = `<s>${wrongLabel}</s>`;
                wrapper.appendChild(wLabel);

                const correctDd = document.createElement('div');
                correctDd.className = 'mkq-custom-mcdropdown correct';
                correctDd.style.cssText = 'display:inline-block;pointer-events:none;';
                const correctBtn = document.createElement('button');
                correctBtn.type = 'button'; correctBtn.className = 'mkq-custom-mcdropdown-btn correct'; correctBtn.style.cursor = 'default';
                const correctValueSpan = document.createElement('span');
                correctValueSpan.className = 'mkq-custom-mcdropdown-value';
                correctValueSpan.innerHTML = correctTexts.map(convertLatexDelimiters).join(', ') || '--';
                const arrow = document.createElement('span');
                arrow.className = 'mkq-custom-mcdropdown-arrow'; arrow.textContent = '✓'; arrow.style.color = 'green';
                correctBtn.appendChild(correctValueSpan); correctBtn.appendChild(arrow);
                correctDd.appendChild(correctBtn);
                wrapper.appendChild(correctDd);

                ddEl.after(wrapper);
                setTimeout(() => { if (window.MathJax?.typesetPromise) MathJax.typesetPromise([wrapper]).catch(() => {}); }, 150);
            }
        }
    });
    displayScorePoints(quizId, earnedPoints, totalPoints);
}

// ─────────────────────────────────────────────────────────────────────────────
// Order — validation
// ─────────────────────────────────────────────────────────────────────────────

function validateOrder(quiz, quizId) {
    const questions = quiz.querySelectorAll('.mkq-order-question[data-question-id]');
    let totalPoints = 0, earnedPoints = 0;
    const correctionData = decryptAnswers(quiz.dataset.encrypted);
    if (!correctionData) { alert(t("ui.error_downloading_corrections", "Error downloading corrections")); return; }
    const showCorrection = shouldShowCorrections(quiz);

    questions.forEach(questionEl => {
        const questionId = parseInt(questionEl.dataset.questionId, 10);
        const qData = correctionData.questions.find(q => q.number === questionId);
        if (!qData) return;
        totalPoints += Number(qData.points || 1);

        // Dispatch by order_mode
        if (qData.order_mode === 'columns') {
            earnedPoints += validateOrderColumnsQuestion(questionEl, qData, showCorrection);
            return;
        }
        if (qData.order_mode === 'sentence') {
            earnedPoints += validateOrderSentenceQuestion(questionEl, qData, showCorrection);
            return;
        }

        // mode: vertical (default)
        const container = questionEl.querySelector('.mkq-order-items');
        if (!container) return;

        const userOrder = Array.from(container.querySelectorAll('.mkq-order-item'))
            .map(el => parseInt(el.dataset.originalIndex, 10));

        const score = scoreOrderQuestion(qData, userOrder);
        earnedPoints += score;

        if (showCorrection) {
            const n = (qData.items || []).length;
            container.querySelectorAll('.mkq-order-item').forEach((item, pos) => {
                item.classList.remove('correct', 'incorrect');
                const originalIdx = parseInt(item.dataset.originalIndex, 10);
                const isInPlace = (originalIdx === pos);
                item.classList.add(isInPlace ? 'correct' : 'incorrect');

                let badge = item.querySelector('.mkq-order-position-badge');
                if (!badge) {
                    badge = document.createElement('span');
                    badge.className = 'mkq-order-position-badge';
                    item.appendChild(badge);
                }
                badge.className = `mkq-order-position-badge${isInPlace ? '' : ' mkq-order-position-badge-with-error'}`;
                badge.textContent = isInPlace ? '✓' : `→ pos. ${originalIdx + 1}`;
                badge.style.color = 'var(--mkq-success)';
            });
        }
    });

    displayScorePoints(quizId, earnedPoints, totalPoints);
}

// ─────────────────────────────────────────────────────────────────────────────
// Order mode: columns — validation & scoring
// ─────────────────────────────────────────────────────────────────────────────

/**
 * validateOrderColumnsQuestion
 * Returns the earned points for this question.
 * qData.categories = [{label, items: [{text, pre_placed, locked}]}]
 * qData.distractors = [text, ...]
 */
function validateOrderColumnsQuestion(questionEl, qData, showCorrection) {
    const points = Number(qData.points || 1);
    const mode = qData.scoring_mode || 'proportional';
    const distractorScoring = qData.distractor_scoring
        && typeof qData.distractor_scoring === 'object'
        ? qData.distractor_scoring
        : {};
    const distractorCorrectScore = Number(distractorScoring.correct || 0);
    const distractorIncorrectScore = Number(
        distractorScoring.incorrect ?? qData.distractor_penalty ?? 0
    );
    const minScore = (qData.min_score !== undefined && qData.min_score !== null)
        ? Number(qData.min_score) : 0;

    const categories = Array.isArray(qData.categories) ? qData.categories : [];
    const distractorTexts = new Set((qData.distractors || []).map(d => String(d).trim()));

    // Build expected mapping: itemText → catIdx
    const expectedCatByText = {};
    categories.forEach((cat, catIdx) => {
        (cat.items || []).forEach(item => {
            if (!item.locked) {
                expectedCatByText[String(item.text).trim()] = catIdx;
            }
        });
    });

    const totalScorable = Object.keys(expectedCatByText).length || 1;

    // Read current state from DOM
    let correctCount = 0;
    let wrongCount = 0;
    let distractorPlacedCount = 0;

    // Check each column
    const columnEls = questionEl.querySelectorAll('.mkq-order-column');
    columnEls.forEach((colEl, catIdx) => {
        const itemEls = colEl.querySelectorAll('.mkq-order-col-item:not([data-locked="true"]),.mkq-order-pool-item');
        // Actually, items dropped INTO columns are .mkq-order-col-item
        const placedItems = Array.from(colEl.querySelectorAll('.mkq-order-column-items .mkq-order-item:not([data-locked="true"])'));
        placedItems.forEach(itemEl => {
            const text = String(itemEl.dataset.itemText || '').trim();
            if (distractorTexts.has(text)) {
                distractorPlacedCount++;
                if (showCorrection) {
                    itemEl.classList.remove(
                        'correct',
                        'incorrect',
                        'mksq-columns-distractor-unmoved',
                        'mksq-columns-distractor-moved'
                    );
                    itemEl.classList.add('incorrect', 'mksq-columns-distractor-moved');
                    _addOrderBadge(itemEl, '✗', 'var(--mkq-error)');
                }
                return;
            }
            const expectedCat = expectedCatByText[text];
            if (expectedCat === undefined) return; // unknown item
            const isCorrect = expectedCat === catIdx;
            if (isCorrect) correctCount++;
            else wrongCount++;
            if (showCorrection) {
                itemEl.classList.remove('correct', 'incorrect');
                itemEl.classList.add(isCorrect ? 'correct' : 'incorrect');
                _addOrderBadge(
                    itemEl,
                    isCorrect ? '✓' : `→ ${categories[expectedCat]?.label || '?'}`,
                    'var(--mkq-success)',
                    { showErrorMarker: !isCorrect },
                );
            }
        });
    });

    // Show correction for items still in pool (not placed)
    if (showCorrection) {
        const poolItems = questionEl.querySelectorAll('.mkq-order-pool-items .mkq-order-item');
        poolItems.forEach(itemEl => {
            itemEl.classList.remove(
                'correct',
                'incorrect',
                'mksq-columns-distractor-unmoved',
                'mksq-columns-distractor-moved'
            );
            const text = String(itemEl.dataset.itemText || '').trim();
            if (distractorTexts.has(text)) {
                itemEl.classList.add('correct', 'mksq-columns-distractor-unmoved');
                _addOrderBadge(itemEl, '✓', 'var(--mkq-success)');
            } else if (expectedCatByText[text] !== undefined) {
                itemEl.classList.add('incorrect');
                _addOrderBadge(
                    itemEl,
                    `→ ${categories[expectedCatByText[text]]?.label || '?'}`,
                    'var(--mkq-success)',
                    { showErrorMarker: true },
                );
            }
        });
    }

    const distractorCorrectCount = Math.max(
        0,
        distractorTexts.size - distractorPlacedCount
    );
    return scoreOrderColumnsQuestion({
        points, mode, totalScorable, correctCount, wrongCount,
        distractorPlacedCount, distractorCorrectCount,
        distractorIncorrectCount: distractorPlacedCount,
        distractorCorrectScore, distractorIncorrectScore, minScore
    });
}

function _addOrderBadge(itemEl, text, color, { showErrorMarker = false } = {}) {
    let badge = itemEl.querySelector('.mkq-order-position-badge');
    if (!badge) {
        badge = document.createElement('span');
        itemEl.appendChild(badge);
    }
    badge.className = `mkq-order-position-badge${showErrorMarker ? ' mkq-order-position-badge-with-error' : ''}`;
    badge.textContent = text;
    badge.style.color = color;
}

function scoreOrderColumnsQuestion({ points, mode, totalScorable, correctCount, wrongCount,
    distractorPlacedCount, distractorCorrectCount = 0,
    distractorIncorrectCount = distractorPlacedCount,
    distractorCorrectScore = 0, distractorIncorrectScore = 0, minScore }) {

    const correctDistractorValue = Number(distractorCorrectScore || 0);
    const incorrectDistractorValue = Number(distractorIncorrectScore || 0);
    let base = 0;

    if (mode === 'all_or_nothing') {
        base = (correctCount === totalScorable && wrongCount === 0 && distractorPlacedCount === 0)
            ? points : 0;
    } else if (mode === 'some_or_nothing') {
        // points if all placed items are correct, 0 if any wrong
        base = (wrongCount === 0 && distractorPlacedCount === 0)
            ? points * (correctCount / totalScorable)
            : 0;
    } else {
        // proportional: blocs_corrects / total, no penalty for wrong placement
        base = points * (correctCount / totalScorable);
    }

    base += correctDistractorValue * Number(distractorCorrectCount || 0);
    base += incorrectDistractorValue * Number(distractorIncorrectCount || 0);

    // Clamp to [minScore, points]
    base = Math.min(base, points);
    base = Math.max(base, minScore);
    return base;
}

// ─────────────────────────────────────────────────────────────────────────────
// Order mode: sentence — validation & scoring
// ─────────────────────────────────────────────────────────────────────────────

/**
 * validateOrderSentenceQuestion
 * Returns the earned points for this question.
 *
 * qData.sentences = [{
 *   answers: [{
 *     tokens: ['Le', 'chat', ...],          // scoreable (non-locked)
 *     all_tokens: [...],                    // including locked
 *     locked_tokens: [...],
 *     distractors: [...],
 *     score_override: null | float
 *   }]
 * }]
 */
function validateOrderSentenceQuestion(questionEl, qData, showCorrection) {
    const points = Number(qData.points || 1);
    const mode = qData.scoring_mode || 'all_or_nothing';
    const distractorPenalty = Number(qData.distractor_penalty || 0);
    const minScore = (qData.min_score !== undefined && qData.min_score !== null)
        ? Number(qData.min_score) : 0;

    const sentenceEls = questionEl.querySelectorAll('.mkq-sentence-wrapper');
    const sentenceData = Array.isArray(qData.sentences) ? qData.sentences : [];
    const totalSentences = Math.max(sentenceEls.length, sentenceData.length) || 1;

    let totalScore = 0;

    sentenceEls.forEach((sentEl, sentIdx) => {
        const sData = sentenceData[sentIdx];
        if (!sData) return;

        const sentScore = _scoreSingleSentence(sentEl, sData, points / totalSentences,
            mode, distractorPenalty, minScore, showCorrection);
        totalScore += sentScore;
    });

    return Math.max(Math.min(totalScore, points), minScore);
}

function _scoreSingleSentence(sentEl, sData, maxPts, mode, distractorPenalty, minScore, showCorrection) {
    const zoneEl = sentEl.querySelector('.mkq-sentence-zone');
    if (!zoneEl) return 0;

    // Read tokens currently in zone (non-locked, non-slot)
    const placedEls = Array.from(zoneEl.querySelectorAll('.mkq-sentence-token:not([data-locked="true"])'));
    const placedTexts = placedEls.map(el => String(el.dataset.tokenText || '').trim());

    // Distractors in zone
    const placedDistractors = placedEls.filter(el => el.dataset.isDistractor === 'true').length;

    const answers = Array.isArray(sData.answers) ? sData.answers : [];
    if (!answers.length) return 0;

    // Find best matching answer
    let bestScore = -Infinity;
    let bestMatchIdx = -1;

    answers.forEach((ans, idx) => {
        const refTokens = Array.isArray(ans.tokens) ? ans.tokens : [];
        let score;

        if (ans.score_override !== null && ans.score_override !== undefined) {
            // Direct match check
            const isExact = _arraysEqual(placedTexts, refTokens);
            if (isExact) {
                score = Number(ans.score_override);
            } else {
                score = -Infinity; // this override only applies for exact match
            }
        } else {
            score = _computeSentenceScore(placedTexts, refTokens, maxPts, mode, distractorPenalty, placedDistractors);
        }

        if (score > bestScore) {
            bestScore = score;
            bestMatchIdx = idx;
        }
    });

    // If no exact override matched, try scoring against reference answer
    if (bestScore === -Infinity) {
        const refTokens = Array.isArray(answers[0].tokens) ? answers[0].tokens : [];
        bestScore = _computeSentenceScore(placedTexts, refTokens, maxPts, mode, distractorPenalty, placedDistractors);
    }

    const finalScore = Math.max(Math.min(bestScore, maxPts), minScore);

    if (showCorrection) {
        _showSentenceCorrection(sentEl, answers[0], finalScore, maxPts, placedTexts);
    }

    return finalScore;
}

function _computeSentenceScore(placedTexts, refTokens, maxPts, mode, distractorPenalty, distractorCount) {
    const n = refTokens.length || 1;

    if (mode === 'all_or_nothing') {
        const exact = _arraysEqual(placedTexts, refTokens) && distractorCount === 0;
        return exact ? maxPts : 0;
    }

    if (mode === 'some_or_nothing') {
        // Points if all placed non-distractor tokens are in correct positions, 0 if any wrong
        const nonDistractorPlaced = placedTexts.filter((t, i) => t === refTokens[i]);
        const hasWrong = placedTexts.some((t, i) => t !== refTokens[i] && refTokens.includes(t) === false);
        if (distractorCount > 0) return 0;
        const correctCount = nonDistractorPlaced.length;
        const wrongCount = placedTexts.length - correctCount - distractorCount;
        return wrongCount > 0 ? 0 : maxPts * (correctCount / n);
    }

    // proportional — kendall tau on placed tokens
    const score = maxPts * _kendallTauSentence(placedTexts, refTokens);
    const penalty = distractorPenalty * distractorCount;
    return score + penalty;
}

function _kendallTauSentence(placedTexts, refTokens) {
    if (!refTokens.length) return 0;
    // Map each placed token to its position in reference
    const refPos = {};
    refTokens.forEach((t, i) => { if (!(t in refPos)) refPos[t] = i; });

    const positions = placedTexts
        .filter(t => t in refPos)
        .map(t => refPos[t]);

    if (positions.length === 0) return 0;

    // Kendall tau on positions
    const n = positions.length;
    const maxInv = n * (n - 1) / 2;
    if (maxInv === 0) return positions.length / refTokens.length;

    let inversions = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (positions[i] > positions[j]) inversions++;
        }
    }
    const orderScore = 1 - inversions / maxInv;
    // Also weight by coverage
    const coverage = positions.length / refTokens.length;
    return orderScore * coverage;
}

function _showSentenceCorrection(sentEl, refAnswer, score, maxPts, placedTexts) {
    const zoneEl = sentEl.querySelector('.mkq-sentence-zone');
    if (!zoneEl) return;
    const refTokens = Array.isArray(refAnswer.tokens) ? refAnswer.tokens : [];
    const isCorrect = _arraysEqual(placedTexts, refTokens);

    // Mark each placed token
    const placedEls = zoneEl.querySelectorAll('.mkq-sentence-token:not([data-locked="true"])');
    placedEls.forEach((el, pos) => {
        el.classList.remove('correct', 'incorrect');
        const text = String(el.dataset.tokenText || '').trim();
        if (el.dataset.isDistractor === 'true') {
            el.classList.add('incorrect');
            _addOrderBadge(el, '✗', 'var(--mkq-error)');
        } else if (text === refTokens[pos]) {
            el.classList.add('correct');
            _addOrderBadge(el, '✓', 'var(--mkq-success)');
        } else {
            el.classList.add('incorrect');
            const correctPos = refTokens.indexOf(text);
            _addOrderBadge(
                el,
                correctPos >= 0 ? `→ pos.${correctPos + 1}` : '✗',
                correctPos >= 0 ? 'var(--mkq-success)' : 'var(--mkq-error)',
                { showErrorMarker: correctPos >= 0 },
            );
        }
    });

    // Mark items still in pool
    const poolEls = sentEl.querySelectorAll('.mkq-sentence-pool-items .mkq-sentence-pool-token');
    poolEls.forEach(el => {
        el.classList.remove('correct', 'incorrect');
        const text = String(el.dataset.tokenText || '').trim();
        if (refTokens.includes(text)) {
            el.classList.add('incorrect');
        }
    });
}

function _arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
    return true;
}

// ─────────────────────────────────────────────────────────────────────────────
// Order mode: sentence — Drag & Drop (desktop + touch)
// ─────────────────────────────────────────────────────────────────────────────

function _clearSentenceCorrectionVisuals(source) {
    const wrapper = source?.closest?.('.mkq-sentence-wrapper');
    if (!wrapper) return;

    wrapper.querySelectorAll('.mkq-sentence-token, .mkq-sentence-pool-token').forEach(token => {
        token.classList.remove('correct', 'incorrect', 'alternative');
    });
    wrapper.querySelectorAll('.mkq-order-position-badge').forEach(badge => badge.remove());
}

(function initOrderSentenceDragDrop() {

    let dragSrc      = null;
    let touchSrc     = null;
    let touchClone   = null;
    let touchOffsetX = 0;
    let touchOffsetY = 0;
    let placeholder  = null;
    let lastTarget   = null;

    function createPlaceholder(ref) {
        const ph = document.createElement('div');
        ph.className = 'mkq-sentence-placeholder';
        ph.style.width  = ref.offsetWidth  + 'px';
        ph.style.height = ref.offsetHeight + 'px';
        ph.style.transition = 'all 0.12s ease';
        return ph;
    }

    function removePlaceholder() {
        if (placeholder && placeholder.parentNode) placeholder.parentNode.removeChild(placeholder);
        placeholder = null;
        lastTarget  = null;
    }

    function sameQuestion(src, container) {
        const a = src.closest('.mkq-order-sentence-question');
        const b = container.closest('.mkq-order-sentence-question');
        return a && b && a === b;
    }

    // Find the best horizontal insertion point in a flex-wrap container
    function findBestHorizTarget(clientX, clientY, container, src) {
        const items = Array.from(container.querySelectorAll(
            '.mkq-sentence-token:not([data-locked="true"]), .mkq-sentence-slot'
        )).filter(el => el !== src && el !== placeholder);
        if (!items.length) return null;

        let best = null, bestDist = Infinity;
        items.forEach(item => {
            const rect = item.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            const dist = Math.hypot(clientX - cx, clientY - cy);
            if (dist < bestDist) { bestDist = dist; best = item; }
        });
        return best;
    }

    function insertPlaceholderHoriz(clientX, clientY, container, src) {
        if (!placeholder || !sameQuestion(src, container)) return;
        const target = findBestHorizTarget(clientX, clientY, container, src);
        if (!target) {
            if (lastTarget !== container) { lastTarget = container; container.appendChild(placeholder); }
            return;
        }
        const rect = target.getBoundingClientRect();
        const pos = clientX < rect.left + rect.width / 2 ? 'before' : 'after';
        const key = (target.dataset.tokenText || target.dataset.slotIdx || '') + '_' + pos;
        if (lastTarget === key) return;
        lastTarget = key;
        if (pos === 'before') target.parentNode.insertBefore(placeholder, target);
        else target.parentNode.insertBefore(placeholder, target.nextSibling);
    }

    // For pool (vertical or wrap), find best vertical target
    function insertPlaceholderPool(clientY, container, src) {
        if (!placeholder || !sameQuestion(src, container)) return;
        const items = Array.from(container.querySelectorAll('.mkq-sentence-token'))
            .filter(el => el !== src && el !== placeholder);
        if (!items.length) {
            if (lastTarget !== container) { lastTarget = container; container.appendChild(placeholder); }
            return;
        }
        let best = null, bestDist = Infinity;
        items.forEach(item => {
            const rect = item.getBoundingClientRect();
            const dist = Math.abs(clientY - (rect.top + rect.height / 2));
            if (dist < bestDist) { bestDist = dist; best = item; }
        });
        if (!best) return;
        const rect = best.getBoundingClientRect();
        const pos = clientY < rect.top + rect.height / 2 ? 'before' : 'after';
        const key = (best.dataset.tokenText || '') + '_pool_' + pos;
        if (lastTarget === key) return;
        lastTarget = key;
        if (pos === 'before') best.parentNode.insertBefore(placeholder, best);
        else best.parentNode.insertBefore(placeholder, best.nextSibling);
    }

    // ── Desktop ──────────────────────────────────────────────────────────────

    function onDragStart(e) {
        dragSrc = e.currentTarget;
        if (dragSrc.dataset.locked) { e.preventDefault(); return; }
        _clearSentenceCorrectionVisuals(dragSrc);
        dragSrc.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', '');
        placeholder = createPlaceholder(dragSrc);
        dragSrc.parentNode.insertBefore(placeholder, dragSrc.nextSibling);
        lastTarget = null;
    }

    function onDragEnd() {
        if (dragSrc) dragSrc.classList.remove('dragging');
        removePlaceholder();
        dragSrc = null;
    }

    function onDragOverZone(e) {
        e.preventDefault();
        if (!dragSrc) return;
        insertPlaceholderHoriz(e.clientX, e.clientY, e.currentTarget, dragSrc);
    }

    function onDragOverPool(e) {
        e.preventDefault();
        if (!dragSrc) return;
        insertPlaceholderPool(e.clientY, e.currentTarget, dragSrc);
    }

    function onDrop(e) {
        e.preventDefault();
        if (!dragSrc || !placeholder || !placeholder.parentNode) { removePlaceholder(); return; }
        if (!sameQuestion(dragSrc, placeholder.parentNode)) { removePlaceholder(); return; }
        placeholder.parentNode.insertBefore(dragSrc, placeholder);
        removePlaceholder();
    }

    // ── Touch ─────────────────────────────────────────────────────────────────

    function onTouchStart(e) {
        if (e.touches.length !== 1) return;
        const src = e.currentTarget;
        if (src.dataset.locked) return;
        _clearSentenceCorrectionVisuals(src);
        touchSrc = src;
        touchSrc.classList.add('dragging');
        const touch = e.touches[0];
        const rect = touchSrc.getBoundingClientRect();
        touchOffsetX = touch.clientX - rect.left;
        touchOffsetY = touch.clientY - rect.top;
        touchClone = touchSrc.cloneNode(true);
        touchClone.className = touchSrc.className + ' mkq-order-ghost';
        touchClone.style.cssText = [
            'position:fixed', 'pointer-events:none', 'opacity:0.85', 'z-index:9999',
            `width:${rect.width}px`, `height:${rect.height}px`,
            `left:${touch.clientX - touchOffsetX}px`,
            `top:${touch.clientY - touchOffsetY}px`,
        ].join(';');
        document.body.appendChild(touchClone);
        placeholder = createPlaceholder(touchSrc);
        touchSrc.parentNode.insertBefore(placeholder, touchSrc.nextSibling);
        lastTarget = null;
        e.preventDefault();
    }

    function onTouchMove(e) {
        if (!touchSrc || !touchClone || e.touches.length !== 1) return;
        e.preventDefault();
        const touch = e.touches[0];
        touchClone.style.left = `${touch.clientX - touchOffsetX}px`;
        touchClone.style.top  = `${touch.clientY - touchOffsetY}px`;
        touchClone.style.display = 'none';
        const elBelow = document.elementFromPoint(touch.clientX, touch.clientY);
        touchClone.style.display = '';
        if (!elBelow) return;
        const zone = elBelow.closest('.mkq-sentence-zone');
        const pool = elBelow.closest('.mkq-sentence-pool-items');
        if (zone) insertPlaceholderHoriz(touch.clientX, touch.clientY, zone, touchSrc);
        else if (pool) insertPlaceholderPool(touch.clientY, pool, touchSrc);
    }

    function onTouchEnd() {
        if (!touchSrc) return;
        touchSrc.classList.remove('dragging');
        if (touchClone) { touchClone.remove(); touchClone = null; }
        if (placeholder && placeholder.parentNode) {
            placeholder.parentNode.insertBefore(touchSrc, placeholder);
        }
        removePlaceholder();
        touchSrc = null;
    }

    // ── Attach events ─────────────────────────────────────────────────────────

    function attachSentenceToken(token) {
        if (token.dataset.locked) return;
        token.setAttribute('draggable', 'true');
        token.addEventListener('dragstart',  onDragStart);
        token.addEventListener('dragend',    onDragEnd);
        token.addEventListener('touchstart', onTouchStart, { passive: false });
        token.addEventListener('touchmove',  onTouchMove,  { passive: false });
        token.addEventListener('touchend',   onTouchEnd);
    }

    function attachZone(zone) {
        zone.addEventListener('dragover', onDragOverZone);
        zone.addEventListener('drop',     onDrop);
    }

    function attachPool(pool) {
        pool.addEventListener('dragover', onDragOverPool);
        pool.addEventListener('drop',     onDrop);
    }

    function initAll() {
        document.querySelectorAll('.mkq-sentence-token:not([data-locked="true"]), .mkq-sentence-pool-token')
            .forEach(attachSentenceToken);
        document.querySelectorAll('.mkq-sentence-zone').forEach(attachZone);
        document.querySelectorAll('.mkq-sentence-pool-items').forEach(attachPool);
    }

    const observer = new MutationObserver(mutations => {
        mutations.forEach(m => m.addedNodes.forEach(node => {
            if (node.nodeType !== 1) return;
            const cls = node.classList;
            if (cls?.contains('mkq-sentence-token') || cls?.contains('mkq-sentence-pool-token'))
                attachSentenceToken(node);
            else if (cls?.contains('mkq-sentence-zone')) attachZone(node);
            else if (cls?.contains('mkq-sentence-pool-items')) attachPool(node);
            else if (node.querySelectorAll) {
                node.querySelectorAll('.mkq-sentence-token:not([data-locked="true"]), .mkq-sentence-pool-token')
                    .forEach(attachSentenceToken);
                node.querySelectorAll('.mkq-sentence-zone').forEach(attachZone);
                node.querySelectorAll('.mkq-sentence-pool-items').forEach(attachPool);
            }
        }));
    });

    window._initOrderSentenceDragDrop = function() {
        initAll();
        observer.observe(document.body, { childList: true, subtree: true });
    };

})();

// ─────────────────────────────────────────────────────────────────────────────
// Scdropdown interactions
// ─────────────────────────────────────────────────────────────────────────────

window.toggleScdropdownQuestion = function(button) {
    const scdropdown = button.closest('.mkq-custom-scdropdown');
    const options = scdropdown.querySelector('.mkq-custom-scdropdown-options');
    const isOpen = options.style.display === 'block';
    document.querySelectorAll('.mkq-custom-scdropdown-options').forEach(opt => opt.style.display = 'none');
    options.style.display = isOpen ? 'none' : 'block';
};

window.selectScdropdownQuestionOption = function(optionElement) {
    const scdropdown = optionElement.closest('.mkq-custom-scdropdown');
    const button = scdropdown.querySelector('.mkq-custom-scdropdown-btn');
    const valueSpan = button.querySelector('.mkq-custom-scdropdown-value');
    const optionsDiv = scdropdown.querySelector('.mkq-custom-scdropdown-options');
    valueSpan.innerHTML = optionElement.innerHTML;
    scdropdown.querySelectorAll('.mkq-custom-scdropdown-option').forEach(opt => opt.classList.remove('selected'));
    optionElement.classList.add('selected');
    scdropdown.dataset.selectedValue = optionElement.dataset.value;
    optionsDiv.style.display = 'none';
    if (window.MathJax?.typesetPromise) MathJax.typesetPromise([valueSpan]).catch(() => {});
};

// ─────────────────────────────────────────────────────────────────────────────
// Mcdropdown interactions
// ─────────────────────────────────────────────────────────────────────────────

window.toggleMcdropdownPanel = function(button) {
    const dd = button.closest('.mkq-custom-mcdropdown');
    const panel = dd.querySelector('.mkq-custom-mcdropdown-options');
    const isOpen = panel.style.display === 'block';
    document.querySelectorAll('.mkq-custom-mcdropdown-options').forEach(p => p.style.display = 'none');
    panel.style.display = isOpen ? 'none' : 'block';
};

window.toggleMcdropdownOption = function(optEl) {
    const dd = optEl.closest('.mkq-custom-mcdropdown');
    const btn = dd.querySelector('.mkq-custom-mcdropdown-btn');
    const valueSpan = btn.querySelector('.mkq-custom-mcdropdown-value');

    optEl.classList.toggle('selected');

    const allOpts = Array.from(dd.querySelectorAll('.mkq-custom-mcdropdown-option'));
    const selectedIndices = allOpts
        .filter(o => o.classList.contains('selected'))
        .map(o => parseInt(o.dataset.value, 10));

    dd.dataset.selectedIndices = JSON.stringify(selectedIndices);

    if (selectedIndices.length === 0) {
        valueSpan.textContent = '--';
    } else {
        const selectedTexts = selectedIndices.map(idx => {
            const o = dd.querySelector(`.mkq-custom-mcdropdown-option[data-value="${idx}"]`);
            return o ? (o.dataset.optionText || o.textContent.trim()) : '';
        }).filter(Boolean);
        valueSpan.innerHTML = selectedTexts.map(convertLatexDelimiters).join(', ');
    }

    if (window.MathJax?.typesetPromise) MathJax.typesetPromise([valueSpan]).catch(() => {});
};

// Fermer les panneaux au clic extérieur
document.addEventListener('click', (e) => {
    if (!e.target.closest('.mkq-custom-scdropdown'))
        document.querySelectorAll('.mkq-custom-scdropdown-options').forEach(opt => opt.style.display = 'none');
    if (!e.target.closest('.mkq-custom-mcdropdown'))
        document.querySelectorAll('.mkq-custom-mcdropdown-options').forEach(p => p.style.display = 'none');
});

// ─────────────────────────────────────────────────────────────────────────────
// Order mode: columns — Drag & Drop pool ↔ columns (desktop + touch)
// ─────────────────────────────────────────────────────────────────────────────

(function initOrderColumnsDragDrop() {

    let dragSrc      = null;
    let touchSrc     = null;
    let touchClone   = null;
    let touchOffsetX = 0;
    let touchOffsetY = 0;
    let placeholder  = null;
    let lastTarget   = null;

    // ── Helpers ──────────────────────────────────────────────────────────────

    function createPlaceholder(ref) {
        const ph = document.createElement('div');
        ph.className = 'mkq-order-placeholder mkq-order-col-placeholder';
        ph.style.height = ref.offsetHeight + 'px';
        ph.style.transition = 'height 0.15s ease-in-out';
        return ph;
    }

    function removePlaceholder() {
        if (placeholder && placeholder.parentNode) placeholder.parentNode.removeChild(placeholder);
        placeholder = null;
        lastTarget = null;
    }

    function sameQuestion(src, container) {
        const a = src.closest('.mkdocs-superquiz');
        const b = container.closest('.mkdocs-superquiz');
        return a && b && a === b;
    }

    function findBestTarget(clientY, container, src) {
        const items = Array.from(container.querySelectorAll('.mkq-order-item'))
            .filter(el => el !== src && el !== placeholder && !el.dataset.locked);
        if (!items.length) return null;
        let best = null, bestDist = Infinity;
        items.forEach(item => {
            const rect = item.getBoundingClientRect();
            const dist = Math.abs(clientY - (rect.top + rect.height / 2));
            if (dist < bestDist) { bestDist = dist; best = item; }
        });
        return best;
    }

    function insertPlaceholderAt(clientY, container, src) {
        if (!placeholder || !sameQuestion(src, container)) return;
        const target = findBestTarget(clientY, container, src);
        if (!target) {
            if (lastTarget !== container) { lastTarget = container; container.appendChild(placeholder); }
            return;
        }
        const rect = target.getBoundingClientRect();
        const pos = clientY < rect.top + rect.height / 2 ? 'before' : 'after';
        const key = (target.dataset.itemText || target.dataset.globalIdx || '') + '_' + pos;
        if (lastTarget === key) return;
        lastTarget = key;
        if (pos === 'before') target.parentNode.insertBefore(placeholder, target);
        else target.parentNode.insertBefore(placeholder, target.nextSibling);
    }

    // ── Desktop ──────────────────────────────────────────────────────────────

    function onDragStart(e) {
        dragSrc = e.currentTarget;
        dragSrc.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', '');
        placeholder = createPlaceholder(dragSrc);
        dragSrc.parentNode.insertBefore(placeholder, dragSrc.nextSibling);
        lastTarget = null;
    }

    function onDragEnd() {
        if (dragSrc) dragSrc.classList.remove('dragging');
        removePlaceholder();
        dragSrc = null;
    }

    function onDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        if (!dragSrc) return;
        const container = e.currentTarget.closest('.mkq-order-column-items, .mkq-order-pool-items');
        if (container) insertPlaceholderAt(e.clientY, container, dragSrc);
    }

    function onDrop(e) {
        e.preventDefault();
        if (!dragSrc || !placeholder || !placeholder.parentNode) { removePlaceholder(); return; }
        if (!sameQuestion(dragSrc, placeholder.parentNode)) { removePlaceholder(); return; }
        placeholder.parentNode.insertBefore(dragSrc, placeholder);
        removePlaceholder();
    }

    function onContainerDragOver(e) {
        e.preventDefault();
        if (!dragSrc || !placeholder) return;
        insertPlaceholderAt(e.clientY, e.currentTarget, dragSrc);
    }

    // ── Touch ─────────────────────────────────────────────────────────────────

    function onTouchStart(e) {
        if (e.touches.length !== 1) return;
        touchSrc = e.currentTarget;
        if (touchSrc.dataset.locked) return;
        touchSrc.classList.add('dragging');
        const touch = e.touches[0];
        const rect = touchSrc.getBoundingClientRect();
        touchOffsetX = touch.clientX - rect.left;
        touchOffsetY = touch.clientY - rect.top;
        touchClone = touchSrc.cloneNode(true);
        touchClone.className = 'mkq-order-item mkq-order-ghost';
        touchClone.style.cssText = [
            'position:fixed', 'pointer-events:none', 'opacity:0.85', 'z-index:9999',
            `width:${rect.width}px`,
            `left:${touch.clientX - touchOffsetX}px`,
            `top:${touch.clientY - touchOffsetY}px`,
        ].join(';');
        document.body.appendChild(touchClone);
        placeholder = createPlaceholder(touchSrc);
        touchSrc.parentNode.insertBefore(placeholder, touchSrc.nextSibling);
        lastTarget = null;
        e.preventDefault();
    }

    function onTouchMove(e) {
        if (!touchSrc || !touchClone || e.touches.length !== 1) return;
        e.preventDefault();
        const touch = e.touches[0];
        touchClone.style.left = `${touch.clientX - touchOffsetX}px`;
        touchClone.style.top  = `${touch.clientY - touchOffsetY}px`;
        touchClone.style.display = 'none';
        const elBelow = document.elementFromPoint(touch.clientX, touch.clientY);
        touchClone.style.display = '';
        if (!elBelow) return;
        const container = elBelow.closest('.mkq-order-column-items, .mkq-order-pool-items');
        if (container) insertPlaceholderAt(touch.clientY, container, touchSrc);
    }

    function onTouchEnd() {
        if (!touchSrc) return;
        touchSrc.classList.remove('dragging');
        if (touchClone) { touchClone.remove(); touchClone = null; }
        if (placeholder && placeholder.parentNode) {
            placeholder.parentNode.insertBefore(touchSrc, placeholder);
        }
        removePlaceholder();
        touchSrc = null;
    }

    // ── Attach events ─────────────────────────────────────────────────────────

    function attachColItem(item) {
        if (item.dataset.locked) return;
        item.setAttribute('draggable', 'true');
        item.addEventListener('dragstart', onDragStart);
        item.addEventListener('dragend',   onDragEnd);
        item.addEventListener('dragover',  onDragOver);
        item.addEventListener('drop',      onDrop);
        item.addEventListener('touchstart', onTouchStart, { passive: false });
        item.addEventListener('touchmove',  onTouchMove,  { passive: false });
        item.addEventListener('touchend',   onTouchEnd);
    }

    function attachContainer(container) {
        container.addEventListener('dragover', onContainerDragOver);
        container.addEventListener('drop',     onDrop);
    }

    function initAll() {
        document.querySelectorAll('.mkq-order-col-item:not([data-locked="true"]), .mkq-order-pool-item')
            .forEach(attachColItem);
        document.querySelectorAll('.mkq-order-column-items, .mkq-order-pool-items')
            .forEach(attachContainer);
    }

    const observer = new MutationObserver(mutations => {
        mutations.forEach(m => m.addedNodes.forEach(node => {
            if (node.nodeType !== 1) return;
            if (node.classList?.contains('mkq-order-col-item') || node.classList?.contains('mkq-order-pool-item'))
                attachColItem(node);
            else if (node.classList?.contains('mkq-order-column-items') || node.classList?.contains('mkq-order-pool-items'))
                attachContainer(node);
            else if (node.querySelectorAll) {
                node.querySelectorAll('.mkq-order-col-item:not([data-locked="true"]), .mkq-order-pool-item').forEach(attachColItem);
                node.querySelectorAll('.mkq-order-column-items, .mkq-order-pool-items').forEach(attachContainer);
            }
        }));
    });

    window._initOrderColumnsDragDrop = function() {
        initAll();
        observer.observe(document.body, { childList: true, subtree: true });
    };

})();

// ─────────────────────────────────────────────────────────────────────────────
// Order — Drag & Drop (desktop + touch)
// ─────────────────────────────────────────────────────────────────────────────

(function initOrderDragDrop() {

    let dragSrc      = null;
    let touchSrc     = null;
    let touchClone   = null;
    let touchOffsetX = 0;
    let touchOffsetY = 0;
    let placeholder  = null;
    let lastTarget   = null;

    // ── Placeholder ───────────────────────────────────────────────────────

    function createPlaceholder(referenceItem) {
        const ph = document.createElement('div');
        ph.className = 'mkq-order-placeholder';
        ph.style.height = referenceItem.offsetHeight + 'px';
        ph.style.transition = 'height 0.18s ease-in-out';
        return ph;
    }

    function removePlaceholder() {
        if (placeholder && placeholder.parentNode) placeholder.parentNode.removeChild(placeholder);
        placeholder = null;
        lastTarget  = null;
    }

    // ── Guard inter-quiz ──────────────────────────────────────────────────

    function sameQuestion(src, container) {
        const sourceQuestion = src.closest('.mkdocs-superquiz');
        const destinationQuestion = container.closest('.mkdocs-superquiz');
        return sourceQuestion && destinationQuestion && sourceQuestion === destinationQuestion;
    }

    // ── Position helper ───────────────────────────────────────────────────
    // Cherche l'item le plus proche verticalement, décide before/after
    // selon la position du curseur par rapport au centre de cet item.

    function findBestTarget(clientY, container, src) {
        const items = Array.from(container.querySelectorAll('.mkq-order-item'))
            .filter(el => el !== src && el !== placeholder);
        if (items.length === 0) return null;
        let best = null, bestDist = Infinity;
        items.forEach(item => {
            const rect = item.getBoundingClientRect();
            const centerY = rect.top + rect.height / 2;
            const dist = Math.abs(clientY - centerY);
            if (dist < bestDist) { bestDist = dist; best = item; }
        });
        return best;
    }

    function insertPlaceholderAt(clientY, container, src) {
        if (!placeholder) return;
        if (!sameQuestion(src, container)) return;

        const target = findBestTarget(clientY, container, src);
        if (!target) {
            if (lastTarget !== container) { lastTarget = container; container.appendChild(placeholder); }
            return;
        }

        const rect = target.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2;
        const position = clientY < centerY ? 'before' : 'after';

        const key = target.dataset.originalIndex + '_' + position;
        if (lastTarget === key) return;
        lastTarget = key;

        if (position === 'before') target.parentNode.insertBefore(placeholder, target);
        else target.parentNode.insertBefore(placeholder, target.nextSibling);
    }

    // ── Desktop ──────────────────────────────────────────────────────────

    function onDragStart(e) {
        dragSrc = e.currentTarget;
        dragSrc.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', '');
        placeholder = createPlaceholder(dragSrc);
        dragSrc.parentNode.insertBefore(placeholder, dragSrc.nextSibling);
        lastTarget = null;
    }

    function onDragEnd() {
        if (dragSrc) dragSrc.classList.remove('dragging');
        removePlaceholder();
        dragSrc = null;
    }

    function onDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        if (!dragSrc) return;
        const container = e.currentTarget.closest('.mkq-order-items');
        if (!container) return;
        insertPlaceholderAt(e.clientY, container, dragSrc);
    }

    function onDragLeave(e) {
        // Intentionnellement vide — le placeholder reste stable
    }

    function onDrop(e) {
        e.preventDefault();
        onContainerDrop(e);
    }

    function onContainerDragOver(e) {
        e.preventDefault();
        if (!dragSrc || !placeholder) return;
        insertPlaceholderAt(e.clientY, e.currentTarget, dragSrc);
    }

    function onContainerDrop(e) {
        e.preventDefault();
        if (!dragSrc || !placeholder || !placeholder.parentNode) { removePlaceholder(); return; }
        if (!sameQuestion(dragSrc, placeholder.parentNode)) { removePlaceholder(); return; }
        placeholder.parentNode.insertBefore(dragSrc, placeholder);
        removePlaceholder();
    }

    // ── Touch ─────────────────────────────────────────────────────────────

    function onTouchStart(e) {
        if (e.touches.length !== 1) return;
        touchSrc = e.currentTarget;
        touchSrc.classList.add('dragging');
        const touch = e.touches[0];
        const rect  = touchSrc.getBoundingClientRect();
        touchOffsetX = touch.clientX - rect.left;
        touchOffsetY = touch.clientY - rect.top;
        touchClone = touchSrc.cloneNode(true);
        touchClone.className = 'mkq-order-item mkq-order-ghost';
        touchClone.style.cssText = [
            'position:fixed', 'pointer-events:none', 'opacity:0.85', 'z-index:9999',
            `width:${rect.width}px`,
            `left:${touch.clientX - touchOffsetX}px`,
            `top:${touch.clientY - touchOffsetY}px`,
        ].join(';');
        document.body.appendChild(touchClone);
        placeholder = createPlaceholder(touchSrc);
        touchSrc.parentNode.insertBefore(placeholder, touchSrc.nextSibling);
        lastTarget = null;
        e.preventDefault();
    }

    function onTouchMove(e) {
        if (!touchSrc || !touchClone || e.touches.length !== 1) return;
        e.preventDefault();
        const touch = e.touches[0];
        touchClone.style.left = `${touch.clientX - touchOffsetX}px`;
        touchClone.style.top  = `${touch.clientY - touchOffsetY}px`;
        touchClone.style.display = 'none';
        const elBelow = document.elementFromPoint(touch.clientX, touch.clientY);
        touchClone.style.display = '';
        if (!elBelow) return;
        const container = elBelow.closest('.mkq-order-items');
        if (!container) return;
        insertPlaceholderAt(touch.clientY, container, touchSrc);
    }

    function onTouchEnd() {
        if (!touchSrc) return;
        touchSrc.classList.remove('dragging');
        if (touchClone) { touchClone.remove(); touchClone = null; }
        if (placeholder && placeholder.parentNode) {
            placeholder.parentNode.insertBefore(touchSrc, placeholder);
        }
        removePlaceholder();
        touchSrc = null;
    }

    // ── Attach events ─────────────────────────────────────────────────────

    function attachOrderItemEvents(item) {
        item.setAttribute('draggable', 'true');
        item.addEventListener('dragstart',  onDragStart);
        item.addEventListener('dragend',    onDragEnd);
        item.addEventListener('dragover',   onDragOver);
        item.addEventListener('dragleave',  onDragLeave);
        item.addEventListener('drop',       onDrop);
        item.addEventListener('touchstart', onTouchStart, { passive: false });
        item.addEventListener('touchmove',  onTouchMove,  { passive: false });
        item.addEventListener('touchend',   onTouchEnd);
    }

    function attachContainerEvents(container) {
        container.addEventListener('dragover', onContainerDragOver);
        container.addEventListener('drop',     onContainerDrop);
    }

    function initAllOrderItems() {
        document.querySelectorAll('.mkq-order-item').forEach(attachOrderItemEvents);
        document.querySelectorAll('.mkq-order-items').forEach(attachContainerEvents);
    }

    const observer = new MutationObserver(mutations => {
        mutations.forEach(m => m.addedNodes.forEach(node => {
            if (node.nodeType !== 1) return;
            if (node.classList?.contains('mkq-order-item'))
                attachOrderItemEvents(node);
            else if (node.classList?.contains('mkq-order-items'))
                attachContainerEvents(node);
            else if (node.querySelectorAll) {
                node.querySelectorAll('.mkq-order-item').forEach(attachOrderItemEvents);
                node.querySelectorAll('.mkq-order-items').forEach(attachContainerEvents);
            }
        }));
    });

    window._initOrderDragDrop = function() {
        initAllOrderItems();
        observer.observe(document.body, { childList: true, subtree: true });
    };

})();



// ─────────────────────────────────────────────────────────────────────────────
// Blanks correction scdropdown helpers
// ─────────────────────────────────────────────────────────────────────────────

function convertLatexDelimiters(text) {
    let result = text;
    result = result.replace(/\$\$(.*?)\$\$/g, '\\[$1\\]');
    result = result.replace(/\$([^\$]+)\$/g, '\\($1\\)');
    return result;
}

function createBlanksMathJaxScdropdown(id, answers, selectedAnswer = null, options = {}) {
    const showMenu = options.showMenu ?? answers.length > 1;
    const showCorrectMarker = options.showCorrectMarker === true;
    const container = document.createElement('div');
    container.className = 'mkq-custom-select'; container.id = id;
    if (showMenu) {
        container.setAttribute('role', 'combobox');
        container.setAttribute('aria-haspopup', 'listbox');
        container.setAttribute('aria-expanded', 'false');
    } else {
        container.classList.add('mksq-static-correction');
    }

    const button = document.createElement('button');
    button.className = 'mkq-custom-select-btn'; button.type = 'button';
    if (showMenu) {
        button.setAttribute('aria-controls', `${id}-listbox`);
    } else {
        button.setAttribute('aria-disabled', 'true');
        button.setAttribute('tabindex', '-1');
    }

    const valueSpan = document.createElement('span');
    valueSpan.className = 'mkq-custom-select-value';
    const selectedIndex = Math.max(0, answers.findIndex(answer => String(answer) === String(selectedAnswer)));
    valueSpan.innerHTML = convertLatexDelimiters(answers[selectedIndex] ?? answers[0] ?? '');
    button.appendChild(valueSpan);

    if (showCorrectMarker) {
        container.classList.add('mksq-blank-has-correct-marker');
        const correctMarker = document.createElement('span');
        correctMarker.className = 'mksq-blank-correct-marker mksq-blank-dropdown-correct-marker';
        correctMarker.textContent = '✓';
        correctMarker.setAttribute('aria-hidden', 'true');
        button.appendChild(correctMarker);
    }

    let listbox = null;
    if (showMenu) {
        const arrow = document.createElement('span');
        arrow.className = 'mkq-custom-select-arrow'; arrow.textContent = '▾'; arrow.setAttribute('aria-hidden', 'true');
        button.appendChild(arrow);

        listbox = document.createElement('div');
        listbox.className = 'mkq-custom-select-listbox'; listbox.id = `${id}-listbox`;
        listbox.setAttribute('role', 'listbox'); listbox.setAttribute('tabindex', '-1');
        answers.forEach((answer, index) => {
            const option = document.createElement('div');
            option.className = 'mkq-custom-select-option'; option.setAttribute('role', 'option');
            option.setAttribute('tabindex', index === selectedIndex ? '0' : '-1');
            option.setAttribute('aria-selected', index === selectedIndex ? 'true' : 'false');
            option.dataset.value = answer; option.innerHTML = convertLatexDelimiters(answer);
            option.addEventListener('click', () => selectBlanksOption(container, button, valueSpan, listbox, option));
            option.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); selectBlanksOption(container, button, valueSpan, listbox, option); }
            });
            listbox.appendChild(option);
        });
        button.addEventListener('click', () => toggleBlanksScdropdown(container, listbox));
        listbox.addEventListener('keydown', (e) => handleBlanksKeyboardNav(e, container, listbox));
    }

    container.appendChild(button);
    if (listbox) container.appendChild(listbox);
    if (showMenu) {
        document.addEventListener('click', (e) => { if (!container.contains(e.target)) container.setAttribute('aria-expanded', 'false'); });
    }
    setTimeout(() => { if (window.MathJax?.typesetPromise) MathJax.typesetPromise([container]).catch(() => { }); }, 50);
    return container;
}

function toggleBlanksScdropdown(container, listbox) {
    const isOpen = container.getAttribute('aria-expanded') === 'true';
    container.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
    if (!isOpen) listbox.focus();
}

function selectBlanksOption(container, button, valueSpan, listbox, option) {
    listbox.querySelectorAll('.mkq-custom-select-option').forEach(opt => opt.setAttribute('aria-selected', 'false'));
    option.setAttribute('aria-selected', 'true');
    valueSpan.innerHTML = option.innerHTML;
    if (valueSpan.innerHTML.includes('\\(') || valueSpan.innerHTML.includes('\\[')) {
        if (window.MathJax?.typesetPromise) MathJax.typesetPromise([button]).catch(() => { });
    }
    container.setAttribute('aria-expanded', 'false'); button.focus();
}

function handleBlanksKeyboardNav(e, container, listbox) {
    const options = Array.from(listbox.querySelectorAll('.mkq-custom-select-option'));
    const current = document.activeElement.classList.contains('mkq-custom-select-option') ? document.activeElement : options[0];
    let idx = options.indexOf(current);
    if (e.key === 'Escape') { e.preventDefault(); container.setAttribute('aria-expanded', 'false'); container.querySelector('.mkq-custom-select-btn').focus(); }
    if (e.key === 'ArrowDown') { e.preventDefault(); options[Math.min(idx + 1, options.length - 1)].focus(); }
    if (e.key === 'ArrowUp') { e.preventDefault(); options[Math.max(idx - 1, 0)].focus(); }
}

// ─────────────────────────────────────────────────────────────────────────────
// Display score
// ─────────────────────────────────────────────────────────────────────────────

function _formatQuestionScoreMaximum(value) {
    const number = Number(value);
    if (!Number.isFinite(number)) return '0';
    if (Number.isInteger(number)) return String(number);
    return number.toFixed(2).replace(/0+$/, '').replace(/\.$/, '');
}

function _resetQuestionScoreDisplay(scoreElement, quiz) {
    if (!scoreElement) return;
    delete scoreElement.dataset.earned;
    delete scoreElement.dataset.total;
    scoreElement.classList.remove('good', 'medium', 'bad');

    if (scoreElement.classList.contains('mksq-question-score-visible')) {
        const label = scoreElement.dataset.scoreLabel
            || tForQuestion(quiz, 'ui.score_label', 'Score');
        const maximum = _formatQuestionScoreMaximum(
            scoreElement.dataset.maxPoints || 0
        );
        scoreElement.hidden = false;
        scoreElement.removeAttribute('aria-hidden');
        scoreElement.style.display = 'block';
        scoreElement.textContent = `${label}: —/${maximum}`;
        return;
    }

    scoreElement.style.display = 'none';
    scoreElement.textContent = '';
}

function displayScorePoints(quizId, earned, total) {
    const scoreElement = document.getElementById(`score-${quizId}`);
    if (!scoreElement) return;
    const e = Number(earned), ttot = Number(total) > 0 ? Number(total) : 0;
    const pct = ttot > 0 ? (e / ttot) * 100 : 0;
    const quiz = getQuizRootElement(quizId);
    scoreElement.dataset.earned = String(e);
    scoreElement.dataset.total = String(ttot);
    scoreElement.textContent = `${tForQuestion(quiz, "ui.score_label", "Score")}: ${e.toFixed(2)}/${ttot.toFixed(2)} (${pct.toFixed(1)}%)`;
    const isVisibleQuestionScore = scoreElement.classList.contains('mksq-question-score-visible');
    const isPageScoreStorage = scoreElement.classList.contains('mksq-question-score-storage');
    if (!isPageScoreStorage || isVisibleQuestionScore) {
        scoreElement.hidden = false;
        scoreElement.removeAttribute('aria-hidden');
        scoreElement.style.display = 'block';
    }
    scoreElement.classList.remove('good', 'medium', 'bad');
    if (pct >= 75) scoreElement.classList.add('good');
    else if (pct >= 50) scoreElement.classList.add('medium');
    else scoreElement.classList.add('bad');
}

// ─────────────────────────────────────────────────────────────────────────────
// Crypto / storage
// ─────────────────────────────────────────────────────────────────────────────

function decryptAnswers(encryptedData) {
    try {
        const key = window.QUIZ_CONFIG.encryption_key || 'default-key-change-me';
        const encrypted = atob(encryptedData);
        const keyBytes = new TextEncoder().encode(key);
        const encryptedBytes = new Uint8Array(encrypted.split('').map(c => c.charCodeAt(0)));
        const decrypted = new Uint8Array(encryptedBytes.length);
        for (let i = 0; i < encryptedBytes.length; i++) decrypted[i] = encryptedBytes[i] ^ keyBytes[i % keyBytes.length];
        return JSON.parse(new TextDecoder().decode(decrypted));
    } catch (e) {
        console.error(t("ui.error_decrypting", "Decrypting Error"), e);
        return null;
    }
}

function saveAnswers(quizId) {
    const quiz = getQuizRootElement(quizId);
    if (!quiz) return;

    const correctionData = decryptAnswers(quiz.dataset.encrypted);
    if (correctionData && correctionData.save_answers === false) {
        localStorage.removeItem(getQuestionStorageKey(quiz));
        return;
    }

    const answers = {
        __mksq_submitted: quiz.dataset.submitted === 'true',
    };
    quiz.querySelectorAll('input[type="checkbox"]:checked, input[type="radio"]:checked').forEach(input => { answers[input.id] = true; });
    quiz.querySelectorAll('.mkq-blank-input').forEach(input => { if (input.value.trim() !== '') answers[input.id] = input.value; });
    quiz.querySelectorAll('.mkq-custom-scdropdown').forEach(dd => { if (dd.dataset.selectedValue) answers[dd.id] = dd.dataset.selectedValue; });
    quiz.querySelectorAll('.mkq-custom-mcdropdown').forEach(dd => {
        const indices = dd.dataset.selectedIndices || '[]';
        if (indices !== '[]') answers[dd.id] = indices;
    });
    // order mode: vertical — sauvegarder l'ordre courant des items
    quiz.querySelectorAll('.mkq-order-items').forEach(container => {
        const order = Array.from(container.querySelectorAll('.mkq-order-item'))
            .map(el => el.dataset.originalIndex);
        if (order.length > 0) answers[container.id] = JSON.stringify(order);
    });
    // order mode: columns — sauvegarder quels items sont dans quelles colonnes
    quiz.querySelectorAll('.mkq-order-column').forEach(col => {
        const colItemsEl = col.querySelector('.mkq-order-column-items');
        if (!colItemsEl) return;
        const texts = Array.from(colItemsEl.querySelectorAll('.mkq-order-item:not([data-locked="true"])'))
            .map(el => el.dataset.itemText);
        if (texts.length > 0) answers[colItemsEl.id] = JSON.stringify(texts);
    });
    quiz.querySelectorAll('.mkq-order-pool-items').forEach(pool => {
        const texts = Array.from(pool.querySelectorAll('.mkq-order-item'))
            .map(el => el.dataset.itemText);
        answers[pool.id] = JSON.stringify(texts);
    });
    // order mode: sentence — sauvegarder l'ordre des tokens dans la zone
    quiz.querySelectorAll('.mkq-sentence-zone').forEach(zone => {
        const texts = Array.from(zone.querySelectorAll('.mkq-sentence-token:not([data-locked="true"])'))
            .map(el => el.dataset.tokenText);
        answers[zone.id] = JSON.stringify(texts);
    });
    quiz.querySelectorAll('.mkq-sentence-pool-items').forEach(pool => {
        const texts = Array.from(pool.querySelectorAll('.mkq-sentence-pool-token'))
            .map(el => el.dataset.tokenText);
        answers[pool.id] = JSON.stringify(texts);
    });
    // linematch : sauvegarder les connexions actives
    quiz.querySelectorAll('.mkq-lm-columns-question').forEach(qEl => {
        const qId = qEl.dataset.questionId;
        const inst = _getLmInstance(quiz.dataset.quizId, qId);
        if (!inst) return;
        const submittedConnections = Array.isArray(qEl._mksqSubmittedConnections)
            ? qEl._mksqSubmittedConnections
            : null;
        const conns = submittedConnections || inst.getConnections().map(c => ({
            src: c.sourceId,
            tgt: c.targetId,
        }));
        answers[`lm-${quiz.dataset.quizId}-q${qId}`] = JSON.stringify(conns);
    });
    // match pair — save connections
    quiz.querySelectorAll('.mkq-mq-pair-question').forEach(qEl => {
        const qId  = qEl.dataset.questionId;
        const conns = Array.from(qEl.querySelectorAll('.mkq-mq-connection'))
            .map(c => ({
                left: c.dataset.left,
                right: c.dataset.right,
                color: c.dataset.color || '',
                liveCorrect: c.dataset.liveCorrect === 'true',
                operator: c.dataset.operator || '--',
            }));
        answers[`mq-pair-${quizId}-q${qId}`] = JSON.stringify(conns);
    });
    // match category — save item placement
    quiz.querySelectorAll('.mkq-mq-category-question').forEach(qEl => {
        const qId = qEl.dataset.questionId;
        const placement = {};
        qEl.querySelectorAll('.mkq-mq-category').forEach((catEl, catIdx) => {
            placement[catIdx] = Array.from(catEl.querySelectorAll('.mkq-mq-cat-item, .mkq-mq-pool-item'))
                .map(i => i.dataset.item);
        });
        answers[`mq-cat-${quizId}-q${qId}`] = JSON.stringify(placement);
    });
    // match matrix — save checked cells
    quiz.querySelectorAll('.mkq-mq-matrix-question').forEach(qEl => {
        const qId   = qEl.dataset.questionId;
        const cells = Array.from(qEl.querySelectorAll('.mkq-matrix-checkbox:checked'))
            .map(cb => ({ row: cb.dataset.row, col: cb.dataset.col }));
        answers[`mq-matrix-${quizId}-q${qId}`] = JSON.stringify(cells);
    });
    // match flashcard — self-evaluation is persisted only when enabled.
    quiz.querySelectorAll('.mkq-mq-flashcard-question[data-auto-evaluation="true"]').forEach(qEl => {
        const qId = qEl.dataset.questionId;
        const results = Array.from(qEl.querySelectorAll('.mkq-fc-card'))
            .map(card => ({ idx: card.dataset.cardIdx, result: card.dataset.result || '' }));
        answers[`mq-fc-${quizId}-q${qId}`] = JSON.stringify(results);
    });
    const storageKey = getQuestionStorageKey(quiz);
    if (Object.keys(answers).length > 0) localStorage.setItem(storageKey, JSON.stringify(answers));
    else localStorage.removeItem(storageKey);
}

function loadSavedAnswers() {
    document.querySelectorAll('.mkdocs-superquiz').forEach(quiz => {
        const quizId = quiz.dataset.quizId;
        try {
            const correctionData = decryptAnswers(quiz.dataset.encrypted);
            if (correctionData && correctionData.save_answers === false) {
                localStorage.removeItem(getQuestionStorageKey(quiz));
                    quiz.querySelectorAll('input[type="checkbox"], input[type="radio"]').forEach(input => { input.checked = false; });
                quiz.querySelectorAll('.mkq-blank-input').forEach(input => { input.value = ''; });
                quiz.querySelectorAll('.mkq-custom-scdropdown').forEach(dd => {
                    dd.dataset.selectedValue = '';
                    const valueSpan = dd.querySelector('.mkq-custom-scdropdown-value');
                    if (valueSpan) valueSpan.textContent = '--';
                    dd.querySelectorAll('.mkq-custom-scdropdown-option').forEach(opt => opt.classList.remove('selected'));
                });
                quiz.querySelectorAll('.mkq-custom-mcdropdown').forEach(dd => {
                    dd.dataset.selectedIndices = '[]';
                    const valueSpan = dd.querySelector('.mkq-custom-mcdropdown-value');
                    if (valueSpan) valueSpan.textContent = '--';
                    dd.querySelectorAll('.mkq-custom-mcdropdown-option').forEach(opt => opt.classList.remove('selected'));
                });
                return;
            }

            const storageKey = getQuestionStorageKey(quiz);
            const savedAnswersJson = localStorage.getItem(storageKey);
            if (!savedAnswersJson) return;
            const savedAnswers = JSON.parse(savedAnswersJson);
            if (!savedAnswers || typeof savedAnswers !== 'object') { localStorage.removeItem(storageKey); return; }

            Object.keys(savedAnswers).forEach(inputId => {
                if (inputId === '__mksq_submitted') return;
                const el = findQuestionElementById(quiz, inputId);
                if (!el) return;
                const savedValue = savedAnswers[inputId];

                if (el.type === 'checkbox' || el.type === 'radio') {
                    if (typeof savedValue === 'boolean') el.checked = savedValue;
                } else if (el.classList.contains('mkq-blank-input')) {
                    el.value = String(savedValue);
                } else if (el.classList.contains('mkq-custom-scdropdown')) {
                    el.dataset.selectedValue = savedValue;
                    const valueSpan = el.querySelector('.mkq-custom-scdropdown-value');
                    const selectedOption = el.querySelector(`.mkq-custom-scdropdown-option[data-value="${savedValue}"]`);
                    if (valueSpan && selectedOption) valueSpan.innerHTML = selectedOption.innerHTML;
                } else if (el.classList.contains('mkq-custom-mcdropdown')) {
                    let indices = [];
                    try { indices = JSON.parse(savedValue); } catch(e) {}
                    el.dataset.selectedIndices = JSON.stringify(indices);
                    el.querySelectorAll('.mkq-custom-mcdropdown-option').forEach(opt => opt.classList.remove('selected'));
                    const selectedTexts = [];
                    indices.forEach(idx => {
                        const optEl = el.querySelector(`.mkq-custom-mcdropdown-option[data-value="${idx}"]`);
                        if (optEl) {
                            optEl.classList.add('selected');
                            selectedTexts.push(optEl.dataset.optionText || optEl.textContent.trim());
                        }
                    });
                    const valueSpan = el.querySelector('.mkq-custom-mcdropdown-value');
                    if (valueSpan) {
                        if (selectedTexts.length > 0) {
                            valueSpan.innerHTML = selectedTexts.map(convertLatexDelimiters).join(', ');
                            if (window.MathJax?.typesetPromise) {
                                MathJax.typesetPromise([valueSpan]).catch(() => {});
                            }
                        } else {
                            valueSpan.textContent = '--';
                        }
                    }
                } else if (el.classList.contains('mkq-order-items')) {
                    // Restaurer l'ordre des items order mode: vertical
                    let order = [];
                    try { order = JSON.parse(savedValue); } catch(e) { return; }
                    const itemMap = {};
                    Array.from(el.querySelectorAll('.mkq-order-item')).forEach(item => {
                        itemMap[item.dataset.originalIndex] = item;
                    });
                    order.forEach(idx => {
                        const item = itemMap[idx];
                        if (item) el.appendChild(item);
                    });
                } else if (el.classList.contains('mkq-order-column-items')) {
                    // Restaurer items dans colonnes mode: columns
                    let texts = [];
                    try { texts = JSON.parse(savedValue); } catch(e) { return; }
                    const question = el.closest('.mkq-order-question');
                    if (!question) return;
                    texts.forEach(text => {
                        const item = _findOrderItemByText(question, text);
                        if (item) el.appendChild(item);
                    });
                } else if (el.classList.contains('mkq-order-pool-items')) {
                    // Restaurer items dans le pool (déjà géré par les colonnes, skip)
                    // Les items non trouvés dans les colonnes restent dans le pool naturellement
                } else if (el.classList.contains('mkq-sentence-zone')) {
                    // Restaurer tokens dans la zone sentence
                    let texts = [];
                    try { texts = JSON.parse(savedValue); } catch(e) { return; }
                    const wrapper = el.closest('.mkq-sentence-wrapper');
                    if (!wrapper) return;
                    texts.forEach(text => {
                        const token = _findSentenceTokenByText(wrapper, text);
                        if (token) el.appendChild(token);
                    });
                } else if (el.classList.contains('mkq-sentence-pool-items')) {
                    // Les tokens non trouvés dans la zone restent dans le pool
                }
            });
            // Restore linematch connections
            Object.entries(savedAnswers).forEach(([key, value]) => {
                if (!key.startsWith(`lm-${quizId}-q`)) return;
                const qId = key.replace(`lm-${quizId}-q`, '');
                let conns = [];
                try { conns = JSON.parse(value); } catch(e) { return; }
                // Defer until jsPlumb instance is ready
                setTimeout(() => {
                    const inst = _getLmInstance(quizId, qId);
                    if (!inst) return;
                    conns.forEach(c => {
                        try {
                            inst.connect({ uuids: [c.src + '-ep', c.tgt + '-ep'] });
                        } catch(e) {}
                    });
                }, 200);
            });

            // match pair
            Object.entries(savedAnswers).forEach(([key, value]) => {
                if (!key.startsWith(`mq-pair-${quizId}-q`)) return;
                const qId = key.replace(`mq-pair-${quizId}-q`, '');
                let conns = [];
                try { conns = JSON.parse(value); } catch(e) { return; }
                const qEl = getQuizRootElement(quizId)?.querySelector(`.mkq-mq-pair-question[data-question-id="${qId}"]`);
                if (!qEl) return;
                conns.forEach(c => {
                    const lEl = qEl.querySelector(`.mkq-mq-left-item[data-item="${CSS.escape(c.left)}"]`);
                    const rEl = qEl.querySelector(`.mkq-mq-right-item[data-item="${CSS.escape(c.right)}"]`);
                    if (!lEl || !rEl) return;
                    const conn = document.createElement('div');
                    conn.className = 'mkq-mq-connection';
                    conn.dataset.left  = c.left;
                    conn.dataset.right = c.right;
                    conn.dataset.color = c.color || '';
                    if (c.liveCorrect) conn.dataset.liveCorrect = 'true';
                    conn.dataset.operator = c.operator || '--';
                    conn.style.display = 'none';
                    qEl.querySelector('.mkq-mq-pair-connectors')?.appendChild(conn);
                    const color = c.color || 'var(--mkq-lm-line)';
                    [lEl, rEl].forEach(item => {
                        item.style.setProperty('--mksq-pair-color', color);
                        item.dataset.pairColor = color;
                        item.classList.add('mksq-pair-linked');
                        if (c.liveCorrect) item.classList.add('mksq-pair-live-complete');
                    });
                });
                setTimeout(() => {
                    window._drawMatchPairConnections?.(qEl);
                }, 100);
            });

            // match category
            Object.entries(savedAnswers).forEach(([key, value]) => {
                if (!key.startsWith(`mq-cat-${quizId}-q`)) return;
                const qId = key.replace(`mq-cat-${quizId}-q`, '');
                let placement = {};
                try { placement = JSON.parse(value); } catch(e) { return; }
                const qEl = getQuizRootElement(quizId)?.querySelector(`.mkq-mq-category-question[data-question-id="${qId}"]`);
                if (!qEl) return;
                Object.entries(placement).forEach(([catIdx, items]) => {
                    const catEl = qEl.querySelector(`.mkq-mq-category[data-cat-idx="${catIdx}"] .mkq-mq-category-items`);
                    if (!catEl) return;
                    items.forEach(itemText => {
                        const item = qEl.querySelector(`.mkq-mq-cat-item[data-item="${CSS.escape(itemText)}"], .mkq-mq-pool-item[data-item="${CSS.escape(itemText)}"]`);
                        if (item) catEl.appendChild(item);
                    });
                });
            });

            // match matrix
            Object.entries(savedAnswers).forEach(([key, value]) => {
                if (!key.startsWith(`mq-matrix-${quizId}-q`)) return;
                let cells = [];
                try { cells = JSON.parse(value); } catch(e) { return; }
                const qId = key.replace(`mq-matrix-${quizId}-q`, '');
                const qEl = getQuizRootElement(quizId)?.querySelector(`.mkq-mq-matrix-question[data-question-id="${qId}"]`);
                if (!qEl) return;
                cells.forEach(c => {
                    const cb = qEl.querySelector(`.mkq-matrix-checkbox[data-row="${CSS.escape(c.row)}"][data-col="${CSS.escape(c.col)}"]`);
                    if (cb) cb.checked = true;
                });
            });

            // match flashcard self-evaluation
            Object.entries(savedAnswers).forEach(([key, value]) => {
                if (!key.startsWith(`mq-fc-${quizId}-q`)) return;
                let results = [];
                try { results = JSON.parse(value); } catch(e) { return; }
                const qId = key.replace(`mq-fc-${quizId}-q`, '');
                const qEl = getQuizRootElement(quizId)?.querySelector(`.mkq-mq-flashcard-question[data-question-id="${qId}"][data-auto-evaluation="true"]`);
                if (!qEl) return;
                results.forEach(result => {
                    const card = qEl.querySelector(`.mkq-fc-card[data-card-idx="${CSS.escape(String(result.idx))}"]`);
                    if (!card || !result.result) return;
                    card.dataset.result = result.result;
                    card.classList.remove('fc-correct', 'fc-incorrect');
                    card.classList.add(result.result === 'correct' ? 'fc-correct' : 'fc-incorrect');
                });
                window._updateFlashcardScore?.(qEl);
            });

            if (savedAnswers.__mksq_submitted === true) {
                // Recompute score/correction from restored answers, then freeze again.
                setTimeout(() => validateQuestion(quizId), 250);
            }
        } catch (error) {
            localStorage.removeItem(getQuestionStorageKey(quiz));
        }
    });
}

function _findOrderItemByText(questionEl, text) {
    const all = questionEl.querySelectorAll('.mkq-order-item');
    for (const item of all) {
        if (String(item.dataset.itemText || '').trim() === String(text || '').trim()) {
            return item;
        }
    }
    return null;
}

function _findSentenceTokenByText(wrapperEl, text) {
    const all = wrapperEl.querySelectorAll('.mkq-sentence-token, .mkq-sentence-pool-token');
    for (const tok of all) {
        if (String(tok.dataset.tokenText || '').trim() === String(text || '').trim()) {
            return tok;
        }
    }
    return null;
}

function resetQuestionElement(quiz) {
    if (!quiz) return;
    const quizId = quiz.dataset.quizId;
    const quizType = quiz.dataset.quizType;
    const quizHandler = getQuestionHandlerType(quiz);
    if (quizHandler === 'blanks') {
        quiz.querySelectorAll('.mkq-blank-correction-wrapper, .mksq-blank-correct-marker').forEach(w => w.remove());
        quiz.querySelectorAll('.mkq-blank-input').forEach(input => { input.value = ''; input.style.display = ''; input.classList.remove('correct', 'incorrect', 'mksq-single-answer-correct'); });
    } else if (quizHandler === 'scdropdown') {
        quiz.querySelectorAll('.mkq-scdropdown-correction-wrapper').forEach(w => w.remove());
        quiz.querySelectorAll('.mkq-custom-scdropdown').forEach(dd => {
            dd.style.display = ''; dd.dataset.selectedValue = '';
            const valueSpan = dd.querySelector('.mkq-custom-scdropdown-value');
            if (valueSpan) valueSpan.textContent = '--';
            dd.querySelectorAll('.mkq-custom-scdropdown-option').forEach(opt => opt.classList.remove('selected'));
            dd.classList.remove('correct', 'incorrect', 'mksq-control-locked');
            const arrow = dd.querySelector('.mkq-custom-scdropdown-arrow');
            if (arrow) { arrow.textContent = '▾'; arrow.classList.remove('mksq-correct-marker'); }
            dd.querySelectorAll('.mkq-custom-scdropdown-btn').forEach(btn => {
                btn.disabled = false; btn.style.pointerEvents = ''; btn.style.cursor = '';
            });
        });
    } else if (quizHandler === 'mcdropdown') {
        quiz.querySelectorAll('.mkq-mcdropdown-correction-wrapper').forEach(w => w.remove());
        quiz.querySelectorAll('.mkq-custom-mcdropdown').forEach(dd => {
            dd.style.display = ''; dd.dataset.selectedIndices = '[]';
            const valueSpan = dd.querySelector('.mkq-custom-mcdropdown-value');
            if (valueSpan) valueSpan.textContent = '--';
            dd.querySelectorAll('.mkq-custom-mcdropdown-option').forEach(opt => opt.classList.remove('selected'));
            dd.classList.remove('correct', 'incorrect', 'mksq-control-locked');
            const arrow = dd.querySelector('.mkq-custom-mcdropdown-arrow');
            if (arrow) { arrow.textContent = '▾'; arrow.classList.remove('mksq-correct-marker'); }
            dd.querySelectorAll('.mkq-custom-mcdropdown-btn').forEach(btn => {
                btn.disabled = false; btn.style.pointerEvents = ''; btn.style.cursor = '';
                btn.onclick = function() { window.toggleMcdropdownPanel(this); return false; };
            });
        });
    } else if (quizHandler === 'order') {
        // Supprimer toutes les corrections visuelles, y compris les
        // états propres au mode sentence et les alternatives équivalentes.
        quiz.querySelectorAll('.mkq-order-position-badge').forEach(b => b.remove());
        quiz.querySelectorAll('.mkq-order-item').forEach(item => item.classList.remove(
            'correct',
            'incorrect',
            'mksq-columns-distractor-unmoved',
            'mksq-columns-distractor-moved'
        ));
        quiz.querySelectorAll('.mkq-sentence-token, .mkq-sentence-pool-token').forEach(token => {
            token.classList.remove('correct', 'incorrect', 'alternative');
        });

        // mode: vertical — remettre dans un ordre aléatoire
        quiz.querySelectorAll('.mkq-order-items').forEach(container => {
            const items = Array.from(container.querySelectorAll('.mkq-order-item'));
            shuffleArray(items);
            items.forEach(item => container.appendChild(item));
        });

        // mode: columns — remettre tous les items non-locked dans le pool
        quiz.querySelectorAll('.mkq-order-columns-question').forEach(qEl => {
            const pool = qEl.querySelector('.mkq-order-pool-items');
            if (!pool) return;
            qEl.querySelectorAll('.mkq-order-column-items .mkq-order-item:not([data-locked="true"])').forEach(item => {
                pool.appendChild(item);
            });
            const poolItems = Array.from(pool.querySelectorAll('.mkq-order-item'));
            shuffleArray(poolItems);
            poolItems.forEach(item => pool.appendChild(item));
        });

        // mode: sentence — remettre tous les tokens non-locked dans le pool
        quiz.querySelectorAll('.mkq-order-sentence-question').forEach(qEl => {
            qEl.querySelectorAll('.mkq-sentence-wrapper').forEach(wrapper => {
                const pool = wrapper.querySelector('.mkq-sentence-pool-items');
                if (!pool) return;
                // Move non-locked tokens from zone back to pool
                wrapper.querySelectorAll('.mkq-sentence-zone .mkq-sentence-token:not([data-locked="true"])').forEach(tok => {
                    pool.appendChild(tok);
                });
                // Shuffle pool
                const poolTokens = Array.from(pool.querySelectorAll('.mkq-sentence-token, .mkq-sentence-pool-token'));
                shuffleArray(poolTokens);
                poolTokens.forEach(tok => pool.appendChild(tok));
            });
        });
    } else if (quizHandler === 'linematch') {
        quiz.querySelectorAll('.mkq-lm-question').forEach(qEl => {
            // A full reset destroys and recreates the jsPlumb instance. Mark the
            // question first so connectionDetached cannot recolour the last
            // component while the old instance is being torn down.
            qEl._mksqResetInProgress = true;
            _clearLinematchQuestion(quizId, qEl.dataset.questionId);
        });
    } else if (quizHandler === 'match') {
        // pair — clear SVG lines
        quiz.querySelectorAll('.mkq-mq-pair-question').forEach(qEl => {
            if (window._clearMatchPairQuestion) window._clearMatchPairQuestion(qEl);
            else {
                qEl.querySelectorAll('.mkq-mq-connection').forEach(c => c.remove());
                qEl.querySelectorAll('.mkq-mq-item').forEach(i => {
                    i.classList.remove('selected','correct','incorrect','mksq-pair-selected','mksq-pair-linked','mksq-pair-orphan','mksq-pair-live-complete','mksq-pair-live-error');
                    i.style.removeProperty('--mksq-pair-color');
                });
                qEl.querySelectorAll('.mkq-mq-svg-overlay line').forEach(l => l.remove());
            }
        });
        // category — return items to pool and remove every correction state,
        // including the dedicated dashed distractor classes.
        quiz.querySelectorAll('.mkq-mq-category-question').forEach(qEl => {
            const pool = qEl.querySelector('.mkq-mq-pool-items');
            if (!pool) return;
            qEl.querySelectorAll('.mkq-mq-category-items .mkq-mq-cat-item, .mkq-mq-category-items .mkq-mq-pool-item')
                .forEach(item => pool.appendChild(item));
            _clearMatchCategoryCorrection(qEl);
            const poolItems = Array.from(pool.querySelectorAll('.mkq-mq-cat-item, .mkq-mq-pool-item'));
            shuffleArray(poolItems);
            poolItems.forEach(item => pool.appendChild(item));
        });
        // matrix — uncheck, unlock and remove all correction states.
        quiz.querySelectorAll('.mkq-matrix-checkbox').forEach(cb => {
            cb.checked = false;
            cb.disabled = false;
            cb.removeAttribute('aria-disabled');
            cb.closest('td')?.classList.remove('correct', 'incorrect', 'missed');
        });
        // flashcard — reset side, self-evaluation and navigation state.
        quiz.querySelectorAll('.mkq-mq-flashcard-question').forEach(qEl => {
            qEl.querySelectorAll('.mkq-fc-card').forEach(card => {
                card.dataset.state = 'front';
                card.dataset.result = '';
                card.classList.remove('flipped', 'fc-correct', 'fc-incorrect');
                card.setAttribute('aria-pressed', 'false');
                const actions = card.querySelector('.mkq-fc-actions');
                if (actions) actions.hidden = true;
            });
            const deck = qEl.querySelector('.mkq-fc-deck');
            if (deck) {
                const cards = Array.from(deck.querySelectorAll('.mkq-fc-card'));
                if (quiz.dataset.randomizeAnswers === 'true') shuffleArray(cards);
                cards.forEach((card, index) => {
                    deck.appendChild(card);
                    card.style.display = index === 0 ? '' : 'none';
                });
            }
            const current = qEl.querySelector('.mkq-fc-current');
            if (current) current.textContent = '1';
            const score = qEl.querySelector('.mkq-fc-score-display');
            if (score) score.textContent = '';
        });
    } else {
        quiz.querySelectorAll('input[type="checkbox"], input[type="radio"]').forEach(input => { input.checked = false; });
    }
    quiz.querySelectorAll('.mkq-answer').forEach(answer => {
        answer.classList.remove('correct', 'incorrect');
        const feedback = answer.querySelector('.mkq-answer-feedback');
        if (feedback) { feedback.style.display = 'none'; feedback.textContent = ''; feedback.classList.remove('correct', 'incorrect'); }
    });
    const scoreElement = document.getElementById(`score-${quizId}`);
    _resetQuestionScoreDisplay(scoreElement, quiz);
    const lockBtn = quiz.querySelector('.mkq-unlock-btn, .mkq-lock-indicator');
    if (lockBtn && !lockBtn.classList.contains('unlocked')) {
        if (lockBtn.getAttribute('data-lock-state') === 'locked') updateLockIcon(lockBtn, false);
    }
    localStorage.removeItem(getQuestionStorageKey(quiz));
        
    setQuestionSubmittedState(quiz, false);
    if (quizHandler === 'linematch') _reinitializeLinematch(quiz);
}


// ─────────────────────────────────────────────────────────────────────────────
// Evaluation violation monitoring
// ─────────────────────────────────────────────────────────────────────────────

const _mksqEvalViolationSessions = new Map();
const _mksqEvalViolationRuntime = {
    bound: false,
    activeKey: null,
    reloadProcessed: false,
    tamperInterval: null,
};

function _evalViolationSessionKey(pageUuid, evalId) {
    return `${String(pageUuid || '')}::${String(evalId || '')}`;
}

function _evalViolationStorageKey(pageUuid, evalId) {
    return `mksq:eval-violations:${String(pageUuid || '')}:${String(evalId || '')}`;
}

function _evalViolationActiveStorageKey() {
    return 'mksq:eval-violations:active';
}

function _evalViolationPendingLeaveKey() {
    return 'mksq:eval-violations:pending-leave';
}

function _safeSessionStorageGet(key) {
    try { return sessionStorage.getItem(key); } catch (_) { return null; }
}

function _safeSessionStorageSet(key, value) {
    try { sessionStorage.setItem(key, value); return true; } catch (_) { return false; }
}

function _safeSessionStorageRemove(key) {
    try { sessionStorage.removeItem(key); } catch (_) {}
}

function _parseEvalPolicy(actions) {
    try {
        const parsed = JSON.parse(actions?.dataset?.evalPolicy || '{}');
        return parsed && typeof parsed === 'object' ? parsed : {};
    } catch (_) {
        return {};
    }
}

function _parseEvalAccess(actions) {
    try {
        const parsed = JSON.parse(actions?.dataset?.evalAccess || '{}');
        return parsed && typeof parsed === 'object' ? parsed : { enabled: false };
    } catch (_) {
        return { enabled: false };
    }
}

function _evalAccessStorageKey(pageUuid, evalId) {
    return `mksq:eval-access:${String(pageUuid || '')}:${String(evalId || '')}`;
}

function _restoreEvalAccessState(session) {
    if (!session?.access || session.access.enabled !== true) {
        session.accessUnlocked = true;
        return;
    }
    const stored = _safeSessionStorageGet(_evalAccessStorageKey(session.pageUuid, session.evalId));
    session.accessUnlocked = Boolean(
        stored
        && session.access.verifier
        && stored === String(session.access.verifier),
    );
}

function _restoreEvalViolationSession(session) {
    const raw = _safeSessionStorageGet(session.storageKey);
    session.expectedStorageRaw = raw;
    if (!raw) return;
    try {
        const data = JSON.parse(raw);
        if (!data || typeof data !== 'object') return;
        session.started = data.started === true;
        session.finalized = data.finalized === true;
        session.blocked = data.blocked === true;
        session.invalidated = data.invalidated === true;
        session.violations = Array.isArray(data.violations) ? data.violations : [];
        session.qrSessionId = String(data.qrSessionId || session.qrSessionId || '');
    } catch (_) {
        // Malformed state is treated as tampering once this session becomes active.
    }
}

function _persistEvalViolationSession(session) {
    const payload = JSON.stringify({
        version: 1,
        pageUuid: session.pageUuid,
        evalId: session.evalId,
        started: session.started === true,
        finalized: session.finalized === true,
        blocked: session.blocked === true,
        invalidated: session.invalidated === true,
        violations: session.violations,
        qrSessionId: session.qrSessionId || '',
    });
    if (_safeSessionStorageSet(session.storageKey, payload)) {
        session.expectedStorageRaw = payload;
    }
}

function _evalViolationSession(pageUuid, evalId) {
    return _mksqEvalViolationSessions.get(_evalViolationSessionKey(pageUuid, evalId)) || null;
}

function _evalViolationAction(session, type) {
    return String(session?.policy?.violations?.[type]?.action || 'ignore').trim().toLowerCase();
}

function _transientNotificationStack(session = null) {
    const host = session ? _evalOverlayHost(session) : document.body;
    let stack = Array.from(host.children || []).find((child) =>
        child?.classList?.contains('mksq-transient-notification-stack')
    );
    if (stack) return stack;
    stack = document.createElement('div');
    stack.className = 'mksq-transient-notification-stack';
    stack.setAttribute('aria-live', 'polite');
    host.appendChild(stack);
    return stack;
}

function _showTransientNotification(session, className, text, duration = 2200) {
    const notification = document.createElement('div');
    notification.className = `mksq-transient-notification ${className}`;
    notification.textContent = text;
    _transientNotificationStack(session).appendChild(notification);
    setTimeout(() => notification.classList.add('mksq-transient-notification-hide'), duration);
    setTimeout(() => {
        const stack = notification.parentElement;
        notification.remove();
        if (stack?.classList?.contains('mksq-transient-notification-stack') && !stack.children.length) {
            stack.remove();
        }
    }, duration + 500);
    return notification;
}

function _evalViolationWarning(session, type) {
    const label = tForPage(
        `ui.violation_${type}`,
        String(type || '').replaceAll('_', ' '),
    );
    return _showTransientNotification(
        session,
        'mksq-eval-violation-warning',
        `⚠️ ${tForPage('ui.violation_warning', 'Evaluation rule violation')}: ${label}`,
        2200,
    );
}

function _evalViolationLivePanel(session) {
    return document.querySelector(
        `.mksq-eval-violations-live[data-page-uuid="${CSS.escape(session.pageUuid)}"]`
        + `[data-eval-id="${CSS.escape(session.evalId)}"]`,
    );
}

function _removeEvalViolationLivePanel(session) {
    _evalViolationLivePanel(session)?.remove();
}

function _renderEvalViolationLive(session) {
    if (session?.policy?.show_live_violations_in_toolbar !== true) {
        if (session) _removeEvalViolationLivePanel(session);
        return;
    }
    if (!session || !session.started || session.finalized || session.violations.length === 0) {
        if (session) _removeEvalViolationLivePanel(session);
        return;
    }

    // Only the active evaluation owns the visible live panel. This prevents
    // several evals on the same MkDocs page from stacking panels.
    document.querySelectorAll('.mksq-eval-violations-live').forEach((panel) => {
        panel.hidden = true;
    });

    let panel = _evalViolationLivePanel(session);
    if (!panel) {
        panel = document.createElement('aside');
        panel.className = `mksq-eval-violations-live${session.host === 'revealjs' ? ' mksq-eval-violations-live-revealjs' : ''}`;
        panel.dataset.pageUuid = session.pageUuid;
        panel.dataset.evalId = session.evalId;
        panel.setAttribute('role', 'status');
        panel.setAttribute('aria-live', 'polite');
        const liveSlot = document.querySelector(
            `.mksq-eval-toolbar[data-page-uuid="${CSS.escape(session.pageUuid)}"]`
            + `[data-eval-id="${CSS.escape(session.evalId)}"] .mksq-eval-toolbar-live-slot`
        );
        (liveSlot || _evalOverlayHost(session)).appendChild(panel);
    }
    panel.hidden = false;
    panel.replaceChildren();

    const title = document.createElement('div');
    title.className = 'mksq-eval-violations-live-title';
    title.textContent = tForPage('ui.violations_summary', 'Violations');
    panel.appendChild(title);

    const counts = new Map();
    session.violations.forEach((violation) => {
        const type = String(violation.type || 'unknown');
        counts.set(type, (counts.get(type) || 0) + 1);
    });

    const list = document.createElement('ul');
    list.className = 'mksq-eval-violations-live-list';
    counts.forEach((count, type) => {
        const item = document.createElement('li');
        item.className = 'mksq-eval-violations-live-item';

        const label = document.createElement('span');
        label.className = 'mksq-eval-violations-live-type';
        label.textContent = type;

        const separator = document.createElement('span');
        separator.className = 'mksq-eval-violations-live-separator';
        separator.textContent = ':';

        const value = document.createElement('span');
        value.className = 'mksq-eval-violations-live-count';
        value.textContent = String(count);

        item.append(label, separator, value);
        list.appendChild(item);
    });
    panel.appendChild(list);
}

function _recordEvalViolation(session, type, detail = {}) {
    if (!session || !session.started || session.finalized) return null;
    const action = _evalViolationAction(session, type);
    if (action === 'ignore') return null;

    const event = {
        type: String(type),
        action,
        timestamp: Date.now(),
        detail: detail && typeof detail === 'object' ? detail : {},
    };
    session.violations.push(event);
    if (action === 'block_validation') session.blocked = true;
    if (action === 'invalidate') session.invalidated = true;
    _persistEvalViolationSession(session);
    _renderEvalViolationLive(session);
    _scheduleEvalQrReportRefresh(session);

    if (
        session.policy?.show_live_violations_tooltips === true
        && (action === 'warn' || session.policy?.type === 'strict')
    ) {
        _evalViolationWarning(session, type);
    }
    return event;
}

function _evalViolationSummaryTargets(session) {
    return Array.from(document.querySelectorAll(
        `.mksq-eval-violations-summary[data-page-uuid="${CSS.escape(session.pageUuid)}"]`
        + `[data-eval-id="${CSS.escape(session.evalId)}"], `
        + `.mksq-eval-actions[data-page-uuid="${CSS.escape(session.pageUuid)}"]`
        + `[data-eval-id="${CSS.escape(session.evalId)}"] .mksq-eval-violations-summary, `
        + `.mksq-reveal-eval-result[data-page-uuid="${CSS.escape(session.pageUuid)}"]`
        + `[data-eval-id="${CSS.escape(session.evalId)}"] .mksq-eval-violations-summary`,
    ));
}

function _evalStatusTargets(session) {
    return Array.from(document.querySelectorAll(
        `.mksq-eval-status[data-page-uuid="${CSS.escape(session.pageUuid)}"]`
        + `[data-eval-id="${CSS.escape(session.evalId)}"], `
        + `.mksq-eval-actions[data-page-uuid="${CSS.escape(session.pageUuid)}"]`
        + `[data-eval-id="${CSS.escape(session.evalId)}"] .mksq-eval-status, `
        + `.mksq-reveal-eval-result[data-page-uuid="${CSS.escape(session.pageUuid)}"]`
        + `[data-eval-id="${CSS.escape(session.evalId)}"] .mksq-eval-status`,
    ));
}

function _renderEvalViolationSummary(session) {
    const targets = _evalViolationSummaryTargets(session);
    if (!targets.length) return;

    const groups = new Map();
    session.violations.forEach((violation) => {
        const key = String(violation.type || '');
        if (!groups.has(key)) groups.set(key, []);
        groups.get(key).push(violation);
    });

    targets.forEach((target) => {
        target.replaceChildren();
        target.hidden = false;
        target.dataset.pageUuid = session.pageUuid;
        target.dataset.evalId = session.evalId;

        const title = document.createElement('h3');
        title.className = 'mksq-eval-violations-title';
        title.textContent = tForPage('ui.violations_summary', 'Violations summary');
        target.appendChild(title);

        if (session.violations.length === 0) {
            const none = document.createElement('p');
            none.className = 'mksq-eval-violations-none';
            none.textContent = tForPage('ui.violations_none', 'No violation detected.');
            target.appendChild(none);
            return;
        }

        const total = document.createElement('p');
        total.className = 'mksq-eval-violations-total';
        total.textContent = `${tForPage('ui.violations_total', 'Total')}: ${session.violations.length}`;
        target.appendChild(total);

        const summary = document.createElement('ul');
        summary.className = 'mksq-eval-violations-counts';
        groups.forEach((events, type) => {
            const item = document.createElement('li');
            const label = tForPage(`ui.violation_${type}`, type.replaceAll('_', ' '));
            item.textContent = `${label}: ${events.length}`;
            summary.appendChild(item);
        });
        target.appendChild(summary);

        const details = document.createElement('details');
        details.className = 'mksq-eval-violations-details';
        const detailsSummary = document.createElement('summary');
        detailsSummary.textContent = tForPage('ui.violations_details', 'Details');
        details.appendChild(detailsSummary);
        const list = document.createElement('ol');
        session.violations.forEach((violation) => {
            const item = document.createElement('li');
            const date = new Date(Number(violation.timestamp || Date.now()));
            const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            const label = tForPage(
                `ui.violation_${violation.type}`,
                String(violation.type || '').replaceAll('_', ' '),
            );
            item.textContent = `${time} — ${label} — ${violation.action}`;
            list.appendChild(item);
        });
        details.appendChild(list);
        target.appendChild(details);
    });
}

function _renderEvalStatus(session, state) {
    const labels = {
        validated: tForPage('ui.evaluation_validated', 'Evaluation validated'),
        blocked: tForPage('ui.evaluation_validation_blocked', 'Validation blocked'),
        invalidated: tForPage('ui.evaluation_invalidated', 'Evaluation invalidated'),
    };
    _evalStatusTargets(session).forEach((target) => {
        target.dataset.pageUuid = session.pageUuid;
        target.dataset.evalId = session.evalId;
        target.dataset.status = state;
        target.textContent = labels[state] || String(state || '');
        target.hidden = false;
    });
}

function _clearEvalViolationPresentation(session) {
    _evalViolationSummaryTargets(session).forEach((target) => {
        target.hidden = true;
        target.replaceChildren();
    });
    _evalStatusTargets(session).forEach((target) => {
        target.hidden = true;
        target.textContent = '';
        delete target.dataset.status;
    });
}

function _ensureRevealEvalResult(session) {
    let result = document.querySelector(
        `.mksq-reveal-eval-result[data-page-uuid="${CSS.escape(session.pageUuid)}"]`
        + `[data-eval-id="${CSS.escape(session.evalId)}"]`,
    );
    if (result) return result;

    const terminal = document.querySelector(
        `.mksq-reveal-eval-terminal[data-page-uuid="${CSS.escape(session.pageUuid)}"]`
        + `[data-eval-id="${CSS.escape(session.evalId)}"]`,
    );
    if (!terminal) return null;

    const deckRoot = terminal.closest('.mkdocs-revealjs-deck');
    const deck = deckRoot?._mkdocsRevealDeck;
    const safeId = String(session.evalId || 'eval').replace(/[^A-Za-z0-9_-]+/g, '-') || 'eval';

    result = document.createElement('section');
    result.className = 'mksq-reveal-eval-result';
    result.dataset.pageUuid = session.pageUuid;
    result.dataset.evalId = session.evalId;
    result.dataset.deckId = session.deckId || '';

    const title = document.createElement('h2');
    title.textContent = terminal.dataset.resultsTitle
        || tForPage('ui.evaluation_results', 'Evaluation results');
    result.appendChild(title);

    const body = document.createElement('div');
    body.className = 'mksq-eval-result-body';

    const score = document.createElement('div');
    score.className = 'mkq-score mksq-page-score mksq-reveal-result-score';
    score.id = `score-eval-result-${safeId}`;
    score.dataset.pageUuid = session.pageUuid;
    score.dataset.evalId = session.evalId;
    score.dataset.deckId = session.deckId || '';
    score.dataset.host = 'revealjs';
    score.style.display = 'none';
    body.appendChild(score);

    const status = document.createElement('div');
    status.className = 'mksq-eval-status';
    status.hidden = true;
    body.appendChild(status);

    const summary = document.createElement('div');
    summary.className = 'mksq-eval-violations-summary';
    summary.hidden = true;
    body.appendChild(summary);

    result.appendChild(body);
    terminal.insertAdjacentElement('afterend', result);
    deck?.sync?.();
    return result;
}

function _showRevealEvalResult(session) {
    const result = _ensureRevealEvalResult(session);
    if (!result) return;
    const deckRoot = result.closest('.mkdocs-revealjs-deck');
    const deck = deckRoot?._mkdocsRevealDeck;
    if (!deck) return;
    deck.sync?.();
    const go = () => {
        const indices = deck.getIndices?.(result) || {};
        deck.slide?.(indices.h ?? 0, indices.v ?? 0);
    };
    if (typeof requestAnimationFrame === 'function') requestAnimationFrame(go);
    else setTimeout(go, 0);
}

function _hideRevealEvalResult(session) {
    const result = document.querySelector(
        `.mksq-reveal-eval-result[data-page-uuid="${CSS.escape(session.pageUuid)}"]`
        + `[data-eval-id="${CSS.escape(session.evalId)}"]`,
    );
    if (!result) return;
    const deckRoot = result.closest('.mkdocs-revealjs-deck');
    const deck = deckRoot?._mkdocsRevealDeck;
    if (deck?.getCurrentSlide?.() === result) {
        const terminal = deckRoot.querySelector(
            `.mksq-reveal-eval-terminal[data-page-uuid="${CSS.escape(session.pageUuid)}"]`
            + `[data-eval-id="${CSS.escape(session.evalId)}"]`,
        );
        if (terminal) {
            const indices = deck.getIndices?.(terminal) || {};
            deck.slide?.(indices.h ?? 0, indices.v ?? 0);
        }
    }
    result.remove();
    deck?.sync?.();
}

function _evalRevealDeckRoot(session) {
    if (!session || session.host !== 'revealjs' || !session.deckId) return null;
    return document.getElementById(`mkdocs-revealjs-${session.deckId}`);
}

function _evalRevealDeck(session) {
    return _evalRevealDeckRoot(session)?._mkdocsRevealDeck || null;
}

function _evalFullscreenTarget(session) {
    if (session?.host === 'revealjs') {
        const deckRoot = _evalRevealDeckRoot(session);
        const deck = deckRoot?._mkdocsRevealDeck;
        // This mirrors reveal.js' own F shortcut for embedded decks: fullscreen
        // the Reveal viewport/root, not the whole MkDocs document.
        return deck?.getViewportElement?.() || deckRoot;
    }
    return document.documentElement;
}

function _evalOverlayHost(session) {
    const fullscreen = document.fullscreenElement || document.webkitFullscreenElement || null;
    if (session?.host === 'revealjs' && fullscreen) {
        const deckRoot = _evalRevealDeckRoot(session);
        if (deckRoot && (fullscreen === deckRoot || fullscreen.contains?.(deckRoot) || deckRoot.contains?.(fullscreen))) {
            return fullscreen;
        }
    }
    return document.body;
}

function _requestEvalFullscreen(session, triggerEvent = null, options = {}) {
    const force = options?.force === true;
    const fullscreen = document.fullscreenElement || document.webkitFullscreenElement || null;
    if (!session || (!force && session.policy?.fullscreen?.required !== true) || fullscreen) {
        return Promise.resolve(false);
    }
    const target = _evalFullscreenTarget(session);
    if (!target?.requestFullscreen) return Promise.resolve(false);
    const trustedEvent = triggerEvent
        && (triggerEvent.type === 'pointerdown' || triggerEvent.type === 'keydown' || triggerEvent.type === 'submit')
        && triggerEvent.isTrusted !== false;
    const userActivation = navigator.userActivation?.isActive;
    if (!trustedEvent && userActivation === false) return Promise.resolve(false);

    session.fullscreenRequested = true;
    const fullscreenOptions = session.policy?.type === 'strict'
        ? { keyboardLock: 'browser' }
        : undefined;
    const markSuccess = () => {
        session.fullscreenWasActive = true;
        session.fullscreenRequestFailed = false;
        return true;
    };
    const markFailure = (error) => {
        session.fullscreenRequested = false;
        session.fullscreenRequestFailed = true;
        if (session.started) {
            _recordEvalViolation(session, 'fullscreen_exit', { reason: 'request_denied' });
        }
        console.warn('[quiz] evaluation fullscreen request failed:', error);
        return false;
    };

    // Some browsers accept Fullscreen API but reject experimental option
    // dictionaries. Strict mode first tries keyboardLock, then falls back to a
    // plain requestFullscreen() while the same user activation is still live.
    let request;
    try {
        request = target.requestFullscreen(fullscreenOptions);
    } catch (error) {
        if (!fullscreenOptions) return Promise.resolve(markFailure(error));
        try {
            request = target.requestFullscreen();
        } catch (fallbackError) {
            return Promise.resolve(markFailure(fallbackError));
        }
    }
    return Promise.resolve(request).then(markSuccess).catch((error) => {
        if (!fullscreenOptions || document.fullscreenElement || document.webkitFullscreenElement) {
            return markFailure(error);
        }
        try {
            return Promise.resolve(target.requestFullscreen()).then(markSuccess).catch(markFailure);
        } catch (fallbackError) {
            return markFailure(fallbackError);
        }
    });
}

function requestEvalFullscreen(pageUuid, evalId) {
    const session = _evalViolationSession(pageUuid, evalId);
    if (!session) return;
    session.fullscreenRequested = false;
    _requestEvalFullscreen(session);
}

function _activateEvalViolationSession(session, triggerEvent = null) {
    if (!session || session.finalized || session.accessUnlocked !== true) return;
    if (!session.started) {
        session.started = true;
        session.startedAt = Date.now();
    }
    _mksqEvalViolationRuntime.activeKey = session.key;
    _safeSessionStorageSet(_evalViolationActiveStorageKey(), session.key);
    _persistEvalViolationSession(session);
    _renderEvalViolationLive(session);
    _scheduleEvalQrReportRefresh(session);

    if (
        session.policy?.fullscreen?.required === true
        && !document.fullscreenElement
        && !session.fullscreenRequested
    ) {
        _requestEvalFullscreen(session, triggerEvent);
    }
}

function _evalViolationSessionFromTarget(target) {
    const element = target instanceof Element ? target : null;
    if (!element) return null;
    const question = element.closest('.mkdocs-superquiz[data-display-mode="eval"][data-eval-id]');
    if (question) return _evalViolationSession(question.dataset.pageUuid, question.dataset.evalId);
    const actions = element.closest('.mksq-eval-actions[data-page-uuid][data-eval-id]');
    if (actions) return _evalViolationSession(actions.dataset.pageUuid, actions.dataset.evalId);
    const navigation = element.closest('.mksq-page-navigation[data-page-uuid][data-eval-id]');
    if (navigation) return _evalViolationSession(navigation.dataset.pageUuid, navigation.dataset.evalId);
    const result = element.closest('.mksq-reveal-eval-result[data-page-uuid][data-eval-id]');
    if (result) return _evalViolationSession(result.dataset.pageUuid, result.dataset.evalId);
    return null;
}

function _currentRevealEvalViolationSession() {
    for (const session of _mksqEvalViolationSessions.values()) {
        if (session.host !== 'revealjs') continue;
        const deckRoot = document.getElementById(`mkdocs-revealjs-${session.deckId}`);
        const current = deckRoot?._mkdocsRevealDeck?.getCurrentSlide?.();
        if (!current) continue;
        const owner = current.querySelector?.('.mkdocs-superquiz[data-display-mode="eval"]');
        if (owner?.dataset?.evalId === session.evalId) return session;
        if (
            current.dataset?.evalId === session.evalId
            && (current.classList.contains('mksq-reveal-eval-terminal')
                || current.classList.contains('mksq-reveal-eval-result'))
        ) return session;
    }
    return null;
}

function _activeEvalViolationSession() {
    const active = _mksqEvalViolationSessions.get(_mksqEvalViolationRuntime.activeKey || '');
    if (active && active.accessUnlocked === true && active.started && !active.finalized) return active;
    return null;
}

function _interactionEvalViolationSession(event) {
    const element = event?.target instanceof Element ? event.target : null;
    if (element?.closest('.mksq-eval-access-gate')) return null;
    const direct = _evalViolationSessionFromTarget(event?.target);
    if (direct?.accessUnlocked === true) return direct;
    const reveal = _currentRevealEvalViolationSession();
    if (reveal?.accessUnlocked === true) return reveal;
    const pageSessions = Array.from(_mksqEvalViolationSessions.values())
        .filter((session) => (
            session.host === 'page'
            && session.accessUnlocked === true
            && !session.finalized
        ));
    return pageSessions.length === 1 ? pageSessions[0] : null;
}

function _checkEvalViolationStorageTampering(session) {
    if (!session || !session.started || session.finalized || session.checkingTamper) return;
    const actual = _safeSessionStorageGet(session.storageKey);
    if (actual === session.expectedStorageRaw) return;
    session.checkingTamper = true;
    try {
        _recordEvalViolation(session, 'storage_tampering', {
            reason: actual === null ? 'removed' : 'modified',
        });
    } finally {
        session.checkingTamper = false;
    }
}

function _bindEvalViolationGlobalListeners() {
    if (_mksqEvalViolationRuntime.bound) return;
    _mksqEvalViolationRuntime.bound = true;

    const activate = (event) => {
        const session = _interactionEvalViolationSession(event);
        if (session) _activateEvalViolationSession(session, event);
    };
    document.addEventListener('pointerdown', activate, true);
    document.addEventListener('input', activate, true);
    document.addEventListener('keydown', (event) => {
        const session = _interactionEvalViolationSession(event) || _activeEvalViolationSession();
        if (session) _activateEvalViolationSession(session, event);
        const active = _activeEvalViolationSession();
        const key = String(event.key || '').toLowerCase();

        // Best-effort browser-chrome guard for strict evaluations. Browsers are
        // allowed to reserve F11 themselves, so this cannot be guaranteed on
        // every browser/OS combination. When the key event reaches the page,
        // however, strict evaluations cancel it before the browser default.
        // If a browser still leaves Fullscreen API mode, fullscreenchange keeps
        // recording the canonical fullscreen_exit violation independently.
        if (active?.policy?.type === 'strict' && key === 'f11') {
            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation?.();
            return;
        }

        if (active && (key === 'f5' || ((event.ctrlKey || event.metaKey) && key === 'r'))) {
            _recordEvalViolation(active, 'reload_attempt', { key: event.key || '' });
        }
    }, true);

    document.addEventListener('visibilitychange', () => {
        const session = _activeEvalViolationSession();
        if (session && document.visibilityState === 'hidden') {
            _recordEvalViolation(session, 'visibility_hidden');
        }
    });
    window.addEventListener('blur', () => {
        const session = _activeEvalViolationSession();
        if (session) _recordEvalViolation(session, 'focus_lost');
    });
    document.addEventListener('fullscreenchange', () => {
        const session = _activeEvalViolationSession();
        if (!session) return;
        if (document.fullscreenElement) {
            session.fullscreenWasActive = true;
            return;
        }
        if (session.fullscreenWasActive) {
            session.fullscreenWasActive = false;
            _recordEvalViolation(session, 'fullscreen_exit');
        }
    });

    for (const type of ['copy', 'cut', 'paste']) {
        document.addEventListener(type, () => {
            const session = _activeEvalViolationSession();
            if (session) _recordEvalViolation(session, type);
        }, true);
    }
    document.addEventListener('contextmenu', () => {
        const session = _activeEvalViolationSession();
        if (session) _recordEvalViolation(session, 'context_menu');
    }, true);
    window.addEventListener('beforeprint', () => {
        const session = _activeEvalViolationSession();
        if (session) _recordEvalViolation(session, 'print');
    });

    document.addEventListener('click', (event) => {
        const session = _activeEvalViolationSession();
        if (!session) return;
        const link = event.target instanceof Element ? event.target.closest('a[href]') : null;
        if (!link || link.target === '_blank' || link.hasAttribute('download')) return;
        try {
            const target = new URL(link.href, window.location.href);
            const current = new URL(window.location.href);
            if (
                target.origin !== current.origin
                || target.pathname !== current.pathname
                || target.search !== current.search
            ) {
                const recorded = _recordEvalViolation(session, 'page_leave', { reason: 'link' });
                if (recorded) session.lastPageLeaveRecordedAt = Date.now();
            }
        } catch (_) {}
    }, true);

    window.addEventListener('pagehide', () => {
        const session = _activeEvalViolationSession();
        if (!session) return;
        const timestamp = Date.now();
        _safeSessionStorageSet(
            _evalViolationPendingLeaveKey(),
            JSON.stringify({
                key: session.key,
                timestamp,
                recorded: timestamp - Number(session.lastPageLeaveRecordedAt || 0) < 2000,
            }),
        );
    });

    _mksqEvalViolationRuntime.tamperInterval = setInterval(() => {
        _checkEvalViolationStorageTampering(_activeEvalViolationSession());
    }, 1000);
}

function _processEvalViolationNavigationResume() {
    if (_mksqEvalViolationRuntime.reloadProcessed) return;
    const activeKey = _safeSessionStorageGet(_evalViolationActiveStorageKey());
    const session = activeKey ? _mksqEvalViolationSessions.get(activeKey) : null;
    if (!session || session.accessUnlocked !== true || !session.started || session.finalized) return;

    let navigationType = '';
    try {
        navigationType = performance.getEntriesByType('navigation')?.[0]?.type || '';
    } catch (_) {}

    if (navigationType === 'reload') {
        _recordEvalViolation(session, 'reload');
        _safeSessionStorageRemove(_evalViolationPendingLeaveKey());
        _mksqEvalViolationRuntime.reloadProcessed = true;
        _mksqEvalViolationRuntime.activeKey = session.key;
        return;
    }

    const pendingRaw = _safeSessionStorageGet(_evalViolationPendingLeaveKey());
    if (pendingRaw) {
        try {
            const pending = JSON.parse(pendingRaw);
            if (pending?.key === session.key) {
                if (pending.recorded !== true) {
                    _recordEvalViolation(session, 'page_leave', { reason: 'navigation' });
                }
                _safeSessionStorageRemove(_evalViolationPendingLeaveKey());
            }
        } catch (_) {
            _safeSessionStorageRemove(_evalViolationPendingLeaveKey());
        }
    }
    _mksqEvalViolationRuntime.reloadProcessed = true;
    _mksqEvalViolationRuntime.activeKey = session.key;
}

function initEvalViolationMonitoring() {
    const seenKeys = new Set();
    document.querySelectorAll('.mksq-eval-actions[data-page-uuid][data-eval-id]').forEach((actions) => {
        const pageUuid = String(actions.dataset.pageUuid || '');
        const evalId = String(actions.dataset.evalId || '');
        if (!pageUuid || !evalId) return;
        const key = _evalViolationSessionKey(pageUuid, evalId);
        seenKeys.add(key);
        let session = _mksqEvalViolationSessions.get(key);
        if (!session) {
            session = {
                key,
                pageUuid,
                evalId,
                deckId: String(actions.dataset.deckId || ''),
                host: String(actions.dataset.host || 'page'),
                policy: _parseEvalPolicy(actions),
                access: _parseEvalAccess(actions),
                accessUnlocked: false,
                storageKey: _evalViolationStorageKey(pageUuid, evalId),
                started: false,
                finalized: false,
                blocked: false,
                invalidated: false,
                violations: [],
                qrSessionId: '',
                qrRevision: 0,
                expectedStorageRaw: null,
                fullscreenRequested: false,
                fullscreenWasActive: Boolean(document.fullscreenElement),
                checkingTamper: false,
            };
            _restoreEvalViolationSession(session);
            if (!session.qrSessionId) {
                session.qrSessionId = window.crypto?.randomUUID?.() || `mksq-${Date.now()}-${Math.random().toString(36).slice(2)}`;
                _persistEvalViolationSession(session);
            }
            _restoreEvalAccessState(session);
            _mksqEvalViolationSessions.set(key, session);
        } else {
            session.policy = _parseEvalPolicy(actions);
            session.access = _parseEvalAccess(actions);
            _restoreEvalAccessState(session);
            session.deckId = String(actions.dataset.deckId || session.deckId || '');
            session.host = String(actions.dataset.host || session.host || 'page');
        }
        _bindRevealEvalFullscreenEntry(session);
    });

    for (const key of Array.from(_mksqEvalViolationSessions.keys())) {
        if (seenKeys.has(key)) continue;
        _mksqEvalViolationSessions.delete(key);
        if (_mksqEvalViolationRuntime.activeKey === key) {
            _mksqEvalViolationRuntime.activeKey = null;
            _safeSessionStorageRemove(_evalViolationActiveStorageKey());
        }
    }

    _bindEvalViolationGlobalListeners();
    _processEvalViolationNavigationResume();
}

function _base64UrlToBytes(value) {
    const text = String(value || '').replace(/-/g, '+').replace(/_/g, '/');
    const padded = text + '='.repeat((4 - (text.length % 4)) % 4);
    const binary = atob(padded);
    const out = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i += 1) out[i] = binary.charCodeAt(i);
    return out;
}

function _bytesToBase64Url(value) {
    let binary = '';
    value.forEach((byte) => { binary += String.fromCharCode(byte); });
    return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

const MKSQ_QR_REPORT_HASH_PREFIX = '#mksq-report=';
const MKSQ_QR_REPORT_PRIVATE_AAD = new TextEncoder().encode('mkdocs-superquiz:qr-report-private-key:v2');
const MKSQ_QR_REPORT_HKDF_INFO = new TextEncoder().encode('mkdocs-superquiz:qr-report-snapshot:v2');
const MKSQ_QR_REPORT_VIOLATION_TYPES = [
    'fullscreen_exit',
    'visibility_hidden',
    'focus_lost',
    'reload_attempt',
    'reload',
    'page_leave',
    'copy',
    'cut',
    'paste',
    'context_menu',
    'print',
    'storage_tampering',
];
let _mksqQrReportPublicKeyPromise = null;

function _qrReportCryptoConfig() {
    const config = window.QUIZ_CONFIG?.qr_report_crypto;
    return config && typeof config === 'object' ? config : {};
}

function _qrReportEnabled(session) {
    return session?.policy?.qr_report?.enabled === true;
}

function _qrReportCounts(session) {
    const counts = {};
    (session?.violations || []).forEach((violation) => {
        const type = String(violation?.type || 'unknown');
        counts[type] = Number(counts[type] || 0) + 1;
    });
    return counts;
}

function _qrReportSnapshot(session) {
    const counts = _qrReportCounts(session);
    // Compact on purpose: page/title are already available on the destination
    // URL.  Fixed-order counts avoid repeating long violation names in every
    // encrypted QR refresh.
    return {
        e: String(session.evalId || ''),
        s: String(session.qrSessionId || ''),
        t: Date.now(),
        c: MKSQ_QR_REPORT_VIOLATION_TYPES.map((type) => Number(counts[type] || 0)),
    };
}

async function _qrReportPublicKey() {
    if (_mksqQrReportPublicKeyPromise) return _mksqQrReportPublicKeyPromise;
    const config = _qrReportCryptoConfig();
    if (!config?.public_key?.raw || !window.crypto?.subtle) return null;
    _mksqQrReportPublicKeyPromise = window.crypto.subtle.importKey(
        'raw',
        _base64UrlToBytes(config.public_key.raw),
        { name: 'ECDH', namedCurve: 'P-256' },
        false,
        [],
    );
    return _mksqQrReportPublicKeyPromise;
}

async function _deriveQrReportAesKey(privateKey, publicKey, salt, usages) {
    const sharedBits = await window.crypto.subtle.deriveBits(
        { name: 'ECDH', public: publicKey },
        privateKey,
        256,
    );
    const hkdfMaterial = await window.crypto.subtle.importKey(
        'raw',
        sharedBits,
        'HKDF',
        false,
        ['deriveKey'],
    );
    return window.crypto.subtle.deriveKey(
        {
            name: 'HKDF',
            hash: 'SHA-256',
            salt,
            info: MKSQ_QR_REPORT_HKDF_INFO,
        },
        hkdfMaterial,
        { name: 'AES-GCM', length: 256 },
        false,
        usages,
    );
}

async function _encryptQrReportSnapshot(session) {
    const recipientPublicKey = await _qrReportPublicKey();
    if (!recipientPublicKey) throw new Error('QR report public key is unavailable.');

    const ephemeralKeyPair = await window.crypto.subtle.generateKey(
        { name: 'ECDH', namedCurve: 'P-256' },
        true,
        ['deriveBits'],
    );
    const ephemeralPublicRaw = new Uint8Array(await window.crypto.subtle.exportKey(
        'raw',
        ephemeralKeyPair.publicKey,
    ));
    const salt = window.crypto.getRandomValues(new Uint8Array(16));
    const iv = window.crypto.getRandomValues(new Uint8Array(12));
    const aesKey = await _deriveQrReportAesKey(
        ephemeralKeyPair.privateKey,
        recipientPublicKey,
        salt,
        ['encrypt'],
    );
    const plaintext = new TextEncoder().encode(JSON.stringify(_qrReportSnapshot(session)));
    const ciphertext = new Uint8Array(await window.crypto.subtle.encrypt(
        { name: 'AES-GCM', iv },
        aesKey,
        plaintext,
    ));
    return `v2.${_bytesToBase64Url(ephemeralPublicRaw)}.${_bytesToBase64Url(salt)}.${_bytesToBase64Url(iv)}.${_bytesToBase64Url(ciphertext)}`;
}

function _qrReportUrl(payload) {
    const url = new URL(window.location.href);
    url.hash = `mksq-report=${payload}`;
    return url.toString();
}

function _qrReportVisible(session) {
    return _qrReportEnabled(session) && session?.policy?.toolbar?.show_qrcode !== false;
}

function _qrReportContainer(session) {
    if (!session) return null;
    return document.querySelector(
        `.mksq-eval-toolbar[data-page-uuid="${CSS.escape(String(session.pageUuid || ''))}"]`
        + `[data-eval-id="${CSS.escape(String(session.evalId || ''))}"] .mksq-eval-toolbar-qr`
    );
}

function _qrReportFallbackSession() {
    const active = _activeEvalViolationSession();
    if (_qrReportVisible(active)) return active;
    return Array.from(_mksqEvalViolationSessions.values()).find(
        (session) => session.host === 'page' && _qrReportVisible(session)
    ) || null;
}

function _renderQrReportSvg(container, url) {
    if (!container || typeof qrcode === 'undefined') return;
    const qr = qrcode(0, 'L');
    qr.addData(url);
    qr.make();

    // Four quiet-zone modules are required around the symbol.  Render at an
    // integer 3 px/module so dense encrypted QR codes are not blurred by CSS
    // downscaling; with the compact v2 payload this is normally ~190-210 px.
    const cellSize = 3;
    const margin = cellSize * 4;
    const pixelSize = (qr.getModuleCount() + 8) * cellSize;
    container.style.setProperty('--mksq-qr-size', `${pixelSize}px`);
    container.innerHTML = qr.createSvgTag({ cellSize, margin, scalable: true });
    const svg = container.querySelector('svg');
    if (svg) {
        svg.setAttribute('aria-label', tForPage('ui.qr_report_title', 'Live violations QR report'));
        svg.setAttribute('role', 'img');
    }
}

async function _refreshEvalQrReport(session = null) {
    const target = session && _qrReportVisible(session) ? session : _qrReportFallbackSession();
    const container = _qrReportContainer(target);
    if (!container) return;
    if (!target) {
        container.hidden = true;
        return;
    }
    container.hidden = false;
    const revision = Number(target.qrRevision || 0) + 1;
    target.qrRevision = revision;
    container.classList.add('mksq-qr-report-updating');
    try {
        const payload = await _encryptQrReportSnapshot(target);
        if (target.qrRevision !== revision) return;
        _renderQrReportSvg(container, _qrReportUrl(payload));
        container.dataset.evalId = target.evalId;
        container.dataset.sessionId = target.qrSessionId;
        container.title = tForPage('ui.qr_report_title', 'Live violations QR report');
    } catch (error) {
        console.error('[quiz] QR report refresh failed:', error);
        if (target.qrRevision === revision) container.textContent = 'QR !';
    } finally {
        if (target.qrRevision === revision) container.classList.remove('mksq-qr-report-updating');
    }
}

function _scheduleEvalQrReportRefresh(session = null) {
    const target = session && _qrReportVisible(session) ? session : _qrReportFallbackSession();
    if (!target) return;
    window.clearTimeout(target.qrRefreshTimer);
    target.qrRefreshTimer = window.setTimeout(() => { _refreshEvalQrReport(target); }, 25);
}

async function _decryptQrReportPrivateKey(teacherCode) {
    const config = _qrReportCryptoConfig()?.private_key;
    if (!config?.ciphertext || !window.crypto?.subtle) throw new Error('QR report private key is unavailable.');
    const keyMaterial = await window.crypto.subtle.importKey(
        'raw',
        new TextEncoder().encode(String(teacherCode || '')),
        'PBKDF2',
        false,
        ['deriveKey'],
    );
    const wrappingKey = await window.crypto.subtle.deriveKey(
        {
            name: 'PBKDF2',
            hash: 'SHA-256',
            salt: _base64UrlToBytes(config.salt),
            iterations: Number(config.iterations || 0),
        },
        keyMaterial,
        { name: 'AES-GCM', length: 256 },
        false,
        ['decrypt'],
    );
    const privateDer = await window.crypto.subtle.decrypt(
        {
            name: 'AES-GCM',
            iv: _base64UrlToBytes(config.iv),
            additionalData: config.aad ? _base64UrlToBytes(config.aad) : MKSQ_QR_REPORT_PRIVATE_AAD,
        },
        wrappingKey,
        _base64UrlToBytes(config.ciphertext),
    );
    return window.crypto.subtle.importKey(
        'pkcs8',
        privateDer,
        { name: 'ECDH', namedCurve: 'P-256' },
        false,
        ['deriveBits'],
    );
}

async function _decryptQrReportPayload(payload, teacherCode) {
    const parts = String(payload || '').split('.');
    if (parts.length !== 5 || parts[0] !== 'v2') throw new Error('Invalid QR report payload.');
    const privateKey = await _decryptQrReportPrivateKey(teacherCode);
    const ephemeralPublicKey = await window.crypto.subtle.importKey(
        'raw',
        _base64UrlToBytes(parts[1]),
        { name: 'ECDH', namedCurve: 'P-256' },
        false,
        [],
    );
    const aesKey = await _deriveQrReportAesKey(
        privateKey,
        ephemeralPublicKey,
        _base64UrlToBytes(parts[2]),
        ['decrypt'],
    );
    const plaintext = await window.crypto.subtle.decrypt(
        { name: 'AES-GCM', iv: _base64UrlToBytes(parts[3]) },
        aesKey,
        _base64UrlToBytes(parts[4]),
    );
    const compact = JSON.parse(new TextDecoder().decode(plaintext));
    const counts = {};
    const rawCounts = Array.isArray(compact?.c) ? compact.c : [];
    MKSQ_QR_REPORT_VIOLATION_TYPES.forEach((type, index) => {
        const count = Number(rawCounts[index] || 0);
        if (count > 0) counts[type] = count;
    });
    return {
        title: document.title || tForPage('ui.qr_report_heading', 'Evaluation violations'),
        page: `${window.location.pathname}${window.location.search}`,
        eval: String(compact?.e || ''),
        session: String(compact?.s || ''),
        at: Number(compact?.t || Date.now()),
        counts,
    };
}

function _renderQrReportData(container, report) {
    container.replaceChildren();
    const title = document.createElement('h1');
    title.textContent = report.title || tForPage('ui.qr_report_heading', 'Evaluation violations');
    container.appendChild(title);

    const meta = document.createElement('dl');
    meta.className = 'mksq-qr-report-meta';
    const addMeta = (label, value) => {
        const dt = document.createElement('dt'); dt.textContent = label;
        const dd = document.createElement('dd'); dd.textContent = value;
        meta.append(dt, dd);
    };
    addMeta(tForPage('ui.qr_report_page', 'Page'), String(report.page || ''));
    addMeta(tForPage('ui.qr_report_eval', 'Evaluation'), String(report.eval || ''));
    addMeta(tForPage('ui.qr_report_session', 'Session'), String(report.session || ''));
    addMeta(tForPage('ui.qr_report_snapshot', 'Snapshot'), new Date(Number(report.at || Date.now())).toLocaleString());
    container.appendChild(meta);

    const counts = report.counts && typeof report.counts === 'object' ? report.counts : {};
    const list = document.createElement('ul');
    list.className = 'mksq-qr-report-counts';
    let total = 0;
    Object.entries(counts).forEach(([type, rawCount]) => {
        const count = Number(rawCount || 0);
        total += count;
        const item = document.createElement('li');
        item.textContent = `${type}: ${count}`;
        list.appendChild(item);
    });
    if (!list.children.length) {
        const item = document.createElement('li');
        item.textContent = tForPage('ui.violations_none', 'No violation detected.');
        list.appendChild(item);
    }
    container.appendChild(list);
    const totalElement = document.createElement('p');
    totalElement.className = 'mksq-qr-report-total';
    totalElement.textContent = `${tForPage('ui.violations_total', 'Total')}: ${total}`;
    container.appendChild(totalElement);
}

function _initQrReportViewerFromHash() {
    if (!window.location.hash.startsWith(MKSQ_QR_REPORT_HASH_PREFIX)) return false;
    const payload = window.location.hash.slice(MKSQ_QR_REPORT_HASH_PREFIX.length);
    if (!payload) return false;

    const overlay = document.createElement('main');
    overlay.className = 'mksq-qr-report-viewer';
    overlay.innerHTML = `
        <section class="mksq-qr-report-card">
            <h1>${tForPage('ui.qr_report_heading', 'Evaluation violations')}</h1>
            <form class="mksq-qr-report-form" autocomplete="off">
                <label>${tForPage('ui.teacher_code_label', 'Master teacher code')}
                    <input type="password" class="mksq-qr-report-password" autocomplete="current-password" required>
                </label>
                <button type="submit" class="mkq-validate-btn">${tForPage('ui.unlock_validate', 'Validate')}</button>
                <p class="mksq-qr-report-error" hidden></p>
            </form>
            <div class="mksq-qr-report-result" hidden></div>
        </section>`;
    document.body.appendChild(overlay);
    const form = overlay.querySelector('.mksq-qr-report-form');
    const input = overlay.querySelector('.mksq-qr-report-password');
    const error = overlay.querySelector('.mksq-qr-report-error');
    const result = overlay.querySelector('.mksq-qr-report-result');
    form?.addEventListener('submit', async (event) => {
        event.preventDefault();
        error.hidden = true;
        try {
            const report = await _decryptQrReportPayload(payload, input?.value || '');
            form.hidden = true;
            result.hidden = false;
            _renderQrReportData(result, report);
            if (input) input.value = '';
        } catch (exception) {
            console.error('[quiz] QR report unlock failed:', exception);
            error.textContent = tForPage('ui.error_teacher_code', 'Incorrect teacher code');
            error.hidden = false;
            if (input) { input.value = ''; input.focus(); }
        }
    });
    setTimeout(() => input?.focus(), 0);
    return true;
}

async function _verifyEvalAccessPassword(access, password) {
    if (!access || access.enabled !== true) return true;
    if (access.algorithm !== 'pbkdf2-sha256' || !window.crypto?.subtle) return false;
    const encoder = new TextEncoder();
    const keyMaterial = await window.crypto.subtle.importKey(
        'raw',
        encoder.encode(String(password || '')),
        'PBKDF2',
        false,
        ['deriveBits'],
    );
    const bits = await window.crypto.subtle.deriveBits(
        {
            name: 'PBKDF2',
            hash: 'SHA-256',
            salt: _base64UrlToBytes(access.salt),
            iterations: Number(access.iterations || 0),
        },
        keyMaterial,
        256,
    );
    return _bytesToBase64Url(new Uint8Array(bits)) === String(access.verifier || '');
}

function _evalAccessGate(pageUuid, evalId) {
    return document.querySelector(
        `.mksq-eval-access-gate[data-page-uuid="${CSS.escape(String(pageUuid))}"]`
        + `[data-eval-id="${CSS.escape(String(evalId))}"]`,
    );
}

function _syncEvalNavigationAccess(session) {
    if (!session) return;
    const locked = session.access?.enabled === true && session.accessUnlocked !== true;
    document.querySelectorAll(
        `.mksq-page-navigation[data-page-uuid="${CSS.escape(String(session.pageUuid || ''))}"]`
        + `[data-eval-id="${CSS.escape(String(session.evalId || ''))}"]`,
    ).forEach((navigation) => {
        navigation.hidden = locked;
        if (locked) navigation.setAttribute('aria-hidden', 'true');
        else {
            navigation.removeAttribute('aria-hidden');
            updatePageNavigationState(navigation);
        }
    });
}

function _showEvalAccessGate(session) {
    const gate = _evalAccessGate(session.pageUuid, session.evalId);
    if (!gate) return;
    gate.hidden = false;
    const input = gate.querySelector('.mksq-eval-access-input');
    if (session.host === 'page') setTimeout(() => input?.focus(), 0);
}

function _hideEvalAccessGate(session) {
    const gate = _evalAccessGate(session.pageUuid, session.evalId);
    if (!gate) return;
    gate.hidden = true;
}

async function _submitEvalAccessGate(event, session, gate) {
    event.preventDefault();
    event.stopPropagation();
    const form = gate.querySelector('.mksq-eval-access-form');
    const input = gate.querySelector('.mksq-eval-access-input');
    const button = gate.querySelector('.mksq-eval-access-submit');
    const error = gate.querySelector('.mksq-eval-access-error');
    const password = input?.value || '';

    if (!password) {
        if (error) {
            error.textContent = tForPage('ui.evaluation_password_required', 'Enter the evaluation password.');
            error.hidden = false;
        }
        input?.focus();
        return;
    }

    if (button) button.disabled = true;
    if (error) error.hidden = true;

    // Fullscreen requires a live user gesture. PBKDF2 verification below is
    // asynchronous, so waiting for it would lose that activation in browsers
    // that enforce the Fullscreen API strictly. Enter the exact Reveal viewport
    // synchronously from this submit event, keep the access gate visible while
    // verification runs, and leave fullscreen again if the password is wrong.
    const accessFullscreenRequested = (
        session.policy?.fullscreen?.required === true
        && !(document.fullscreenElement || document.webkitFullscreenElement)
    );
    // Prefer the promise created on pointerdown/Enter keydown. Those events are
    // earlier than form submit and therefore preserve browser user activation
    // more reliably for Fullscreen API. Submit remains a fallback path.
    let accessFullscreenPromise = session.accessFullscreenPromise
        || session.revealEntryFullscreenPromise
        || null;
    session.accessFullscreenPromise = null;
    if (!accessFullscreenPromise && accessFullscreenRequested) {
        session.fullscreenRequested = false;
        accessFullscreenPromise = _requestEvalFullscreen(session, event);
    }
    if (!accessFullscreenPromise) accessFullscreenPromise = Promise.resolve(false);

    try {
        const ok = await _verifyEvalAccessPassword(session.access, password);
        if (!ok) {
            const enteredForAccess = await accessFullscreenPromise.catch(() => false);
            // Page evaluations keep the current behavior and leave fullscreen
            // after a wrong password. Reveal evaluations intentionally stay in
            // fullscreen so the learner can correct/retry the password without
            // bouncing back to the surrounding MkDocs page.
            if (enteredForAccess && session.host !== 'revealjs') {
                const fullscreen = document.fullscreenElement || document.webkitFullscreenElement || null;
                const target = _evalFullscreenTarget(session);
                if (fullscreen && target && (fullscreen === target || fullscreen.contains?.(target) || target.contains?.(fullscreen))) {
                    try {
                        if (document.exitFullscreen) await document.exitFullscreen();
                        else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
                    } catch (_) {}
                }
                session.fullscreenRequested = false;
                session.fullscreenWasActive = false;
            }
            if (error) {
                error.textContent = tForPage('ui.evaluation_password_incorrect', 'Incorrect evaluation password.');
                error.hidden = false;
            }
            if (input) { input.value = ''; input.focus(); }
            return;
        }

        await accessFullscreenPromise.catch(() => false);
        session.accessUnlocked = true;
        _safeSessionStorageSet(
            _evalAccessStorageKey(session.pageUuid, session.evalId),
            String(session.access.verifier || ''),
        );
        if (input) input.value = '';
        _hideEvalAccessGate(session);
        _syncEvalNavigationAccess(session);
        initEvalToolbars();
        initPageTimers();
        document.dispatchEvent(new CustomEvent('mkdocs-superquiz-eval-unlocked', {
            detail: { pageUuid: session.pageUuid, evalId: session.evalId, deckId: session.deckId },
        }));
    } catch (errorObject) {
        console.error('[quiz] evaluation access verification failed:', errorObject);
        if (error) {
            error.textContent = tForPage('ui.evaluation_password_error', 'Unable to verify the evaluation password.');
            error.hidden = false;
        }
    } finally {
        if (button) button.disabled = false;
    }
}

function _bindRevealEvalFullscreenEntry(session) {
    if (!session || session.host !== 'revealjs' || !session.deckId) return;
    const deckRoot = _evalRevealDeckRoot(session);
    const wrapper = deckRoot?.closest?.('.mkdocs-revealjs-wrapper');
    if (!deckRoot || !wrapper) return;

    // The password gate, toolbar and numbered navigation are siblings of the
    // .reveal root inside the wrapper. Binding only on deckRoot therefore misses
    // the exact click that matters most: clicking the visible password gate.
    // Own the whole visible diapo.eval area instead.
    const previous = wrapper._mksqEvalFullscreenEntry;
    if (previous?.key === session.key) return;
    if (previous?.handler) {
        wrapper.removeEventListener('click', previous.handler, true);
    }

    const handler = (event) => {
        if (session.finalized) return;
        if (document.fullscreenElement || document.webkitFullscreenElement) return;
        if (session.revealEntryFullscreenPromise) return;

        // Every diapo.eval deck has the same entry UX, independent of
        // standard/strict and independent of password protection: the first
        // real click anywhere in the visible presentation wrapper requests
        // fullscreen immediately. The click is not consumed; inputs, buttons,
        // navigation and ordinary Reveal interactions continue normally.
        session.fullscreenRequested = false;
        const request = _requestEvalFullscreen(session, event, { force: true });
        session.revealEntryFullscreenPromise = request;
        request.then((entered) => {
            if (!entered) return;
            session.revealEntryFullscreenEntered = true;
            const gate = _evalAccessGate(session.pageUuid, session.evalId);
            setTimeout(() => gate?.querySelector('.mksq-eval-access-input')?.focus(), 0);
        }).finally(() => {
            if (session.revealEntryFullscreenPromise === request) {
                session.revealEntryFullscreenPromise = null;
            }
        });
    };

    wrapper._mksqEvalFullscreenEntry = { key: session.key, handler };
    wrapper.addEventListener('click', handler, true);
}

function initEvalAccessControl() {
    document.querySelectorAll('.mksq-eval-access-gate[data-page-uuid][data-eval-id]').forEach((gate) => {
        const session = _evalViolationSession(gate.dataset.pageUuid, gate.dataset.evalId);
        if (!session || session.access?.enabled !== true) {
            gate.hidden = true;
            if (session) _syncEvalNavigationAccess(session);
            return;
        }
        if (session.accessUnlocked === true) {
            gate.hidden = true;
            _syncEvalNavigationAccess(session);
            return;
        }
        gate.hidden = false;
        _syncEvalNavigationAccess(session);
        if (gate.dataset.accessBound === 'true') return;
        gate.dataset.accessBound = 'true';
        const form = gate.querySelector('.mksq-eval-access-form');
        const submitButton = gate.querySelector('.mksq-eval-access-submit');
        const accessInput = gate.querySelector('.mksq-eval-access-input');
        const preflightEvalFullscreen = (event) => {
            // Do not enter fullscreen for an empty form; the submit handler will
            // simply ask for a password in that case.
            if (!String(accessInput?.value || '').trim()) return;
            if (
                session.policy?.fullscreen?.required !== true
                || document.fullscreenElement
                || document.webkitFullscreenElement
                || session.accessFullscreenPromise
                || session.revealEntryFullscreenPromise
            ) return;
            session.fullscreenRequested = false;
            session.accessFullscreenPromise = _requestEvalFullscreen(session, event);
        };
        submitButton?.addEventListener('pointerdown', preflightEvalFullscreen, { capture: true });
        form?.addEventListener('keydown', (event) => {
            if (String(event.key || '').toLowerCase() === 'enter') preflightEvalFullscreen(event);
        }, { capture: true });
        form?.addEventListener('submit', (event) => _submitEvalAccessGate(event, session, gate));
        if (session.host === 'page') {
            setTimeout(() => gate.querySelector('.mksq-eval-access-input')?.focus(), 0);
        }
    });
}

function _evalQuestionElements(pageUuid, evalId) {
    return Array.from(document.querySelectorAll(
        `.mkdocs-superquiz[data-display-mode="eval"][data-page-uuid="${CSS.escape(String(pageUuid))}"][data-eval-id="${CSS.escape(String(evalId))}"]`,
    ));
}

function _evalActions(pageUuid, evalId) {
    return document.querySelector(
        `.mksq-page-quiz-actions[data-page-uuid="${CSS.escape(String(pageUuid))}"][data-eval-id="${CSS.escape(String(evalId))}"]`,
    );
}

function _setEvalValidationEnabled(pageUuid, evalId, enabled) {
    const actions = _evalActions(pageUuid, evalId);
    const button = actions?.querySelector('.mksq-page-validate-btn');
    if (!button) return;
    button.disabled = !enabled;
    if (enabled) button.removeAttribute('aria-disabled');
    else button.setAttribute('aria-disabled', 'true');
}

function _evalScoreElements(pageUuid, evalId) {
    const selector = (
        `.mksq-page-score[data-page-uuid="${CSS.escape(String(pageUuid))}"]`
        + `[data-eval-id="${CSS.escape(String(evalId))}"]`
    );
    const targets = Array.from(document.querySelectorAll(selector));
    const actionScore = _evalActions(pageUuid, evalId)?.querySelector('.mksq-page-score') || null;
    if (actionScore && !targets.includes(actionScore)) targets.unshift(actionScore);
    return targets;
}

function _evalScoreElement(pageUuid, evalId) {
    return _evalScoreElements(pageUuid, evalId)[0] || null;
}

function _renderEvalScore(pageUuid, evalId, earned, total, { provisional = false } = {}) {
    const targets = _evalScoreElements(pageUuid, evalId);
    if (!targets.length) return { earned, total };

    const safeEarned = Number.isFinite(Number(earned)) ? Number(earned) : 0;
    const safeTotal = Number.isFinite(Number(total)) ? Number(total) : 0;
    const pct = safeTotal > 0 ? (safeEarned / safeTotal) * 100 : 0;
    const label = provisional
        ? tForPage('ui.provisional_score_label', 'Provisional score')
        : tForPage('ui.score_label', 'Score');

    targets.forEach((target) => {
        target.dataset.earned = String(safeEarned);
        target.dataset.total = String(safeTotal);
        target.dataset.provisional = provisional ? 'true' : 'false';
        target.textContent = `${label}: ${safeEarned.toFixed(2)}/${safeTotal.toFixed(2)} (${pct.toFixed(1)}%)`;
        target.style.display = 'block';
        target.classList.remove('good', 'medium', 'bad', 'mksq-score-provisional');

        if (provisional) target.classList.add('mksq-score-provisional');
        else if (pct >= 75) target.classList.add('good');
        else if (pct >= 50) target.classList.add('medium');
        else target.classList.add('bad');
    });

    return { earned: safeEarned, total: safeTotal };
}

function _clearEvalScore(pageUuid, evalId) {
    _evalScoreElements(pageUuid, evalId).forEach((score) => {
        score.style.display = 'none';
        score.textContent = '';
        delete score.dataset.earned;
        delete score.dataset.total;
        delete score.dataset.provisional;
        score.classList.remove('good', 'medium', 'bad', 'mksq-score-provisional');
    });
}

function _updateEvalScore(pageUuid, evalId) {
    let earned = 0;
    let total = 0;
    _evalQuestionElements(pageUuid, evalId).forEach((question) => {
        const score = document.getElementById(`score-${question.dataset.quizId}`);
        if (!score || score.dataset.total === undefined) return;
        earned += Number(score.dataset.earned || 0);
        total += Number(score.dataset.total || 0);
    });
    return _renderEvalScore(pageUuid, evalId, earned, total);
}

function _markEvalScoreProvisional(pageUuid, evalId, removedQuestionScore) {
    const target = _evalScoreElement(pageUuid, evalId);
    if (!target || target.dataset.total === undefined) {
        _setEvalValidationEnabled(pageUuid, evalId, true);
        return;
    }
    const previousEarned = Number(target.dataset.earned || 0);
    const total = Number(target.dataset.total || 0);
    const removed = Number.isFinite(Number(removedQuestionScore))
        ? Number(removedQuestionScore)
        : 0;
    _renderEvalScore(pageUuid, evalId, previousEarned - removed, total, { provisional: true });
    _setEvalValidationEnabled(pageUuid, evalId, true);
}

function resetQuestion(quizId) {
    const question = getQuizRootElement(quizId);
    if (!question) return;

    const questionScore = document.getElementById(`score-${quizId}`);
    const hadEvaluatedScore = questionScore?.dataset.total !== undefined;
    const removedQuestionScore = hadEvaluatedScore
        ? Number(questionScore.dataset.earned || 0)
        : 0;
    const pageUuid = question.dataset.pageUuid;
    const evalId = question.dataset.evalId;

    resetQuestionElement(question);

    if (pageUuid && evalId) {
        if (hadEvaluatedScore) {
            _markEvalScoreProvisional(pageUuid, evalId, removedQuestionScore);
        } else {
            _setEvalValidationEnabled(pageUuid, evalId, true);
        }
    }

    const session = pageUuid && evalId ? _evalViolationSession(pageUuid, evalId) : null;
    _showTransientNotification(
        session,
        'mksq-reset-notification',
        `✅ ${tForQuestion(question, 'ui.question_has_been_reset', 'This question has been reset')}`,
        1700,
    );
}

function validateEval(pageUuid, evalId) {
    const session = _evalViolationSession(pageUuid, evalId);
    if (session?.access?.enabled === true && session.accessUnlocked !== true) {
        _showEvalAccessGate(session);
        return;
    }
    if (session && !session.started) _activateEvalViolationSession(session);
    if (session) _checkEvalViolationStorageTampering(session);

    if (session?.blocked) {
        _renderEvalStatus(session, 'blocked');
        _renderEvalViolationSummary(session);
        _showTransientNotification(
            session,
            'mksq-eval-violation-warning',
            `⛔ ${tForPage(
                'ui.evaluation_validation_blocked_message',
                'This evaluation cannot be validated because of a blocking violation.',
            )}`,
            2600,
        );
        return;
    }

    if (session?.host === 'revealjs') _ensureRevealEvalResult(session);

    const questions = _evalQuestionElements(pageUuid, evalId);
    questions.forEach((question) => validateQuestion(question.dataset.quizId));
    _updateEvalScore(pageUuid, evalId);
    _setEvalValidationEnabled(pageUuid, evalId, false);

    if (session) {
        session.finalized = true;
        _stopEvalTimer(pageUuid, evalId);
        _persistEvalViolationSession(session);
        _removeEvalViolationLivePanel(session);
        _renderEvalStatus(session, session.invalidated ? 'invalidated' : 'validated');
        _renderEvalViolationSummary(session);
        if (_mksqEvalViolationRuntime.activeKey === session.key) {
            _mksqEvalViolationRuntime.activeKey = null;
            _safeSessionStorageRemove(_evalViolationActiveStorageKey());
        }
        if (session.host === 'revealjs') _showRevealEvalResult(session);
    }
}


function _evalToolbar(session) {
    if (!session) return null;
    return document.querySelector(
        `.mksq-eval-toolbar[data-page-uuid="${CSS.escape(String(session.pageUuid || ''))}"]`
        + `[data-eval-id="${CSS.escape(String(session.evalId || ''))}"]`
    );
}

function _pageToolbarHeaderTracking(toolbar) {
    if (!toolbar || toolbar.dataset.host !== 'page') return;
    if (typeof toolbar._mksqHeaderCleanup === 'function') {
        toolbar._mksqHeaderCleanup();
        toolbar._mksqHeaderCleanup = null;
    }
    const header = document.querySelector('.md-header[data-md-component="header"], header.md-header, .md-header');
    if (!header) return;
    let frame = 0;
    const update = () => {
        frame = 0;
        if (toolbar.dataset.mounted === 'floating') return;
        const rect = header.getBoundingClientRect();
        toolbar.style.setProperty('--mksq-eval-toolbar-top', `${Math.max(2, Math.round(rect.bottom) + 8)}px`);
    };
    const schedule = () => {
        if (frame) cancelAnimationFrame(frame);
        frame = requestAnimationFrame(update);
    };
    let resizeObserver = null;
    if (typeof ResizeObserver === 'function') {
        resizeObserver = new ResizeObserver(schedule);
        resizeObserver.observe(header);
    }
    window.addEventListener('resize', schedule, { passive: true });
    window.addEventListener('orientationchange', schedule, { passive: true });
    document.addEventListener('scroll', schedule, { passive: true, capture: true });
    toolbar._mksqHeaderCleanup = () => {
        if (frame) cancelAnimationFrame(frame);
        resizeObserver?.disconnect?.();
        window.removeEventListener('resize', schedule);
        window.removeEventListener('orientationchange', schedule);
        document.removeEventListener('scroll', schedule, true);
    };
    update();
}

function _installEvalToolbarDragging(toolbar) {
    if (!toolbar || toolbar.dataset.draggable !== 'true' || toolbar.dataset.dragBound === 'true') return;
    toolbar.dataset.dragBound = 'true';
    const handle = toolbar.querySelector('.mksq-eval-toolbar-drag-handle') || toolbar;
    handle.addEventListener('pointerdown', (event) => {
        if (event.button !== undefined && event.button !== 0) return;
        const startRect = toolbar.getBoundingClientRect();
        const startX = event.clientX;
        const startY = event.clientY;
        const reveal = toolbar.dataset.host === 'revealjs';
        const container = reveal ? toolbar.parentElement : null;
        const bounds = reveal ? container?.getBoundingClientRect?.() : null;
        let dragging = false;

        const move = (moveEvent) => {
            const dx = moveEvent.clientX - startX;
            const dy = moveEvent.clientY - startY;
            if (!dragging && Math.hypot(dx, dy) < 4) return;
            if (!dragging) {
                dragging = true;
                toolbar.dataset.mounted = 'floating';
                toolbar.classList.add('mksq-eval-toolbar-dragging');
                toolbar.style.right = 'auto';
                toolbar.style.bottom = 'auto';
            }
            moveEvent.preventDefault();
            let left = startRect.left + dx;
            let top = startRect.top + dy;
            if (reveal && bounds) {
                left -= bounds.left;
                top -= bounds.top;
                left = Math.max(0, Math.min(left, bounds.width - toolbar.offsetWidth));
                top = Math.max(0, Math.min(top, bounds.height - toolbar.offsetHeight));
            } else {
                left = Math.max(0, Math.min(left, window.innerWidth - toolbar.offsetWidth));
                top = Math.max(0, Math.min(top, window.innerHeight - toolbar.offsetHeight));
            }
            toolbar.style.left = `${left}px`;
            toolbar.style.top = `${top}px`;
        };
        const end = () => {
            document.removeEventListener('pointermove', move);
            document.removeEventListener('pointerup', end);
            document.removeEventListener('pointercancel', end);
            toolbar.classList.remove('mksq-eval-toolbar-dragging');
        };
        document.addEventListener('pointermove', move, { passive: false });
        document.addEventListener('pointerup', end, { once: true });
        document.addEventListener('pointercancel', end, { once: true });
        event.preventDefault();
    });
}

function _syncEvalToolbar(session) {
    const toolbar = _evalToolbar(session);
    if (!toolbar) return;
    const locked = session.access?.enabled === true && session.accessUnlocked !== true;
    toolbar.hidden = locked;
    if (locked) return;

    const qr = toolbar.querySelector('.mksq-eval-toolbar-qr');
    if (qr) qr.hidden = !_qrReportVisible(session);
    if (_qrReportVisible(session)) _scheduleEvalQrReportRefresh(session);

    if (toolbar.dataset.mounted !== 'floating') {
        const requested = String(session.policy?.toolbar?.position || toolbar.dataset.toolbarPosition || 'auto');
        const navPosition = String(toolbar.dataset.navigationPosition || 'top');
        const side = ['left', 'right'].includes(requested)
            ? requested
            : (navPosition === 'right' ? 'left' : 'right');
        toolbar.classList.toggle('mksq-eval-toolbar-side-left', side === 'left');
        toolbar.classList.toggle('mksq-eval-toolbar-side-right', side === 'right');
    }
    _pageToolbarHeaderTracking(toolbar);
    _installEvalToolbarDragging(toolbar);
    _renderEvalViolationLive(session);
}

function initEvalToolbars() {
    _mksqEvalViolationSessions.forEach((session) => _syncEvalToolbar(session));
}


function _timerDurationSeconds(raw) {
    if (typeof raw === 'number') return Math.max(0, raw);
    const text = String(raw || '').trim().toLowerCase();
    if (!text) return 0;
    const match = text.match(/^([0-9]+(?:\.[0-9]+)?)\s*(s|m|h)?$/);
    if (match) {
        const multiplier = match[2] === 'h' ? 3600 : match[2] === 'm' ? 60 : 1;
        return Math.round(Number(match[1]) * multiplier);
    }
    const parts = text.split(':').map(Number);
    if (parts.every(Number.isFinite)) {
        if (parts.length === 2) return parts[0] * 60 + parts[1];
        if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
    }
    return 0;
}

function _formatTimer(seconds) {
    const value = Math.max(0, Math.floor(seconds));
    const h = Math.floor(value / 3600);
    const m = Math.floor((value % 3600) / 60);
    const s = value % 60;
    return h > 0
        ? `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
        : `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function _makeTimerDraggable(element, config, pageUuid, evalId) {
    if (!config.draggable) return;
    element.classList.add('mksq-timer-draggable');
    let active = false;
    let dx = 0;
    let dy = 0;
    element.addEventListener('pointerdown', (event) => {
        if (event.button !== undefined && event.button !== 0) return;
        active = true;
        const rect = element.getBoundingClientRect();
        dx = event.clientX - rect.left;
        dy = event.clientY - rect.top;
        element.setPointerCapture?.(event.pointerId);
        event.preventDefault();
    });
    element.addEventListener('pointermove', (event) => {
        if (!active) return;
        element.style.left = `${Math.max(0, event.clientX - dx)}px`;
        element.style.top = `${Math.max(0, event.clientY - dy)}px`;
        element.style.right = 'auto';
        element.style.bottom = 'auto';
    });
    const stop = () => {
        if (!active) return;
        active = false;
        if (config.remember_position) {
            localStorage.setItem(`mksq_timer_${pageUuid}_${evalId}`, JSON.stringify({ left: element.style.left, top: element.style.top }));
        }
    };
    element.addEventListener('pointerup', stop);
    element.addEventListener('pointercancel', stop);
}

function _stopEvalTimer(pageUuid, evalId) {
    const element = document.querySelector(
        `.mksq-page-timer[data-page-uuid="${CSS.escape(String(pageUuid))}"][data-eval-id="${CSS.escape(String(evalId))}"]`,
    );
    if (!element) return;
    if (element._mksqTimerInterval) {
        clearInterval(element._mksqTimerInterval);
        element._mksqTimerInterval = null;
    }
    element.classList.add('mksq-timer-stopped');
}

function initPageTimers() {
    document.querySelectorAll('.mksq-page-quiz-actions[data-page-uuid][data-eval-id]').forEach((actions) => {
        if (actions.dataset.timerInitialized === 'true') return;
        const accessSession = _evalViolationSession(actions.dataset.pageUuid, actions.dataset.evalId);
        if (accessSession?.access?.enabled === true && accessSession.accessUnlocked !== true) return;
        actions.dataset.timerInitialized = 'true';
        let config = {};
        try { config = JSON.parse(actions.dataset.timerConfig || '{}'); } catch (_) { config = {}; }
        const enabled = config.enabled === true || ['yes', 'true', 'on', '1'].includes(String(config.enabled).toLowerCase());
        if (!enabled) return;
        const pageUuid = actions.dataset.pageUuid;
        const evalId = actions.dataset.evalId;
        const element = document.querySelector(
            `.mksq-page-timer[data-page-uuid="${CSS.escape(String(pageUuid))}"][data-eval-id="${CSS.escape(String(evalId))}"]`,
        );
        if (!element) return;
        element.hidden = false;
        const evalToolbar = element.closest('.mksq-eval-toolbar');
        if (!evalToolbar) {
            element.dataset.position = String(config.initial_position || 'top-right');
            const offset = config.offset || {};
            element.style.setProperty('--mksq-timer-offset-x', `${Number(offset.x ?? 16)}px`);
            element.style.setProperty('--mksq-timer-offset-y', `${Number(offset.y ?? 16)}px`);
            if (config.remember_position) {
                try {
                    const saved = JSON.parse(localStorage.getItem(`mksq_timer_${pageUuid}_${evalId}`) || 'null');
                    if (saved?.left && saved?.top) {
                        element.style.left = saved.left;
                        element.style.top = saved.top;
                        element.style.right = 'auto';
                        element.style.bottom = 'auto';
                    }
                } catch (_) {}
            }
            _makeTimerDraggable(element, config, pageUuid, evalId);
        } else {
            // Evaluation timers belong to the shared toolbar (page or Reveal).
            // The whole toolbar is draggable; the timer itself stays in normal flow.
            delete element.dataset.position;
            element.classList.remove('mksq-timer-draggable');
            for (const property of ['left', 'right', 'top', 'bottom', 'transform']) {
                element.style.removeProperty(property);
            }
        }
        const countdown = String(config.mode || 'stopwatch').toLowerCase() === 'countdown';
        const initial = countdown ? _timerDurationSeconds(config.duration) : 0;
        let value = initial;
        let started = String(config.start || 'first_interaction').toLowerCase() === 'load';
        element.textContent = _formatTimer(value);
        const startTimer = () => { started = true; };
        if (!started) {
            document.addEventListener('pointerdown', startTimer, { once: true, capture: true });
            document.addEventListener('keydown', startTimer, { once: true, capture: true });
            document.addEventListener('input', startTimer, { once: true, capture: true });
        }
        const interval = setInterval(() => {
            if (!document.body.contains(element)) {
                clearInterval(interval);
                if (element._mksqTimerInterval === interval) element._mksqTimerInterval = null;
                return;
            }
            const evalSession = _evalViolationSession(pageUuid, evalId);
            if (evalSession?.finalized) {
                clearInterval(interval);
                if (element._mksqTimerInterval === interval) element._mksqTimerInterval = null;
                element.classList.add('mksq-timer-stopped');
                return;
            }
            if (!started) return;
            value = countdown ? Math.max(0, value - 1) : value + 1;
            element.textContent = _formatTimer(value);
            if (countdown && value <= 0) {
                clearInterval(interval);
                element.classList.add('mksq-timer-expired');
                const expire = String(config.expire || 'submit').toLowerCase();
                if (expire === 'submit') validateEval(pageUuid, evalId);
                else if (expire === 'lock') {
                    _evalQuestionElements(pageUuid, evalId).forEach((quiz) => setQuestionSubmittedState(quiz, true));
                }
            }
        }, 1000);
        element._mksqTimerInterval = interval;
    });
}

function resetEval(pageUuid, evalId) {
    const questions = _evalQuestionElements(pageUuid, evalId);
    if (questions.length === 0) return;
    questions.forEach(resetQuestionElement);
    _clearEvalScore(pageUuid, evalId);
    _setEvalValidationEnabled(pageUuid, evalId, true);

    const session = _evalViolationSession(pageUuid, evalId);
    if (session) {
        // Reset All resets answers and score, not the audit trail.  Otherwise a
        // learner could erase violations simply by resetting the evaluation.
        session.finalized = false;
        _clearEvalViolationPresentation(session);
        if (session.host === 'revealjs') _hideRevealEvalResult(session);
        _persistEvalViolationSession(session);
        _renderEvalViolationLive(session);
    }
    showRefreshNotification(session);
}

function resetAllQuestions() {
    const sessions = new Map();
    document.querySelectorAll('.mkdocs-superquiz[data-display-mode="eval"][data-eval-id]').forEach((question) => {
        const pageUuid = question.dataset.pageUuid;
        const evalId = question.dataset.evalId;
        if (!pageUuid || !evalId) return;
        sessions.set(`${pageUuid}::${evalId}`, { pageUuid, evalId });
    });
    sessions.forEach(({ pageUuid, evalId }) => resetEval(pageUuid, evalId));
}

function showRefreshNotification(session = null) {
    _showTransientNotification(
        session,
        'mksq-reset-notification',
        `✅ ${tForPage("ui.all_questions_have_been_reset", "All Questions have been Reset")}`,
        2000,
    );
}


function _syncMobileEvalNavigationState(navigation, link) {
    const pageUuid = String(navigation?.dataset?.pageUuid || '');
    const evalId = String(navigation?.dataset?.evalId || '');
    const quizId = String(link?.dataset?.quizId || '');
    if (!pageUuid || !evalId || !quizId) return;

    document.querySelectorAll('.mksq-mobile-eval-navigation-link').forEach((candidate) => {
        const sameEval = candidate.dataset.pageUuid === pageUuid
            && candidate.dataset.evalId === evalId;
        const selected = sameEval && candidate.dataset.quizId === quizId;
        candidate.classList.toggle('md-nav__link--active', selected);
        candidate.classList.toggle('mksq-navigation-current', selected);
        if (selected) candidate.setAttribute('aria-current', 'step');
        else candidate.removeAttribute('aria-current');
    });
}

function _activateEvalNavigationLink(navigation, link) {
    navigation.querySelectorAll('.mksq-page-navigation-link').forEach((candidate) => {
        const selected = candidate === link;
        candidate.classList.toggle('mksq-navigation-current', selected);
        if (selected) candidate.setAttribute('aria-current', 'step');
        else candidate.removeAttribute('aria-current');
    });
    _syncMobileEvalNavigationState(navigation, link);
}

function _topRevealSectionForQuestion(question, deckRoot) {
    const slidesRoot = deckRoot?.querySelector(':scope > .slides');
    return _topLevelRevealSlide(question, slidesRoot);
}

function updatePageNavigationState(navigation) {
    const links = Array.from(navigation.querySelectorAll('.mksq-page-navigation-link'));
    if (links.length === 0) return;

    if (navigation.dataset.host === 'revealjs') {
        const deckId = navigation.dataset.deckId;
        const deckRoot = document.getElementById(`mkdocs-revealjs-${deckId}`);
        const deck = deckRoot?._mkdocsRevealDeck;
        if (!deckRoot || !deck) return;

        links.forEach((link) => {
            if (link.dataset.revealNavigationBound === 'true') return;
            link.dataset.revealNavigationBound = 'true';
            link.addEventListener('click', () => {
                let slide = null;
                if (link.dataset.evalTerminal === 'true') {
                    slide = deckRoot.querySelector(
                        ':scope > .slides > .mksq-reveal-eval-terminal',
                    );
                } else {
                    const quizId = link.dataset.quizId;
                    const question = document.querySelector(
                        `.mkdocs-superquiz[data-quiz-id="${CSS.escape(String(quizId))}"]`,
                    );
                    slide = _topRevealSectionForQuestion(question, deckRoot);
                }
                if (!slide) return;
                const indices = deck.getIndices?.(slide) || {};
                deck.slide?.(indices.h ?? 0, indices.v ?? 0);
                _activateEvalNavigationLink(navigation, link);
            });
        });

        if (navigation.dataset.revealSlideListenerBound !== 'true') {
            navigation.dataset.revealSlideListenerBound = 'true';
            deck.on?.('slidechanged', (event) => {
                const current = event.currentSlide;
                if (current?.classList?.contains('mksq-reveal-eval-terminal')) {
                    const terminalLink = links.find(
                        (candidate) => candidate.dataset.evalTerminal === 'true',
                    );
                    if (terminalLink) _activateEvalNavigationLink(navigation, terminalLink);
                    return;
                }
                const question = current?.querySelector?.('.mkdocs-superquiz[data-eval-id]');
                if (!question) {
                    navigation.querySelectorAll('.mksq-page-navigation-link').forEach((candidate) => {
                        candidate.classList.remove('mksq-navigation-current');
                        candidate.removeAttribute('aria-current');
                    });
                    return;
                }
                const link = links.find((candidate) => candidate.dataset.quizId === question.dataset.quizId);
                if (link) _activateEvalNavigationLink(navigation, link);
            });
        }
        const current = deck.getCurrentSlide?.();
        const question = current?.querySelector?.('.mkdocs-superquiz[data-eval-id]');
        const initial = current?.classList?.contains('mksq-reveal-eval-terminal')
            ? links.find((candidate) => candidate.dataset.evalTerminal === 'true')
            : question
                ? links.find((candidate) => candidate.dataset.quizId === question.dataset.quizId)
                : links[0];
        if (initial) _activateEvalNavigationLink(navigation, initial);
        return;
    }

    const targets = links
        .map((link) => ({ link, target: document.querySelector(link.getAttribute('href')) }))
        .filter(({ target }) => Boolean(target));
    if (targets.length === 0) return;

    navigation._mksqObserver?.disconnect?.();
    if (typeof IntersectionObserver === 'function') {
        const observer = new IntersectionObserver((entries) => {
            const visible = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
            if (!visible) return;
            const match = targets.find(({ target }) => target === visible.target);
            if (match) _activateEvalNavigationLink(navigation, match.link);
        }, { rootMargin: '-15% 0px -70% 0px', threshold: [0, 0.1, 0.5] });
        targets.forEach(({ target }) => observer.observe(target));
        navigation._mksqObserver = observer;
    }

    links.forEach((link) => {
        link.addEventListener('click', () => _activateEvalNavigationLink(navigation, link));
    });
    _activateEvalNavigationLink(navigation, links[0]);
}

function _setMaterialNavTitle(label, text) {
    if (!label) return;
    const textNode = Array.from(label.childNodes).find(
        (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim(),
    );
    if (textNode) textNode.textContent = `\n      ${text}\n    `;
    else label.appendChild(document.createTextNode(text));
}

function _restoreMobileMaterialEvalNavigation() {
    document.documentElement.classList.remove('mksq-eval-mobile-navigation-active');

    document.querySelectorAll('.mksq-mobile-eval-navigation-item').forEach((element) => element.remove());

    // Defensive cleanup for pages that may have been initialized by an
    // older runtime before MkDocs Material instant navigation swapped content.
    document.querySelectorAll('.mksq-mobile-eval-navigation-list').forEach((element) => element.remove());
    document.querySelectorAll('[data-mksq-mobile-eval-original-hidden="true"]').forEach((element) => {
        element.hidden = false;
        delete element.dataset.mksqMobileEvalOriginalHidden;
    });
    document.querySelectorAll('[data-mksq-mobile-eval-title-original]').forEach((label) => {
        _setMaterialNavTitle(label, label.dataset.mksqMobileEvalTitleOriginal || 'Table of contents');
        delete label.dataset.mksqMobileEvalTitleOriginal;
    });
    document.querySelectorAll('[data-mksq-mobile-eval-toggle-original]').forEach((toggle) => {
        toggle.checked = toggle.dataset.mksqMobileEvalToggleOriginal === 'true';
        delete toggle.dataset.mksqMobileEvalToggleOriginal;
    });
}

function _restoreMaterialEvalLayout() {
    _restoreMobileMaterialEvalNavigation();
    document.querySelectorAll('[data-mksq-hidden-by-eval-navigation="true"]').forEach((element) => {
        element.classList.remove('mksq-eval-owned-navigation-hidden');
        delete element.dataset.mksqHiddenByEvalNavigation;
    });
    document.querySelectorAll('[data-mksq-hidden-by-eval-focus="true"]').forEach((element) => {
        element.classList.remove('mksq-eval-focus-hidden');
        delete element.dataset.mksqHiddenByEvalFocus;
    });
}

function _hideMaterialSidebarForEvalNavigation(sidebar, navigation, position) {
    if (!sidebar || !navigation) return;

    // The owned Material menu is hidden only at the desktop breakpoint. On
    // responsive layouts the primary Material hierarchy must stay alive so the
    // hamburger drawer can host the integrated quiz navigation and its native
    // one-level-back control.
    const replaceToc = ['right', 'left'].includes(position) || navigation.dataset.replaceToc === 'true';
    if (!replaceToc) return;

    Array.from(sidebar.children).forEach((child) => {
        if (child === navigation || child.classList?.contains('mksq-page-navigation')) return;
        child.classList.add('mksq-eval-owned-navigation-hidden');
        child.dataset.mksqHiddenByEvalNavigation = 'true';
    });
}

function _markMaterialSidebarForEvalFocus(sidebar) {
    if (!sidebar) return;
    sidebar.classList.add('mksq-eval-focus-hidden');
    sidebar.dataset.mksqHiddenByEvalFocus = 'true';
}

function _applyMaterialEvalFocus(position) {
    const selectors = position === 'left'
        ? ['.md-sidebar--secondary']
        : position === 'right'
            ? ['.md-sidebar--primary']
            : ['top', 'bottom'].includes(position)
                ? ['.md-sidebar--primary', '.md-sidebar--secondary']
                : [];
    selectors.forEach((selector) => _markMaterialSidebarForEvalFocus(document.querySelector(selector)));
}

function _installMobileMaterialEvalNavigation(navigation) {
    if (!navigation || (navigation.dataset.host || 'page') !== 'page') return false;

    const primaryNav = document.querySelector('.md-sidebar--primary .md-nav--primary');
    const rootList = primaryNav?.querySelector(':scope > .md-nav__list');
    if (!primaryNav || !rootList) return false;

    // Do not piggy-back on Material's special __toc panel. That panel only
    // becomes part of the drawer at the narrower TOC breakpoint, while the
    // primary navigation switches to the hamburger earlier. A normal nested
    // navigation item follows the primary drawer breakpoint itself, so the
    // quiz takes over as soon as the hamburger appears, including tablet and
    // narrow-desktop widths.
    rootList.querySelectorAll(':scope > .mksq-mobile-eval-navigation-item').forEach((element) => element.remove());

    const suffix = `${navigation.dataset.pageUuid || 'page'}-${navigation.dataset.evalId || 'eval'}`
        .replace(/[^A-Za-z0-9_-]+/g, '-');
    const toggleId = `__mksq_eval_navigation_${suffix}`;

    const item = document.createElement('li');
    item.className = 'md-nav__item md-nav__item--nested md-nav__item--active mksq-mobile-eval-navigation-item';

    const toggle = document.createElement('input');
    toggle.className = 'md-nav__toggle md-toggle';
    toggle.type = 'checkbox';
    toggle.id = toggleId;
    toggle.checked = true;
    toggle.dataset.mksqMobileEvalToggle = 'true';

    const openLabel = document.createElement('label');
    openLabel.className = 'md-nav__link mksq-mobile-eval-navigation-open';
    openLabel.htmlFor = toggleId;
    openLabel.id = `${toggleId}_label`;
    openLabel.appendChild(document.createTextNode(navigation.getAttribute('aria-label') || 'Question navigation'));
    const openIcon = document.createElement('span');
    openIcon.className = 'md-nav__icon md-icon';
    openLabel.appendChild(openIcon);

    const panel = document.createElement('nav');
    panel.className = 'md-nav mksq-mobile-eval-navigation-panel';
    panel.setAttribute('aria-label', navigation.getAttribute('aria-label') || 'Question navigation');
    panel.setAttribute('aria-labelledby', openLabel.id);
    panel.setAttribute('aria-expanded', 'true');
    panel.dataset.mdLevel = '1';

    // This title is Material's standard nested-navigation back control. The
    // checkbox is unchecked by the label, revealing the normal site hierarchy
    // one level above the quiz navigation.
    const title = document.createElement('label');
    title.className = 'md-nav__title';
    title.htmlFor = toggleId;
    const backIcon = document.createElement('span');
    backIcon.className = 'md-nav__icon md-icon';
    title.appendChild(backIcon);
    title.appendChild(document.createTextNode(navigation.getAttribute('aria-label') || 'Question navigation'));
    panel.appendChild(title);

    const list = document.createElement('ul');
    list.className = 'md-nav__list mksq-mobile-eval-navigation-list';
    list.dataset.pageUuid = navigation.dataset.pageUuid || '';
    list.dataset.evalId = navigation.dataset.evalId || '';

    navigation.querySelectorAll('.mksq-page-navigation-link').forEach((sourceLink) => {
        const listItem = document.createElement('li');
        listItem.className = 'md-nav__item';
        const link = document.createElement('a');
        link.className = 'md-nav__link mksq-mobile-eval-navigation-link';
        link.href = sourceLink.getAttribute('href') || '#';
        link.title = sourceLink.title || sourceLink.textContent.trim();
        link.dataset.pageUuid = navigation.dataset.pageUuid || '';
        link.dataset.evalId = navigation.dataset.evalId || '';
        link.dataset.quizId = sourceLink.dataset.quizId || '';
        const label = document.createElement('span');
        label.className = 'md-ellipsis';
        label.textContent = sourceLink.textContent.trim();
        link.appendChild(label);
        link.addEventListener('click', () => {
            _syncMobileEvalNavigationState(navigation, sourceLink);
            const drawer = document.getElementById('__drawer');
            if (drawer && 'checked' in drawer) drawer.checked = false;
        });
        listItem.appendChild(link);
        list.appendChild(listItem);
    });

    panel.appendChild(list);
    item.appendChild(toggle);
    item.appendChild(openLabel);
    item.appendChild(panel);
    rootList.appendChild(item);

    document.documentElement.classList.add('mksq-eval-mobile-navigation-active');

    // Every fresh opening of Material's hamburger starts in quiz navigation.
    // The back arrow still exposes the normal site hierarchy for the current
    // open drawer, but closing/reopening returns focus to the evaluation.
    const drawer = document.getElementById('__drawer');
    if (drawer && drawer.dataset.mksqEvalDrawerBound !== 'true') {
        drawer.dataset.mksqEvalDrawerBound = 'true';
        drawer.addEventListener('change', () => {
            if (!drawer.checked || !document.documentElement.classList.contains('mksq-eval-mobile-navigation-active')) return;
            const activeToggle = document.querySelector('.mksq-mobile-eval-navigation-item > input[data-mksq-mobile-eval-toggle="true"]');
            if (activeToggle) activeToggle.checked = true;
        });
    }

    const current = navigation.querySelector('.mksq-page-navigation-link.mksq-navigation-current')
        || navigation.querySelector('.mksq-page-navigation-link');
    if (current) _syncMobileEvalNavigationState(navigation, current);
    return true;
}

function _floatPageNavigationForDrag(navigation, rect) {
    if (navigation.dataset.host === 'revealjs') {
        const fullscreen = document.fullscreenElement || document.webkitFullscreenElement || null;
        // In Reveal fullscreen the navigation is temporarily moved inside the
        // fullscreen .reveal root. Use viewport/fixed coordinates there: the
        // embedded wrapper remains behind the browser top-layer and is no
        // longer a reliable containing block for drag calculations.
        if (fullscreen && fullscreen.contains?.(navigation)) {
            navigation.style.position = 'fixed';
            navigation.style.left = `${rect.left}px`;
            navigation.style.top = `${rect.top}px`;
            navigation.style.right = 'auto';
            navigation.style.bottom = 'auto';
            navigation.style.transform = 'none';
            navigation.style.width = `${rect.width}px`;
            navigation.dataset.mounted = 'floating';
            return { container: document.documentElement, mode: 'fixed' };
        }

        const deck = navigation.closest('.mkdocs-revealjs-wrapper');
        if (!deck) return null;
        const deckRect = deck.getBoundingClientRect();
        navigation.style.position = 'absolute';
        navigation.style.left = `${rect.left - deckRect.left}px`;
        navigation.style.top = `${rect.top - deckRect.top}px`;
        navigation.style.right = 'auto';
        navigation.style.bottom = 'auto';
        navigation.style.transform = 'none';
        navigation.style.width = `${rect.width}px`;
        navigation.dataset.mounted = 'floating';
        return { container: deck, mode: 'absolute' };
    }

    // Sidebar navigations are moved to <body> only once the learner actually
    // starts dragging them. This avoids clipping/positioning rules inherited
    // from Material's sticky sidebars.
    if (navigation.parentElement !== document.body) {
        document.body.appendChild(navigation);
    }
    navigation.style.position = 'fixed';
    navigation.style.left = `${rect.left}px`;
    navigation.style.top = `${rect.top}px`;
    navigation.style.right = 'auto';
    navigation.style.bottom = 'auto';
    navigation.style.transform = 'none';
    navigation.style.width = `${rect.width}px`;
    navigation.dataset.mounted = 'floating';
    navigation.classList.add('mksq-navigation-mounted');
    return { container: document.documentElement, mode: 'fixed' };
}

function _installTopPageNavigationHeaderTracking(navigation) {
    if (!navigation) return;

    if (typeof navigation._mksqTopHeaderCleanup === 'function') {
        navigation._mksqTopHeaderCleanup();
        navigation._mksqTopHeaderCleanup = null;
    }

    if ((navigation.dataset.host || 'page') !== 'page'
        || (navigation.dataset.position || 'top') !== 'top') {
        navigation.style.removeProperty('--mksq-top-navigation-offset');
        return;
    }

    const header = document.querySelector('.md-header[data-md-component="header"], header.md-header, .md-header');
    if (!header) {
        navigation.style.removeProperty('--mksq-top-navigation-offset');
        return;
    }

    let frame = 0;
    const update = () => {
        frame = 0;
        // Once manually dragged, the learner owns the floating position.
        if (navigation.dataset.mounted === 'floating') return;
        const rect = header.getBoundingClientRect();
        const bottom = Math.max(0, rect.bottom);
        navigation.style.setProperty('--mksq-top-navigation-offset', `${Math.round(bottom) + 2}px`);
    };
    const schedule = () => {
        if (frame) cancelAnimationFrame(frame);
        frame = requestAnimationFrame(update);
    };

    let resizeObserver = null;
    if (typeof ResizeObserver === 'function') {
        resizeObserver = new ResizeObserver(schedule);
        resizeObserver.observe(header);
    }

    window.addEventListener('resize', schedule, { passive: true });
    window.addEventListener('orientationchange', schedule, { passive: true });
    document.addEventListener('scroll', schedule, { passive: true, capture: true });

    navigation._mksqTopHeaderCleanup = () => {
        if (frame) cancelAnimationFrame(frame);
        if (resizeObserver) resizeObserver.disconnect();
        window.removeEventListener('resize', schedule);
        window.removeEventListener('orientationchange', schedule);
        document.removeEventListener('scroll', schedule, true);
    };

    update();
}

function _installEvalNavigationDragging(navigation) {
    if (!navigation || navigation.dataset.draggable !== 'true') return;
    if (navigation.dataset.dragBound === 'true') return;
    navigation.dataset.dragBound = 'true';
    navigation.classList.add('mksq-navigation-draggable');

    // The whole navigation surface is a drag handle, including the numbered
    // links/buttons. A normal click still navigates; only a movement beyond the
    // drag threshold turns the gesture into a drag and suppresses that click.
    navigation.addEventListener('pointerdown', (event) => {
        if (event.button !== undefined && event.button !== 0) return;
        if (event.target.closest('input, select, textarea')) return;

        const interactiveTarget = event.target.closest('.mksq-page-navigation-link');
        const startRect = navigation.getBoundingClientRect();
        const startX = event.clientX;
        const startY = event.clientY;
        let dragContext = null;
        let dragging = false;

        const move = (moveEvent) => {
            const dx = moveEvent.clientX - startX;
            const dy = moveEvent.clientY - startY;
            if (!dragging && Math.hypot(dx, dy) < 4) return;

            if (!dragging) {
                dragging = true;
                dragContext = _floatPageNavigationForDrag(navigation, startRect);
                if (!dragContext) {
                    dragging = false;
                    return;
                }
                navigation.classList.add('mksq-navigation-dragging');
            }

            moveEvent.preventDefault();
            let left = startRect.left + dx;
            let top = startRect.top + dy;

            if (dragContext.mode === 'absolute') {
                const bounds = dragContext.container.getBoundingClientRect();
                left -= bounds.left;
                top -= bounds.top;
                left = Math.max(0, Math.min(left, bounds.width - navigation.offsetWidth));
                top = Math.max(0, Math.min(top, bounds.height - navigation.offsetHeight));
            } else {
                left = Math.max(0, Math.min(left, window.innerWidth - navigation.offsetWidth));
                top = Math.max(0, Math.min(top, window.innerHeight - navigation.offsetHeight));
            }

            navigation.style.left = `${left}px`;
            navigation.style.top = `${top}px`;
        };

        const end = () => {
            document.removeEventListener('pointermove', move);
            document.removeEventListener('pointerup', end);
            document.removeEventListener('pointercancel', end);
            navigation.classList.remove('mksq-navigation-dragging');

            // pointerup is followed by click. If the gesture actually dragged a
            // numbered navigation control, consume that one synthetic click so
            // dropping the menu does not also change the current question.
            if (dragging && interactiveTarget) {
                const suppressDraggedClick = (clickEvent) => {
                    clickEvent.preventDefault();
                    clickEvent.stopImmediatePropagation();
                };
                interactiveTarget.addEventListener('click', suppressDraggedClick, { capture: true, once: true });
                setTimeout(() => interactiveTarget.removeEventListener('click', suppressDraggedClick, true), 0);
            }
        };

        document.addEventListener('pointermove', move, { passive: false });
        document.addEventListener('pointerup', end, { once: true });
        document.addEventListener('pointercancel', end, { once: true });
    });
}

function initPageNavigation() {
    // Material's instant navigation can reuse page chrome across renders. Undo
    // only the elements modified by SuperQuiz before applying the current
    // page's evaluation layout again.
    _restoreMaterialEvalLayout();

    const navigations = Array.from(document.querySelectorAll('.mksq-page-navigation'));
    const pageNavigations = navigations.filter(
        (navigation) => (navigation.dataset.host || 'page') === 'page',
    );
    const pagePositions = new Set(
        pageNavigations.map((navigation) => navigation.dataset.position || 'top'),
    );
    const focusPosition = pagePositions.size === 1 ? Array.from(pagePositions)[0] : null;

    if (focusPosition) _applyMaterialEvalFocus(focusPosition);

    navigations.forEach((navigation) => {
        const host = navigation.dataset.host || 'page';
        const position = navigation.dataset.position || 'top';
        if (host === 'page' && ['right', 'left'].includes(position)) {
            const selector = position === 'left'
                ? '.md-sidebar--primary .md-sidebar__inner'
                : '.md-sidebar--secondary .md-sidebar__inner';
            const sidebar = document.querySelector(selector);
            if (sidebar) {
                _hideMaterialSidebarForEvalNavigation(sidebar, navigation, position);
                // Keep a navigation that the learner has already dragged in its
                // floating position. Otherwise mount it in the owned sidebar.
                if (navigation.dataset.mounted !== 'floating' && navigation.parentElement !== sidebar) {
                    sidebar.appendChild(navigation);
                }
                if (navigation.dataset.mounted !== 'floating') {
                    navigation.dataset.mounted = 'sidebar';
                }
                navigation.classList.add('mksq-navigation-mounted');
            } else if (!navigation.dataset.mounted) {
                navigation.dataset.mounted = 'fallback';
                navigation.classList.add('mksq-navigation-mounted');
            }
        }
        _installTopPageNavigationHeaderTracking(navigation);
        _installEvalNavigationDragging(navigation);
        updatePageNavigationState(navigation);
    });

    // Responsive Material always uses the primary drawer as the site menu.
    // Mirror the single page evaluation there for every configured position
    // (left/right/top/bottom), preserving Material's native back arrow.
    if (pageNavigations.length === 1) {
        _installMobileMaterialEvalNavigation(pageNavigations[0]);
    }
}


// ─────────────────────────────────────────────────────────────────────────────
// linematch — jsPlumb instance registry
// ─────────────────────────────────────────────────────────────────────────────

const _lmInstances = {};   // key: `${quizId}-q${qId}` → jsPlumb instance
const _lmResponsiveLayouts = {}; // key → ResizeObserver/window listener cleanup
window._lmInstances = _lmInstances;  // expose for debug/reset

const _LM_AUTHORED_ENDPOINT_SELECTOR = [
    '.mkq-lm-endpoint',
    '.mkq-lm-anchor-dot',
    '.mkq-lm-node-dot',
    '.mkq-lm-node-ep',
].join(', ');

const _LM_RESIZE_OBSERVED_SELECTOR = [
    '.mkq-lm-column',
    '.mkq-lm-item',
    '.mkq-lm-labels-col',
    '.mkq-lm-image-wrapper',
    '.mkq-lm-image',
].join(', ');

function _getLmInstance(quizId, qId) {
    return _lmInstances[`${quizId}-q${qId}`] || null;
}

function _disconnectLinematchResponsiveLayout(key) {
    const state = _lmResponsiveLayouts[key];
    if (!state) return;
    try { state.observer?.disconnect(); } catch (_) {}
    try { window.removeEventListener('resize', state.schedule); } catch (_) {}
    try { window.removeEventListener('orientationchange', state.schedule); } catch (_) {}
    if (state.frameOne) cancelAnimationFrame(state.frameOne);
    if (state.frameTwo) cancelAnimationFrame(state.frameTwo);
    delete _lmResponsiveLayouts[key];
}

function _refreshLinematchGeometry(quizId, questionId) {
    const key = `${quizId}-q${questionId}`;
    const inst = _lmInstances[key];
    const questionEl = document.querySelector(
        `[data-quiz-id="${quizId}"] .mkq-lm-question[data-question-id="${questionId}"]`,
    );
    const canvas = questionEl?.querySelector('[id$="-canvas"]');
    if (!inst || !questionEl || !canvas) return false;

    questionEl.querySelectorAll(_LM_AUTHORED_ENDPOINT_SELECTOR).forEach(element => {
        try { inst.revalidate(element); } catch (_) {}
    });
    try { inst.repaintEverything(); } catch (_) {}

    // Correction paths and lifted arrowheads are separate SVG layers and must be
    // replayed after jsPlumb has accepted the new endpoint coordinates.
    _lmRedrawCorrections(canvas);
    _lmLiftArrowPaths(canvas);
    return true;
}

function _registerLinematchResponsiveLayout(quizId, questionId, questionEl, inst) {
    const key = `${quizId}-q${questionId}`;
    const canvas = questionEl?.querySelector('[id$="-canvas"]');
    if (!canvas || !inst) return;

    _disconnectLinematchResponsiveLayout(key);

    const state = {
        observer: null,
        frameOne: 0,
        frameTwo: 0,
        schedule: null,
    };

    // Two animation frames are intentional: the first lets flex/percentage/image
    // layout settle, the second gives jsPlumb the final browser coordinates.
    state.schedule = () => {
        if (state.frameOne || state.frameTwo) return;
        state.frameOne = requestAnimationFrame(() => {
            state.frameOne = 0;
            state.frameTwo = requestAnimationFrame(() => {
                state.frameTwo = 0;
                if (_lmInstances[key] !== inst) return;
                if (!document.documentElement.contains(questionEl)) {
                    _disconnectLinematchResponsiveLayout(key);
                    return;
                }
                _refreshLinematchGeometry(quizId, questionId);
            });
        });
    };

    if (typeof ResizeObserver === 'function') {
        state.observer = new ResizeObserver(state.schedule);
        state.observer.observe(questionEl);
        state.observer.observe(canvas);
        canvas.querySelectorAll(_LM_RESIZE_OBSERVED_SELECTOR).forEach(element => {
            state.observer.observe(element);
        });
    }

    // ResizeObserver handles actual size changes. The window events are retained
    // as a low-cost fallback and also cover responsive containers whose internal
    // positions change without producing a distinct observed size transition.
    window.addEventListener('resize', state.schedule, { passive: true });
    window.addEventListener('orientationchange', state.schedule, { passive: true });
    document.fonts?.ready?.then(state.schedule).catch?.(() => {});

    _lmResponsiveLayouts[key] = state;
    state.schedule();
}

window._refreshLinematchGeometry = _refreshLinematchGeometry;

function _destroyLinematchQuestionInstance(quizId, questionId) {
    const key = `${quizId}-q${questionId}`;
    _disconnectLinematchResponsiveLayout(key);
    const inst = _lmInstances[key];
    if (inst) {
        // Detach callbacks from the obsolete instance before teardown. Otherwise
        // a late connectionDetached event can repaint the final pair after reset.
        try { inst.unbind?.(); } catch (_) {}
        try { inst.deleteEveryConnection?.(); } catch (_) {}
        try { inst.reset?.(); } catch (_) {}
        delete _lmInstances[key];
    }

    const questionEl = document.querySelector(
        `[data-quiz-id="${quizId}"] .mkq-lm-question[data-question-id="${questionId}"]`,
    );
    const canvas = questionEl?.querySelector('[id$="-canvas"]');
    if (canvas) {
        canvas.querySelectorAll('svg.jtk-connector, .jtk-connector, .jtk-endpoint')
            .forEach(node => {
                // Keep the authored endpoint containers; remove only jsPlumb artefacts.
                if (node.classList?.contains('mkq-lm-endpoint')) return;
                if (node.closest?.('.mkq-lm-endpoint')) return;
                node.remove();
            });
    }
    questionEl?.querySelectorAll(
        '.mkq-lm-endpoint, .mkq-lm-anchor-dot, .mkq-lm-node-dot, .mkq-lm-node-ep',
    ).forEach(endpoint => {
        endpoint.classList.remove(
            'jtk-source', 'jtk-target', 'jtk-droppable', 'jtk-managed',
            'jtk-connected', 'jtk-endpoint-anchor', 'jtk-drag-active',
            'jtk-drag-hover',
        );
    });
}

function _reinitializeLinematch(quiz) {
    if (!quiz || getQuestionHandlerType(quiz) !== 'linematch') return;
    const quizId = quiz.dataset.quizId;
    if (!quizId) return;

    quiz.querySelectorAll('.mkq-lm-question[data-question-id]').forEach(question => {
        question._mksqResetInProgress = true;
        _destroyLinematchQuestionInstance(quizId, question.dataset.questionId);
        // Destroying an instance may dispatch a final asynchronous detach event.
        // Clean the visual selection state again after teardown.
        _clearLinematchSelectionState(question);
    });

    const initialize = () => {
        if (!document.documentElement.contains(quiz)) return;
        window._initLinematchColumnsDragDrop?.();
        window._initLinematchImageDragDrop?.();
        window._initLinematchPathDragDrop?.();
        window._initLinematchGraphDragDrop?.();
        quiz.querySelectorAll('.mkq-lm-question[data-question-id]').forEach(question => {
            try { _getLmInstance(quizId, question.dataset.questionId)?.repaintEverything?.(); } catch (_) {}
            // Keep reset deterministic even if jsPlumb emitted late detach events.
            _clearLinematchSelectionState(question);
            delete question._mksqResetInProgress;
        });
    };

    // Reset first removes the submitted/locked state. Recreate jsPlumb only once
    // the browser has applied that DOM/CSS change and measured the endpoints again.
    if (typeof requestAnimationFrame === 'function') {
        requestAnimationFrame(() => requestAnimationFrame(initialize));
    } else {
        setTimeout(initialize, 0);
    }
}

// ─────────────────────────────────────────────────────────────────────────────
// linematch mode: columns — validation & scoring
// ─────────────────────────────────────────────────────────────────────────────

function validateLinematch(quiz, quizId) {
    const questions = quiz.querySelectorAll('.mkq-lm-question[data-question-id]');
    let totalPoints = 0, earnedPoints = 0;
    const correctionData = decryptAnswers(quiz.dataset.encrypted);
    if (!correctionData) { alert(t('ui.error_downloading_corrections', 'Error downloading corrections')); return; }
    const showCorrection = shouldShowCorrections(quiz);

    questions.forEach(questionEl => {
        const questionId = parseInt(questionEl.dataset.questionId, 10);
        const qData = correctionData.questions.find(q => q.number === questionId);
        if (!qData) return;
        totalPoints += Number(qData.points || 1);

        const inst = _getLmInstance(quizId, questionId);
        if (!inst) return;

        const matchMode = qData.match_mode || 'columns';
        if (matchMode === 'path') {
            earnedPoints += scoreLinematchPathQuestion(inst, questionEl, qData, showCorrection);
        } else if (matchMode === 'image') {
            earnedPoints += scoreLinematchImageQuestion(inst, questionEl, qData, showCorrection);
        } else if (matchMode === 'graph') {
            earnedPoints += scoreLinematchGraphQuestion(inst, questionEl, qData, showCorrection);
        } else {
            earnedPoints += scoreLinematchQuestion(inst, questionEl, qData, showCorrection);
        }
    });

    displayScorePoints(quizId, earnedPoints, totalPoints);
}

// ── Fallback SVG line drawer for correction (when jsPlumb connect fails) ────
function _lmDrawSvgLine(questionEl, leftEp, rightEp, color, overlays, op, options = {}) {
    const canvas = questionEl.querySelector('[id$="-canvas"]');
    if (!canvas) return;

    // Store draw call for resize replay
    if (!canvas._lmCorrectionLines) canvas._lmCorrectionLines = [];
    canvas._lmCorrectionLines.push({ leftEp, rightEp, color, overlays, op, options });

    const cr = canvas.getBoundingClientRect();
    const lr = leftEp.getBoundingClientRect();
    const rr = rightEp.getBoundingClientRect();
    const x1 = lr.left + lr.width/2  - cr.left;
    const y1 = lr.top  + lr.height/2 - cr.top;
    const x2 = rr.left + rr.width/2  - cr.left;
    const y2 = rr.top  + rr.height/2 - cr.top;

    // ── Two SVG layers ───────────────────────────────────────────────────────
    // svgLines : inside the canvas (below jsPlumb HTML endpoints) — for the line
    // svgArrows: sibling after canvas in parent (above everything) — for polygons only
    // Both use canvas-relative coordinates.

    // Lines SVG — stays inside canvas (behind endpoints)
    let svgLines = canvas.querySelector('.mkq-lm-correction-svg-lines');
    if (!svgLines) {
        svgLines = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgLines.classList.add('mkq-lm-correction-svg-lines');
        svgLines.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:visible;';
        canvas.appendChild(svgLines);
    }

    // Arrows SVG — sibling after canvas, z-index above canvas div endpoints
    // Use data-for-canvas to bind each svgArrows to its specific canvas (multiple questions!)
    const canvasParent = canvas.parentElement || canvas;
    const canvasId = canvas.id || '';
    let svgArrows = canvasParent.querySelector(`.mkq-lm-correction-svg-arrows[data-for-canvas="${canvasId}"]`);
    if (!svgArrows) {
        svgArrows = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgArrows.classList.add('mkq-lm-correction-svg-arrows');
        svgArrows.setAttribute('data-for-canvas', canvasId);
        svgArrows.style.cssText = `position:absolute;pointer-events:none;overflow:visible;z-index:100;` +
            `top:${canvas.offsetTop}px;left:${canvas.offsetLeft}px;` +
            `width:${canvas.offsetWidth}px;height:${canvas.offsetHeight}px;`;
        if (window.getComputedStyle(canvasParent).position === 'static') {
            canvasParent.style.position = 'relative';
        }
        canvasParent.appendChild(svgArrows);
    } else {
        // Keep position in sync and re-append to stay on top
        svgArrows.style.top  = canvas.offsetTop  + 'px';
        svgArrows.style.left = canvas.offsetLeft + 'px';
        svgArrows.style.width  = canvas.offsetWidth  + 'px';
        svgArrows.style.height = canvas.offsetHeight + 'px';
        canvasParent.appendChild(svgArrows);
    }

    // Draw the line in svgLines (coordinates relative to canvas)
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1); line.setAttribute('y1', y1);
    line.setAttribute('x2', x2); line.setAttribute('y2', y2);
    line.setAttribute('stroke', color);
    line.setAttribute('stroke-width', String(options.width || 3));
    if (options.dashed) line.setAttribute('stroke-dasharray', '7 5');
    svgLines.appendChild(line);

    // Draw arrowheads — in svgArrows (same coordinate system as canvas)
    const LTR_SVG = new Set(['->', '-->']);
    const RTL_SVG = new Set(['<-', '<--']);
    const GREEN = 'var(--mkq-success)';
    const RED   = 'var(--mkq-error)';

    const drawArrow = (px, py, angle, fill) => {
        const len = 14, half = 7;
        const cos = Math.cos(angle), sin = Math.sin(angle);
        const tip   = [px, py];
        const base1 = [px - len*cos - half*(-sin), py - len*sin - half*cos];
        const base2 = [px - len*cos + half*(-sin), py - len*sin + half*cos];
        const poly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        poly.setAttribute('points', `${tip[0]},${tip[1]} ${base1[0]},${base1[1]} ${base2[0]},${base2[1]}`);
        poly.setAttribute('fill', fill);
        svgArrows.appendChild(poly);
    };

    const angle = Math.atan2(y2 - y1, x2 - x1);
    // overlays tell us which arrows to draw
    overlays.forEach(ov => {
        const loc      = ov[1]?.location ?? 1;
        const dir      = ov[1]?.direction ?? 1;
        const fill     = ov[1]?.paintStyle?.fill || color;
        if (loc >= 0.9) {
            // right end (target)
            drawArrow(x2, y2, angle, fill);
        } else {
            // left end (source) — direction:-1 = pointing left
            drawArrow(x1, y1, angle + Math.PI, fill);
        }
    });
}

function scoreLinematchQuestion(inst, questionEl, qData, showCorrection) {
    const points = Number(qData.points || 1);
    const mode = qData.scoring_mode || 'proportional';
    const penalty = Number(qData.distractor_penalty || 0);
    const minScore = (qData.min_score !== undefined && qData.min_score !== null)
        ? Number(qData.min_score)
        : 0;
    const correctEdges = Array.isArray(qData.edges) ? qData.edges : [];
    const total = correctEdges.length || 1;
    const userConns = inst.getConnections().slice();
    const GREEN = 'var(--mkq-success)';
    const RED = 'var(--mkq-error)';
    let earnedWeight = 0;
    let wrongCount = 0;
    let allExact = true;
    const satisfiedEdges = new Set();
    const exactEdges = new Set();
    const connectionData = [];
    const learnerEdges = [];

    userConns.forEach(conn => {
        const sourceEl = document.getElementById(conn.sourceId);
        const targetEl = document.getElementById(conn.targetId);
        const sourceItem = sourceEl?.closest('.mkq-lm-item');
        const targetItem = targetEl?.closest('.mkq-lm-item');
        if (!sourceItem || !targetItem) return;
        const sourceId = sourceItem.dataset.itemId;
        const targetId = targetItem.dataset.itemId;
        let best = null;
        correctEdges.forEach((edge, index) => {
            const match = _lmEdgeMatch(edge, sourceId, targetId, qData);
            if (!match.accepted) return;
            if (!best || match.weight > best.match.weight) best = { edge, index, match };
        });
        const sourceIsLeft = sourceItem.classList.contains('mkq-lm-item-left');
        const leftItem = sourceIsLeft ? sourceItem : targetItem;
        const rightItem = sourceIsLeft ? targetItem : sourceItem;
        const endpointEdge = _lmEdgeForPair(correctEdges, leftItem.dataset.itemId, rightItem.dataset.itemId);
        const isAccepted = Boolean(best);
        const isExact = Boolean(best?.match.exact);
        if (isAccepted) {
            earnedWeight += best.match.weight;
            satisfiedEdges.add(best.index);
            if (isExact) exactEdges.add(best.index);
        } else wrongCount += 1;
        if (!isExact) allExact = false;
        learnerEdges.push(_lmCompactLearnerEdge(endpointEdge, sourceId, targetId));
        connectionData.push({
            sourceId: conn.sourceId,
            targetId: conn.targetId,
            sourceItem,
            targetItem,
            leftItem,
            rightItem,
            isCorrect: isExact,
            operator: endpointEdge
                ? (LM_BIDIRECTIONAL_OPERATORS.has(endpointEdge.operator) ? '<->'
                    : LM_UNDIRECTED_OPERATORS.has(endpointEdge.operator) ? '--'
                    : (sourceIsLeft ? '->' : '<-'))
                : (sourceIsLeft ? '->' : '<-'),
        });
    });

    if (showCorrection) {
        questionEl._mksqSubmittedConnections = connectionData.map(({ sourceId, targetId }) => ({ src: sourceId, tgt: targetId }));
        userConns.forEach(conn => { try { inst.detach(conn); } catch (_) {} });
        _lmPrepareCorrectionSurface(questionEl, inst);
        connectionData.forEach(({ sourceItem, targetItem, leftItem, rightItem, isCorrect, operator }) => {
            const record = {
                questionEl,
                leftEndpoint: leftItem.querySelector('.mkq-lm-endpoint-right'),
                rightEndpoint: rightItem.querySelector('.mkq-lm-endpoint-left'),
                operator,
            };
            _lmCorrectionConnection(record, isCorrect ? GREEN : RED);
            sourceItem.classList.add(isCorrect ? 'correct' : 'incorrect');
            targetItem.classList.add(isCorrect ? 'correct' : 'incorrect');
        });
        correctEdges.forEach((edge, index) => {
            if (exactEdges.has(index)) return;
            const leftItem = questionEl.querySelector(`[data-item-id="${CSS.escape(edge.left)}"]`);
            const rightItem = questionEl.querySelector(`[data-item-id="${CSS.escape(edge.right)}"]`);
            _lmCorrectionConnection({
                questionEl,
                leftEndpoint: leftItem?.querySelector('.mkq-lm-endpoint-right'),
                rightEndpoint: rightItem?.querySelector('.mkq-lm-endpoint-left'),
                operator: edge.operator || '--',
                dashed: true,
                width: 2.5,
            }, GREEN);
        });
    }

    const exact = allExact && wrongCount === 0 && exactEdges.size === correctEdges.length;
    let base;
    if (mode === 'all_or_nothing') base = exact ? points : points * (earnedWeight / total);
    else if (mode === 'some_or_nothing') base = wrongCount === 0 ? points * (earnedWeight / total) : 0;
    else base = points * Math.max(0, (earnedWeight - wrongCount * Math.abs(penalty)) / total);
    if (!exact) {
        const configured = _lmResolveConfiguredErrorScore(qData, learnerEdges);
        if (configured !== null) base = configured;
    }
    return Math.max(Math.min(base, points), minScore);
}

// ─────────────────────────────────────────────────────────────────────────────
// linematch mode: columns — jsPlumb IIFE
// ─────────────────────────────────────────────────────────────────────────────

// jsPlumb v2 arrow overlays.
// direction:1 at location:1 → right-pointing arrow at target end ✅
// direction:1 at location:0 → also right-pointing (jsPlumb bug) ❌
// direction:-1 at location:0 → left-pointing but tiny ❌
//
// Solution: use jsPlumb overlay for right arrow only.
// For left arrow (<->), inject SVG marker AFTER jsPlumb finishes drawing (setTimeout).

// jsPlumb v2 arrow overlays.
// Both arrows use direction:1 for consistent rendering.
// Right arrow: location:1 → tip at target end ✅
// Left arrow:  location:0.08 → placed just outside source endpoint,
//              direction:-1 → points toward source (left) ✅
//              Offset from 0 ensures it's not hidden behind the endpoint dot.

// ── Arrow factories ──────────────────────────────────────────────────────────
// Two separate functions for clarity and independent tuning.
//
// RIGHT arrow : location:1, direction:1
//   → tip at the TARGET end of the connector. Renders well in jsPlumb v2.
//   → used for -> / --> / <-> (right tip)
//
// LEFT arrow  : location:0.12, direction:-1
//   → placed 12% along the connector from the SOURCE end.
//   → offset > 0 keeps it visible outside the source endpoint dot.
//   → direction:-1 makes it point toward the source (left). Renders smaller
//     than the right arrow — known jsPlumb v2 limitation, but acceptable.
//   → used for <-> (left tip)

function _lmArrowRight(color) {
    return ['Arrow', {
        width:     16,
        length:    20,
        location:  1,
        direction: 1,
        foldback:  0.55,
        paintStyle: { fill: color || 'var(--mkq-lm-line)', stroke: 'none' },
    }];
}

function _lmArrowLeft(color) {
    return ['Arrow', {
        width:     16,
        length:    20,
        location:  0.09,
        direction: -1,
        foldback:  0.55,
        paintStyle: { fill: color || 'var(--mkq-lm-line)', stroke: 'none' },
    }];
}

function _lmGetOverlays(operator, color = null) {
    const op = operator || '--';
    if (op === '--' || op === '<-->') return [];
    if (op === '<->') return [ _lmArrowRight(color), _lmArrowLeft(color) ];
    return [ _lmArrowRight(color) ];
}

function _lmGetCorrectionOverlays(operator, color) {
    const op = operator || '--';
    if (op === '--' || op === '<-->') return [];
    if (op === '<->') return [ _lmArrowRight(color), _lmArrowLeft(color) ];
    return [ _lmArrowRight(color) ];
}

// Returns the operator for a connection between srcItemId and tgtItemId
// by looking up the edges stored in data-edges on the question element.
function _lmGetOperator(qEl, srcItemId, tgtItemId) {
    try {
        const edges = JSON.parse(qEl.dataset.edges || '[]');
        for (const e of edges) {
            if (
                (e.left === srcItemId && e.right === tgtItemId) ||
                (e.left === tgtItemId && e.right === srcItemId)
            ) {
                const op = e.operator || '--';
                if (op === '<->') return '<->';
                if (op === '--' || op === '<-->') return '--';
                // A one-way learner connection always points from the endpoint
                // selected first to the endpoint selected second.  The authored
                // direction is evaluated only during scoring/correction.
                return '->';
            }
        }
    } catch(e) {}
    return '--';
}

// Returns {operator, flipped} where flipped=true means leftEnd is actually e.right in the markdown
function _lmGetOperatorOriented(qEl, leftItemId, rightItemId) {
    try {
        const edges = JSON.parse(qEl.dataset.edges || '[]');
        for (const e of edges) {
            if (e.left === leftItemId && e.right === rightItemId)
                return { op: e.operator || '--', flipped: false };
            if (e.left === rightItemId && e.right === leftItemId)
                return { op: e.operator || '--', flipped: true };
        }
    } catch(e) {}
    return { op: '--', flipped: false };
}

// Redraw all stored SVG correction lines (called on resize)
function _lmRedrawCorrections(canvas) {
    if (!canvas || !canvas._lmCorrectionLines) return;
    // Clear existing SVGs (use data-for-canvas to find the right one)
    const canvasParent = canvas.parentElement;
    const canvasId = canvas.id || '';
    canvas.querySelector('.mkq-lm-correction-svg-lines')?.remove();
    canvasParent?.querySelector(`.mkq-lm-correction-svg-arrows[data-for-canvas="${canvasId}"]`)?.remove();
    // Replay all stored draw calls
    const lines = canvas._lmCorrectionLines.slice();
    canvas._lmCorrectionLines = [];  // reset so they get re-stored
    const questionEl = canvas.closest('.mkq-lm-question');
    if (!questionEl) return;
    lines.forEach(({ leftEp, rightEp, color, overlays, op, options }) => {
        _lmDrawSvgLine(questionEl, leftEp, rightEp, color, overlays, op, options || {});
    });
}

// Unified arrow overlay function:
// - On desktop (paths>=2): clones jsPlumb arrow path into overlay SVG above canvas
// - On mobile (paths<2): draws arrows manually from connector SVG geometry
// ── Helper: lift jsPlumb arrow paths above endpoint divs ─────────────────────
// Desktop: clones path[1] from each .jtk-connector into overlay SVG (above canvas)
// Mobile:  jsPlumb never renders path[1] — draws arrow polygons from line geometry
function _lmLiftArrowPaths(canvas) {
    if (!canvas) return;
    const canvasParent = canvas.parentElement;
    if (!canvasParent) return;
    const canvasId = canvas.id || '';

    // Get or create overlay SVG, bound to this specific canvas
    let svgOverlay = canvasParent.querySelector(`.mkq-lm-arrow-overlay[data-for-canvas="${canvasId}"]`);
    if (!svgOverlay) {
        svgOverlay = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgOverlay.classList.add('mkq-lm-arrow-overlay');
        svgOverlay.setAttribute('data-for-canvas', canvasId);
        svgOverlay.style.cssText = 'position:absolute;pointer-events:none;overflow:visible;z-index:100;';
        if (window.getComputedStyle(canvasParent).position === 'static') {
            canvasParent.style.position = 'relative';
        }
        canvasParent.appendChild(svgOverlay);
    }
    // Keep overlay exactly over canvas
    svgOverlay.style.top    = canvas.offsetTop    + 'px';
    svgOverlay.style.left   = canvas.offsetLeft   + 'px';
    svgOverlay.style.width  = canvas.offsetWidth  + 'px';
    svgOverlay.style.height = canvas.offsetHeight + 'px';
    canvasParent.appendChild(svgOverlay); // re-append to stay on top

    // Clear cloned arrows
    svgOverlay.innerHTML = '';

    // For each jsPlumb connector SVG: hide original arrow path, clone into overlay
    const canvasRect = canvas.getBoundingClientRect();

    // For mobile operator lookup
    const qEl = canvas.closest('.mkq-lm-question');
    const quizId = canvasId.replace(/-q\d+-canvas$/, '').replace(/^mkq-/, '');
    const qIdM = canvasId.match(/-q(\d+)-canvas$/);
    const qId  = qIdM ? qIdM[1] : null;
    const inst = qId ? _getLmInstance(quizId, qId) : null;
    const conns = inst ? inst.getConnections() : [];

    const LEN = 14, HALF = 7;
    const DEFAULT_COLOR = 'var(--mkq-lm-line)';
    const LTR = new Set(['->', '-->']);
    const RTL = new Set(['<-', '<--']);

    const drawPoly = (px, py, angle, color = DEFAULT_COLOR) => {
        const cos = Math.cos(angle), sin = Math.sin(angle);
        const poly = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        poly.setAttribute('points', [
            px + ',' + py,
            (px - LEN*cos + HALF*sin) + ',' + (py - LEN*sin - HALF*cos),
            (px - LEN*cos - HALF*sin) + ',' + (py - LEN*sin + HALF*cos)
        ].join(' '));
        poly.setAttribute('fill', color);
        poly.setAttribute('pointer-events', 'none');
        svgOverlay.appendChild(poly);
    };

    const allConnectors = canvas.querySelectorAll('svg.jtk-connector');
    allConnectors.forEach((connSvg, ci) => {
        const paths = connSvg.querySelectorAll('path');
        if (paths.length > 0) {
            const d = paths[0].getAttribute('d') || '';
            const tr = paths[0].getAttribute('transform') || '';
        }
        if (!paths.length) return;
        const currentColor = paths[0].getAttribute('stroke')
            || paths[0].style.stroke
            || DEFAULT_COLOR;

        // ── Desktop: paths.length >= 2 — clone arrow path ────────────────
        if (paths.length >= 2) {
            const connRect = connSvg.getBoundingClientRect();
            const dx = connRect.left - canvasRect.left;
            const dy = connRect.top  - canvasRect.top;

            paths.forEach((path, idx) => {
                if (idx === 0) return; // skip line path
                path.style.display = 'none';
                const clone = path.cloneNode(true);
                clone.style.display = '';
                clone.setAttribute('pointer-events', 'none');
                const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                g.setAttribute('transform', `translate(${dx},${dy})`);
                g.appendChild(clone);
                svgOverlay.appendChild(g);
            });
            return;
        }

        // ── Mobile: paths.length === 1 — draw arrow manually ─────────────
        const svgLeft = parseFloat(connSvg.style.left) || 0;
        const svgTop  = parseFloat(connSvg.style.top)  || 0;
        const d  = paths[0].getAttribute('d') || '';
        const tr = paths[0].getAttribute('transform') || '';
        const tm = tr.match(/translate\(\s*([\d.+-]+)[,\s]+([\d.+-]+)\s*\)/);
        const tx = tm ? parseFloat(tm[1]) : 0;
        const ty = tm ? parseFloat(tm[2]) : 0;
        const mM = d.match(/M\s*([\d.+-]+)[,\s]\s*([\d.+-]+)/);
        const lM = d.match(/L\s*([\d.+-]+)[,\s]\s*([\d.+-]+)/);
        if (!mM || !lM) return;

        const x1 = svgLeft + tx + parseFloat(mM[1]);
        const y1 = svgTop  + ty + parseFloat(mM[2]);
        const x2 = svgLeft + tx + parseFloat(lM[1]);
        const y2 = svgTop  + ty + parseFloat(lM[2]);
        const angle = Math.atan2(y2 - y1, x2 - x1);

        // Match operator by endpoint proximity
        // Use DOM geometry directly (inst.getConnections() may be empty on mobile)
        let op = '--';
        let leftItemId = '', rightItemId = '';
        if (qEl) {
            // Build list of all endpoints with their canvas-relative coords
            const epList = [];
            qEl.querySelectorAll('.mkq-lm-endpoint-right, .mkq-lm-endpoint-left').forEach(epEl => {
                const er = epEl.getBoundingClientRect();
                epList.push({
                    el: epEl,
                    cx: er.left + er.width/2  - canvasRect.left,
                    cy: er.top  + er.height/2 - canvasRect.top,
                    itemId: epEl.closest('.mkq-lm-item')?.dataset.itemId || '',
                });
            });
            // Find endpoint closest to (x1,y1)
            let best1 = null, best1Dist = Infinity;
            epList.forEach(ep => {
                const d = Math.hypot(ep.cx - x1, ep.cy - y1);
                if (d < best1Dist) { best1Dist = d; best1 = ep; }
            });
            // Find endpoint closest to (x2,y2), excluding best1's item
            let best2 = null, best2Dist = Infinity;
            epList.forEach(ep => {
                if (ep.itemId === (best1?.itemId || '')) return;
                const d = Math.hypot(ep.cx - x2, ep.cy - y2);
                if (d < best2Dist) { best2Dist = d; best2 = ep; }
            });
            if (best1 && best2) {
                // leftItemId = item whose endpoint has smaller x (column-left)
                leftItemId  = best1.cx <= best2.cx ? best1.itemId : best2.itemId;
                rightItemId = best1.cx <= best2.cx ? best2.itemId : best1.itemId;
                op = _lmGetOperator(qEl, best1.itemId, best2.itemId);
            }
        }
        // Draw arrow tip(s) following the user's actual drag direction.
        // -> : tip at END of drag (x2,y2), pointing in drag direction
        // <- : tip at START of drag (x1,y1), pointing back (angle+PI)
        // <->: both tips
        if (LTR.has(op) || op === '<->') drawPoly(x2, y2, angle, currentColor);
        if (RTL.has(op) || op === '<->') drawPoly(x2, y2, angle, currentColor);
        if (op === '<->') drawPoly(x1, y1, angle + Math.PI, currentColor);
    });
}

(function initLinematchColumnsDragDrop() {

    // Track last mouse position for snap calculation in connectionAborted
    let _lastMouseX = 0, _lastMouseY = 0;
    document.addEventListener('mousemove', (e) => {
        _lastMouseX = e.clientX;
        _lastMouseY = e.clientY;
    }, { passive: true });
    document.addEventListener('mouseup', (e) => {
        _lastMouseX = e.clientX;
        _lastMouseY = e.clientY;
    }, { passive: true });

    function initQuestion(quizEl, qEl) {
        const quizId = quizEl.dataset.quizId;
        const qId    = qEl.dataset.questionId;
        const key    = `${quizId}-q${qId}`;
        if (_lmInstances[key]) {
            console.log('[lm] already init:', key);
            return;
        }

        const lineStyle     = qEl.dataset.lineStyle || 'straight';
        const connectorType = lineStyle === 'bezier' ? ['Bezier'] : ['Straight'];

        const canvasId = `${quizId}-q${qId}-canvas`;
        const canvas   = document.getElementById(canvasId);
        if (!canvas) {
            console.warn('[lm] canvas not found:', canvasId);
            return;
        }
        console.log('[lm] init question', key, 'canvas:', canvasId);

        const inst = jsPlumb.getInstance({
            Container: canvas,
            PaintStyle:      { stroke: 'var(--mkq-lm-line)', strokeWidth: 2 },
            HoverPaintStyle: { stroke: 'var(--mkq-lm-line-hover)', strokeWidth: 3 },
            ConnectionOverlays: [],
        });

        _lmInstances[key] = inst;

        const connStyle = {
            stroke: 'var(--mkq-lm-line)',
            strokeWidth: 2,
        };
        const connHoverStyle = {
            stroke: 'var(--mkq-lm-line-hover)',
            strokeWidth: 3,
        };
        const epStyle = {
            fill: 'var(--mkq-lm-ep)',
            stroke: 'var(--mkq-lm-ep-border)',
            strokeWidth: 1,
        };
        const epHoverStyle = { fill: 'var(--mkq-lm-ep-hover)' };

        // jsPlumb v2: makeSource on left endpoints (creates draggable wire),
        // makeTarget on right endpoints (drop zones).
        // On connectionDragStop, if target is a jsPlumb-generated temp endpoint,
        // we snap it to the nearest real right endpoint within tolerance.

        // Always bidirectional UI — operator only affects scoring & arrows, not drag.
        // Both left and right endpoints are source AND target.
        const allEpSelectors = [
            { sel: '.mkq-lm-item-left  .mkq-lm-endpoint-right', anchor: 'Center' },
            { sel: '.mkq-lm-item-right .mkq-lm-endpoint-left',  anchor: 'Center' },
        ];

        allEpSelectors.forEach(({ sel, anchor }) => {
            qEl.querySelectorAll(sel).forEach(epEl => {
                inst.makeSource(epEl, {
                    anchor:              anchor,
                    connector:           connectorType,
                    connectorStyle:      connStyle,
                    connectorHoverStyle: connHoverStyle,
                    maxConnections:      -1,
                    endpoint:            ['Dot', { radius: 6 }],
                    paintStyle:          epStyle,
                    hoverPaintStyle:     epHoverStyle,
                });
                inst.makeTarget(epEl, {
                    anchor:          anchor,
                    maxConnections:  -1,
                    endpoint:        ['Dot', { radius: 6 }],
                    paintStyle:      epStyle,
                    hoverPaintStyle: epHoverStyle,
                    dropOptions:     { hoverClass: 'jtk-drag-hover', tolerance: 'touch' },
                });
            });
        });

        const epCount = qEl.querySelectorAll('.mkq-lm-endpoint-right, .mkq-lm-endpoint-left').length;
        console.log('[lm] registered endpoints for', key, ':', epCount);

        _registerLinematchResponsiveLayout(quizId, qId, qEl, inst);

        inst.bind('connectionDrag', (rawConnection) => {
            const connection = rawConnection?.connection || rawConnection;
            if (!connection) return;
            const color = connection._mksqSelectionColor
                || _resolveLinematchConnectionColor(qEl, inst, connection.source, null);
            _setLinematchConnectionColor(connection, color);
        });

        inst.bind('beforeDrop', (info) => {
            const sourceEndpoint = info.source || document.getElementById(info.sourceId);
            const targetEndpoint = info.target || document.getElementById(info.targetId);
            if (!_canCreateLinematchColumnsConnection(qEl, inst, sourceEndpoint, targetEndpoint)) {
                return false;
            }
            const color = _resolveLinematchConnectionColor(
                qEl,
                inst,
                sourceEndpoint,
                targetEndpoint,
                info.connection?._mksqSelectionColor || null,
            );
            qEl._mksqPendingSelectionColor = color;
            _setLinematchConnectionColor(info.connection, color);
            return true;
        });

        inst.bind('click', (conn) => inst.detach(conn));

        // When drag is aborted (dropped outside a makeTarget),
        // find the nearest right-endpoint and connect to it manually.
        inst.bind('connectionAborted', (conn) => {
            const sourceEl = conn.source;
            if (!sourceEl) return;

            // Use actual mouse position at time of drop (accurate for diagonals)
            const dropX = _lastMouseX;
            const dropY = _lastMouseY;

            // Find nearest endpoint (left or right) — bidirectional
            let nearestEl = null;
            let nearestDist = Infinity;
            const SNAP_TOLERANCE = 80; // px

            const sourceSide = sourceEl.closest('.mkq-lm-item')?.dataset.side;
            qEl.querySelectorAll('.mkq-lm-endpoint-right, .mkq-lm-endpoint-left').forEach(tgtEl => {
                // Don't snap back to the source itself or to the same column.
                if (tgtEl === sourceEl) return;
                if (tgtEl.closest('.mkq-lm-item')?.dataset.side === sourceSide) return;
                const r = tgtEl.getBoundingClientRect();
                const cx = r.left + r.width / 2;
                const cy = r.top + r.height / 2;
                const dist = Math.sqrt((dropX - cx) ** 2 + (dropY - cy) ** 2);
                if (dist < nearestDist) {
                    nearestDist = dist;
                    nearestEl = tgtEl;
                }
            });

            // Delete the aborted temp connection
            try { inst.detach(conn); } catch(e) {}

            if (nearestEl && nearestDist <= SNAP_TOLERANCE
                && _canCreateLinematchColumnsConnection(qEl, inst, sourceEl, nearestEl)) {
                // Determine which side the source is on
                const srcItemId = sourceEl.closest('.mkq-lm-item')?.dataset.itemId || '';
                const tgtItemId = nearestEl.closest('.mkq-lm-item')?.dataset.itemId || '';
                const operator = _lmGetOperator(qEl, srcItemId, tgtItemId);
                const color = _resolveLinematchConnectionColor(qEl, inst, sourceEl, nearestEl);
                qEl._mksqPendingSelectionColor = color;
                const overlays = _lmGetOverlays(operator, color);

                const newConn = inst.connect({
                    source:          sourceEl,
                    target:          nearestEl,
                    connector:       connectorType,
                    paintStyle:      { stroke: color, strokeWidth: 3 },
                    hoverPaintStyle: { stroke: color, strokeWidth: 4 },
                    overlays:        overlays,
                });
                if (newConn) {
                    newConn._mksqSelectionColor = color;
                    _styleLinematchUserConnection(qEl, inst, newConn);
                } else {
                    delete qEl._mksqPendingSelectionColor;
                }
            }
        });

        inst.bind('connection', (info) => {
            const connection = info.connection || info;
            _styleLinematchUserConnection(qEl, inst, connection);
            // Clean temp endpoints left by makeSource drag
            setTimeout(() => _cleanOrphanEndpoints(canvas), 0);
            // Lift arrow paths above endpoints (desktop + mobile)
            setTimeout(() => _lmLiftArrowPaths(canvas), 200);
        });
        // Touchend fallback: on mobile, snap connections may not trigger 'connection' event
        canvas.addEventListener('touchend', () => {
            setTimeout(() => _lmLiftArrowPaths(canvas), 100);
        }, { passive: true });
        inst.bind('connectionDetached', () => {
            // During Reset Question / Reset All the instance is being destroyed.
            // Recomputing components here would recolour the final detached pair.
            if (qEl._mksqResetInProgress) return;
            _refreshLinematchSelectionComponents(qEl, inst);
        });
    }

    function initAll() {
        document.querySelectorAll('.mkdocs-superquiz').forEach(quizEl => {
            quizEl.querySelectorAll('.mkq-lm-columns-question').forEach(qEl => {
                initQuestion(quizEl, qEl);
            });
        });
        _bindClearButtons();
    }

    const observer = new MutationObserver(mutations => {
        mutations.forEach(m => m.addedNodes.forEach(node => {
            if (node.nodeType !== 1) return;
            if (node.classList?.contains('mkq-lm-columns-question')) {
                const quizEl = node.closest('.mkdocs-superquiz');
                if (quizEl) initQuestion(quizEl, node);
            } else if (node.querySelectorAll) {
                node.querySelectorAll('.mkq-lm-columns-question').forEach(qEl => {
                    const quizEl = qEl.closest('.mkdocs-superquiz');
                    if (quizEl) initQuestion(quizEl, qEl);
                });
            }
        }));
    });

    window._initLinematchColumnsDragDrop = function() {
        if (typeof jsPlumb === 'undefined') {
            console.warn('mkdocs-superquiz: jsPlumb not loaded');
            return;
        }
        initAll();
        observer.observe(document.body, { childList: true, subtree: true });
    };

})();

// ─────────────────────────────────────────────────────────────────────────────
// linematch mode: path — scoring
// ─────────────────────────────────────────────────────────────────────────────

const LM_UNDIRECTED_OPERATORS = new Set(['--', '<-->']);
const LM_BIDIRECTIONAL_OPERATORS = new Set(['<->']);
const LM_LTR_OPERATORS = new Set(['->', '-->']);
const LM_RTL_OPERATORS = new Set(['<-', '<--']);

function _lmDirectionPolicy(qData) {
    const raw = qData?.direction || {};
    const mismatch = ['wrong', 'partial', 'ignore'].includes(String(raw.mismatch || '').toLowerCase())
        ? String(raw.mismatch).toLowerCase()
        : 'wrong';
    const partialCredit = Number(raw.partial_credit ?? 0.5);
    return { mismatch, partialCredit: Number.isFinite(partialCredit) ? partialCredit : 0.5 };
}

function _lmEdgeMatch(edge, sourceId, targetId, qData = {}) {
    const op = edge?.operator || '--';
    const sameEndpoints = (
        (sourceId === edge.left && targetId === edge.right)
        || (sourceId === edge.right && targetId === edge.left)
    );
    if (!sameEndpoints) return { accepted: false, exact: false, weight: 0, reversed: false };
    if (LM_UNDIRECTED_OPERATORS.has(op) || LM_BIDIRECTIONAL_OPERATORS.has(op)) {
        return { accepted: true, exact: true, weight: 1, reversed: false };
    }
    const exact = LM_LTR_OPERATORS.has(op)
        ? sourceId === edge.left && targetId === edge.right
        : sourceId === edge.right && targetId === edge.left;
    if (exact) return { accepted: true, exact: true, weight: 1, reversed: false };
    const policy = _lmDirectionPolicy(qData);
    if (policy.mismatch === 'ignore') return { accepted: true, exact: true, weight: 1, reversed: true };
    if (policy.mismatch === 'partial') {
        return { accepted: true, exact: false, weight: Math.max(0, Math.min(1, policy.partialCredit)), reversed: true };
    }
    return { accepted: false, exact: false, weight: 0, reversed: true };
}

function _lmEdgeAccepts(edge, sourceId, targetId, qData = {}) {
    return _lmEdgeMatch(edge, sourceId, targetId, qData).accepted;
}

function _lmCompactLearnerEdge(edge, sourceId, targetId) {
    const op = edge?.operator || '--';
    if (LM_UNDIRECTED_OPERATORS.has(op)) {
        return [sourceId, targetId].map(String).sort().join('--');
    }
    if (LM_BIDIRECTIONAL_OPERATORS.has(op)) {
        return [sourceId, targetId].map(String).sort().join('<->');
    }
    return `${sourceId}->${targetId}`;
}

function _lmResolveConfiguredErrorScore(qData, learnerEdges) {
    return window.MKSQ_FRONTEND?.resolveErrorScore?.(
        qData?.error_scores,
        learnerEdges,
        'relations',
    ) ?? null;
}

function _lmEdgeForPair(correctEdges, firstId, secondId) {
    return (correctEdges || []).find(edge => (
        (edge.left === firstId && edge.right === secondId)
        || (edge.left === secondId && edge.right === firstId)
    ));
}

function _lmCorrectionConnection(info, color) {
    if (!info?.leftEndpoint || !info?.rightEndpoint) return;
    _lmDrawSvgLine(
        info.questionEl,
        info.leftEndpoint,
        info.rightEndpoint,
        color,
        _lmGetCorrectionOverlays(info.operator || '--', color),
        info.operator || '--',
        {
            dashed: Boolean(info.dashed),
            width: info.width || 3,
        },
    );
}

function _lmPrepareCorrectionSurface(questionEl, inst) {
    if (!questionEl || !inst) return;
    const submitted = [];
    inst.getConnections().slice().forEach(conn => {
        submitted.push({ src: conn.sourceId, tgt: conn.targetId });
        try { inst.detach(conn); } catch (_) {}
    });
    questionEl._mksqSubmittedConnections = submitted;
    _removeLinematchVisualLayers(questionEl);
    _clearLinematchSelectionState(questionEl);
}

function _lmImageConnectionRecord(conn) {
    const sourceItem = document.getElementById(conn.sourceId)?.closest('.mkq-lm-item, .mkq-lm-anchor');
    const targetItem = document.getElementById(conn.targetId)?.closest('.mkq-lm-item, .mkq-lm-anchor');
    if (!sourceItem || !targetItem) return null;

    const sourceSide = sourceItem.dataset.side;
    const targetSide = targetItem.dataset.side;
    if (!sourceSide || !targetSide || sourceSide === targetSide) return null;

    const leftItem = sourceSide === 'left' ? sourceItem : targetItem;
    const rightItem = sourceSide === 'right' ? sourceItem : targetItem;
    const leftId = leftItem.dataset.itemId;
    const rightId = rightItem.dataset.itemId || rightItem.dataset.anchorId;
    if (!leftId || !rightId) return null;

    return {
        sourceId: conn.sourceId,
        targetId: conn.targetId,
        sourceItem,
        targetItem,
        leftItem,
        rightItem,
        leftId,
        rightId,
        learnerSourceId: sourceItem.dataset.itemId || sourceItem.dataset.anchorId,
        learnerTargetId: targetItem.dataset.itemId || targetItem.dataset.anchorId,
        leftEndpoint: leftItem.querySelector('.mkq-lm-endpoint-right'),
        rightEndpoint: rightItem.querySelector('.mkq-lm-anchor-dot'),
    };
}

function _lmGraphConnectionRecord(conn) {
    const sourceNode = document.getElementById(conn.sourceId)?.closest('.mkq-lm-node');
    const targetNode = document.getElementById(conn.targetId)?.closest('.mkq-lm-node');
    if (!sourceNode || !targetNode) return null;

    const sourceId = sourceNode.dataset.nodeId;
    const targetId = targetNode.dataset.nodeId;
    if (!sourceId || !targetId) return null;

    return {
        sourceId: conn.sourceId,
        targetId: conn.targetId,
        sourceItem: sourceNode,
        targetItem: targetNode,
        leftItem: sourceNode,
        rightItem: targetNode,
        leftId: sourceId,
        rightId: targetId,
        learnerSourceId: sourceId,
        learnerTargetId: targetId,
        leftEndpoint: sourceNode.querySelector('.mkq-lm-node-ep'),
        rightEndpoint: targetNode.querySelector('.mkq-lm-node-ep'),
    };
}

function _lmPathConnectionRecord(conn) {
    const sourceNode = document.getElementById(conn.sourceId)?.closest('.mkq-lm-node');
    const targetNode = document.getElementById(conn.targetId)?.closest('.mkq-lm-node');
    if (!sourceNode || !targetNode) return null;

    const sourceId = sourceNode.dataset.nodeId;
    const targetId = targetNode.dataset.nodeId;
    if (!sourceId || !targetId) return null;

    return {
        sourceId: conn.sourceId,
        targetId: conn.targetId,
        sourceItem: sourceNode,
        targetItem: targetNode,
        sourceNode,
        targetNode,
        sourceNodeId: sourceId,
        targetNodeId: targetId,
        leftEndpoint: sourceNode.querySelector('.mkq-lm-node-dot'),
        rightEndpoint: targetNode.querySelector('.mkq-lm-node-dot'),
    };
}

function _lmScoreEdgeQuestion(inst, questionEl, qData, showCorrection, getRecord) {
    const points = Number(qData.points || 1);
    const mode = qData.scoring_mode || 'proportional';
    const penalty = Number(qData.distractor_penalty || 0);
    const minScore = (qData.min_score !== undefined && qData.min_score !== null)
        ? Number(qData.min_score)
        : 0;
    const correctEdges = Array.isArray(qData.edges) ? qData.edges : [];
    const total = correctEdges.length || 1;
    const userConns = inst.getConnections().slice();
    const GREEN = 'var(--mkq-success)';
    const RED = 'var(--mkq-error)';
    let earnedWeight = 0;
    let wrongCount = 0;
    let allExact = true;
    const satisfiedEdges = new Set();
    const exactEdges = new Set();
    const records = [];
    const learnerEdges = [];

    userConns.forEach(conn => {
        const record = getRecord(conn);
        if (!record) return;
        const sourceId = record.learnerSourceId || record.leftId;
        const targetId = record.learnerTargetId || record.rightId;
        let best = null;
        correctEdges.forEach((edge, index) => {
            const match = _lmEdgeMatch(edge, sourceId, targetId, qData);
            if (!match.accepted) return;
            if (!best || match.weight > best.match.weight) best = { edge, index, match };
        });
        const endpointEdge = _lmEdgeForPair(correctEdges, record.leftId, record.rightId);
        const isAccepted = Boolean(best);
        const isExact = Boolean(best?.match.exact);
        if (isAccepted) {
            earnedWeight += best.match.weight;
            satisfiedEdges.add(best.index);
            if (isExact) exactEdges.add(best.index);
        } else {
            wrongCount += 1;
        }
        if (!isExact) allExact = false;
        learnerEdges.push(_lmCompactLearnerEdge(endpointEdge, sourceId, targetId));
        records.push({
            ...record,
            isCorrect: isExact,
            isAccepted,
            operator: endpointEdge
                ? (LM_BIDIRECTIONAL_OPERATORS.has(endpointEdge.operator) ? '<->'
                    : LM_UNDIRECTED_OPERATORS.has(endpointEdge.operator) ? '--'
                    : '->')
                : '->',
            questionEl,
        });
    });

    if (showCorrection) {
        _lmPrepareCorrectionSurface(questionEl, inst);
        records.forEach(record => {
            const color = record.isCorrect ? GREEN : RED;
            record.sourceItem?.classList.add(record.isCorrect ? 'correct' : 'incorrect');
            record.targetItem?.classList.add(record.isCorrect ? 'correct' : 'incorrect');
            _lmCorrectionConnection(record, color);
        });
        correctEdges.forEach((edge, index) => {
            if (exactEdges.has(index)) return;
            const leftItem = questionEl.querySelector(`[data-item-id="${CSS.escape(edge.left)}"]`)
                || questionEl.querySelector(`[data-node-id="${CSS.escape(edge.left)}"]`);
            const rightItem = questionEl.querySelector(`[data-item-id="${CSS.escape(edge.right)}"]`)
                || questionEl.querySelector(`[data-node-id="${CSS.escape(edge.right)}"]`);
            if (!leftItem || !rightItem) return;
            if (!leftItem.classList.contains('correct')) leftItem.classList.add('incorrect');
            if (!rightItem.classList.contains('correct')) rightItem.classList.add('incorrect');
            _lmCorrectionConnection({
                questionEl,
                leftEndpoint: leftItem.querySelector('.mkq-lm-endpoint-right, .mkq-lm-node-ep'),
                rightEndpoint: rightItem.querySelector('.mkq-lm-anchor-dot, .mkq-lm-node-ep'),
                operator: edge.operator || '--',
                dashed: true,
                width: 2.5,
            }, GREEN);
        });
    }

    const exact = allExact && wrongCount === 0 && exactEdges.size === correctEdges.length;
    let base;
    if (mode === 'all_or_nothing') {
        base = exact ? points : points * (earnedWeight / total);
    } else if (mode === 'some_or_nothing') {
        base = wrongCount === 0 ? points * (earnedWeight / total) : 0;
    } else {
        base = points * Math.max(0, (earnedWeight - wrongCount * Math.abs(penalty)) / total);
    }
    if (!exact) {
        const configured = _lmResolveConfiguredErrorScore(qData, learnerEdges);
        if (configured !== null) base = configured;
    }
    return Math.max(Math.min(base, points), minScore);
}

function scoreLinematchImageQuestion(inst, questionEl, qData, showCorrection) {
    return _lmScoreEdgeQuestion(inst, questionEl, qData, showCorrection, _lmImageConnectionRecord);
}

function scoreLinematchGraphQuestion(inst, questionEl, qData, showCorrection) {
    return _lmScoreEdgeQuestion(inst, questionEl, qData, showCorrection, _lmGraphConnectionRecord);
}

function _lmPathEdgeMatch(path, sourceId, targetId, qData = {}) {
    let best = { accepted: false, exact: false, weight: 0, index: -1 };
    for (let i = 0; i < path.length - 1; i += 1) {
        const from = path[i]?.node || path[i];
        const to = path[i + 1]?.node || path[i + 1];
        const operator = path[i]?.op || '->';
        const match = _lmEdgeMatch({ left: from, right: to, operator }, sourceId, targetId, qData);
        if (match.accepted && match.weight > best.weight) best = { ...match, index: i };
    }
    return best;
}

function _lmPathEdgeMatches(path, sourceId, targetId, qData = {}) {
    return _lmPathEdgeMatch(path, sourceId, targetId, qData).accepted;
}

function _lmPathScoringTotal(path) {
    return Math.max(1, (Array.isArray(path) ? path.length : 0) - 1);
}

function _lmPathRecordForExpectedEdge(questionEl, path, index) {
    const from = path[index]?.node || path[index];
    const to = path[index + 1]?.node || path[index + 1];
    const operator = path[index]?.op || '->';
    const fromNode = questionEl.querySelector(`[data-node-id="${CSS.escape(from)}"]`);
    const toNode = questionEl.querySelector(`[data-node-id="${CSS.escape(to)}"]`);
    if (!fromNode || !toNode) return null;
    return {
        questionEl,
        sourceItem: fromNode,
        targetItem: toNode,
        leftEndpoint: fromNode.querySelector('.mkq-lm-node-dot'),
        rightEndpoint: toNode.querySelector('.mkq-lm-node-dot'),
        operator,
    };
}

function scoreLinematchPathQuestion(inst, questionEl, qData, showCorrection) {
    const points = Number(qData.points || 1);
    const mode = qData.scoring_mode || 'proportional';
    const minScore = (qData.min_score !== undefined && qData.min_score !== null)
        ? Number(qData.min_score) : 0;
    const answerPaths = Array.isArray(qData.answer_paths) ? qData.answer_paths : [];
    if (!answerPaths.length) return 0;
    const records = inst.getConnections().slice().map(_lmPathConnectionRecord).filter(Boolean);
    const GREEN = 'var(--mkq-success)';
    const RED = 'var(--mkq-error)';
    let bestScore = Number.NEGATIVE_INFINITY;
    let bestPath = answerPaths[0] || [];
    let bestMatches = [];
    let bestExact = false;

    answerPaths.forEach(path => {
        if (!Array.isArray(path) || path.length < 2) return;
        const totalEdges = _lmPathScoringTotal(path);
        const matches = records.map(record => _lmPathEdgeMatch(
            path, record.sourceNodeId, record.targetNodeId, qData,
        ));
        const earnedWeight = matches.reduce((sum, match) => sum + match.weight, 0);
        const wrongCount = matches.filter(match => !match.accepted).length;
        const exact = records.length === totalEdges
            && matches.every(match => match.exact)
            && new Set(matches.map(match => match.index)).size === totalEdges;
        let score;
        if (mode === 'all_or_nothing') score = exact ? points : points * (earnedWeight / totalEdges);
        else if (mode === 'some_or_nothing') score = wrongCount === 0 ? points * (earnedWeight / totalEdges) : 0;
        else score = points * Math.min(1, earnedWeight / totalEdges);
        if (score > bestScore || (score === bestScore && exact && !bestExact)) {
            bestScore = score; bestPath = path; bestMatches = matches; bestExact = exact;
        }
    });

    const learnerPath = [];
    records.forEach((record, index) => {
        if (index === 0) learnerPath.push(record.sourceNodeId);
        learnerPath.push(record.targetNodeId);
    });
    if (!bestExact) {
        const configured = window.MKSQ_FRONTEND?.resolveErrorScore?.(
            qData?.error_scores, learnerPath, 'sequence',
        ) ?? null;
        if (configured !== null) bestScore = configured;
    }

    if (showCorrection) {
        _lmPrepareCorrectionSurface(questionEl, inst);
        const exactSatisfied = new Set();
        records.forEach((record, recordIndex) => {
            const match = bestMatches[recordIndex]
                || _lmPathEdgeMatch(bestPath, record.sourceNodeId, record.targetNodeId, qData);
            const isCorrect = match.exact;
            if (isCorrect && match.index >= 0) exactSatisfied.add(match.index);
            record.sourceItem?.classList.add(isCorrect ? 'correct' : 'incorrect');
            record.targetItem?.classList.add(isCorrect ? 'correct' : 'incorrect');
            const visualOperator = match.index >= 0
                ? (bestPath[match.index]?.op || '->')
                : '->';
            _lmCorrectionConnection({
                questionEl,
                leftEndpoint: record.leftEndpoint,
                rightEndpoint: record.rightEndpoint,
                operator: isCorrect ? visualOperator : '->',
                width: 3,
            }, isCorrect ? GREEN : RED);
        });
        for (let i = 0; i < bestPath.length - 1; i += 1) {
            if (exactSatisfied.has(i)) continue;
            const hint = _lmPathRecordForExpectedEdge(questionEl, bestPath, i);
            if (!hint) continue;
            if (!hint.sourceItem.classList.contains('correct')) hint.sourceItem.classList.add('incorrect');
            if (!hint.targetItem.classList.contains('correct')) hint.targetItem.classList.add('incorrect');
            _lmCorrectionConnection({ ...hint, dashed: true, width: 2.5 }, GREEN);
        }
    }
    return Math.max(Math.min(bestScore, points), minScore);
}

// ─────────────────────────────────────────────────────────────────────────────
// linematch mode: image — jsPlumb IIFE
// ─────────────────────────────────────────────────────────────────────────────

(function initLinematchImageDragDrop() {

    function initQuestion(quizEl, qEl) {
        const quizId = quizEl.dataset.quizId;
        const qId    = qEl.dataset.questionId;
        const key    = `${quizId}-q${qId}`;
        if (_lmInstances[key]) return;

        const lineStyle     = qEl.dataset.lineStyle || 'straight';
        const connectorType = lineStyle === 'bezier' ? ['Bezier'] : ['Straight'];
        const canvas        = qEl.querySelector('.mkq-lm-image-layout');
        if (!canvas) return;

        const inst = jsPlumb.getInstance({
            Container:       canvas,
            PaintStyle:      { stroke: 'var(--mkq-lm-line)', strokeWidth: 2 },
            HoverPaintStyle: { stroke: 'var(--mkq-lm-line-hover)', strokeWidth: 3 },
        });
        _lmInstances[key] = inst;

        qEl.querySelectorAll('.mkq-lm-label-item').forEach(item => {
            const epEl = item.querySelector('.mkq-lm-endpoint-right');
            if (!epEl) return;
            inst.makeSource(epEl, {
                anchor:              'Center',
                connector:           connectorType,
                connectorStyle:      { stroke: 'var(--mkq-lm-line)', strokeWidth: 2 },
                connectorHoverStyle: { stroke: 'var(--mkq-lm-line-hover)', strokeWidth: 3 },
                maxConnections:      -1,
                endpoint:            ['Dot', { radius: 6 }],
                paintStyle:          { fill: 'var(--mkq-lm-ep)', stroke: 'var(--mkq-lm-ep-border)', strokeWidth: 1 },
                hoverPaintStyle:     { fill: 'var(--mkq-lm-ep-hover)' },
            });
        });

        qEl.querySelectorAll('.mkq-lm-anchor').forEach(anchor => {
            const epEl = anchor.querySelector('.mkq-lm-anchor-dot');
            if (!epEl) return;
            inst.makeTarget(epEl, {
                anchor:          'Center',
                maxConnections:  -1,
                endpoint:        ['Dot', { radius: 8 }],
                paintStyle:      { fill: 'var(--mkq-lm-ep)', stroke: 'var(--mkq-lm-ep-border)', strokeWidth: 2 },
                hoverPaintStyle: { fill: 'var(--mkq-lm-ep-hover)' },
                dropOptions:     { hoverClass: 'jtk-drag-hover', tolerance: 'touch' },
            });
        });

        _registerLinematchResponsiveLayout(quizId, qId, qEl, inst);

        const image = qEl.querySelector('.mkq-lm-image');
        const repaint = () => requestAnimationFrame(() => {
            qEl.querySelectorAll('.mkq-lm-endpoint-right, .mkq-lm-anchor-dot')
                .forEach(element => { try { inst.revalidate(element); } catch (_) {} });
            try { inst.repaintEverything(); } catch (_) {}
        });
        if (image && !image.complete) image.addEventListener('load', repaint, { once: true });
        else repaint();

        inst.bind('connectionDrag', (rawConnection) => {
            const connection = rawConnection?.connection || rawConnection;
            if (!connection) return;
            const color = connection._mksqSelectionColor
                || _resolveLinematchConnectionColor(qEl, inst, connection.source, null);
            _setLinematchConnectionColor(connection, color);
        });

        inst.bind('beforeDrop', (info) => {
            const sourceEndpoint = info.source || document.getElementById(info.sourceId);
            const targetEndpoint = info.target || document.getElementById(info.targetId);
            if (!_canCreateLinematchColumnsConnection(qEl, inst, sourceEndpoint, targetEndpoint)) {
                return false;
            }
            const color = _resolveLinematchConnectionColor(
                qEl,
                inst,
                sourceEndpoint,
                targetEndpoint,
                info.connection?._mksqSelectionColor || null,
            );
            qEl._mksqPendingSelectionColor = color;
            _setLinematchConnectionColor(info.connection, color);
            return true;
        });

        inst.bind('click', conn => inst.detach(conn));
        inst.bind('connection', info => {
            const connection = info.connection || info;
            _styleLinematchUserConnection(qEl, inst, connection);
        });
        inst.bind('connectionDetached', () => {
            if (qEl._mksqResetInProgress) return;
            _refreshLinematchSelectionComponents(qEl, inst);
        });
    }

    function initAll() {
        document.querySelectorAll('.mkdocs-superquiz').forEach(quizEl => {
            quizEl.querySelectorAll('.mkq-lm-image-question').forEach(qEl => initQuestion(quizEl, qEl));
        });
        _bindClearButtons();
    }

    const observer = new MutationObserver(mutations => {
        mutations.forEach(m => m.addedNodes.forEach(node => {
            if (node.nodeType !== 1) return;
            if (node.classList?.contains('mkq-lm-image-question')) {
                const qz = node.closest('.mkdocs-superquiz');
                if (qz) initQuestion(qz, node);
            } else if (node.querySelectorAll) {
                node.querySelectorAll('.mkq-lm-image-question').forEach(qEl => {
                    const qz = qEl.closest('.mkdocs-superquiz');
                    if (qz) initQuestion(qz, qEl);
                });
            }
        }));
    });

    window._initLinematchImageDragDrop = function() {
        if (typeof jsPlumb === 'undefined') return;
        initAll();
        observer.observe(document.body, { childList: true, subtree: true });
    };

})();

// ─────────────────────────────────────────────────────────────────────────────
// linematch mode: path — jsPlumb IIFE
// ─────────────────────────────────────────────────────────────────────────────

(function initLinematchPathDragDrop() {

    function initQuestion(quizEl, qEl) {
        const quizId = quizEl.dataset.quizId;
        const qId    = qEl.dataset.questionId;
        const key    = `${quizId}-q${qId}`;
        if (_lmInstances[key]) return;

        const lineStyle     = qEl.dataset.lineStyle || 'straight';
        const connectorType = lineStyle === 'bezier' ? ['Bezier'] : ['Straight'];
        const canvas        = qEl.querySelector('.mkq-lm-path-canvas');
        if (!canvas) return;

        // The browser smoke and external integrations may initialise jsPlumb
        // before the delayed global randomisation pass. Apply an automatic
        // PATH layout here as well, before jsPlumb measures the endpoints.
        // The guard prevents a second layout when applyRandomization() already
        // performed it during the normal plugin startup sequence.
        if (
            quizEl.dataset.randomizeAnswers === 'true'
            && qEl.dataset.nodeLayout === 'auto'
            && qEl.dataset.autoLayoutApplied !== 'true'
        ) {
            _randomizeLinematchPathNodes(qEl);
        }

        const inst = jsPlumb.getInstance({
            Container:       canvas,
            PaintStyle:      { stroke: 'var(--mkq-lm-line)', strokeWidth: 2 },
            HoverPaintStyle: { stroke: 'var(--mkq-lm-line-hover)', strokeWidth: 3 },
        });
        _lmInstances[key] = inst;

        qEl.querySelectorAll('.mkq-lm-node').forEach(node => {
            const epEl = node.querySelector('.mkq-lm-node-dot');
            if (!epEl) return;
            inst.makeSource(epEl, {
                anchor:              'Center',
                connector:           connectorType,
                connectorStyle:      { stroke: 'var(--mkq-lm-line)', strokeWidth: 2 },
                connectorHoverStyle: { stroke: 'var(--mkq-lm-line-hover)', strokeWidth: 3 },
                maxConnections:      -1,
                endpoint:            ['Dot', { radius: 8 }],
                paintStyle:          { fill: 'var(--mkq-lm-ep)', stroke: 'var(--mkq-lm-ep-border)', strokeWidth: 2 },
                hoverPaintStyle:     { fill: 'var(--mkq-lm-ep-hover)' },
            });
            inst.makeTarget(epEl, {
                anchor:          'Center',
                maxConnections:  -1,
                endpoint:        ['Dot', { radius: 8 }],
                paintStyle:      { fill: 'var(--mkq-lm-ep)', stroke: 'var(--mkq-lm-ep-border)', strokeWidth: 2 },
                hoverPaintStyle: { fill: 'var(--mkq-lm-ep-hover)' },
                dropOptions:     { hoverClass: 'jtk-drag-hover', tolerance: 'touch' },
            });
        });

        _registerLinematchResponsiveLayout(quizId, qId, qEl, inst);

        requestAnimationFrame(() => {
            qEl.querySelectorAll('.mkq-lm-node-dot').forEach(element => {
                try { inst.revalidate(element); } catch (_) {}
            });
            try { inst.repaintEverything(); } catch (_) {}
        });

        inst.bind('click', conn => inst.detach(conn));
    }

    function initAll() {
        document.querySelectorAll('.mkdocs-superquiz').forEach(quizEl => {
            quizEl.querySelectorAll('.mkq-lm-path-question').forEach(qEl => initQuestion(quizEl, qEl));
        });
        _bindClearButtons();
    }

    const observer = new MutationObserver(mutations => {
        mutations.forEach(m => m.addedNodes.forEach(node => {
            if (node.nodeType !== 1) return;
            if (node.classList?.contains('mkq-lm-path-question')) {
                const qz = node.closest('.mkdocs-superquiz');
                if (qz) initQuestion(qz, node);
            } else if (node.querySelectorAll) {
                node.querySelectorAll('.mkq-lm-path-question').forEach(qEl => {
                    const qz = qEl.closest('.mkdocs-superquiz');
                    if (qz) initQuestion(qz, qEl);
                });
            }
        }));
    });

    window._initLinematchPathDragDrop = function() {
        if (typeof jsPlumb === 'undefined') return;
        initAll();
        observer.observe(document.body, { childList: true, subtree: true });
    };

})();

// ─────────────────────────────────────────────────────────────────────────────
// linematch mode: graph — jsPlumb IIFE
// ─────────────────────────────────────────────────────────────────────────────

(function initLinematchGraphDragDrop() {

    function initQuestion(quizEl, qEl) {
        const quizId = quizEl.dataset.quizId;
        const qId    = qEl.dataset.questionId;
        const key    = `${quizId}-q${qId}`;
        if (_lmInstances[key]) return;

        const lineStyle     = qEl.dataset.lineStyle || 'bezier';
        const connectorType = lineStyle === 'bezier' ? ['Bezier'] : ['Straight'];
        const canvas        = qEl.querySelector('.mkq-lm-graph-canvas');
        if (!canvas) return;

        // As with PATH, integrations may initialise jsPlumb before the delayed
        // global randomisation pass. Apply the automatic GRAPH layout before
        // jsPlumb measures its visible endpoint circles.
        if (
            quizEl.dataset.randomizeAnswers === 'true'
            && qEl.dataset.nodeLayout === 'auto'
            && qEl.dataset.autoLayoutApplied !== 'true'
        ) {
            _randomizeLinematchGraphNodes(qEl);
        }

        const inst = jsPlumb.getInstance({
            Container:       canvas,
            PaintStyle:      { stroke: 'var(--mkq-lm-line)', strokeWidth: 2 },
            HoverPaintStyle: { stroke: 'var(--mkq-lm-line-hover)', strokeWidth: 3 },
        });
        _lmInstances[key] = inst;

        qEl.querySelectorAll('.mkq-lm-graph-node').forEach(node => {
            const epEl = node.querySelector('.mkq-lm-node-ep');
            if (!epEl) return;
            inst.makeSource(epEl, {
                anchor:              'Center',
                connector:           connectorType,
                connectorStyle:      { stroke: 'var(--mkq-lm-line)', strokeWidth: 2 },
                connectorHoverStyle: { stroke: 'var(--mkq-lm-line-hover)', strokeWidth: 3 },
                maxConnections:      -1,
                endpoint:            ['Dot', { radius: 8 }],
                paintStyle:          { fill: 'var(--mkq-lm-ep)', stroke: 'var(--mkq-lm-ep-border)', strokeWidth: 2 },
                hoverPaintStyle:     { fill: 'var(--mkq-lm-ep-hover)' },
            });
            inst.makeTarget(epEl, {
                anchor:          'Center',
                maxConnections:  -1,
                endpoint:        ['Dot', { radius: 8 }],
                paintStyle:      { fill: 'var(--mkq-lm-ep)', stroke: 'var(--mkq-lm-ep-border)', strokeWidth: 2 },
                hoverPaintStyle: { fill: 'var(--mkq-lm-ep-hover)' },
                dropOptions:     { hoverClass: 'jtk-drag-hover', tolerance: 'touch' },
            });
        });

        _registerLinematchResponsiveLayout(quizId, qId, qEl, inst);

        requestAnimationFrame(() => {
            qEl.querySelectorAll('.mkq-lm-node-ep').forEach(element => {
                try { inst.revalidate(element); } catch (_) {}
            });
            try { inst.repaintEverything(); } catch (_) {}
        });

        inst.bind('click', conn => inst.detach(conn));
        inst.bind('connection', info => {
            info.source?.closest('.mkq-lm-node')?.classList.add('lm-connected');
            info.target?.closest('.mkq-lm-node')?.classList.add('lm-connected');
        });
    }

    function initAll() {
        document.querySelectorAll('.mkdocs-superquiz').forEach(quizEl => {
            quizEl.querySelectorAll('.mkq-lm-graph-question').forEach(qEl => initQuestion(quizEl, qEl));
        });
        _bindClearButtons();
    }

    const observer = new MutationObserver(mutations => {
        mutations.forEach(m => m.addedNodes.forEach(node => {
            if (node.nodeType !== 1) return;
            if (node.classList?.contains('mkq-lm-graph-question')) {
                const qz = node.closest('.mkdocs-superquiz');
                if (qz) initQuestion(qz, node);
            } else if (node.querySelectorAll) {
                node.querySelectorAll('.mkq-lm-graph-question').forEach(qEl => {
                    const qz = qEl.closest('.mkdocs-superquiz');
                    if (qz) initQuestion(qz, qEl);
                });
            }
        }));
    });

    window._initLinematchGraphDragDrop = function() {
        if (typeof jsPlumb === 'undefined') return;
        initAll();
        observer.observe(document.body, { childList: true, subtree: true });
    };

})();

// Shared helper — bind clear buttons (called by all LM IIFEs)
function _cleanOrphanEndpoints(canvas) {
    // jsPlumb v2 leaves temporary .jtk-endpoint elements in the DOM
    // after makeSource drag. Remove any that are NOT our original endpoint dots.
    if (!canvas) return;
    canvas.querySelectorAll('.jtk-endpoint').forEach(el => {
        // Our endpoints are inside .mkq-lm-endpoint — jsPlumb wraps them
        // but also creates standalone .jtk-endpoint divs for temp drag endpoints.
        // Standalone ones have no mkq- class on their parent chain inside the canvas.
        if (!el.closest('.mkq-lm-endpoint') && !el.querySelector('.mkq-lm-endpoint')) {
            el.remove();
        }
    });
}

function _removeLinematchVisualLayers(questionEl) {
    if (!questionEl) return;
    const canvas = questionEl.querySelector('[id$="-canvas"]');
    if (!canvas) return;
    const canvasId = canvas.id || '';
    canvas.querySelectorAll('svg.jtk-connector, .jtk-connector').forEach(node => node.remove());
    canvas.querySelector('.mkq-lm-correction-svg-lines')?.remove();
    const parent = canvas.parentElement;
    parent?.querySelector(`.mkq-lm-arrow-overlay[data-for-canvas="${canvasId}"]`)?.remove();
    parent?.querySelector(`.mkq-lm-correction-svg-arrows[data-for-canvas="${canvasId}"]`)?.remove();
    canvas._lmCorrectionLines = [];
    _cleanOrphanEndpoints(canvas);
}

function _clearLinematchSelectionState(questionEl) {
    if (!questionEl) return;
    delete questionEl._mksqPendingSelectionColor;
    delete questionEl._mksqSubmittedConnections;
    questionEl.dataset.nextLmSelectionColor = '0';
    questionEl.querySelectorAll('.mkq-lm-item, .mkq-lm-anchor, .mkq-lm-node')
        .forEach(element => {
            element.classList.remove(
                'lm-connected', 'correct', 'incorrect', 'mksq-lm-selection-linked',
            );
            element.style.removeProperty('--mksq-selection-color');
        });
    questionEl.querySelectorAll('.mkq-lm-position-badge').forEach(badge => badge.remove());
}

function _clearLinematchQuestion(quizId, questionId) {
    const questionEl = document.querySelector(
        `[data-quiz-id="${quizId}"] .mkq-lm-question[data-question-id="${questionId}"]`,
    );
    const inst = _getLmInstance(quizId, questionId);
    // Remove a pending drag colour before detach events can inspect it.
    if (questionEl) delete questionEl._mksqPendingSelectionColor;
    if (inst) {
        inst.getConnections().slice().forEach(connection => {
            try { inst.detach(connection); } catch (_) {}
        });
    }
    _removeLinematchVisualLayers(questionEl);
    _clearLinematchSelectionState(questionEl);
    try { inst?.repaintEverything(); } catch (_) {}
}
window._clearLinematchQuestion = _clearLinematchQuestion;
window._getLmInstance = _getLmInstance;
window._reinitializeLinematch = _reinitializeLinematch;

function _normalizeLinematchConnectionMode(raw) {
    const value = String(raw || '1.1').trim().toLowerCase().replaceAll('_', '.').replaceAll(':', '.');
    const aliases = {
        'one.to.one': '1.1',
        'one.to.many': '1.n',
        'many.to.one': 'n.1',
        'many.to.many': 'n.n',
    };
    const normalized = aliases[value] || value;
    return ['1.1', '1.n', 'n.1', 'n.n'].includes(normalized) ? normalized : '1.1';
}

// Relation notation describes the size of a connected group:
//   1.n = one left item may be linked to many right items.
//   n.1 = many left items may be linked to one right item.
// Consequently, in 1.n each right item remains unique, while in n.1
// each left item remains unique.
function _linematchRelationLimits(raw) {
    const mode = _normalizeLinematchConnectionMode(raw);
    return {
        mode,
        leftMaxOne: mode === '1.1' || mode === 'n.1',
        rightMaxOne: mode === '1.1' || mode === '1.n',
    };
}
window._linematchRelationLimits = _linematchRelationLimits;

function _nextLinematchSelectionColor(questionEl) {
    const index = Number.parseInt(questionEl?.dataset?.nextLmSelectionColor || '0', 10) || 0;
    if (questionEl) questionEl.dataset.nextLmSelectionColor = String(index + 1);
    return mksqSelectionColor(index);
}

function _linematchConnectionItems(connection) {
    const sourceItem = connection?.source?.closest?.('.mkq-lm-item') || null;
    const targetItem = connection?.target?.closest?.('.mkq-lm-item') || null;
    return [sourceItem, targetItem].filter(Boolean);
}

function _linematchConnectionsForItem(inst, item) {
    if (!inst || !item) return [];
    return (inst.getConnections?.() || []).filter(connection =>
        _linematchConnectionItems(connection).includes(item),
    );
}

function _linematchConnectedItems(inst, seedItems) {
    const connections = inst?.getConnections?.() || [];
    const visited = new Set((seedItems || []).filter(Boolean));
    const queue = Array.from(visited);

    while (queue.length > 0) {
        const item = queue.shift();
        connections.forEach(connection => {
            const [first, second] = _linematchConnectionItems(connection);
            let neighbour = null;
            if (first === item) neighbour = second;
            else if (second === item) neighbour = first;
            if (neighbour && !visited.has(neighbour)) {
                visited.add(neighbour);
                queue.push(neighbour);
            }
        });
    }
    return visited;
}

function _linematchColorFromComponent(inst, items) {
    for (const item of items || []) {
        const itemColor = item?.style?.getPropertyValue?.('--mksq-selection-color')?.trim();
        if (itemColor) return itemColor;
    }
    const itemSet = new Set(items || []);
    for (const connection of inst?.getConnections?.() || []) {
        const [first, second] = _linematchConnectionItems(connection);
        if ((itemSet.has(first) || itemSet.has(second)) && connection._mksqSelectionColor) {
            return connection._mksqSelectionColor;
        }
    }
    return null;
}

function _setLinematchConnectionColor(connection, color) {
    if (!connection || !color) return color || null;
    connection._mksqSelectionColor = color;
    try { connection.setPaintStyle({ stroke: color, strokeWidth: 3 }); } catch (_) {}
    try { connection.setHoverPaintStyle({ stroke: color, strokeWidth: 4 }); } catch (_) {}
    try {
        const overlays = connection.getOverlays?.() || {};
        Object.values(overlays).forEach(overlay => {
            try { overlay.setPaintStyle?.({ fill: color, stroke: 'none' }); } catch (_) {}
        });
    } catch (_) {}
    return color;
}

function _applyLinematchComponentColor(inst, items, color) {
    const component = new Set(items || []);
    if (!color || component.size === 0) return;

    component.forEach(item => {
        item.classList.add('lm-connected', 'mksq-lm-selection-linked');
        item.style.setProperty('--mksq-selection-color', color);
    });

    (inst?.getConnections?.() || []).forEach(connection => {
        const [first, second] = _linematchConnectionItems(connection);
        if (component.has(first) && component.has(second)) {
            _setLinematchConnectionColor(connection, color);
        }
    });
}

function _resolveLinematchConnectionColor(
    questionEl,
    inst,
    sourceEndpoint,
    targetEndpoint,
    fallbackColor = null,
) {
    const sourceItem = sourceEndpoint?.closest?.('.mkq-lm-item') || null;
    const targetItem = targetEndpoint?.closest?.('.mkq-lm-item') || null;
    const sourceComponent = _linematchConnectedItems(inst, [sourceItem]);
    const targetComponent = _linematchConnectedItems(inst, [targetItem]);
    return _linematchColorFromComponent(inst, sourceComponent)
        || _linematchColorFromComponent(inst, targetComponent)
        || fallbackColor
        || _nextLinematchSelectionColor(questionEl);
}

function _styleLinematchUserConnection(questionEl, inst, connection) {
    if (!questionEl || !connection) return null;
    const [sourceItem, targetItem] = _linematchConnectionItems(connection);
    const color = connection._mksqSelectionColor
        || questionEl._mksqPendingSelectionColor
        || _resolveLinematchConnectionColor(
            questionEl,
            inst,
            connection.source,
            connection.target,
        );
    delete questionEl._mksqPendingSelectionColor;
    _setLinematchConnectionColor(connection, color);

    // The colour belongs to the whole connected component, not to one edge.
    // This covers 1.n, n.1 and n.n, including the merge of two pre-existing
    // coloured components.
    const component = new Set([
        ..._linematchConnectedItems(inst, [sourceItem]),
        ..._linematchConnectedItems(inst, [targetItem]),
        sourceItem,
        targetItem,
    ].filter(Boolean));
    _applyLinematchComponentColor(inst, component, color);
    return color;
}
window._styleLinematchUserConnection = _styleLinematchUserConnection;

function _refreshLinematchSelectionComponents(questionEl, inst) {
    if (!questionEl || !inst) return;
    const connections = inst.getConnections?.() || [];
    const allItems = Array.from(questionEl.querySelectorAll('.mkq-lm-item'));
    allItems.forEach(item => {
        item.classList.remove('lm-connected', 'mksq-lm-selection-linked');
        item.style.removeProperty('--mksq-selection-color');
    });
    if (connections.length === 0) return;

    const connectedItems = new Set(connections.flatMap(_linematchConnectionItems));
    const visited = new Set();
    const usedColors = new Set();

    allItems.forEach(seed => {
        if (!connectedItems.has(seed) || visited.has(seed)) return;
        const component = _linematchConnectedItems(inst, [seed]);
        component.forEach(item => visited.add(item));
        let color = _linematchColorFromComponent(inst, component);
        if (!color || usedColors.has(color)) {
            do { color = _nextLinematchSelectionColor(questionEl); }
            while (usedColors.has(color));
        }
        usedColors.add(color);
        _applyLinematchComponentColor(inst, component, color);
    });
}
window._refreshLinematchSelectionComponents = _refreshLinematchSelectionComponents;

function _linematchItemConnectionCount(inst, item) {
    return _linematchConnectionsForItem(inst, item).length;
}

function _canCreateLinematchColumnsConnection(questionEl, inst, sourceEndpoint, targetEndpoint) {
    if (!questionEl || !sourceEndpoint || !targetEndpoint || sourceEndpoint === targetEndpoint) return false;
    const sourceItem = sourceEndpoint.closest('.mkq-lm-item');
    const targetItem = targetEndpoint.closest('.mkq-lm-item');
    if (!sourceItem || !targetItem) return false;
    const sourceSide = sourceItem.dataset.side;
    const targetSide = targetItem.dataset.side;
    if (!sourceSide || !targetSide || sourceSide === targetSide) return false;

    const leftItem = sourceSide === 'left' ? sourceItem : targetItem;
    const rightItem = sourceSide === 'right' ? sourceItem : targetItem;
    const limits = _linematchRelationLimits(
        questionEl.dataset.relations || questionEl.dataset.connections,
    );
    if (limits.leftMaxOne && _linematchItemConnectionCount(inst, leftItem) >= 1) return false;
    if (limits.rightMaxOne && _linematchItemConnectionCount(inst, rightItem) >= 1) return false;

    return !(inst.getConnections?.() || []).some(connection => {
        const [first, second] = _linematchConnectionItems(connection);
        return (first === leftItem && second === rightItem)
            || (first === rightItem && second === leftItem);
    });
}
window._canCreateLinematchColumnsConnection = _canCreateLinematchColumnsConnection;

function _bindClearButtons() {
    document.querySelectorAll('.mkq-lm-clear-btn').forEach(btn => {
        if (btn._lmClearBound) return;
        btn._lmClearBound = true;
        btn.addEventListener('click', () => {
            const qId = btn.dataset.questionId;
            const quizId = btn.dataset.quizId;
            _clearLinematchQuestion(quizId, qId);
            saveAnswers(quizId);
        });
    });
}

// ─────────────────────────────────────────────────────────────────────────────
// match — validation principale
// ─────────────────────────────────────────────────────────────────────────────

function validateMatch(quiz, quizId) {
    const questions = quiz.querySelectorAll('.mkq-mq-question[data-question-id]');
    let totalPoints = 0, earnedPoints = 0;
    const correctionData = decryptAnswers(quiz.dataset.encrypted);
    if (!correctionData) { alert(t('ui.error_downloading_corrections', 'Error downloading corrections')); return; }
    const showCorrection = shouldShowCorrections(quiz);

    questions.forEach(questionEl => {
        const questionId = parseInt(questionEl.dataset.questionId, 10);
        const qData = correctionData.questions.find(q => q.number === questionId);
        if (!qData) return;

        const mode = qData.match_mode || 'pair';
        // A flashcard is graded only when explicit self-evaluation is enabled.
        // Merely revealing the back never changes the score.
        if (mode === 'flashcard' && qData.auto_evaluation !== true) return;

        totalPoints += Number(qData.points || 1);
        if (mode === 'pair')      earnedPoints += validateMatchPair(questionEl, qData, showCorrection);
        else if (mode === 'category') earnedPoints += validateMatchCategory(questionEl, qData, showCorrection);
        else if (mode === 'matrix')   earnedPoints += validateMatchMatrix(questionEl, qData, showCorrection);
        else if (mode === 'flashcard') earnedPoints += validateMatchFlashcard(questionEl, qData);
    });

    if (totalPoints > 0) displayScorePoints(quizId, earnedPoints, totalPoints);
}

// ─────────────────────────────────────────────────────────────────────────────
// match mode: pair — clic/tap pour associer
// ─────────────────────────────────────────────────────────────────────────────

function validateMatchPair(questionEl, qData, showCorrection) {
    const points = Number(qData.points || 1);
    const mode = qData.scoring_mode || 'proportional';
    const minScore = Number(qData.min_score ?? 0);
    const correctPairs = Array.isArray(qData.pairs) ? qData.pairs : [];
    const total = correctPairs.length || 1;
    const userConns = _getMqPairConnections(questionEl);
    let earnedWeight = 0;
    let wrong = 0;
    let allExact = true;
    const exactPairIndexes = new Set();
    const learnerEdges = [];

    userConns.forEach(connection => {
        let best = null;
        correctPairs.forEach((pair, index) => {
            const match = _lmEdgeMatch(pair, connection.source, connection.target, qData);
            if (!match.accepted) return;
            if (!best || match.weight > best.match.weight) best = { pair, index, match };
        });
        const endpointPair = _lmEdgeForPair(correctPairs, connection.left, connection.right);
        learnerEdges.push(_lmCompactLearnerEdge(endpointPair, connection.source, connection.target));
        if (best) {
            earnedWeight += best.match.weight;
            if (best.match.exact) exactPairIndexes.add(best.index);
            else allExact = false;
        } else {
            wrong += 1;
            allExact = false;
        }
    });

    if (showCorrection) {
        window._renderMatchPairCorrection?.(questionEl, correctPairs, userConns, qData);
    }

    const exact = allExact && wrong === 0 && exactPairIndexes.size === correctPairs.length;
    let base = 0;
    if (mode === 'all_or_nothing') base = exact ? points : 0;
    else if (mode === 'some_or_nothing') base = wrong === 0 ? points * (earnedWeight / total) : 0;
    else base = points * (Math.max(0, earnedWeight - wrong) / total);

    if (!exact) {
        const configured = window.MKSQ_FRONTEND?.resolveErrorScore?.(
            qData?.error_scores,
            learnerEdges,
            'relations',
        ) ?? null;
        if (configured !== null) base = configured;
    }
    return Math.max(Math.min(base, points), minScore);
}

function _getMqPairConnections(questionEl) {
    const connections = [];
    questionEl.querySelectorAll('.mkq-mq-connection').forEach(line => {
        const left = line.dataset.left;
        const right = line.dataset.right;
        const source = line.dataset.source || left;
        const target = line.dataset.target || right;
        if (!left || !right || !source || !target) return;
        connections.push({
            left,
            right,
            source,
            target,
            operator: line.dataset.operator || '--',
        });
    });
    return connections;
}

// ─────────────────────────────────────────────────────────────────────────────
// match mode: category
// ─────────────────────────────────────────────────────────────────────────────

function _clearMatchCategoryCorrection(questionEl) {
    questionEl.querySelectorAll('.mkq-mq-category-correction-badge').forEach(badge => badge.remove());
    questionEl.querySelectorAll('.mkq-mq-cat-item, .mkq-mq-pool-item').forEach(item => {
        item.classList.remove(
            'correct',
            'incorrect',
            'mkq-mq-distractor-unmoved',
            'mkq-mq-distractor-moved',
        );
    });
}

function _setMatchCategoryCorrectionBadge(itemEl, label, kind = 'expected') {
    if (!itemEl) return;
    itemEl.querySelector('.mkq-mq-category-correction-badge')?.remove();
    const badge = document.createElement('span');
    badge.className = [
        'mkq-mq-category-correction-badge',
        `mkq-mq-category-correction-${kind}`,
        kind === 'expected' ? 'mkq-mq-category-correction-with-error' : '',
    ].filter(Boolean).join(' ');
    badge.setAttribute('aria-label', kind === 'expected' ? `→ ${label}` : String(label));

    if (kind === 'expected') {
        badge.appendChild(document.createTextNode('→ '));
        const value = document.createElement('span');
        value.className = 'mkq-mq-category-correction-value';
        value.setAttribute('dir', 'auto');
        value.innerHTML = convertLatexDelimiters(String(label));
        badge.appendChild(value);
        if (window.MathJax?.typesetPromise) {
            setTimeout(() => MathJax.typesetPromise([value]).catch(() => {}), 0);
        }
    } else {
        badge.textContent = String(label);
    }

    itemEl.appendChild(badge);
}

function validateMatchCategory(questionEl, qData, showCorrection) {
    const points   = Number(qData.points || 1);
    const mode     = qData.scoring_mode || 'proportional';
    const penalty  = Number(qData.distractor_penalty || 0);
    const minScore = Number(qData.min_score ?? 0);

    const categories = Array.isArray(qData.categories) ? qData.categories : [];
    const distractors = new Set((qData.distractors || []).map(d => String(d).trim()));

    // Build expected: item → category index. Keep the authored category label
    // for the explicit correction badge (for example “→ Reptiles”).
    const expected = {};
    categories.forEach((cat, idx) => {
        (cat.items || []).forEach(item => { expected[String(item).trim()] = idx; });
    });
    const total = Object.keys(expected).length || 1;

    if (showCorrection) _clearMatchCategoryCorrection(questionEl);

    let correct = 0, wrong = 0, distractorPlaced = 0;

    questionEl.querySelectorAll('.mkq-mq-category').forEach((catEl, catIdx) => {
        catEl.querySelectorAll('.mkq-mq-cat-item, .mkq-mq-pool-item').forEach(itemEl => {
            const text = String(itemEl.dataset.item || '').trim();
            if (distractors.has(text)) {
                distractorPlaced++;
                if (showCorrection) {
                    itemEl.classList.add('incorrect', 'mkq-mq-distractor-moved');
                    _setMatchCategoryCorrectionBadge(itemEl, '×', 'distractor');
                }
                return;
            }
            const expectedCat = expected[text];
            if (expectedCat === undefined) return;
            const isCorrect = expectedCat === catIdx;
            if (isCorrect) correct++; else wrong++;
            if (showCorrection) {
                itemEl.classList.add(isCorrect ? 'correct' : 'incorrect');
                if (!isCorrect) {
                    const expectedLabel = categories[expectedCat]?.label ?? String(expectedCat + 1);
                    _setMatchCategoryCorrectionBadge(itemEl, expectedLabel, 'expected');
                }
            }
        });
    });

    // Scorable items still in the pool are unanswered. Show the category in
    // which each one should have been placed. A distractor correctly left in
    // the pool is also a correct response, but receives its own dashed green
    // visual language so that it remains distinct from a genuine answer.
    if (showCorrection) {
        questionEl.querySelectorAll(
            '.mkq-mq-pool-items .mkq-mq-cat-item, '
            + '.mkq-mq-pool-items .mkq-mq-pool-item',
        ).forEach(itemEl => {
            const text = String(itemEl.dataset.item || '').trim();
            const expectedCat = expected[text];
            if (distractors.has(text)) {
                itemEl.classList.add('correct', 'mkq-mq-distractor-unmoved');
            } else if (expectedCat !== undefined) {
                itemEl.classList.add('incorrect');
                const expectedLabel = categories[expectedCat]?.label ?? String(expectedCat + 1);
                _setMatchCategoryCorrectionBadge(itemEl, expectedLabel, 'expected');
            }
        });
    }

    let base = 0;
    if (mode === 'all_or_nothing') base = (correct === total && wrong === 0 && distractorPlaced === 0) ? points : 0;
    else if (mode === 'some_or_nothing') base = (wrong === 0 && distractorPlaced === 0) ? points * (correct / total) : 0;
    else base = points * (correct / total) + penalty * distractorPlaced;

    return Math.max(Math.min(base, points), minScore);
}

// ─────────────────────────────────────────────────────────────────────────────
// match mode: matrix
// ─────────────────────────────────────────────────────────────────────────────

function validateMatchMatrix(questionEl, qData, showCorrection) {
    const points   = Number(qData.points || 1);
    const mode     = qData.scoring_mode || 'proportional';
    const minScore = Number(qData.min_score ?? 0);

    const correctCells = Array.isArray(qData.correct_cells) ? qData.correct_cells : [];
    const correctSet   = new Set(correctCells.map(c => `${c.row}||${c.col}`));
    const total        = correctCells.length || 1;

    // Count all possible cells
    const allRows = Array.isArray(qData.rows) ? qData.rows : [];
    const allCols = Array.isArray(qData.cols) ? qData.cols : [];
    const totalCells = allRows.length * allCols.length;

    let correct = 0, wrong = 0;
    const selectedCellIds = [];

    questionEl.querySelectorAll('.mkq-matrix-checkbox').forEach(cb => {
        const row = cb.dataset.row;
        const col = cb.dataset.col;
        const key = `${row}||${col}`;
        const shouldBeChecked = correctSet.has(key);
        if (cb.checked) selectedCellIds.push(cb.dataset.cellId || key);

        if (cb.checked && shouldBeChecked)  correct++;
        else if (cb.checked && !shouldBeChecked) wrong++;
        else if (!cb.checked && shouldBeChecked) wrong++;
        // !checked && !shouldBeChecked → true negative (correct but not counted)

        if (showCorrection) {
            const cell = cb.closest('td');
            if (!cell) return;
            cell.classList.remove('correct', 'incorrect', 'missed');
            if (cb.checked && shouldBeChecked)   cell.classList.add('correct');
            else if (cb.checked && !shouldBeChecked) cell.classList.add('incorrect');
            else if (!cb.checked && shouldBeChecked) cell.classList.add('missed');
        }
    });

    let base = 0;
    if (mode === 'all_or_nothing') base = (correct === total && wrong === 0) ? points : 0;
    else if (mode === 'some_or_nothing') base = wrong === 0 ? points * (correct / total) : 0;
    else base = points * (Math.max(0, correct - wrong) / total);

    return Math.max(Math.min(base, points), minScore);
}

// ─────────────────────────────────────────────────────────────────────────────
// match mode: flashcard — score déclaratif
// ─────────────────────────────────────────────────────────────────────────────

function validateMatchFlashcard(questionEl, qData) {
    if (qData.auto_evaluation !== true) return 0;

    const points = Number(qData.points || 1);
    const mode = qData.scoring_mode || 'proportional';
    const minScore = Number(qData.min_score ?? 0);
    const total = (qData.cards || []).length || 1;
    const correct = questionEl.querySelectorAll('.mkq-fc-card[data-result="correct"]').length;
    const incorrect = questionEl.querySelectorAll('.mkq-fc-card[data-result="incorrect"]').length;

    let base = 0;
    if (mode === 'all_or_nothing') {
        base = (correct === total && incorrect === 0) ? points : 0;
    } else if (mode === 'some_or_nothing') {
        base = incorrect === 0 ? points * (correct / total) : 0;
    } else {
        base = points * (correct / total);
    }

    return Math.max(Math.min(base, points), minScore);
}

// ─────────────────────────────────────────────────────────────────────────────
// match mode: pair — interactions clic/tap (SVG lines)
// ─────────────────────────────────────────────────────────────────────────────

(function initMatchPair() {

    function colorForIndex(index) {
        return mksqSelectionColor(index);
    }

    function getPairs(questionEl) {
        try { return JSON.parse(questionEl.dataset.pairs || '[]'); }
        catch (_) { return []; }
    }

    function getLayout(questionEl) {
        return questionEl.querySelector('.mkq-mq-pair-layout');
    }

    function getOrCreateSvg(questionEl) {
        const layout = getLayout(questionEl);
        if (!layout) return null;
        let svg = layout.querySelector('.mkq-mq-svg-overlay');
        if (!svg) {
            svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.classList.add('mkq-mq-svg-overlay');
            svg.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:visible;';
            layout.style.position = 'relative';
            layout.appendChild(svg);
        }
        return svg;
    }

    function itemFor(questionEl, side, value) {
        const cls = side === 'left' ? 'mkq-mq-left-item' : 'mkq-mq-right-item';
        return questionEl.querySelector(`.${cls}[data-item="${CSS.escape(value)}"]`);
    }

    function sideOf(item) {
        return item.classList.contains('mkq-mq-left-item') ? 'left' : 'right';
    }

    function setItemColor(item, color, state) {
        if (!item) return;
        item.style.setProperty('--mksq-pair-color', color || 'transparent');
        item.dataset.pairColor = color || '';
        item.classList.remove('selected', 'mksq-pair-selected', 'mksq-pair-linked', 'mksq-pair-orphan');
        if (state === 'selected') item.classList.add('selected', 'mksq-pair-selected');
        if (state === 'linked') item.classList.add('mksq-pair-linked');
        if (state === 'orphan') item.classList.add('mksq-pair-orphan');
    }

    function clearItemColor(item) {
        if (!item) return;
        item.style.removeProperty('--mksq-pair-color');
        delete item.dataset.pairColor;
        item.classList.remove(
            'selected', 'mksq-pair-selected', 'mksq-pair-linked', 'mksq-pair-orphan',
            'mksq-pair-live-error', 'mksq-pair-live-complete',
        );
    }

    function connectionForItem(questionEl, item) {
        const value = item.dataset.item;
        const selector = sideOf(item) === 'left'
            ? `.mkq-mq-connection[data-left="${CSS.escape(value)}"]`
            : `.mkq-mq-connection[data-right="${CSS.escape(value)}"]`;
        return questionEl.querySelector(selector);
    }

    function nextColor(questionEl) {
        const index = Number.parseInt(questionEl.dataset.nextPairColor || '0', 10) || 0;
        questionEl.dataset.nextPairColor = String(index + 1);
        return colorForIndex(index);
    }

    function createMarker(svg, color, direction, sequence) {
        let defs = svg.querySelector('defs');
        if (!defs) {
            defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
            svg.prepend(defs);
        }
        const id = `mksq-pair-arrow-${sequence}-${direction}`;
        const marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
        marker.setAttribute('id', id);
        marker.setAttribute('markerWidth', '8');
        marker.setAttribute('markerHeight', '8');
        marker.setAttribute('refX', direction === 'end' ? '7' : '1');
        marker.setAttribute('refY', '4');
        marker.setAttribute('orient', 'auto');
        marker.setAttribute('markerUnits', 'strokeWidth');
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', direction === 'end' ? 'M0,0 L8,4 L0,8 z' : 'M8,0 L0,4 L8,8 z');
        path.setAttribute('fill', color);
        marker.appendChild(path);
        defs.appendChild(marker);
        return id;
    }

    function drawLine(questionEl, leftItem, rightItem, color, options = {}) {
        const layout = getLayout(questionEl);
        const svg = getOrCreateSvg(questionEl);
        if (!layout || !svg || !leftItem || !rightItem) return;
        const leftRect = leftItem.getBoundingClientRect();
        const rightRect = rightItem.getBoundingClientRect();
        const layoutRect = layout.getBoundingClientRect();
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', leftRect.right - layoutRect.left);
        line.setAttribute('y1', leftRect.top - layoutRect.top + leftRect.height / 2);
        line.setAttribute('x2', rightRect.left - layoutRect.left);
        line.setAttribute('y2', rightRect.top - layoutRect.top + rightRect.height / 2);
        line.setAttribute('stroke', color);
        line.setAttribute('stroke-width', options.width || '3');
        line.setAttribute('stroke-linecap', 'round');
        if (options.dashed) line.setAttribute('stroke-dasharray', '7 5');
        line.classList.add('mksq-pair-line', options.className || 'mksq-pair-answer-line');
        const operator = options.operator || '--';
        const sequence = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
        if (operator === '->' || operator === '-->' || operator === '<->') {
            line.setAttribute('marker-end', `url(#${createMarker(svg, color, 'end', sequence)})`);
        }
        if (operator === '<-' || operator === '<--' || operator === '<->') {
            line.setAttribute('marker-start', `url(#${createMarker(svg, color, 'start', sequence)})`);
        }
        svg.appendChild(line);
    }

    function clearDrawnPairLines(questionEl) {
        const svg = getOrCreateSvg(questionEl);
        if (!svg) return null;
        svg.querySelectorAll('.mksq-pair-line, defs').forEach(element => element.remove());
        return svg;
    }

    function drawCorrectionConnections(questionEl, state, updateItemStates = false) {
        if (!state || !clearDrawnPairLines(questionEl)) return;
        const correctPairs = Array.isArray(state.correctPairs) ? state.correctPairs : [];
        const userConns = Array.isArray(state.userConns) ? state.userConns : [];
        const qData = state.qData || {};

        if (updateItemStates) {
            questionEl.querySelectorAll('.mkq-mq-item').forEach(item => {
                item.classList.remove('selected', 'mksq-pair-selected', 'mksq-pair-linked', 'mksq-pair-orphan', 'correct', 'incorrect');
                item.style.removeProperty('--mksq-pair-color');
            });
        }

        const exactPairIndexes = new Set();
        userConns.forEach(connection => {
            let best = null;
            correctPairs.forEach((pair, index) => {
                const match = _lmEdgeMatch(pair, connection.source, connection.target, qData);
                if (!match.accepted) return;
                if (!best || match.weight > best.match.weight) best = { pair, index, match };
            });
            const isExact = Boolean(best?.match.exact);
            if (isExact) exactPairIndexes.add(best.index);
            const leftItem = itemFor(questionEl, 'left', connection.left);
            const rightItem = itemFor(questionEl, 'right', connection.right);
            if (updateItemStates) {
                [leftItem, rightItem].forEach(item => item?.classList.add(isExact ? 'correct' : 'incorrect'));
            }
            drawLine(questionEl, leftItem, rightItem, isExact ? 'var(--mkq-success)' : 'var(--mkq-error)', {
                operator: connection.operator || '--',
                className: isExact ? 'mksq-pair-correct-line' : 'mksq-pair-wrong-line',
            });
        });

        correctPairs.forEach((pair, index) => {
            if (exactPairIndexes.has(index)) return;
            const leftItem = itemFor(questionEl, 'left', pair.left);
            const rightItem = itemFor(questionEl, 'right', pair.right);
            if (updateItemStates) {
                if (leftItem && !leftItem.classList.contains('correct')) leftItem.classList.add('incorrect');
                if (rightItem && !rightItem.classList.contains('correct')) rightItem.classList.add('incorrect');
            }
            drawLine(questionEl, leftItem, rightItem, 'var(--mkq-success)', {
                operator: pair.operator || '--',
                dashed: true,
                className: 'mksq-pair-correction-line',
                width: '2.5',
            });
        });
    }

    function drawConnections(questionEl) {
        const correctionState = questionEl._mksqPairCorrectionState;
        if (correctionState) {
            drawCorrectionConnections(questionEl, correctionState, false);
            return;
        }
        if (!clearDrawnPairLines(questionEl)) return;
        questionEl.querySelectorAll('.mkq-mq-connection').forEach(conn => {
            const leftItem = itemFor(questionEl, 'left', conn.dataset.left);
            const rightItem = itemFor(questionEl, 'right', conn.dataset.right);
            drawLine(
                questionEl,
                leftItem,
                rightItem,
                conn.dataset.color || 'var(--mkq-lm-line)',
                { operator: conn.dataset.operator || '--' },
            );
        });
    }

    function removeConnection(questionEl, conn, clickedItem) {
        if (!conn) return;
        const color = conn.dataset.color || clickedItem.dataset.pairColor || nextColor(questionEl);
        const counterpart = sideOf(clickedItem) === 'left'
            ? itemFor(questionEl, 'right', conn.dataset.right)
            : itemFor(questionEl, 'left', conn.dataset.left);
        conn.remove();
        clearItemColor(clickedItem);
        if (counterpart) {
            setItemColor(counterpart, color, 'selected');
            counterpart.classList.add('mksq-pair-orphan');
            questionEl._mksqPairSelected = counterpart;
        }
        drawConnections(questionEl);
    }

    function expectedPairFor(questionEl, left, right) {
        return getPairs(questionEl).find(entry => (
            (entry.left === left && entry.right === right)
            || (entry.left === right && entry.right === left)
        ));
    }

    function learnerOperatorFor(pair, firstItem) {
        const operator = pair?.operator || '--';
        if (LM_UNDIRECTED_OPERATORS.has(operator)) return '--';
        if (LM_BIDIRECTIONAL_OPERATORS.has(operator)) return '<->';
        return sideOf(firstItem) === 'left' ? '->' : '<-';
    }

    function addConnection(questionEl, firstItem, secondItem) {
        const leftItem = sideOf(firstItem) === 'left' ? firstItem : secondItem;
        const rightItem = sideOf(firstItem) === 'right' ? firstItem : secondItem;
        if (!leftItem || !rightItem || sideOf(leftItem) === sideOf(rightItem)) return;
        const left = leftItem.dataset.item;
        const right = rightItem.dataset.item;
        const source = firstItem.dataset.item;
        const target = secondItem.dataset.item;
        const color = firstItem.dataset.pairColor || secondItem.dataset.pairColor || nextColor(questionEl);

        [leftItem, rightItem].forEach(item => {
            const existing = connectionForItem(questionEl, item);
            if (existing) existing.remove();
        });

        const expectedPair = expectedPairFor(questionEl, left, right);
        const conn = document.createElement('div');
        conn.className = 'mkq-mq-connection';
        conn.dataset.left = left;
        conn.dataset.right = right;
        conn.dataset.source = source;
        conn.dataset.target = target;
        conn.dataset.color = color;
        conn.dataset.operator = learnerOperatorFor(expectedPair, firstItem);
        conn.style.display = 'none';
        questionEl.querySelector('.mkq-mq-pair-connectors')?.appendChild(conn);
        setItemColor(leftItem, color, 'linked');
        setItemColor(rightItem, color, 'linked');
        questionEl._mksqPairSelected = null;
        drawConnections(questionEl);

        if (questionEl.dataset.pairBehavior === 'live') {
            evaluateLiveConnection(questionEl, conn, leftItem, rightItem);
        }
    }

    function liveCorrectionData(questionEl) {
        const quiz = questionEl.closest('.mkdocs-superquiz');
        if (!quiz) return null;
        const data = decryptAnswers(quiz.dataset.encrypted);
        const questionId = Number.parseInt(questionEl.dataset.questionId, 10);
        return data?.questions?.find(question => question.number === questionId) || null;
    }

    function updateLiveProgress(questionEl) {
        const quiz = questionEl.closest('.mkdocs-superquiz');
        if (!quiz) return;
        const data = liveCorrectionData(questionEl);
        const total = data?.pairs?.length || 0;
        const correct = questionEl.querySelectorAll('.mkq-mq-connection[data-live-correct="true"]').length;
        const errors = Number.parseInt(questionEl.dataset.liveErrors || '0', 10) || 0;
        const score = quiz.querySelector('.mkq-score');
        if (score) {
            score.textContent = `✓ ${correct}/${total} · ${tForQuestion(quiz, 'ui.errors_label', 'Errors')}: ${errors}`;
            score.style.display = 'block';
            score.classList.toggle('good', total > 0 && correct === total);
        }
        if (total > 0 && correct === total) {
            setQuestionSubmittedState(quiz, true);
            saveAnswers(quiz.dataset.quizId);
        }
    }

    function evaluateLiveConnection(questionEl, conn, leftItem, rightItem) {
        const data = liveCorrectionData(questionEl);
        const pair = (data?.pairs || []).find(entry => (
            (entry.left === conn.dataset.left && entry.right === conn.dataset.right)
            || (entry.left === conn.dataset.right && entry.right === conn.dataset.left)
        ));
        const match = pair
            ? _lmEdgeMatch(pair, conn.dataset.source, conn.dataset.target, data)
            : { exact: false };
        const isCorrect = Boolean(match.exact);
        if (isCorrect) {
            conn.dataset.liveCorrect = 'true';
            conn.dataset.color = 'var(--mkq-success)';
            leftItem.classList.add('mksq-pair-live-complete');
            rightItem.classList.add('mksq-pair-live-complete');
            leftItem.setAttribute('aria-disabled', 'true');
            rightItem.setAttribute('aria-disabled', 'true');
            drawConnections(questionEl);
            updateLiveProgress(questionEl);
            saveAnswers(questionEl.closest('.mkdocs-superquiz')?.dataset.quizId);
            return;
        }

        questionEl.dataset.liveErrors = String((Number.parseInt(questionEl.dataset.liveErrors || '0', 10) || 0) + 1);
        leftItem.classList.add('mksq-pair-live-error');
        rightItem.classList.add('mksq-pair-live-error');
        conn.dataset.color = 'var(--mkq-error)';
        drawConnections(questionEl);
        setTimeout(() => {
            conn.remove();
            clearItemColor(leftItem);
            clearItemColor(rightItem);
            drawConnections(questionEl);
            updateLiveProgress(questionEl);
            saveAnswers(questionEl.closest('.mkdocs-superquiz')?.dataset.quizId);
        }, 550);
    }

    function onItemClick(e) {
        const item = e.currentTarget;
        const questionEl = item.closest('.mkq-mq-pair-question');
        const quiz = questionEl?.closest('.mkdocs-superquiz');
        if (!questionEl || quiz?.dataset.submitted === 'true' || item.classList.contains('mksq-pair-live-complete')) return;

        const existing = connectionForItem(questionEl, item);
        if (existing) {
            removeConnection(questionEl, existing, item);
            return;
        }

        const selected = questionEl._mksqPairSelected;
        if (selected === item) {
            item.classList.remove('selected', 'mksq-pair-selected');
            if (!item.classList.contains('mksq-pair-orphan')) clearItemColor(item);
            questionEl._mksqPairSelected = null;
            return;
        }

        if (!selected) {
            const color = item.dataset.pairColor || nextColor(questionEl);
            setItemColor(item, color, 'selected');
            questionEl._mksqPairSelected = item;
            return;
        }

        if (sideOf(selected) === sideOf(item)) {
            selected.classList.remove('selected', 'mksq-pair-selected');
            if (!selected.classList.contains('mksq-pair-orphan')) clearItemColor(selected);
            const color = item.dataset.pairColor || nextColor(questionEl);
            setItemColor(item, color, 'selected');
            questionEl._mksqPairSelected = item;
            return;
        }

        addConnection(questionEl, selected, item);
    }

    function clearQuestion(questionEl) {
        questionEl.querySelectorAll('.mkq-mq-connection').forEach(conn => conn.remove());
        questionEl.querySelectorAll('.mkq-mq-item').forEach(clearItemColor);
        questionEl.querySelectorAll('.mkq-mq-item').forEach(item => item.classList.remove('correct', 'incorrect'));
        const svg = questionEl.querySelector('.mkq-mq-svg-overlay');
        if (svg) svg.replaceChildren();
        questionEl._mksqPairSelected = null;
        delete questionEl._mksqPairCorrectionState;
        questionEl.dataset.nextPairColor = '0';
        questionEl.dataset.liveErrors = '0';
    }

    function onClearClick(e) {
        const questionEl = e.currentTarget.closest('.mkq-mq-pair-question');
        const quiz = questionEl?.closest('.mkdocs-superquiz');
        if (!questionEl || quiz?.dataset.submitted === 'true') return;
        clearQuestion(questionEl);
    }

    function attachQuestion(questionEl) {
        questionEl.querySelectorAll('.mkq-mq-left-item, .mkq-mq-right-item').forEach(item => {
            if (item._mqPairBound) return;
            item._mqPairBound = true;
            item.addEventListener('click', onItemClick);
            item.addEventListener('keydown', event => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    onItemClick({ currentTarget: item });
                }
            });
        });
        const clearButton = questionEl.querySelector('.mkq-mq-clear-btn');
        if (clearButton && !clearButton._mqClearBound) {
            clearButton._mqClearBound = true;
            clearButton.addEventListener('click', onClearClick);
        }
        if (!questionEl._mksqPairResizeBound) {
            questionEl._mksqPairResizeBound = true;
            const layout = getLayout(questionEl);
            let resizeFrame = 0;
            const scheduleRedraw = () => {
                cancelAnimationFrame(resizeFrame);
                resizeFrame = requestAnimationFrame(() => {
                    resizeFrame = requestAnimationFrame(() => drawConnections(questionEl));
                });
            };
            questionEl._mksqPairScheduleRedraw = scheduleRedraw;
            window.addEventListener('resize', scheduleRedraw, { passive: true });
            if (layout && typeof ResizeObserver === 'function') {
                questionEl._mksqPairResizeObserver = new ResizeObserver(scheduleRedraw);
                questionEl._mksqPairResizeObserver.observe(layout);
            }
        }
    }

    window._drawMatchPairConnections = drawConnections;
    window._clearMatchPairQuestion = clearQuestion;
    window._renderMatchPairCorrection = function(questionEl, correctPairs, userConns, qData) {
        const state = {
            correctPairs: (correctPairs || []).map(pair => ({ ...pair })),
            userConns: (userConns || []).map(connection => ({ ...connection })),
            qData: { ...(qData || {}) },
        };
        questionEl._mksqPairCorrectionState = state;
        drawCorrectionConnections(questionEl, state, true);
    };

    window._initMatchPair = function() {
        document.querySelectorAll('.mkq-mq-pair-question').forEach(attachQuestion);
        new MutationObserver(mutations => mutations.forEach(mutation => mutation.addedNodes.forEach(node => {
            if (node.nodeType !== 1) return;
            if (node.classList?.contains('mkq-mq-pair-question')) attachQuestion(node);
            else node.querySelectorAll?.('.mkq-mq-pair-question').forEach(attachQuestion);
        }))).observe(document.body, { childList: true, subtree: true });
    };

})();

// ─────────────────────────────────────────────────────────────────────────────
// match mode: category — drag&drop (réutilise initOrderColumnsDragDrop logic)
// ─────────────────────────────────────────────────────────────────────────────

(function initMatchCategory() {

    let dragSrc = null, placeholder = null, lastTarget = null;

    function createPH(ref) {
        const ph = document.createElement('div');
        ph.className = 'mkq-mq-placeholder';
        ph.style.height = ref.offsetHeight + 'px';
        return ph;
    }

    function removePH() {
        if (placeholder?.parentNode) placeholder.parentNode.removeChild(placeholder);
        placeholder = null; lastTarget = null;
    }

    function sameQuestion(a, b) {
        const qa = a.closest('.mkdocs-superquiz'), qb = b.closest('.mkdocs-superquiz');
        return qa && qb && qa === qb;
    }

    function insertPH(clientY, container, src) {
        if (!placeholder || !sameQuestion(src, container)) return;
        const items = Array.from(container.querySelectorAll('.mkq-mq-cat-item, .mkq-mq-pool-item'))
            .filter(el => el !== src && el !== placeholder);
        if (!items.length) { if (lastTarget !== container) { lastTarget = container; container.appendChild(placeholder); } return; }
        let best = null, bestD = Infinity;
        items.forEach(item => {
            const rect = item.getBoundingClientRect();
            const d = Math.abs(clientY - (rect.top + rect.height / 2));
            if (d < bestD) { bestD = d; best = item; }
        });
        if (!best) return;
        const rect = best.getBoundingClientRect();
        const pos  = clientY < rect.top + rect.height / 2 ? 'before' : 'after';
        const key  = (best.dataset.item || '') + '_' + pos;
        if (lastTarget === key) return;
        lastTarget = key;
        if (pos === 'before') best.parentNode.insertBefore(placeholder, best);
        else best.parentNode.insertBefore(placeholder, best.nextSibling);
    }

    function onDragStart(e) {
        dragSrc = e.currentTarget;
        dragSrc.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', '');
        placeholder = createPH(dragSrc);
        dragSrc.parentNode.insertBefore(placeholder, dragSrc.nextSibling);
        lastTarget = null;
    }

    function onDragEnd() { if (dragSrc) dragSrc.classList.remove('dragging'); removePH(); dragSrc = null; }

    function onDragOver(e) {
        e.preventDefault();
        if (!dragSrc) return;
        const container = e.currentTarget.closest('.mkq-mq-category-items, .mkq-mq-pool-items');
        if (container) insertPH(e.clientY, container, dragSrc);
    }

    function onDrop(e) {
        e.preventDefault();
        if (!dragSrc || !placeholder?.parentNode) { removePH(); return; }
        if (!sameQuestion(dragSrc, placeholder.parentNode)) { removePH(); return; }
        placeholder.parentNode.insertBefore(dragSrc, placeholder);
        removePH();
    }

    function attachItem(item) {
        if (item._mqCategoryBound) return;
        item._mqCategoryBound = true;
        item.setAttribute('draggable', 'true');
        item.addEventListener('dragstart', onDragStart);
        item.addEventListener('dragend',   onDragEnd);
        item.addEventListener('dragover',  onDragOver);
        item.addEventListener('drop',      onDrop);
    }

    function attachContainer(c) {
        if (c._mqCategoryContainerBound) return;
        c._mqCategoryContainerBound = true;
        c.addEventListener('dragover', onDragOver);
        c.addEventListener('drop',     onDrop);
    }

    window._initMatchCategory = function() {
        document.querySelectorAll('.mkq-mq-cat-item, .mkq-mq-pool-item').forEach(attachItem);
        document.querySelectorAll('.mkq-mq-category-items, .mkq-mq-pool-items').forEach(attachContainer);
        new MutationObserver(muts => muts.forEach(m => m.addedNodes.forEach(node => {
            if (node.nodeType !== 1) return;
            if (node.classList?.contains('mkq-mq-cat-item') || node.classList?.contains('mkq-mq-pool-item')) attachItem(node);
            else if (node.classList?.contains('mkq-mq-category-items') || node.classList?.contains('mkq-mq-pool-items')) attachContainer(node);
            else if (node.querySelectorAll) {
                node.querySelectorAll('.mkq-mq-cat-item, .mkq-mq-pool-item').forEach(attachItem);
                node.querySelectorAll('.mkq-mq-category-items, .mkq-mq-pool-items').forEach(attachContainer);
            }
        }))).observe(document.body, { childList: true, subtree: true });
    };

})();

// ─────────────────────────────────────────────────────────────────────────────
// match mode: flashcard — flip, ✓/✗, navigation
// ─────────────────────────────────────────────────────────────────────────────

(function initMatchFlashcard() {

    function cardsInDeck(deckEl) {
        return Array.from(deckEl.querySelectorAll('.mkq-fc-card'));
    }

    function updateFlashcardScore(questionEl) {
        if (!questionEl || questionEl.dataset.autoEvaluation !== 'true') return;
        const total = Number.parseInt(questionEl.dataset.totalCards || '0', 10) || 0;
        const correct = questionEl.querySelectorAll('.mkq-fc-card[data-result="correct"]').length;
        const display = questionEl.querySelector('.mkq-fc-score-display');
        if (display) display.textContent = ` — ${correct}/${total}`;
    }
    window._updateFlashcardScore = updateFlashcardScore;

    function showCard(deckEl, index) {
        const cards = cardsInDeck(deckEl);
        if (!cards.length) return;
        const safeIndex = Math.max(0, Math.min(index, cards.length - 1));
        cards.forEach((card, cardIndex) => {
            card.style.display = cardIndex === safeIndex ? '' : 'none';
        });
        const questionEl = deckEl.closest('.mkq-mq-flashcard-question');
        const current = questionEl?.querySelector('.mkq-fc-current');
        if (current) current.textContent = String(safeIndex + 1);
    }

    function visibleCardIndex(deckEl) {
        return cardsInDeck(deckEl).findIndex(card => card.style.display !== 'none');
    }

    function setCardSide(cardEl, side) {
        const showBack = side === 'back';
        cardEl.dataset.state = showBack ? 'back' : 'front';
        cardEl.classList.toggle('flipped', showBack);
        cardEl.setAttribute('aria-pressed', showBack ? 'true' : 'false');
        const actions = cardEl.querySelector('.mkq-fc-actions');
        if (actions) actions.hidden = !showBack;
    }

    function toggleCard(cardEl) {
        setCardSide(cardEl, cardEl.dataset.state === 'back' ? 'front' : 'back');
    }

    function onCardClick(event) {
        // Preserve normal interaction for links or embedded controls authored
        // inside a card while making the rest of the card the flip target.
        if (event.target.closest('a, button, input, select, textarea')) return;
        toggleCard(event.currentTarget);
    }

    function onCardKeydown(event) {
        if (event.target.closest('a, button, input, select, textarea')) return;
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        toggleCard(event.currentTarget);
    }

    function onResult(event) {
        event.preventDefault();
        event.stopPropagation();
        const button = event.currentTarget;
        const cardEl = document.getElementById(button.dataset.card);
        if (!cardEl) return;
        const result = button.dataset.result === 'correct' ? 'correct' : 'incorrect';
        cardEl.dataset.result = result;
        cardEl.classList.remove('fc-correct', 'fc-incorrect');
        cardEl.classList.add(result === 'correct' ? 'fc-correct' : 'fc-incorrect');
        const questionEl = cardEl.closest('.mkq-mq-flashcard-question');
        updateFlashcardScore(questionEl);
        const quizEl = cardEl.closest('.mkdocs-superquiz');
        if (quizEl) saveAnswers(quizEl.dataset.quizId);
    }

    function attachQuestion(questionEl) {
        if (questionEl._mksqFlashcardBound) return;
        questionEl._mksqFlashcardBound = true;

        const deckEl = questionEl.querySelector('.mkq-fc-deck');
        if (!deckEl) return;

        cardsInDeck(deckEl).forEach(card => {
            card.addEventListener('click', onCardClick);
            card.addEventListener('keydown', onCardKeydown);
            setCardSide(card, card.dataset.state === 'back' ? 'back' : 'front');
            card.querySelectorAll('.mkq-fc-correct, .mkq-fc-incorrect').forEach(button => {
                button.addEventListener('click', onResult);
            });
        });
        showCard(deckEl, 0);
        updateFlashcardScore(questionEl);

        const previousButton = questionEl.querySelector('.mkq-fc-prev');
        const nextButton = questionEl.querySelector('.mkq-fc-next');

        previousButton?.addEventListener('click', () => {
            const index = visibleCardIndex(deckEl);
            if (index > 0) showCard(deckEl, index - 1);
        });
        nextButton?.addEventListener('click', () => {
            const index = visibleCardIndex(deckEl);
            const cards = cardsInDeck(deckEl);
            if (index >= 0 && index < cards.length - 1) showCard(deckEl, index + 1);
        });
    }

    window._initMatchFlashcard = function() {
        document.querySelectorAll('.mkq-mq-flashcard-question').forEach(attachQuestion);
        new MutationObserver(mutations => mutations.forEach(mutation => mutation.addedNodes.forEach(node => {
            if (node.nodeType !== 1) return;
            if (node.classList?.contains('mkq-mq-flashcard-question')) attachQuestion(node);
            else if (node.querySelectorAll) node.querySelectorAll('.mkq-mq-flashcard-question').forEach(attachQuestion);
        }))).observe(document.body, { childList: true, subtree: true });
    };

})();

window.randomizeEvalQuestions = randomizeEvalQuestions;
window.resetQuestion = resetQuestion;
window.validateEval = validateEval;
window.initEvalAccessControl = initEvalAccessControl;
window.requestEvalFullscreen = requestEvalFullscreen;
window.resetEval = resetEval;
window.resetAllQuestions = resetAllQuestions;
window.setQuestionSubmittedState = setQuestionSubmittedState;

function _initAllInteractions() {
    window._initOrderDragDrop && window._initOrderDragDrop();
    window._initOrderColumnsDragDrop && window._initOrderColumnsDragDrop();
    window._initOrderSentenceDragDrop && window._initOrderSentenceDragDrop();
    window._initLinematchColumnsDragDrop && window._initLinematchColumnsDragDrop();
    window._initLinematchImageDragDrop && window._initLinematchImageDragDrop();
    window._initLinematchPathDragDrop && window._initLinematchPathDragDrop();
    window._initLinematchGraphDragDrop && window._initLinematchGraphDragDrop();
    window._initMatchPair && window._initMatchPair();
    window._initMatchCategory && window._initMatchCategory();
    window._initMatchFlashcard && window._initMatchFlashcard();
}

function initQuizPlugin() {
    console.log('[quiz] initQuizPlugin called, readyState:', document.readyState);
    if (!window.QUIZ_CONFIG || !window.QUIZ_CONFIG.i18n) {
        console.warn('[quiz] QUIZ_CONFIG not ready, aborting');
        return;
    }
    if (_initQrReportViewerFromHash()) {
        console.log('[quiz] QR report viewer mode');
        return;
    }
    console.log('[quiz] step 1: createUnlockModal');
    try { createUnlockModal(); } catch(e) { console.error('[quiz] createUnlockModal error:', e); }
    console.log('[quiz] step 2: applyRandomization');
    try { applyRandomization(); } catch(e) { console.error('[quiz] applyRandomization error:', e); }
    console.log('[quiz] step 3: restoreUnlockedCorrections');
    try { restoreUnlockedCorrections(); } catch(e) { console.error('[quiz] restoreUnlockedCorrections error:', e); }
    console.log('[quiz] step 4: loadSavedAnswers');
    try { loadSavedAnswers(); } catch(e) { console.error('[quiz] loadSavedAnswers error:', e); }
    console.log('[quiz] step 5: evaluation toolbar/navigation');
    try { initPageNavigation(); } catch(e) { console.error('[quiz] initPageNavigation error:', e); }
    try { initEvalViolationMonitoring(); } catch(e) { console.error('[quiz] initEvalViolationMonitoring error:', e); }
    try { _scheduleEvalQrReportRefresh(); } catch(e) { console.error('[quiz] QR report init error:', e); }
    try { initEvalAccessControl(); } catch(e) { console.error('[quiz] initEvalAccessControl error:', e); }
    try { initEvalToolbars(); } catch(e) { console.error('[quiz] initEvalToolbars error:', e); }
    try { initPageTimers(); } catch(e) { console.error('[quiz] initPageTimers error:', e); }
    console.log('[quiz] step 6: scheduling _initAllInteractions');
    setTimeout(() => {
        console.log('[quiz] _initAllInteractions firing');
        try { _initAllInteractions(); } catch(e) { console.error('[quiz] _initAllInteractions error:', e); }
    }, 0);

    if (!window._mksqRevealReadyListenerBound) {
        window._mksqRevealReadyListenerBound = true;
        document.addEventListener('mkdocs-revealjs-ready', function() {
            applyRandomization();
            restoreUnlockedCorrections();
            loadSavedAnswers();
            initPageNavigation();
            initEvalViolationMonitoring();
            _scheduleEvalQrReportRefresh();
            initEvalAccessControl();
            initEvalToolbars();
            initPageTimers();
            setTimeout(_initAllInteractions, 0);
        });
    }
}

function clearAllQuizData() {
    Object.keys(localStorage).filter(key => key.startsWith('mksq:') || key.startsWith('mksq_timer_')).forEach(key => localStorage.removeItem(key));
    setTimeout(() => location.reload(), 1000);
}
window.clearAllQuizData = clearAllQuizData;


// ── Initialisation ───────────────────────────────────────────────────────────
// MkDocs Material uses instant loading (SPA navigation): DOMContentLoaded fires
// only once for the first page. Subsequent navigations fire document$ (RxJS observable).
// We must handle both cases.

function _runInit() {
    // Reset instances so re-navigation re-inits correctly
    Object.keys(_lmInstances).forEach(k => {
        try { _lmInstances[k].reset(); } catch(e) {}
        delete _lmInstances[k];
    });
    // Debounce: cancel any pending init and schedule a fresh one
    if (window._quizInitTimer) clearTimeout(window._quizInitTimer);
    window._quizInitTimer = setTimeout(initQuizPlugin, 50);
}

// Standard load (first page load or non-Material themes)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', _runInit);
} else {
    _runInit();
}

// MkDocs Material instant loading — fires on every SPA navigation
if (typeof document$ !== 'undefined') {
    document$.subscribe(_runInit);
} else {
    // Fallback: wait for Material to define document$ then subscribe
    document.addEventListener('DOMContentLoaded', () => {
        if (typeof document$ !== 'undefined') {
            document$.subscribe(_runInit);
        }
    });
}


