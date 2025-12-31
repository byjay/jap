/**
 * templates.js - 모든 HTML 템플릿을 생성하는 모듈
 */

const Templates = {
    /**
     * PRO Welcome Screen Template
     * Replacing the old "cute" style with the high-end "JAPRO" app style.
     */
    loginScreen: () => `
        <div class="relative flex h-full min-h-screen w-full flex-col bg-slate-950 overflow-x-hidden font-display transition-colors duration-300">
            <!-- Premium Gradient Background Layer -->
            <div class="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-900/40 via-slate-950 to-slate-950">
                <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/60 to-slate-950"></div>
            </div>
            
            <!-- Content Layer -->
            <div class="relative z-10 flex-1 flex flex-col px-6 pb-12 pt-20">
                <!-- Logo & Brand (Custom Dancing Logo) -->
                <div class="flex flex-col items-center mb-10 animate-fade-in-down">
                    <div class="relative w-32 h-32 mb-4 group cursor-pointer">
                        <div class="absolute inset-0 bg-white/20 rounded-full blur-2xl group-hover:bg-red-500/30 transition-all duration-500"></div>
                        <img src="images/dancing_logo.svg" 
                            alt="JAPRO Dancing Logo" 
                            class="relative z-10 w-full h-full object-contain animate-bounce transition-transform duration-700 hover:rotate-[360deg]"
                            onerror="this.src='images/app_icon.png'">
                    </div>
                    <h2 class="text-white text-3xl font-black tracking-tighter drop-shadow-md">JAPRO</h2>
                    <p class="text-white/80 text-xs font-bold tracking-[0.2em] uppercase mt-1">Premium Adventure</p>
                </div>

                <!-- Main Value Proposition -->
                <div class="text-center mb-auto animate-fade-in-up">
                    <h1 class="text-slate-900 dark:text-white tracking-tight text-[36px] font-extrabold leading-tight mb-4 drop-shadow-sm">
                        Master Japanese<br><span class="text-red-600">Perfectly.</span>
                    </h1>
                    <div class="inline-flex items-center gap-2 bg-white/40 dark:bg-slate-800/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-sm">
                        <span class="text-sm font-medium text-slate-700 dark:text-slate-200">🇯🇵 AI 기반 가족형 프리미엄 학습</span>
                    </div>
                </div>

                <!-- Social Login Section (The Core) -->
                <div class="w-full max-w-sm mx-auto flex flex-col gap-4 animate-fade-in-up delay-200">
                    <!-- Kakao: Main High-Contrast Button -->
                    <button onclick="AuthProvider.loginWithKakao()" 
                        class="group relative flex items-center justify-center w-full bg-[#fae100] hover:bg-[#ffe812] text-[#371d1e] font-bold text-lg py-5 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all active:scale-[0.97]">
                        <i class="fas fa-comment absolute left-8 text-2xl"></i>
                        <span class="ml-4">카카오로 3초만에 시작하기</span>
                        <div class="absolute top-0 right-10 -mt-2 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full font-black animate-bounce shadow-lg">HOT</div>
                    </button>

                    <!-- Google: Clean Premium Choice -->
                    <button onclick="AuthProvider.loginWithGoogle()" 
                        class="flex items-center justify-center w-full bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 text-slate-700 dark:text-white font-bold text-lg py-5 px-8 rounded-2xl shadow-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all active:scale-[0.97]">
                        <i class="fab fa-google mr-4 text-2xl text-red-500"></i>
                        <span>Google 계정으로 계속하기</span>
                    </button>

                    <div class="mt-4 flex flex-col items-center gap-4">
                        <p class="text-[11px] text-center text-slate-400 font-medium">
                            로그인 시 <a href="#" class="text-slate-600 dark:text-slate-300 underline font-bold">이용약관</a> 및 <a href="#" class="text-slate-600 dark:text-slate-300 underline font-bold">개인정보처리방침</a>에 동의하게 됩니다.
                        </p>
                        
                        <!-- Demoted Guest Link -->
                        <button onclick="AuthProvider.mockLogin('guest')" 
                            class="text-slate-400 text-xs font-bold hover:text-red-500 transition-colors py-2 px-4 rounded-full border border-slate-200 dark:border-slate-700 hover:border-red-200">
                            나중에 둘러보기 (손님 모드)
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `,

    header: () => `
        <header class="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <div class="flex items-center space-x-3 cursor-pointer" onclick="showTab('home')">
                        <div class="bg-white p-1 rounded-lg shadow-sm overflow-hidden w-10 h-10 flex items-center justify-center">
                            <img src="images/dancing_logo.svg" 
                                alt="Logo" class="w-full h-full object-contain animate-pulse"
                                onerror="this.src='images/app_icon.png'">
                        </div>
                        <div><h1 class="text-xl font-bold text-gray-900 tracking-tighter">JAPRO</h1></div>
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
                <button data-tab="fukuoka" class="nav-tab active text-center flex flex-col items-center p-2 rounded-lg hover:bg-gray-50"><i class="fas fa-plane-departure mb-1 text-lg text-primary"></i><span class="text-xs font-medium">후쿠오카</span></button>
                <button data-tab="conversation" class="nav-tab text-center flex flex-col items-center p-2 rounded-lg hover:bg-gray-50"><i class="fas fa-comments mb-1 text-lg"></i><span class="text-xs font-medium">회화</span></button>
                <button data-tab="characters" class="nav-tab text-center flex flex-col items-center p-2 rounded-lg hover:bg-gray-50"><i class="fas fa-font mb-1 text-lg"></i><span class="text-xs font-medium">글자</span></button>
                <button data-tab="vocabulary" class="nav-tab text-center flex flex-col items-center p-2 rounded-lg hover:bg-gray-50"><i class="fas fa-book mb-1 text-lg"></i><span class="text-xs font-medium">단어</span></button>
            </div>
        </nav>
    `,

    fukuokaTab: () => `
        <div class="tab-content active" id="fukuoka">
            <h2 class="text-2xl font-bold mb-6">🇯🇵 후쿠오카 여행</h2>
            <div class="bg-blue-50 border-l-4 border-primary p-4 mb-6 rounded"><p class="text-sm text-blue-700 font-bold">3박 4일 후쿠오카 완전정복</p></div>
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
    console.log('Rendering templates...');
    const loginContainer = document.getElementById('login-screen');
    if (loginContainer) {
        loginContainer.innerHTML = Templates.loginScreen();
        // 초기에는 보이지 않게 하거나, 스플래시 이후 보이게 처리
        // loginContainer.style.display = 'none'; 
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
