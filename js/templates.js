/**
 * templates.js - 모든 HTML 템플릿을 생성하는 모듈
 */

const Templates = {
    loginScreen: () => `
        <div class="login-screen active" id="login-screen-content">
            <h1 class="text-4xl font-bold text-red-600 mb-2">재뽕 일본어 공부</h1>
            <p class="text-xl text-gray-600 mb-12">아빠가 만든 우리 가족 일본어 앱 🍌</p>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div class="user-card"><div class="user-avatar overflow-hidden"><img src="images/dad.png" alt="아빠" class="w-full h-full object-cover"></div><h3 class="text-xl font-bold">봉아빠</h3></div>
                <div class="user-card"><div class="user-avatar overflow-hidden"><img src="images/mom_orig.png" alt="엄마" class="w-full h-full object-cover"></div><h3 class="text-xl font-bold">강엄마</h3></div>
                <div class="user-card"><div class="user-avatar overflow-hidden"><img src="images/sieun.png" alt="시으니" class="w-full h-full object-cover"></div><h3 class="text-xl font-bold">시으니</h3></div>
                <div class="user-card"><div class="user-avatar overflow-hidden"><img src="images/harong.png" alt="하롱이" class="w-full h-full object-cover"></div><h3 class="text-xl font-bold">하롱이</h3></div>
            </div>
        </div>
    `,

    header: () => `
        <header class="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <div class="flex items-center space-x-3">
                        <div class="bg-red-600 p-2 rounded-lg"><i class="fas fa-torii-gate text-white text-xl"></i></div>
                        <div><h1 class="text-xl font-bold text-gray-900">재뽕 일본어</h1></div>
                    </div>
                    <div class="flex items-center space-x-2">
                        <span class="text-lg" id="current-user-avatar">👨</span>
                        <span class="text-sm font-bold text-gray-900" id="current-user-name"></span>
                        <button class="logout-btn text-xs text-gray-500 hover:text-red-600 ml-2"><i class="fas fa-sign-out-alt"></i></button>
                    </div>
                </div>
            </div>
        </header>
    `,

    navigation: () => `
        <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 mb-6">
            <div class="grid grid-cols-4 gap-2 pb-2">
                <button data-tab="fukuoka" class="nav-tab active text-center flex flex-col items-center p-2 rounded-lg hover:bg-gray-50"><i class="fas fa-plane-departure mb-1 text-lg text-red-600"></i><span class="text-xs font-medium">후쿠오카</span></button>
                <button data-tab="conversation" class="nav-tab text-center flex flex-col items-center p-2 rounded-lg hover:bg-gray-50"><i class="fas fa-comments mb-1 text-lg"></i><span class="text-xs font-medium">회화</span></button>
                <button data-tab="characters" class="nav-tab text-center flex flex-col items-center p-2 rounded-lg hover:bg-gray-50"><i class="fas fa-font mb-1 text-lg"></i><span class="text-xs font-medium">글자</span></button>
                <button data-tab="vocabulary" class="nav-tab text-center flex flex-col items-center p-2 rounded-lg hover:bg-gray-50"><i class="fas fa-book mb-1 text-lg"></i><span class="text-xs font-medium">단어</span></button>
            </div>
        </nav>
    `,

    fukuokaTab: () => `
        <div class="tab-content active" id="fukuoka">
            <h2 class="text-2xl font-bold mb-6">🇯🇵 후쿠오카 여행</h2>
            <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded"><p class="text-sm text-yellow-700 font-bold">3박 4일 후쿠오카 완전정복</p></div>
            <div id="fukuoka-day-tabs"></div>
            <div id="fukuoka-itinerary-content"></div>
        </div>
    `,

    initContent: () => `
        ${Templates.fukuokaTab()}
        <div class="tab-content" id="conversation"></div>
        <div class="tab-content" id="characters"></div>
        <div class="tab-content" id="vocabulary"></div>
    `
};

function renderTemplates() {
    const loginContainer = document.getElementById('login-screen');
    if (loginContainer) {
        loginContainer.innerHTML = Templates.loginScreen();
        loginContainer.style.display = 'none';

        const userCards = loginContainer.querySelectorAll('.user-card');
        const users = ['dad', 'mom', 'sieun', 'harong'];
        userCards.forEach((card, index) => {
            card.addEventListener('click', () => { if (typeof login === 'function') login(users[index]); });
        });
    }

    const headerContainer = document.getElementById('app-header');
    if (headerContainer) {
        headerContainer.innerHTML = Templates.header();
        const logoutBtn = headerContainer.querySelector('.logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => { if (typeof logout === 'function') logout(); });
        }
    }

    const navContainer = document.getElementById('app-navigation');
    if (navContainer) {
        navContainer.innerHTML = Templates.navigation();
        const navButtons = navContainer.querySelectorAll('.nav-tab');
        navButtons.forEach(btn => {
            btn.addEventListener('click', function () {
                const tabName = this.getAttribute('data-tab');
                if (typeof showTab === 'function') showTab(tabName);
            });
        });
    }

    const contentContainer = document.getElementById('app-content');
    if (contentContainer) {
        contentContainer.innerHTML = Templates.initContent();
    }
}

console.log('templates.js loaded');
