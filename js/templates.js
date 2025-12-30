/**
 * templates.js - 모든 HTML 템플릿을 생성하는 모듈
 */

const Templates = {
    loginScreen: () => `
        <div class="login-screen active" id="login-screen-content">
            <h1 class="text-4xl font-bold text-red-600 mb-2">JAP-BONG PRO</h1>
            <p class="text-xl text-gray-600 mb-12">Premium Japanese Learning 🇯🇵</p>
            
            <div class="flex flex-col gap-4 max-w-sm mx-auto w-full px-6">
                <!-- Social Login -->
                <button onclick="DisplayManager.loginWithKakao()" class="w-full bg-[#FEE500] text-[#000000] py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#FDD835] transition shadow-md">
                    <i class="fas fa-comment"></i> 카카오로 3초만에 시작하기
                </button>
                
                <button onclick="DisplayManager.loginWithGoogle()" class="w-full bg-white text-gray-700 border border-gray-300 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition shadow-sm">
                    <img src="https://www.google.com/favicon.ico" class="w-5 h-5"> Google로 계속하기
                </button>

                <div class="relative my-4">
                    <div class="absolute inset-0 flex items-center"><div class="w-full border-t border-gray-300"></div></div>
                    <div class="relative flex justify-center text-sm"><span class="px-2 bg-gray-50 text-gray-500">또는</span></div>
                </div>

                <!-- Guest -->
                <button onclick="loginAsGuest()" class="w-full bg-gray-600 text-white py-3 rounded-xl font-bold hover:bg-gray-700 transition shadow-md">
                     손님으로 둘러보기
                </button>
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
