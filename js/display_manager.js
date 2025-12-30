/**
 * Display Manager - Central Screen Orchestrator
 * 
 * This module manages all screens, navigation, and state for the JAP_BONG PRO commercial app.
 * It uses a React-inspired component pattern adapted for vanilla JS.
 */

const DisplayManager = {
    currentScreen: 'splash',
    previousScreen: null,
    screenStack: [],
    user: null,
    subscription: 'FREE', // 'FREE', 'PREMIUM'

    // Screen Registry
    screens: {
        splash: { component: 'SplashScreen', requiresAuth: false },
        welcome: { component: 'WelcomeScreen', requiresAuth: false },
        login: { component: 'LoginScreen', requiresAuth: false },
        signup: { component: 'SignupScreen', requiresAuth: false },
        avatarSelect: { component: 'AvatarSelectScreen', requiresAuth: false },
        dashboard: { component: 'DashboardScreen', requiresAuth: true },
        map: { component: 'MapScreen', requiresAuth: true },
        missions: { component: 'MissionsScreen', requiresAuth: true },
        profile: { component: 'ProfileScreen', requiresAuth: true },
        premium: { component: 'PremiumScreen', requiresAuth: true },
        leaderboard: { component: 'LeaderboardScreen', requiresAuth: true },
        rewards: { component: 'RewardsScreen', requiresAuth: true },
        kanji: { component: 'KanjiScreen', requiresAuth: true },
        vocab: { component: 'VocabScreen', requiresAuth: true },
        grammar: { component: 'GrammarScreen', requiresAuth: true },
        review: { component: 'ReviewScreen', requiresAuth: true },
        // Game Hub
        gameHub: { component: 'GameHubScreen', requiresAuth: true },
        sushiSurvival: { component: 'SushiSurvivalGame', requiresAuth: true },
        neonSyntax: { component: 'NeonSyntaxGame', requiresAuth: true, premium: true },
        verbumAlchimia: { component: 'VerbumAlchimiaGame', requiresAuth: true, premium: true },
        silentArchive: { component: 'SilentArchiveGame', requiresAuth: true, premium: true },
    },

    // Initialize Display Manager
    init() {
        console.log('🎮 Display Manager Initializing...');
        this.loadUserSession();
        this.setupEventListeners();
        this.checkInitialRoute();
        console.log('✅ Display Manager Ready');
    },

    // Load user session from localStorage
    loadUserSession() {
        const savedUser = localStorage.getItem('jap_bong_user');
        if (savedUser) {
            try {
                this.user = JSON.parse(savedUser);
                this.subscription = this.user.subscription || 'FREE';
            } catch (e) {
                console.warn('Failed to parse saved user session');
            }
        }
    },

    // Save user session
    saveUserSession() {
        if (this.user) {
            localStorage.setItem('jap_bong_user', JSON.stringify(this.user));
        }
    },

    // Setup global event listeners
    setupEventListeners() {
        // Handle browser back button
        window.addEventListener('popstate', (e) => {
            if (e.state && e.state.screen) {
                this.navigateTo(e.state.screen, false);
            }
        });

        // Handle deep links
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.replace('#', '');
            if (hash && this.screens[hash]) {
                this.navigateTo(hash);
            }
        });
    },

    // Check initial route based on URL hash or auth state
    checkInitialRoute() {
        const hash = window.location.hash.replace('#', '');

        if (hash && this.screens[hash]) {
            this.navigateTo(hash);
        } else if (this.user) {
            this.navigateTo('dashboard');
        } else {
            this.navigateTo('welcome');
        }
    },

    // Main navigation function
    navigateTo(screenName, pushState = true) {
        const screen = this.screens[screenName];

        if (!screen) {
            console.error(`Screen not found: ${screenName}`);
            return;
        }

        // Auth check
        if (screen.requiresAuth && !this.user) {
            console.warn(`Auth required for ${screenName}, redirecting to login`);
            this.navigateTo('login');
            return;
        }

        // Premium check
        if (screen.premium && this.subscription !== 'PREMIUM') {
            console.warn(`Premium required for ${screenName}, showing upgrade prompt`);
            this.showPremiumPrompt(screenName);
            return;
        }

        // Update state
        this.previousScreen = this.currentScreen;
        this.currentScreen = screenName;
        this.screenStack.push(screenName);

        // Update URL
        if (pushState) {
            history.pushState({ screen: screenName }, '', `#${screenName}`);
        }

        // Render screen
        this.renderScreen(screenName);
    },

    // Go back to previous screen
    goBack() {
        if (this.screenStack.length > 1) {
            this.screenStack.pop();
            const prevScreen = this.screenStack[this.screenStack.length - 1];
            this.navigateTo(prevScreen, false);
            history.back();
        }
    },

    // Render the target screen
    renderScreen(screenName) {
        const container = document.getElementById('app-root');
        if (!container) {
            console.error('App root container not found');
            return;
        }

        // Hide all screens
        const allScreens = container.querySelectorAll('.screen');
        allScreens.forEach(el => el.classList.add('hidden'));

        // Show target screen or render dynamically
        let targetScreen = document.getElementById(`screen-${screenName}`);

        if (targetScreen) {
            targetScreen.classList.remove('hidden');
        } else {
            // Dynamic render
            this.dynamicRender(screenName, container);
        }

        // Trigger screen lifecycle
        this.onScreenEnter(screenName);
    },

    // Dynamic screen rendering
    dynamicRender(screenName, container) {
        const renderer = ScreenRenderers[screenName];
        if (renderer && typeof renderer === 'function') {
            const html = renderer(this);
            const wrapper = document.createElement('div');
            wrapper.id = `screen-${screenName}`;
            wrapper.className = 'screen animate-fade-in';
            wrapper.innerHTML = html;
            container.appendChild(wrapper);
        }
    },

    // Screen lifecycle hook
    onScreenEnter(screenName) {
        console.log(`📱 Entered screen: ${screenName}`);

        // Special initializations
        switch (screenName) {
            case 'sushiSurvival':
                if (typeof SushiSurvival !== 'undefined') SushiSurvival.init();
                break;
            case 'neonSyntax':
                if (typeof NeonSyntaxGame !== 'undefined') NeonSyntaxGame.init();
                break;
            case 'verbumAlchimia':
                if (typeof VerbumAlchimiaGame !== 'undefined') VerbumAlchimiaGame.init();
                break;
            case 'silentArchive':
                if (typeof SilentArchiveGame !== 'undefined') SilentArchiveGame.init();
                break;
        }
    },

    // Show premium upgrade prompt
    showPremiumPrompt(targetScreen) {
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] animate-fade-in';
        modal.innerHTML = `
            <div class="bg-white dark:bg-gray-800 rounded-3xl p-8 max-w-sm mx-4 text-center shadow-2xl">
                <div class="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i class="fas fa-crown text-white text-2xl"></i>
                </div>
                <h3 class="text-xl font-black text-gray-900 dark:text-white mb-2">프리미엄 전용 콘텐츠</h3>
                <p class="text-gray-600 dark:text-gray-300 text-sm mb-6">이 게임은 프리미엄 구독자만 이용할 수 있습니다.</p>
                <div class="flex flex-col gap-3">
                    <button onclick="DisplayManager.navigateTo('premium'); this.closest('.fixed').remove();" 
                        class="w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-xl shadow-lg">
                        프리미엄 업그레이드
                    </button>
                    <button onclick="this.closest('.fixed').remove();" 
                        class="w-full py-3 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-bold rounded-xl">
                        닫기
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    },

    // OAuth Login Methods
    async loginWithGoogle() {
        console.log('Starting Google OAuth flow...');
        if (typeof AuthProvider !== 'undefined') {
            try {
                const user = await AuthProvider.loginWithGoogle();
                if (user) {
                    this.user = user;
                    this.subscription = user.subscription;
                    this.navigateTo('avatarSelect');
                }
            } catch (error) {
                console.error('Google login failed:', error);
                alert('Google 로그인에 실패했습니다. 다시 시도해주세요.');
            }
        } else {
            this.mockLogin('google');
        }
    },

    async loginWithKakao() {
        console.log('Starting Kakao OAuth flow...');
        if (typeof AuthProvider !== 'undefined') {
            try {
                const user = await AuthProvider.loginWithKakao();
                if (user) {
                    this.user = user;
                    this.subscription = user.subscription;
                    this.navigateTo('avatarSelect');
                }
            } catch (error) {
                console.error('Kakao login failed:', error);
                alert('카카오 로그인에 실패했습니다. 다시 시도해주세요.');
            }
        } else {
            this.mockLogin('kakao');
        }
    },

    // Mock login for development
    mockLogin(provider) {
        this.user = {
            id: 'user_' + Date.now(),
            name: '테스트 사용자',
            email: `test@${provider}.com`,
            provider: provider,
            avatar: null,
            subscription: 'FREE',
            createdAt: new Date().toISOString()
        };
        this.saveUserSession();
        this.navigateTo('avatarSelect');
    },

    // Logout
    logout() {
        this.user = null;
        this.subscription = 'FREE';
        localStorage.removeItem('jap_bong_user');
        this.navigateTo('welcome');
    },

    // Set user avatar
    setAvatar(avatarId) {
        if (this.user) {
            this.user.avatar = avatarId;
            this.saveUserSession();
        }
    },

    // Upgrade to premium
    upgradeToPremium() {
        if (this.user) {
            this.user.subscription = 'PREMIUM';
            this.subscription = 'PREMIUM';
            this.saveUserSession();
            console.log('🌟 User upgraded to PREMIUM');
        }
    }
};

// Screen Renderers (Dynamic Templates)
const ScreenRenderers = {
    welcome: (dm) => `
        <div class="min-h-screen bg-gradient-to-b from-primary/10 to-background-light dark:to-background-dark flex flex-col">
            <div class="flex-1 flex flex-col items-center justify-center px-6 text-center">
                <div class="w-24 h-24 bg-gradient-to-br from-primary to-blue-600 rounded-3xl flex items-center justify-center mb-6 shadow-xl">
                    <i class="fas fa-gamepad text-white text-4xl"></i>
                </div>
                <h1 class="text-3xl font-black text-gray-900 dark:text-white mb-2">JAP-BONG PRO</h1>
                <p class="text-gray-600 dark:text-gray-400 mb-8">게임으로 배우는 일본어 마스터</p>
                <div class="flex flex-col gap-3 w-full max-w-xs">
                    <button onclick="DisplayManager.navigateTo('login')" 
                        class="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition-all text-xl animate-pulse">
                        시작하기
                    </button>
                    <p class="text-xs text-gray-400 mt-2">로그인 즉시 시작됩니다 (회원가입 없음)</p>
                </div>
            </div>
        </div>
    `,

    login: (dm) => `
        <div class="min-h-screen bg-background-light dark:bg-background-dark flex flex-col">
            <header class="p-4">
                <button onclick="DisplayManager.goBack()" class="w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center">
                    <i class="fas fa-arrow-left text-gray-700 dark:text-gray-300"></i>
                </button>
            </header>
            <div class="flex-1 flex flex-col px-6 pt-8">
                <h1 class="text-2xl font-black text-gray-900 dark:text-white mb-2">로그인</h1>
                <p class="text-gray-500 dark:text-gray-400 mb-8">소셜 계정으로 간편하게 시작하세요</p>
                
                <div class="flex flex-col gap-4">
                    <button onclick="DisplayManager.loginWithGoogle()" 
                        class="flex items-center justify-center gap-3 w-full py-4 bg-white border border-gray-200 rounded-xl shadow-sm hover:bg-gray-50 transition-all">
                        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" class="w-5 h-5">
                        <span class="font-bold text-gray-700">Google로 계속하기</span>
                    </button>
                    <button onclick="DisplayManager.loginWithKakao()" 
                        class="flex items-center justify-center gap-3 w-full py-4 bg-[#FEE500] rounded-xl shadow-sm hover:bg-[#FDDC3F] transition-all">
                        <svg class="w-5 h-5" viewBox="0 0 24 24" fill="#000000"><path d="M12 3C6.477 3 2 6.477 2 11c0 2.89 1.863 5.42 4.642 6.857L5.5 21.5l4.357-2.613A10.96 10.96 0 0012 19c5.523 0 10-3.477 10-8s-4.477-8-10-8z"/></svg>
                        <span class="font-bold text-gray-900">카카오로 계속하기</span>
                    </button>
                </div>

                <div class="mt-8 text-center">
                    <p class="text-xs text-gray-400">계속 진행하시면 <span class="text-primary">이용약관</span> 및 <span class="text-primary">개인정보처리방침</span>에 동의하는 것으로 간주됩니다.</p>
                </div>
            </div>
        </div>
    `,

    gameHub: (dm) => `
        <div class="min-h-screen bg-background-light dark:bg-background-dark pb-24">
            <header class="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md p-4 flex items-center justify-between">
                <button onclick="DisplayManager.goBack()" class="w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center">
                    <i class="fas fa-arrow-left text-gray-700 dark:text-gray-300"></i>
                </button>
                <h2 class="text-lg font-bold text-gray-900 dark:text-white">게임 허브</h2>
                <div class="w-10"></div>
            </header>

            <div class="px-4">
                <div class="grid grid-cols-2 gap-4">
                    <!-- Sushi Survival -->
                    <div onclick="DisplayManager.navigateTo('sushiSurvival')" 
                        class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 p-4 h-48 flex flex-col justify-end cursor-pointer group">
                        <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                        <span class="text-white/70 text-xs font-bold uppercase tracking-wider relative z-10">무료</span>
                        <h3 class="text-white font-black text-lg relative z-10">스시 서바이벌</h3>
                        <i class="fas fa-fish absolute top-4 right-4 text-white/30 text-5xl"></i>
                    </div>

                    <!-- Neon Syntax -->
                    <div onclick="DisplayManager.navigateTo('neonSyntax')" 
                        class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-4 h-48 flex flex-col justify-end cursor-pointer group">
                        <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                        <span class="text-yellow-300 text-xs font-bold uppercase tracking-wider relative z-10">프리미엄</span>
                        <h3 class="text-white font-black text-lg relative z-10">네온 신택스</h3>
                        <i class="fas fa-robot absolute top-4 right-4 text-white/30 text-5xl"></i>
                    </div>

                    <!-- Verbum Alchimia -->
                    <div onclick="DisplayManager.navigateTo('verbumAlchimia')" 
                        class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600 to-pink-500 p-4 h-48 flex flex-col justify-end cursor-pointer group">
                        <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                        <span class="text-yellow-300 text-xs font-bold uppercase tracking-wider relative z-10">프리미엄</span>
                        <h3 class="text-white font-black text-lg relative z-10">버범 알케미</h3>
                        <i class="fas fa-flask absolute top-4 right-4 text-white/30 text-5xl"></i>
                    </div>

                    <!-- Silent Archive -->
                    <div onclick="DisplayManager.navigateTo('silentArchive')" 
                        class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-700 to-gray-900 p-4 h-48 flex flex-col justify-end cursor-pointer group">
                        <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                        <span class="text-yellow-300 text-xs font-bold uppercase tracking-wider relative z-10">프리미엄</span>
                        <h3 class="text-white font-black text-lg relative z-10">사일런트 아카이브</h3>
                        <i class="fas fa-book-skull absolute top-4 right-4 text-white/30 text-5xl"></i>
                    </div>
                </div>
            </div>
        </div>
    `
};

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    if (typeof DisplayManager !== 'undefined') {
        DisplayManager.init();
    }
});

// Global exposure
window.DisplayManager = DisplayManager;
window.ScreenRenderers = ScreenRenderers;
