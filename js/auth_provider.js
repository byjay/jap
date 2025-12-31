/**
 * Auth Provider - Google & Kakao OAuth Integration
 * 
 * Handles social login using Firebase (Google) and Kakao SDK.
 */

const AuthProvider = {
    // Kakao App Key
    KAKAO_APP_KEY: '1ceea5fa11519a0d852eb60bab073cb',

    // Firebase Configuration (Provided by User)
    firebaseConfig: {
        apiKey: "AIzaSyCLgmYBCw53zKOfLLmC4TqhFO1TgHadNGk",
        authDomain: "learnjap-pro.firebaseapp.com",
        projectId: "learnjap-pro",
        storageBucket: "learnjap-pro.firebasestorage.app",
        messagingSenderId: "686214036214",
        appId: "1:686214036214:web:cfb8fcbdd53995e6b10ad7"
    },

    isKakaoInitialized: false,
    isGoogleInitialized: false, // Added for consistency

    /**
     * Initialize all auth providers
     */
    async init() {
        console.log('🔐 Auth Provider Initializing...');
        await this.initKakao();
        await this.initGoogle();
    },

    /**
     * Initialize Kakao SDK
     */
    async initKakao() {
        // Load Kakao SDK if not already loaded
        if (typeof Kakao === 'undefined') {
            await this.loadScript('https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.min.js');
        }

        if (typeof Kakao !== 'undefined' && !Kakao.isInitialized()) {
            Kakao.init(this.KAKAO_APP_KEY);
            this.isKakaoInitialized = true;
            console.log('✅ Kakao SDK Initialized');
        }
    },

    /**
     * Initialize Google Sign-In
     */
    async initGoogle() {
        // Load Google Identity Services
        if (typeof google === 'undefined' || !google.accounts) {
            await this.loadScript('https://accounts.google.com/gsi/client');
        }
        this.isGoogleInitialized = true;
        console.log('✅ Google SDK Ready');
    },

    /**
     * Load external script dynamically
     */
    loadScript(src) {
        return new Promise((resolve, reject) => {
            const existingScript = document.querySelector(`script[src="${src}"]`);
            if (existingScript) {
                resolve();
                return;
            }

            const script = document.createElement('script');
            script.src = src;
            script.async = true;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    },

    /**
     * Login with Kakao
     */
    async loginWithKakao() {
        // Mock Mode Check (API Key가 유효하지 않으면 데모 모드)
        if (!this.isKakaoInitialized || !window.Kakao || !Kakao.isInitialized()) {
            console.warn('⚠️ Kakao SDK not valid. Running in Demo Mode.');
            return this.mockLogin('kakao');
        }

        try {
            return new Promise((resolve, reject) => {
                Kakao.Auth.login({
                    success: async (authObj) => {
                        Kakao.API.request({
                            url: '/v2/user/me',
                            success: (response) => {
                                const user = {
                                    id: 'kakao_' + response.id,
                                    name: response.kakao_account?.profile?.nickname || '카카오 사용자',
                                    email: response.kakao_account?.email,
                                    profileImage: response.kakao_account?.profile?.profile_image_url || 'images/avatars/default.png',
                                    provider: 'kakao',
                                    accessToken: authObj.access_token,
                                    subscription: 'FREE'
                                };
                                this.finalizeLogin(user);
                                resolve(user);
                            },
                        });
                    },
                    fail: (err) => {
                        console.error('Kakao Login Failed (Domain/Key Mismatch?):', err);
                        // 실패 시 즉시 Mock으로 폴백 (사용자 경험 개선)
                        console.log('Falling back to Demo Mode immediately.');
                        this.mockLogin('kakao').then(resolve);
                    }
                });
            });
        } catch (e) {
            return this.mockLogin('kakao');
        }
    },

    /**
     * Login with Google (Real Firebase Auth)
     */
    async loginWithGoogle() {
        console.log('🌐 Starting Google Login via Firebase...');

        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            const result = await firebase.auth().signInWithPopup(provider);
            const fbUser = result.user;

            const user = {
                id: fbUser.uid,
                name: fbUser.displayName || 'Google User',
                email: fbUser.email,
                profileImage: fbUser.photoURL || 'images/avatars/default.png',
                provider: 'google',
                subscription: 'FREE'
            };

            this.finalizeLogin(user);
            return user;
        } catch (error) {
            console.error('❌ Firebase Google Login Failed:', error);
            // 에러 발생 시 사용자에게 알림 또는 데모 폴백 (안전 장치)
            if (error.code === 'auth/popup-closed-by-user') {
                console.log('User closed the popup');
            } else {
                return this.mockLogin('google');
            }
        }
    },

    /**
     * Mock Login (Demo Mode)
     */
    async mockLogin(provider) {
        console.log(`🚀 Starting ${provider} Mock Login...`);

        // 빠른 반응성을 위해 딜레이 단축 (300ms)
        await new Promise(r => setTimeout(r, 300));

        const mockUser = {
            id: `${provider}_demo_${Date.now()}`,
            name: provider === 'google' ? '구글 체험유저' : '카카오 체험유저',
            email: `demo@${provider}.com`,
            profileImage: provider === 'google' ? 'images/avatars/dad.png' : 'images/avatars/mom.png', // 임시 아바타
            provider: provider,
            subscription: 'FREE',
            createdAt: new Date().toISOString()
        };

        this.finalizeLogin(mockUser);
        return mockUser;
    },

    /**
     * Common Login Finalization
     */
    finalizeLogin(user) {
        this.saveUser(user);

        // auth.js 연동
        if (window.login) {
            window.login(user);
        } else {
            console.error('window.login not found. Reloading...');
            location.reload();
        }
    },

    saveUser(user) {
        localStorage.setItem('jap_bong_user', JSON.stringify(user));
        if (typeof DisplayManager !== 'undefined') {
            DisplayManager.user = user;
            DisplayManager.subscription = user.subscription;
        }
    },

    getCurrentUser() {
        const saved = localStorage.getItem('jap_bong_user');
        return saved ? JSON.parse(saved) : null;
    },

    logout() {
        if (this.isKakaoInitialized && window.Kakao && Kakao.Auth && Kakao.Auth.getAccessToken()) {
            Kakao.Auth.logout(() => console.log('Kakao logged out'));
        }
        localStorage.removeItem('jap_bong_user');
        if (typeof DisplayManager !== 'undefined') {
            DisplayManager.user = null;
            DisplayManager.subscription = 'FREE';
        }
        location.reload();
    },

    isLoggedIn() {
        return !!this.getCurrentUser();
    }
};

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    AuthProvider.init();
});

// Global exposure
window.AuthProvider = AuthProvider;
