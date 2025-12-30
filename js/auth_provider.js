/**
 * Auth Provider - Google & Kakao OAuth Integration
 * 
 * Handles social login for JAP_BONG PRO commercial app.
 */

const AuthProvider = {
    // Kakao App Key - 부자되기 앱
    KAKAO_APP_KEY: '1ceea5fa11519a0d852eb60bab073cb',

    // Google Client ID - Replace with your client ID from Google Cloud Console
    GOOGLE_CLIENT_ID: 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com',

    isKakaoInitialized: false,
    isGoogleInitialized: false,

    /**
     * Initialize all auth providers
     */
    async init() {
        console.log('🔐 Auth Provider Initializing...');
        await this.initKakao();
        await this.initGoogle();
        console.log('✅ Auth Provider Ready');
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
        if (!this.isKakaoInitialized) {
            console.error('Kakao SDK not initialized');
            alert('카카오 로그인을 초기화하는 중입니다. 잠시 후 다시 시도해주세요.');
            return null;
        }

        return new Promise((resolve, reject) => {
            Kakao.Auth.login({
                success: async (authObj) => {
                    console.log('Kakao Auth Success:', authObj);

                    // Get user profile
                    Kakao.API.request({
                        url: '/v2/user/me',
                        success: (response) => {
                            console.log('Kakao User Info:', response);

                            const user = {
                                id: 'kakao_' + response.id,
                                name: response.kakao_account?.profile?.nickname || '카카오 사용자',
                                email: response.kakao_account?.email || null,
                                profileImage: response.kakao_account?.profile?.profile_image_url || null,
                                provider: 'kakao',
                                accessToken: authObj.access_token,
                                subscription: 'FREE',
                                createdAt: new Date().toISOString()
                            };

                            this.saveUser(user);
                            resolve(user);
                        },
                        fail: (error) => {
                            console.error('Kakao User Info Error:', error);
                            reject(error);
                        }
                    });
                },
                fail: (error) => {
                    console.error('Kakao Auth Error:', error);
                    reject(error);
                }
            });
        });
    },

    /**
     * Login with Google
     */
    async loginWithGoogle() {
        if (!this.isGoogleInitialized) {
            console.error('Google SDK not initialized');
            alert('구글 로그인을 초기화하는 중입니다. 잠시 후 다시 시도해주세요.');
            return null;
        }

        return new Promise((resolve, reject) => {
            google.accounts.id.initialize({
                client_id: this.GOOGLE_CLIENT_ID,
                callback: (response) => {
                    // Decode JWT token
                    const payload = this.parseJwt(response.credential);

                    const user = {
                        id: 'google_' + payload.sub,
                        name: payload.name || 'Google User',
                        email: payload.email,
                        profileImage: payload.picture || null,
                        provider: 'google',
                        accessToken: response.credential,
                        subscription: 'FREE',
                        createdAt: new Date().toISOString()
                    };

                    this.saveUser(user);
                    resolve(user);
                }
            });

            // Render the One Tap dialog
            google.accounts.id.prompt((notification) => {
                if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
                    // Fallback to popup
                    this.googlePopupLogin().then(resolve).catch(reject);
                }
            });
        });
    },

    /**
     * Google popup login (fallback)
     */
    googlePopupLogin() {
        return new Promise((resolve, reject) => {
            google.accounts.id.renderButton(
                document.createElement('div'),
                { theme: 'outline', size: 'large' }
            );

            // For development/testing, use mock login
            const mockUser = {
                id: 'google_mock_' + Date.now(),
                name: 'Google User',
                email: 'user@gmail.com',
                profileImage: null,
                provider: 'google',
                subscription: 'FREE',
                createdAt: new Date().toISOString()
            };
            this.saveUser(mockUser);
            resolve(mockUser);
        });
    },

    /**
     * Parse JWT token
     */
    parseJwt(token) {
        try {
            const base64Url = token.split('.')[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
            return JSON.parse(jsonPayload);
        } catch (e) {
            console.error('JWT Parse Error:', e);
            return {};
        }
    },

    /**
     * Save user to localStorage and DisplayManager
     */
    saveUser(user) {
        localStorage.setItem('jap_bong_user', JSON.stringify(user));

        if (typeof DisplayManager !== 'undefined') {
            DisplayManager.user = user;
            DisplayManager.subscription = user.subscription;
        }
    },

    /**
     * Get current user
     */
    getCurrentUser() {
        const saved = localStorage.getItem('jap_bong_user');
        return saved ? JSON.parse(saved) : null;
    },

    /**
     * Logout
     */
    logout() {
        // Kakao logout
        if (this.isKakaoInitialized && Kakao.Auth.getAccessToken()) {
            Kakao.Auth.logout(() => {
                console.log('Kakao logged out');
            });
        }

        // Clear local storage
        localStorage.removeItem('jap_bong_user');
        localStorage.removeItem('jap_bong_avatar');

        // Update DisplayManager
        if (typeof DisplayManager !== 'undefined') {
            DisplayManager.user = null;
            DisplayManager.subscription = 'FREE';
            DisplayManager.navigateTo('welcome');
        }
    },

    /**
     * Check if user is logged in
     */
    isLoggedIn() {
        return this.getCurrentUser() !== null;
    }
};

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    AuthProvider.init();
});

// Global exposure
window.AuthProvider = AuthProvider;
