/**
 * study.js - 학습 모드 제어
 */

// 현재 학습 모드 추적
let currentStudyMode = 'vocabulary';

// 학습 모드 표시 (단어학습 / 회화 / 회화단어)
function showStudyMode(mode) {
    console.log('showStudyMode called:', mode);
    currentStudyMode = mode;

    // 버튼 활성화 상태 변경
    const buttons = document.querySelectorAll('.mode-btn');
    buttons.forEach(btn => {
        const btnOnClick = btn.getAttribute('onclick');
        if (btnOnClick && btnOnClick.includes(`'${mode}'`)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // 모든 학습 모드 숨기기
    const modes = document.querySelectorAll('.study-mode');
    modes.forEach(m => m.style.display = 'none');

    // 선택된 모드 표시
    const targetMode = document.getElementById(`${mode}-mode`);
    if (targetMode) {
        targetMode.style.display = 'block';
        console.log('Study mode activated:', mode);
    } else {
        console.error('Study mode not found:', mode);
    }

    // 모드별 초기화
    if (mode === 'vocabulary') {
        if (typeof initVocabulary === 'function') {
            initVocabulary();
        }
    } else if (mode === 'conversation') {
        if (typeof initConversation === 'function') {
            initConversation();
        }
    } else if (mode === 'word_study') {
        if (typeof initWordStudy === 'function') {
            initWordStudy();
        }
    }
}

// 전역 노출
window.showStudyMode = showStudyMode;

console.log('study.js loaded');
