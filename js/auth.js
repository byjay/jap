/**
 * auth.js - 인증 시스템
 */

const users = {
    dad: { id: 'dad', name: '봉아빠', avatar: 'images/dad.png' },
    mom: { id: 'mom', name: '강엄마', avatar: 'images/mom_orig.png' },
    sieun: { id: 'sieun', name: '시으니', avatar: 'images/sieun.png' },
    harong: { id: 'harong', name: '하롱이', avatar: 'images/harong.png' },
    guest: { id: 'guest', name: '손님', avatar: 'images/sieun_dancing.png' }
};

// 가족별 비밀번호 (국번)
const userPasswords = {
    dad: '1435',
    mom: '8535',
    sieun: '8534',
    harong: '7657'
};

let currentUser = null;
let loginCallback = null;

function showLoginModal(callback) {
    loginCallback = callback;
    const loginScreen = document.getElementById('login-screen');
    if (loginScreen) {
        loginScreen.style.display = 'flex';
        // Ensure background is correct
        loginScreen.style.backgroundImage = "url('images/BACK.png')";
        loginScreen.style.backgroundSize = "cover";
        loginScreen.style.backgroundPosition = "center";
    }
}

function hideLoginModal() {
    const loginScreen = document.getElementById('login-screen');
    if (loginScreen) {
        loginScreen.style.display = 'none';
    }
}

function login(userId) {
    if (!users[userId]) {
        console.error('Invalid user:', userId);
        return;
    }

    currentUser = users[userId];
    localStorage.setItem('currentUser', userId);
    console.log('Login successful:', currentUser.name);

    // Gamification 사용자 전환 및 데이터 로드
    if (window.Gamification) {
        window.Gamification.switchUser(userId);
    }

    updateUserDisplay();
    hideLoginModal();

    // 로그인 후 메인 메뉴 표시, 탭 콘텐츠는 숨김
    const mainMenu = document.getElementById('main-menu');
    if (mainMenu) {
        mainMenu.style.display = 'grid';
    }

    // 하단 네비게이션 표시
    const bottomNav = document.getElementById('bottom-nav');
    if (bottomNav) {
        bottomNav.classList.remove('hidden');
    }

    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.add('hidden');
        tab.classList.remove('active');
    });

    // 아빠 계정이면 관리자 메뉴 표시
    const adminSection = document.getElementById('admin-reset-section');
    if (adminSection) {
        adminSection.style.display = userId === 'dad' ? 'block' : 'none';
    }

    // [손님 전용] 메인 화면 하단 고정 광고 제어
    const guestAdContainer = document.getElementById('guest-fixed-ad-container');
    if (guestAdContainer) {
        if (userId === 'guest') {
            guestAdContainer.classList.remove('hidden');
            // 광고 로드 (숨겨져 있던 상태에서 드러날 때 렌더링 시도)
            setTimeout(() => {
                try {
                    (adsbygoogle = window.adsbygoogle || []).push({});
                } catch (e) {
                    console.log('AdSense push error (ignored):', e);
                }
            }, 100);
        } else {
            guestAdContainer.classList.add('hidden');
        }
    }

    // 헤더 사용자 프로필/로그아웃 버튼 표시
    const profileIcon = document.getElementById('user-profile-icon');
    if (profileIcon) {
        profileIcon.classList.remove('hidden');
        profileIcon.classList.add('flex');
    }

    if (loginCallback) {
        loginCallback();
        loginCallback = null;
    }

    // 로그인 후에는 저장된 마지막 탭으로 이동 (없으면 홈)
    if (typeof showTab === 'function') {
        const lastTab = localStorage.getItem('lastTab');
        // 'home' 탭은 기본값이므로 굳이 복원할 필요 없거나, 복원해도 무방
        if (lastTab) {
            console.log('Restoring last tab:', lastTab);
            showTab(lastTab);
        } else {
            showTab('home');
        }
    }
}

function updateUserDisplay() {
    const avatarEl = document.getElementById('current-user-avatar');
    const nameEl = document.getElementById('current-user-name');

    if (avatarEl && currentUser) {
        // Clear previous content
        avatarEl.innerHTML = '';
        // Create image element
        const img = document.createElement('img');
        img.src = currentUser.avatar;
        img.alt = currentUser.name;
        img.className = 'w-6 h-6 rounded-full object-cover';
        avatarEl.appendChild(img);
    }
    if (nameEl && currentUser) {
        nameEl.textContent = currentUser.name;
    }
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');

    // [New] 저장된 탭 상태 초기화 (로그아웃 후 재로그인 시에는 항상 홈으로)
    localStorage.removeItem('lastTab');
    localStorage.removeItem('lastCharMode'); // 글자 모드도 초기화할지 선택사항 (일단 초기화가 깔끔)

    // 세션 스토리지 초기화 (광고 카운트 등)
    sessionStorage.removeItem('guest_ad_count');

    // 하단 네비게이션 숨기기
    const bottomNav = document.getElementById('bottom-nav');
    if (bottomNav) {
        bottomNav.classList.add('hidden');
    }

    // 헤더 사용자 프로필/로그아웃 버튼 숨기기
    const profileIcon = document.getElementById('user-profile-icon');
    if (profileIcon) {
        profileIcon.classList.add('hidden');
        profileIcon.classList.remove('flex');
    }

    // 메인 메뉴 숨기기
    const mainMenu = document.getElementById('main-menu');
    if (mainMenu) {
        mainMenu.style.display = 'none';
    }

    // [손님 전용] 고정 광고 숨기기
    const guestAdContainer = document.getElementById('guest-fixed-ad-container');
    if (guestAdContainer) {
        guestAdContainer.classList.add('hidden');
    }

    // 모든 탭 숨기기
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
        tab.classList.add('hidden');
    });

    // 헤더 뒤로가기 버튼 숨기기
    const backBtn = document.getElementById('back-to-home-btn');
    if (backBtn) {
        backBtn.classList.add('hidden');
    }

    showLoginModal();
    console.log('Logged out');
}

function checkAutoLogin() {
    const savedUserId = localStorage.getItem('currentUser');
    if (savedUserId && users[savedUserId]) {
        console.log('Auto-login found:', savedUserId);
        login(savedUserId);
    } else {
        showLoginModal();
    }
}

// 커스텀 비밀번호 모달 생성
function showPasswordModal(userId, userName) {
    // 기존 모달 제거
    const existing = document.getElementById('password-modal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'password-modal';
    modal.className = 'fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4';
    modal.innerHTML = `
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden animate-bounce-in">
            <!-- 헤더 -->
            <div class="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 text-center">
                <img src="${users[userId]?.avatar || 'images/dad.png'}" class="w-16 h-16 rounded-full mx-auto border-4 border-white shadow-lg mb-2" alt="${userName}">
                <p class="text-white font-bold text-sm">👋 ${userName}님, 안녕하세요!</p>
                <p class="text-white/80 text-xs mt-1">"비밀번호 입력해줘~ 📱"</p>
            </div>
            
            <!-- 입력 영역 -->
            <div class="p-6">
                <label class="block text-gray-600 text-sm font-bold mb-2">
                    📱 핸드폰 국번 4자리를 입력하세요:
                </label>
                <input type="password" id="password-input" maxlength="4" 
                    class="w-full px-4 py-3 text-center text-2xl font-bold border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition"
                    placeholder="****" inputmode="numeric" pattern="[0-9]*">
                
                <div class="flex gap-3 mt-6">
                    <button onclick="closePasswordModal()" 
                        class="flex-1 py-3 bg-gray-100 text-gray-600 rounded-xl font-bold hover:bg-gray-200 transition">
                        취소
                    </button>
                    <button onclick="submitPassword('${userId}')" 
                        class="flex-1 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition">
                        확인
                    </button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // 입력 필드에 포커스
    setTimeout(() => {
        const input = document.getElementById('password-input');
        if (input) input.focus();
    }, 100);

    // 엔터키 입력 처리
    const input = document.getElementById('password-input');
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') submitPassword(userId);
    });
}

function closePasswordModal() {
    const modal = document.getElementById('password-modal');
    if (modal) modal.remove();
}

function submitPassword(userId) {
    const input = document.getElementById('password-input');
    const password = input?.value;

    if (password === userPasswords[userId]) {
        closePasswordModal();
        login(userId);
    } else if (password) {
        // 틀렸을 때 흔들림 애니메이션
        input.classList.add('animate-shake');
        input.value = '';
        setTimeout(() => input.classList.remove('animate-shake'), 500);

        // 알림
        const label = input.previousElementSibling;
        label.innerHTML = '❌ 비밀번호가 틀렸어요! 다시 입력해주세요:';
        label.classList.add('text-red-500');
    }
}

// 각 사용자별 비밀번호 프롬프트
function showPasswordPrompt() {
    showPasswordModal('dad', '봉아빠');
}

function showMomPasswordPrompt() {
    showPasswordModal('mom', '강엄마');
}

function showSieunPasswordPrompt() {
    showPasswordModal('sieun', '시으니');
}

function showHarongPasswordPrompt() {
    showPasswordModal('harong', '하롱이');
}

// 손님 체험하기
function loginAsGuest() {
    login('guest');
}
// 전체 학습진도 리셋 (아빠 계정 전용)
function resetAllProgress() {
    if (confirm('⚠️ 정말로 모든 학습 진도를 리셋하시겠습니까?\n\n모든 사용자의 학습 기록이 삭제됩니다!')) {
        const password = prompt('확인을 위해 비밀번호를 입력하세요:');
        if (password === '1435') {
            // 모든 사용자의 진도 데이터 삭제
            ['dad', 'mom', 'sieun', 'harong'].forEach(userId => {
                localStorage.removeItem(`progress_${userId}`);
                localStorage.removeItem(`jap_bong_history_v1_${userId}`);
                localStorage.removeItem(`fukuoka_unlock_count_${userId}`);
            });

            alert('✅ 모든 학습 진도가 리셋되었습니다!');
            location.reload(); // 페이지 새로고침
        } else if (password !== null) {
            alert('❌ 비밀번호가 틀렸습니다!');
        }
    }
}


// 전역 노출
window.showLoginModal = showLoginModal;
window.hideLoginModal = hideLoginModal;
window.login = login;
window.logout = logout;
window.checkAutoLogin = checkAutoLogin;
window.showPasswordPrompt = showPasswordPrompt;
window.showMomPasswordPrompt = showMomPasswordPrompt;
window.showSieunPasswordPrompt = showSieunPasswordPrompt;
window.showHarongPasswordPrompt = showHarongPasswordPrompt;
window.loginAsGuest = loginAsGuest;
window.resetAllProgress = resetAllProgress;
window.closePasswordModal = closePasswordModal;
window.submitPassword = submitPassword;

console.log('auth.js loaded');

