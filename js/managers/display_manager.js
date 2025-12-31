/**
 * display_manager.js - 화면 전환 및 UI 가시성 관리
 */

const DisplayManager = {
    // 화면 요소 ID
    ELEMENTS: {
        LOGIN: 'login-screen',
        HEADER: 'app-header',
        NAV: 'app-navigation',
        CONTENT: 'app-content',
        SPLASH: 'splash-screen'
    },

    /**
     * 초기화: 앱 시작 시 호출
     * 로그인 화면만 보여주고 나머지는 숨김
     */
    init: function () {
        console.log('📱 DisplayManager Initializing...');
        this.showLogin();
    },

    /**
     * 로그인 화면 표시 (그 외 모든 UI 숨김)
     */
    showLogin: function () {
        console.log('🔒 Showing Login Screen');
        this.toggle(this.ELEMENTS.LOGIN, true);
        this.toggle(this.ELEMENTS.HEADER, false);
        this.toggle(this.ELEMENTS.NAV, false);
        this.toggle(this.ELEMENTS.CONTENT, false);

        // 로그인 화면이 비어있으면 렌더링 (안전장치)
        const loginEl = document.getElementById(this.ELEMENTS.LOGIN);
        if (loginEl && !loginEl.innerHTML.trim() && Templates.loginScreen) {
            loginEl.innerHTML = Templates.loginScreen();
        }
    },

    /**
     * 메인 앱 화면 표시 (로그인 성공 후)
     */
    showMainApp: function () {
        console.log('🔓 Showing Main App');
        this.toggle(this.ELEMENTS.LOGIN, false);
        this.toggle(this.ELEMENTS.HEADER, true);
        this.toggle(this.ELEMENTS.NAV, true);
        this.toggle(this.ELEMENTS.CONTENT, true);
    },

    /**
     * 유틸리티: 요소 가시성 토글
     */
    toggle: function (id, show) {
        const el = document.getElementById(id);
        if (el) {
            el.style.display = show ? 'block' : 'none';
        } else {
            // console.warn(`Element not found: ${id}`);
        }
    },

    // (기존 레거시 함수 호환성 유지)
    showHome: function () { this.showTab('fukuoka'); },
    showLearning: function () { this.showTab('conversation'); },
    showGames: function () { this.showTab('vocabulary'); },
    showProfile: function () { alert('Profile coming soon!'); },

    showTab: function (tabId) {
        // 탭 활성화 로직 (기존 navigation.js 대체)
        document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
        document.querySelectorAll('.nav-tab').forEach(el => el.classList.remove('active'));

        const content = document.getElementById(tabId);
        const btn = document.querySelector(`.nav-tab[data-tab="${tabId}"]`);

        if (content) content.classList.add('active');
        if (btn) btn.classList.add('active');
    }
};

// 전역 함수로 노출 (기존 코드 호환)
window.showTab = DisplayManager.showTab.bind(DisplayManager);

// DOM 로드 시 초기화 (index.html의 메인 로직보다 먼저 실행되어야 함)
// 하지만 index.html 스크립트에서 명시적으로 호출하는 것이 더 안전함.
