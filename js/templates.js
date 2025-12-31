/**
 * templates.js - 모든 HTML 템플릿을 생성하는 모듈
 */

const Templates = {
    loginScreen: () => `
        <div class="login-screen active flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" id="login-screen-content">
            <div class="bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl w-full max-w-md text-center border-4 border-white/50">
                
                <!-- Logo & Title -->
                <div class="mb-8 transform hover:scale-105 transition duration-300">
                    <span class="text-6xl mb-2 block animate-bounce-slow">🏯</span>
                    <h1 class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-600 mb-2 drop-shadow-sm">JAP-BONG PRO</h1>
                    <p class="text-gray-500 font-medium tracking-wide">Premium Japanese Adventure</p>
                </div>
                
                <!-- Social Login Buttons -->
                <div class="flex flex-col gap-4 w-full mb-6">
                    <!-- Kakao -->
                    <button onclick="AuthProvider.loginWithKakao()" 
                        class="relative w-full bg-[#FEE500] hover:bg-[#FDD835] text-black/90 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-3 group">
                        <i class="fas fa-comment text-xl group-hover:rotate-12 transition"></i>
                        <span>카카오로 3초 시작</span>
                        <div class="absolute right-4 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full animate-pulse">BEST</div>
                    </button>
                    
                    <!-- Google -->
                    <button onclick="AuthProvider.loginWithGoogle()" 
                        class="w-full bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-100 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-3">
                        <img src="https://www.google.com/favicon.ico" class="w-6 h-6">
                        <span>Google로 계속하기</span>
                    </button>
                </div>

                <!-- Guest Login (Demoted) -->
                <div>
                    <button onclick="loginAsGuest()" class="text-sm text-gray-400 hover:text-gray-600 underline decoration-dashed hover:decoration-solid transition-colors">
                        로그인 없이 손님으로 둘러보기
                    </button>
                </div>
                
                <div class="mt-8 text-xs text-gray-300">
                    &copy; 2025 JAP-BONG PRO. All rights reserved.
                </div>
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
