/**
 * ai_drama_player.js - 매일 생성되는 AI 대화로그를 애니메이션과 함께 재생하는 엔진
 */

class AIDramaPlayer {
    constructor() {
        this.dialogues = [];
        this.currentDialogue = null;
        this.currentIndex = 0;
        this.isPlaying = false;
        this.audio = new Audio();

        this.init();
    }

    async init() {
        // 매니페스트 데이터 확인 및 대화 데이터 로드
        if (window.JAP_BONG_DATA) {
            await this.loadDialogues();
        }
    }

    async loadDialogues() {
        try {
            const response = await fetch('backend/data/daily_dialogues.json');
            this.dialogues = await response.json();
            this.renderDialogueList();
        } catch (e) {
            console.error("AI Drama load failed:", e);
        }
    }

    renderDialogueList() {
        const container = document.getElementById('ai-drama-list');
        if (!container) return;

        container.innerHTML = this.dialogues.map(d => `
            <div class="drama-card bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-3 cursor-pointer hover:border-red-300 transition-all" onclick="dramaPlayer.startDrama('${d.id}')">
                <div class="flex justify-between items-center mb-2">
                    <span class="text-xs font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded">${d.level || 'N3'}</span>
                    <span class="text-[10px] text-gray-400">${d.date}</span>
                </div>
                <h4 class="font-bold text-gray-800">${d.title}</h4>
                <p class="text-xs text-gray-500 mt-1 line-clamp-1">${d.dialogue[0].kr}</p>
            </div>
        `).join('');
    }

    startDrama(id) {
        this.currentDialogue = this.dialogues.find(d => d.id === id);
        if (!this.currentDialogue) return;

        this.currentIndex = 0;
        this.isPlaying = true;

        // UI 모달/플레이어 활성화
        const playerModal = document.getElementById('drama-player-modal');
        playerModal.classList.remove('hidden');
        playerModal.classList.add('flex');

        this.playLine();
    }

    async playLine() {
        if (!this.isPlaying || this.currentIndex >= this.currentDialogue.dialogue.length) {
            this.finishDrama();
            return;
        }

        const line = this.currentDialogue.dialogue[this.currentIndex];

        // 1. 캐릭터 애니메이션 업데이트
        this.updateCharacter(line.speaker, line.action);

        // 2. 자막 및 텍스트 표시
        document.getElementById('drama-text-jp').textContent = line.jp;
        document.getElementById('drama-text-kr').textContent = line.kr;
        document.getElementById('drama-text-ro').textContent = line.ro;

        // 3. 음성 재생
        if (line.audio_url) {
            this.audio.src = line.audio_url;
            this.audio.play();

            this.audio.onended = () => {
                setTimeout(() => {
                    this.currentIndex++;
                    this.playLine();
                }, 800);
            };
        } else {
            // 음성 없으면 3초 대기 후 다음 라인
            setTimeout(() => {
                this.currentIndex++;
                this.playLine();
            }, 3000);
        }
    }

    updateCharacter(speaker, action) {
        const charImg = document.getElementById(`drama-char-${speaker}`);
        if (!charImg) return;

        // 캐릭터 액션 WebP 매칭 (기존 캐릭터 시스템 활용)
        // 예: characters/animal/dog/greeting/frame_001.webp
        // 실제로는 매니페스트에서 적절한 캐릭터 ID를 찾아야 함
        // 여기서는 시연용으로 고정 데이터 사용
        const charId = speaker === 'A' ? 'kuma' : 'usagi';
        const category = 'animal';
        const finalAction = action || 'greeting';

        charImg.src = `characters/${category}/${charId}/${finalAction}/frame_001.webp`;
        charImg.classList.add('animate-bounce');
        setTimeout(() => charImg.classList.remove('animate-bounce'), 500);
    }

    finishDrama() {
        this.isPlaying = false;
        // 문법 설명 표시
        const grammarEl = document.getElementById('drama-grammar-box');
        grammarEl.innerHTML = `
            <div class="bg-blue-50 p-4 rounded-xl mt-4 border border-blue-100">
                <h5 class="font-bold text-blue-800 text-sm mb-1">💡 오늘의 문법 포인트</h5>
                <p class="text-xs text-blue-700 leading-relaxed">${this.currentDialogue.grammar_explanation}</p>
            </div>
        `;
        grammarEl.classList.remove('hidden');
    }

    closePlayer() {
        this.isPlaying = false;
        this.audio.pause();
        document.getElementById('drama-player-modal').classList.add('hidden');
        document.getElementById('drama-player-modal').classList.remove('flex');
    }
}

window.dramaPlayer = new AIDramaPlayer();
