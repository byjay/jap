/**
 * learning_tracker.js - 학습 활동 추적
 */

const LearningTracker = {
    recordActivity(type, count = 1, correct = 0, total = 0) {
        if (!currentUser) return;

        const today = new Date().toISOString().split('T')[0];
        const key = `learning_history_${currentUser.id}`;
        const history = JSON.parse(localStorage.getItem(key) || '{"daily":[]}');

        // 오늘 데이터 찾기 또는 생성
        let todayData = history.daily.find(d => d.date === today);
        if (!todayData) {
            todayData = {
                date: today,
                conversation: { count: 0, minutes: 0 },
                vocabulary: { count: 0, minutes: 0 },
                characters: { count: 0, minutes: 0 },
                characterQuiz: { count: 0, correct: 0, total: 0 },
                vocabularyQuiz: { count: 0, correct: 0, total: 0 }
            };
            history.daily.push(todayData);
        }

        // 활동 기록
        if (type === 'characterQuiz' || type === 'vocabularyQuiz') {
            todayData[type].count += 1;
            todayData[type].correct += correct;
            todayData[type].total += total;
        } else {
            todayData[type].count += count;
            todayData[type].minutes += 1;
        }

        // 최대 30일만 유지
        if (history.daily.length > 30) {
            history.daily = history.daily.slice(-30);
        }

        localStorage.setItem(key, JSON.stringify(history));
    },

    // --- Idle Detection System ---
    currentModule: null,
    lastActivityTime: Date.now(),
    trackingInterval: null,

    initIdleTracker() {
        const resetIdle = () => { this.lastActivityTime = Date.now(); };
        ['mousemove', 'keydown', 'touchstart', 'scroll', 'click'].forEach(event => {
            window.addEventListener(event, resetIdle);
        });

        if (this.trackingInterval) clearInterval(this.trackingInterval);

        // 1분마다 체크
        this.trackingInterval = setInterval(() => {
            if (!this.currentModule || !currentUser) return;

            const now = Date.now();
            // 마지막 활동 후 1분 이내라면 학습 시간 인정
            if (now - this.lastActivityTime < 60000) {
                this.recordActivity(this.currentModule, 0); // 1분 추가
                console.log(`[LearningTracker] Recorded 1 min for ${this.currentModule}`);
            } else {
                console.log(`[LearningTracker] Idle - No time recorded for ${this.currentModule}`);
            }
        }, 60000);

        console.log('[LearningTracker] Idle tracker initialized');
    },

    startTracking(moduleName) {
        this.currentModule = moduleName;
        this.lastActivityTime = Date.now(); // 시작 시 활동 시간 갱신
        console.log(`[LearningTracker] Started tracking: ${moduleName}`);
    },

    stopTracking() {
        this.currentModule = null;
        console.log(`[LearningTracker] Stopped tracking`);
    }
};

// 초기화 호출
LearningTracker.initIdleTracker();

console.log('learning_tracker.js loaded');
