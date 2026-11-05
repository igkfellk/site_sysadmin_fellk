/**
 * mkdocs-superquiz - Teacher correction-unlock page.
 *
 * Canonical unlock scopes:
 *   - question: one question correction
 *   - all_questions: every correction in the current evaluation/page scope
 */

const MKSQ_UNLOCK_TYPES = new Set(['question', 'all_questions']);
const MKSQ_UNLOCK_FIELD_SEPARATOR = '\u001f';

function t(key, fallback = '') {
    const keys = key.split('.');
    let value = window.QUIZ_CONFIG?.i18n;
    for (const part of keys) {
        if (!value || typeof value !== 'object') return fallback || key;
        value = value[part];
    }
    return value || fallback || key;
}

function decodeUnlockData(encodedData) {
    const binaryString = atob(encodedData);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    const data = JSON.parse(new TextDecoder().decode(bytes));
    if (!MKSQ_UNLOCK_TYPES.has(data?.type)) {
        throw new Error(`Unsupported unlock type: ${data?.type || ''}`);
    }
    if (!data.page_id) throw new Error('Missing page_id.');
    if (data.type === 'question' && !data.quiz_id) {
        throw new Error('Question unlock requires quiz_id.');
    }
    return data;
}

function unlockTypeLabel(type) {
    if (type === 'all_questions') {
        return t('ui.unlock_type_all_questions', 'All Questions');
    }
    return t('ui.unlock_type_question', 'Question');
}

function unlockHeading(type) {
    if (type === 'all_questions') {
        return t('ui.unlock_all_corrections', 'Unlock All Corrections');
    }
    return t('ui.unlock_question_correction', 'Unlock Question Correction');
}

function correctionIcon(name) {
    return String(window.QUIZ_CONFIG?.correction_icons?.[name] ?? '');
}

function displayUnlockInfo(data) {
    document.title = `${unlockHeading(data.type)} - mkdocs-superquiz`;
    const heading = document.getElementById('page-title-heading');
    if (heading) heading.textContent = `${correctionIcon('unlock')} ${unlockHeading(data.type)}`.trim();

    const typeElement = document.getElementById('unlock-type');
    if (typeElement) typeElement.textContent = unlockTypeLabel(data.type);

    const pageTitleElement = document.getElementById('page-title');
    if (pageTitleElement) pageTitleElement.textContent = data.page_title || '-';

    const questionInfo = document.getElementById('question-info');
    const questionText = document.getElementById('question-text');
    if (questionInfo) questionInfo.style.display = data.type === 'question' ? 'block' : 'none';
    if (questionText && data.type === 'question') {
        questionText.textContent = data.question_title || data.quiz_id;
    }
}

function unlockCodePayload(teacherCodeHash, data) {
    if (!MKSQ_UNLOCK_TYPES.has(data?.type)) {
        throw new Error(`Unsupported unlock type: ${data?.type || ''}`);
    }
    return [
        teacherCodeHash,
        data.page_id,
        data.type,
        data.eval_id ?? '',
        data.quiz_id ?? '',
        data.question_id ?? '',
    ].map((value) => String(value ?? '')).join(MKSQ_UNLOCK_FIELD_SEPARATOR);
}

async function generateUnlockCode(teacherCodeHash, data) {
    const hash = await sha256(unlockCodePayload(teacherCodeHash, data));
    return hash.substring(0, 8).toUpperCase();
}

async function handleTeacherSubmit(unlockData) {
    const masterCodeInput = document.getElementById('teacher-master-code');
    const masterCode = masterCodeInput?.value || '';
    if (!masterCode) {
        showError(t('ui.teacher_code_required', 'Please enter the master teacher code'));
        return;
    }

    try {
        const masterHash = await sha256(masterCode);
        const expectedHash = window.QUIZ_CONFIG?.teacher_code_hash || '';
        if (masterHash !== expectedHash) {
            showError(`❌ ${t('ui.error_teacher_code', 'Incorrect teacher code')}`);
            return;
        }
        displayUnlockCode(await generateUnlockCode(masterHash, unlockData));
    } catch (error) {
        showError(`${t('ui.error_decoding', 'Error')}: ${error.message}`);
    }
}

function displayUnlockCode(code) {
    const codeSection = document.getElementById('generated-code-section');
    const codeValue = document.getElementById('unlock-code-value');
    const form = document.getElementById('teacher-form');
    if (codeValue) codeValue.textContent = code;
    if (codeSection) codeSection.style.display = 'block';
    if (form) form.style.display = 'none';
}

function copyCode(event) {
    const code = document.getElementById('unlock-code-value')?.textContent || '';
    navigator.clipboard.writeText(code).then(() => {
        const button = event?.currentTarget || event?.target;
        if (!button) return;
        const originalText = button.textContent;
        button.textContent = `✓ ${t('ui.code_copied', 'Copied!')}`;
        setTimeout(() => { button.textContent = originalText; }, 2000);
    }).catch(() => {
        alert(`${t('ui.copy_code', 'Code')}: ${code}`);
    });
}

function showError(message) {
    const errorDiv = document.getElementById('error-message');
    if (!errorDiv) {
        alert(message);
        return;
    }
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    setTimeout(() => { errorDiv.style.display = 'none'; }, 5000);
}

async function sha256(value) {
    const buffer = new TextEncoder().encode(value);
    const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
    return Array.from(new Uint8Array(hashBuffer))
        .map((byte) => byte.toString(16).padStart(2, '0'))
        .join('');
}

function applyStaticTranslations() {
    const mappings = [
        ['label-type', 'ui.unlock_type_label', 'Type'],
        ['label-page', 'ui.unlock_page_label', 'Page'],
        ['label-question', 'ui.unlock_question_label', 'Question'],
        ['label-teacher-code', 'ui.teacher_code_label', 'Master teacher code'],
        ['btn-generate', 'ui.generate_unlock_code', 'Generate unlock code'],
        ['label-instruction', 'ui.unlock_instruction', 'Communicate this code to the student orally'],
    ];
    for (const [id, key, fallback] of mappings) {
        const element = document.getElementById(id);
        if (element) element.textContent = t(key, fallback) + (id.startsWith('label-') && id !== 'label-instruction' ? ':' : '');
    }

    const input = document.getElementById('teacher-master-code');
    if (input) input.placeholder = t('ui.teacher_code_placeholder', 'Your master code');
    const unlockCodeLabel = document.getElementById('label-unlock-code');
    if (unlockCodeLabel) unlockCodeLabel.textContent = `✅ ${t('ui.unlock_generated', 'Unlock code')}:`;
    const copyButton = document.getElementById('btn-copy');
    if (copyButton) copyButton.textContent = `📋 ${t('ui.copy_code', 'Copy code')}`;
}

function initUnlockPage() {
    applyStaticTranslations();
    const encodedData = new URLSearchParams(window.location.search).get('data');
    if (!encodedData) {
        showError(t('ui.error_no_data', 'Unlock data missing'));
        return;
    }

    try {
        const unlockData = decodeUnlockData(encodedData);
        displayUnlockInfo(unlockData);
        document.getElementById('teacher-form')?.addEventListener('submit', async (event) => {
            event.preventDefault();
            await handleTeacherSubmit(unlockData);
        });
    } catch (error) {
        showError(`${t('ui.error_decoding', 'Error decoding data')}: ${error.message}`);
    }
}

if (window.location.pathname.includes('quiz-unlock')) {
    document.addEventListener('DOMContentLoaded', initUnlockPage);
}
