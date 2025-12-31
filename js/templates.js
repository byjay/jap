/**
 * templates.js - 모든 HTML 템플릿을 생성하는 모듈
 */

const Templates = {
    /**
     * PRO Welcome Screen Template
     * Replacing the old "cute" style with the high-end "JAPRO" app style.
     */
    loginScreen: () => `
        <div class="relative flex h-full min-h-screen w-full flex-col bg-slate-50 dark:bg-slate-900 group/design-root overflow-x-hidden font-display transition-colors duration-300">
            <!-- Hero Section with Background Image -->
            <div class="relative w-full h-[45vh] min-h-[420px] shrink-0">
                <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCsBUQ8NI2rBviCSsKXFO0Cpb0xqtMEqGYC29xY5pvXUYAl9Rnm5alTm0zll0e2qqQi7I5nCY2FrgYSTaf_SP1yaRTqU9U2_QKotz2rLd90LBtmqGvOSK5dGhgC9dZBZSrdE1ymejWo4FgsOlBZsZ3Y16zdDMVBuix2dODZxoWDovuORosv8h2JGBEmMOtr8T7dl7sNBkKGfPMR8ivbY64VE5GvD0Fxv_q1lZv_9XUwGxfPjtT76AWes9EPeNqCvk0Yiyzlx__AmN8');"></div>
                <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-slate-50 dark:to-slate-900"></div>
                
                <!-- Logo Top Center -->
                <div class="absolute top-0 left-0 right-0 p-6 pt-12 flex justify-center items-center">
                    <div class="flex items-center gap-2 bg-white/20 dark:bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-lg animate-fade-in-down">
                        <span class="text-white text-2xl font-bold">JAPRO</span>
                    </div>
                </div>
            </div>

            <!-- Content Section -->
            <div class="flex-1 flex flex-col -mt-12 z-10 px-5 pb-8">
                <!-- Main Headings -->
                <div class="text-center mb-6 animate-fade-in-up">
                    <h1 class="text-slate-900 dark:text-white tracking-tight text-[32px] font-bold leading-tight pb-2 drop-shadow-sm">
                        Master Japanese Today
                    </h1>
                    <p class="text-slate-500 dark:text-slate-400 text-base font-normal leading-relaxed px-4">
                        가족과 함께하는 프리미엄 일본어 학습. <br>AI 선생님과 실시간으로 대화하며 배우세요.
                    </p>
                </div>

                <!-- Feature Carousel (Static Visual) -->
                <div class="w-full mb-6 overflow-hidden">
                    <div class="flex gap-4 px-2 overflow-x-auto no-scrollbar snap-x snap-mandatory">
                        <!-- Card 1 -->
                        <div class="snap-center shrink-0 w-[240px] flex flex-col gap-3 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <div class="w-full aspect-[4/3] bg-blue-500/10 rounded-xl flex items-center justify-center relative overflow-hidden group">
                                <span class="text-5xl">🎓</span>
                            </div>
                            <div>
                                <p class="text-slate-900 dark:text-white text-lg font-semibold leading-tight mb-1">2,000+ Kanji</p>
                                <p class="text-slate-500 dark:text-slate-400 text-sm">기초부터 상급까지 완벽하게</p>
                            </div>
                        </div>
                        <!-- Card 2 -->
                        <div class="snap-center shrink-0 w-[240px] flex flex-col gap-3 p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
                            <div class="w-full aspect-[4/3] bg-purple-500/10 rounded-xl flex items-center justify-center relative overflow-hidden group">
                                <span class="text-5xl">🗣️</span>
                            </div>
                            <div>
                                <p class="text-slate-900 dark:text-white text-lg font-semibold leading-tight mb-1">AI Speaking</p>
                                <p class="text-slate-500 dark:text-slate-400 text-sm">실시간 발음 교정 & 회화</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex flex-col gap-3 w-full max-w-sm mx-auto mt-auto animate-fade-in-up delay-100">
                    <!-- Kakao Login -->
                    <button onclick="AuthProvider.loginWithKakao()" class="relative flex items-center justify-center w-full bg-[#fae100] hover:bg-[#ffe812] text-[#371d1e] font-bold text-base py-4 px-6 rounded-xl shadow-md transition-transform active:scale-[0.98]">
                        <i class="fas fa-comment absolute left-6 text-xl"></i>
                        <span>카카오로 3초만에 시작하기</span>
                    </button>

                    <!-- Google Login -->
                    <button onclick="AuthProvider.loginWithGoogle()" class="relative flex items-center justify-center w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-white font-semibold text-base py-4 px-6 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-transform active:scale-[0.98]">
                        <i class="fab fa-google absolute left-6 text-xl text-red-500"></i>
                        <span>Google로 계속하기</span>
                    </button>

                    <p class="text-xs text-center text-slate-400 mt-4">
                        로그인하면 <a href="#" class="underline">이용약관</a> 및 <a href="#" class="underline">개인정보처리방침</a>에 동의하게 됩니다.
                    </p>

                    <!-- Guest Mode (Small Link) -->
                    <button onclick="AuthProvider.mockLogin('guest')" class="mt-2 text-slate-400 text-sm font-medium hover:text-slate-600 transition-colors">
                        나중에 하기 (체험 모드)
                    </button>
                </div>
            </div>
        </div>
    `,

    header: () => `
        <header class="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <div class="flex items-center space-x-3">
                        <div class="bg-primary p-2 rounded-lg shadow-sm"><i class="fas fa-torii-gate text-white text-xl"></i></div>
                        <div><h1 class="text-xl font-bold text-gray-900">JAPRO</h1></div>
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
