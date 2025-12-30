/**
 * gamification.js - 게이미피케이션 로직 (Streak, XP, Daily Goal)
 */

const Gamification = {
    state: {
        streak: 0,
        lastLoginDate: null,
        dailyXP: 0,
        dailyGoal: 50,
        totalXP: 0,
        level: 1
    },
    currentUserId: null,

    // 초기화
    init() {
        this.loadState();
        this.checkStreak();
        this.updateUI();
        console.log('Gamification initialized:', this.state);
    },

    // 상태 로드
    loadState(userId) {
        this.currentUserId = userId;
        const key = userId ? `jap_bong_gamification_${userId}` : 'jap_bong_gamification';
        const saved = localStorage.getItem(key);

        if (saved) {
            this.state = { ...this.state, ...JSON.parse(saved) };
        } else {
            // 데이터가 없으면 초기화 (새 사용자)
            this.state = {
                streak: 0,
                lastLoginDate: null,
                dailyXP: 0,
                dailyGoal: 50,
                totalXP: 0,
                level: 1
            };
        }
    },

    // 상태 저장
    saveState() {
        const key = this.currentUserId ? `jap_bong_gamification_${this.currentUserId}` : 'jap_bong_gamification';
        localStorage.setItem(key, JSON.stringify(this.state));
        this.updateUI();

        // [BACKEND SYNC]
        // If logged in, sync to server
        if (this.currentUserId && window.ApiClient) {
            window.ApiClient.saveProgress(this.currentUserId, {
                module: 'gamification', // Tag data source
                ...this.state
            }).then(res => {
                console.log('Backend sync success:', res);
            }).catch(err => {
                console.warn('Backend sync failed (offline?):', err);
            });
        }
    },

    // 사용자 전환
    switchUser(userId) {
        // 기존 상태 저장 (필요하다면)
        // this.saveState(); // 이미 addXP 등에서 저장되므로 생략 가능하지만 안전하게 저장

        this.loadState(userId);
        this.checkStreak();
        this.updateUI();
    },

    // 스트릭 확인 (매일 접속 체크)
    checkStreak() {
        const today = new Date().toDateString();
        const lastLogin = this.state.lastLoginDate;

        if (lastLogin !== today) {
            // 오늘 첫 접속
            if (lastLogin) {
                const lastDate = new Date(lastLogin);
                const yesterday = new Date();
                yesterday.setDate(yesterday.getDate() - 1);

                if (lastDate.toDateString() === yesterday.toDateString()) {
                    // 어제 접속했으면 스트릭 +1
                    // (이미 어제 증가시켰을 수도 있으니 로직 주의)
                    // 여기서는 "접속 시"가 아니라 "하루가 지났는지" 판단
                    // 단순하게: 마지막 접속이 어제면 유지, 그 이전이면 리셋
                } else {
                    // 하루 건너뛰었으면 리셋 (단, 1일차부터 다시 시작)
                    // 하지만 오늘 접속했으므로 1이 됨 (아래에서 처리)
                    if (lastDate.toDateString() !== today) {
                        // 어제도 아니고 오늘도 아니면 리셋
                        // 어제 접속 안했으면 0으로 리셋하고 오늘 접속으로 1 만들기
                        this.state.streak = 0;
                    }
                }
            }

            // 오늘 접속 처리
            // 어제 접속했으면 streak 유지/증가 로직이 필요함.
            // 더 정확한 로직:
            // 1. lastLogin이 어제면 -> streak 유지 (오늘 활동하면 증가? 아니면 접속만으로 증가?)
            // 보통 접속만으로 증가시킴.

            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);

            if (lastLogin === yesterday.toDateString()) {
                this.state.streak++;
            } else if (lastLogin !== today) {
                this.state.streak = 1; // 끊겼거나 처음
            }

            this.state.dailyXP = 0; // 하루 바뀌면 일일 XP 리셋
            this.state.lastLoginDate = today;
            this.saveState();

            // 스트릭 증가 알림
            // 스트릭 증가 알림
            if (this.state.streak > 1) {
                this.showToast(`🔥 ${this.state.streak}일 연속 학습 중!`);
            }

            // 일일 출석 보너스 (50 XP)
            this.addXP(50);
            this.showToast(`📅 일일 출석 보너스 +50 XP!`);
        }
    }


    // XP 획득
    addXP(amount) {
        this.state.dailyXP += amount;
        this.state.totalXP += amount;

        // 레벨업 체크 (간단하게 100XP 당 1레벨)
        const newLevel = Math.floor(this.state.totalXP / 100) + 1;
        if (newLevel > this.state.level) {
            this.state.level = newLevel;
            this.showToast(`🎉 레벨 업! Lv.${newLevel}`);
            // 축하 효과 (나중에 추가)
        }

        this.saveState();
        this.updateUI();
    },

    // UI 업데이트
    updateUI() {
        // 1. Streak Counter
        const streakEl = document.getElementById('streak-counter');
        if (streakEl) {
            streakEl.innerText = this.state.streak;
            // 불꽃 애니메이션 효과
            if (this.state.streak > 0) {
                streakEl.parentElement.classList.add('text-orange-500');
            }
        }

        // 2. Daily Goal Bar
        const goalBar = document.getElementById('daily-goal-bar');
        const goalText = document.getElementById('daily-goal-text');

        if (goalBar && goalText) {
            const percent = Math.min((this.state.dailyXP / this.state.dailyGoal) * 100, 100);
            goalBar.style.width = `${percent}%`;
            goalText.innerText = `${this.state.dailyXP} / ${this.state.dailyGoal} XP`;

            if (percent >= 100) {
                goalBar.classList.add('bg-green-500');
                goalBar.classList.remove('bg-blue-500');
            } else {
                goalBar.classList.add('bg-blue-500');
                goalBar.classList.remove('bg-green-500');
            }
        }
    },

    // 용돈 청구 (1000 XP 당 1만원)
    claimAllowance() {
        const CLAIM_UNIT = 1000;
        const REWARD_AMOUNT = 20000;

        // 현재까지 청구한 횟수 계산
        const historyKey = 'allowance_claims';
        const claims = JSON.parse(localStorage.getItem(historyKey) || '[]');
        const myClaims = claims.filter(c => c.userId === currentUser.id);
        const nextTarget = (myClaims.length + 1) * CLAIM_UNIT;

        if (this.state.totalXP < nextTarget) {
            alert(`포인트가 부족해요! 😢\n다음 청구까지 ${nextTarget - this.state.totalXP} XP가 더 필요해요.`);
            return false;
        }

        // 청구 기록 저장
        const newClaim = {
            id: Date.now(),
            userId: currentUser.id,
            userName: currentUser.name,
            amount: REWARD_AMOUNT,
            date: new Date().toISOString(),
            status: 'pending' // pending, approved
        };

        claims.push(newClaim);
        localStorage.setItem(historyKey, JSON.stringify(claims));

        alert(`🎉 와우! 1만원 용돈 청구가 완료되었어요!\n아빠에게 승인 요청을 보냈습니다.`);
        return true;
    },

    // 토스트 메시지 (간단 구현)
    showToast(message) {
        const toast = document.createElement('div');
        toast.className = 'fixed top-20 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded-full shadow-lg z-50 animate-bounce';
        toast.innerText = message;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }
};

// 전역 노출
window.Gamification = Gamification;

// 초기화 (DOM 로드 후)
document.addEventListener('DOMContentLoaded', () => {
    Gamification.init();
});
