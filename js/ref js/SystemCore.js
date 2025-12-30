/**
 * 💎 SYSTEM CORE V5.0 (Authentication & Data Management)
 * 이 파일은 모든 도시(도쿄, 오사카 등) 파일보다 먼저 로드되어야 합니다.
 * * [기능 요약]
 * 1. 로그인/회원가입 시뮬레이션 (상업용 모드 시)
 * 2. 데이터 영속성 관리 (Local Storage -> 추후 Firebase 연동용 인터페이스)
 * 3. 통합 설정 관리
 */

(function () {
    // ==========================================================================
    //  ⚙️ GLOBAL CONFIGURATION
    // ==========================================================================
    window.APP_CONFIG = {
        // 'COMMERCIAL': 로그인/서버저장/광고 활성화 | 'FAMILY': 로컬저장/광고없음
        MODE: 'COMMERCIAL',

        // Android 앱 패키지명 (추후 APK 변환 시 필요)
        PACKAGE_NAME: 'com.travel.planner.pro',

        // Firebase 설정 (추후 여기에 실제 키를 넣으면 서버 모드로 자동 전환됨)
        FIREBASE_CONFIG: null
    };

    // ==========================================================================
    //  🔐 AUTHENTICATION MANAGER (로그인 시스템)
    // ==========================================================================
    class AuthManager {
        constructor() {
            this.user = JSON.parse(localStorage.getItem('app_user')) || null;
        }

        isLoggedIn() {
            return !!this.user;
        }

        // 로그인 시뮬레이션 (나중에 Firebase Auth로 교체될 함수)
        login(email, password) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    // 실제 서버가 없으므로 가상의 성공 처리
                    if (email && password) {
                        this.user = {
                            id: 'user_' + Math.random().toString(36).substr(2, 9),
                            email: email,
                            name: email.split('@')[0],
                            planLevel: 'FREE' // or 'PREMIUM'
                        };
                        this.saveUserSession();
                        resolve(this.user);
                    } else {
                        reject("이메일과 비밀번호를 확인해주세요.");
                    }
                }, 500);
            });
        }

        logout() {
            this.user = null;
            localStorage.removeItem('app_user');
            location.reload();
        }

        saveUserSession() {
            localStorage.setItem('app_user', JSON.stringify(this.user));
        }

        // 로그인 모달 렌더링
        renderLoginModal() {
            if (document.getElementById('auth-modal')) return;

            const modal = document.createElement('div');
            modal.id = 'auth-modal';
            modal.className = 'fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4';
            modal.innerHTML = `
                <div class="bg-white rounded-2xl w-full max-w-sm overflow-hidden shadow-2xl animate-slide-up">
                    <div class="p-6 text-center">
                        <h2 class="text-2xl font-bold text-gray-800 mb-2">여행의 시작 ✈️</h2>
                        <p class="text-sm text-gray-500 mb-6">나만의 여행 일정을 저장하고 관리하세요.</p>
                        
                        <div class="space-y-3">
                            <input type="email" id="login-email" placeholder="이메일" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition">
                            <input type="password" id="login-pw" placeholder="비밀번호" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition">
                        </div>

                        <button id="btn-login-action" class="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg transition transform hover:scale-105">
                            이메일로 계속하기
                        </button>
                        
                        <div class="mt-4 flex items-center justify-between">
                            <hr class="w-full border-gray-200">
                            <span class="px-2 text-xs text-gray-400 whitespace-nowrap">또는 소셜 로그인</span>
                            <hr class="w-full border-gray-200">
                        </div>

                        <div class="mt-4 grid grid-cols-2 gap-3">
                            <button class="py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50 flex items-center justify-center gap-2">
                                <span class="text-lg">G</span> Google
                            </button>
                            <button class="py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-yellow-50 flex items-center justify-center gap-2">
                                <span class="text-lg text-yellow-900">K</span> Kakao
                            </button>
                        </div>
                    </div>
                    <div class="bg-gray-50 p-4 text-center text-xs text-gray-500">
                        가족용 버전은 <a href="#" onclick="skipLogin()" class="text-blue-600 font-bold underline">로그인 없이 사용하기</a>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);

            document.getElementById('btn-login-action').onclick = () => {
                const email = document.getElementById('login-email').value;
                const pw = document.getElementById('login-pw').value;
                this.login(email, pw).then(user => {
                    alert(`${user.name}님 환영합니다!`);
                    modal.remove();
                    window.location.reload(); // 상태 반영을 위해 리로드
                }).catch(err => alert(err));
            };

            window.skipLogin = () => {
                window.APP_CONFIG.MODE = 'FAMILY'; // 세션 동안만 가족 모드로 전환
                modal.remove();
            };
        }
    }

    // ==========================================================================
    //  💾 DATA MANAGER (데이터 저장소)
    // ==========================================================================
    class DataManager {
        constructor() {
            this.dbKey = 'travel_planner_db_v1';
            this.data = this.loadData();
        }

        loadData() {
            const stored = localStorage.getItem(this.dbKey);
            return stored ? JSON.parse(stored) : { itineraries: {}, preferences: {} };
        }

        saveData() {
            // [중요] 나중에 여기가 Firebase.firestore().set() 으로 바뀝니다.
            localStorage.setItem(this.dbKey, JSON.stringify(this.data));
            console.log('💾 데이터가 안전하게 저장되었습니다.');
        }

        // 일정 저장
        saveItinerary(city, day, items) {
            if (!this.data.itineraries[city]) this.data.itineraries[city] = {};
            this.data.itineraries[city][day] = items;
            this.saveData();
        }

        // 일정 불러오기
        getItinerary(city) {
            return this.data.itineraries[city] || { 1: [], 2: [], 3: [], 4: [] };
        }
    }

    // ==========================================================================
    //  🚀 INITIALIZE SYSTEM
    // ==========================================================================
    window.Auth = new AuthManager();
    window.DB = new DataManager();

    // 앱 실행 시 로그인 체크 (상업용 모드일 때만)
    if (window.APP_CONFIG.MODE === 'COMMERCIAL' && !window.Auth.isLoggedIn()) {
        window.addEventListener('DOMContentLoaded', () => {
            window.Auth.renderLoginModal();
        });
    }

    // 전역 유틸리티: 도시별 파일에서 이 함수를 호출하여 데이터를 동기화합니다.
    window.syncItinerary = function (city, itinerary) {
        // 실제 저장 로직
        Object.keys(itinerary).forEach(day => {
            window.DB.saveItinerary(city, day, itinerary[day]);
        });
    };

    window.loadItinerary = function (city) {
        return window.DB.getItinerary(city);
    }

})();
