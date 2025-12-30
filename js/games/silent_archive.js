/**
 * Silent Archive Game - Horror Library
 * 
 * "그녀가 듣기 전에 문장을 완성하라."
 * A horror-themed language game with AI hearing detection.
 */

const SilentArchiveGame = {
    isInitialized: false,
    isPlaying: false,
    score: 0,
    noiseLevel: 0,
    monsterDistance: 100, // percentage, 0 = caught
    targetSentence: null,
    collectedWords: [],
    gameLoop: null,

    init() {
        if (this.isInitialized) return;
        console.log('📚 Silent Archive Engine Initializing...');
        this.renderMenu();
        this.isInitialized = true;
    },

    renderMenu() {
        const container = document.getElementById('game-container');
        if (!container) return;

        container.innerHTML = `
            <div class="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center p-6 relative overflow-hidden">
                <!-- Vignette Effect -->
                <div class="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black pointer-events-none"></div>

                <!-- Flickering Light Effect -->
                <div class="absolute inset-0 bg-amber-900/5 animate-flicker pointer-events-none"></div>

                <div class="relative z-10 text-center">
                    <!-- Creepy Icon -->
                    <div class="mb-8">
                        <div class="relative w-28 h-28 mx-auto">
                            <div class="absolute inset-0 bg-red-900/30 rounded-full blur-2xl animate-pulse"></div>
                            <div class="relative w-full h-full bg-gray-900 rounded-2xl flex items-center justify-center border border-gray-700 shadow-2xl">
                                <i class="fas fa-book-skull text-gray-400 text-5xl"></i>
                            </div>
                        </div>
                    </div>

                    <h1 class="text-4xl font-black text-gray-200 mb-2 tracking-widest" style="font-family: 'Times New Roman', serif;">
                        SILENT ARCHIVE
                    </h1>
                    <p class="text-red-400/60 text-sm italic mb-2">침묵의 서고</p>
                    <p class="text-gray-500 text-sm mb-8 max-w-xs mx-auto">
                        소리를 내면... 그녀가 온다
                    </p>

                    <button onclick="SilentArchiveGame.startGame()" 
                        class="w-64 py-4 bg-gray-800 border border-gray-600 text-gray-300 font-bold text-lg rounded-xl hover:bg-gray-700 hover:border-gray-500 transition-all active:scale-95 shadow-xl">
                        <i class="fas fa-door-open mr-2"></i> 입장하기
                    </button>

                    <p class="text-red-500/50 text-xs mt-6 animate-pulse">⚠️ 헤드폰 착용 권장</p>
                </div>

                <!-- Back Button -->
                <button onclick="DisplayManager.goBack()" 
                    class="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all">
                    <i class="fas fa-arrow-left"></i>
                </button>
            </div>

            <style>
                @keyframes flicker {
                    0%, 100% { opacity: 0.05; }
                    50% { opacity: 0.1; }
                    75% { opacity: 0.03; }
                }
                .animate-flicker { animation: flicker 4s ease-in-out infinite; }
                .bg-gradient-radial { background: radial-gradient(circle, transparent 30%, black 100%); }
            </style>
        `;
    },

    startGame() {
        console.log('Starting Silent Archive...');
        this.isPlaying = true;
        this.score = 0;
        this.noiseLevel = 0;
        this.monsterDistance = 100;
        this.collectedWords = [];
        this.prepareSentence();
        this.renderStage();
        this.startLoop();
    },

    prepareSentence() {
        const sentences = [
            { jp: '図書館は静かです', words: ['図書館', 'は', '静か', 'です'] },
            { jp: '本を読みます', words: ['本', 'を', '読み', 'ます'] },
            { jp: '怖いですね', words: ['怖い', 'です', 'ね'] }
        ];
        this.targetSentence = sentences[Math.floor(Math.random() * sentences.length)];
    },

    renderStage() {
        const container = document.getElementById('game-container');
        if (!container) return;

        container.innerHTML = `
            <div class="min-h-screen bg-[#050505] relative overflow-hidden">
                <!-- Noise Meter -->
                <div class="absolute top-4 left-1/2 -translate-x-1/2 z-30">
                    <div class="bg-black/80 px-6 py-3 rounded-xl border border-gray-800">
                        <p class="text-gray-500 text-xs uppercase tracking-widest mb-1 text-center">소음 레벨</p>
                        <div class="w-48 h-2 bg-gray-800 rounded-full overflow-hidden">
                            <div id="noise-bar" class="h-full bg-red-500 transition-all duration-300" style="width: ${this.noiseLevel}%"></div>
                        </div>
                    </div>
                </div>

                <!-- Monster Distance Indicator -->
                <div class="absolute top-20 left-1/2 -translate-x-1/2 z-30">
                    <p class="text-red-500/50 text-xs uppercase tracking-widest text-center">
                        그녀와의 거리: <span id="monster-dist" class="${this.monsterDistance < 30 ? 'text-red-500 animate-pulse' : ''}">${this.monsterDistance}m</span>
                    </p>
                </div>

                <!-- HUD -->
                <div class="absolute top-4 left-4 right-4 flex justify-between items-start z-20">
                    <button onclick="SilentArchiveGame.renderMenu()" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                        <i class="fas fa-times"></i>
                    </button>
                    <div class="bg-black/80 px-4 py-2 rounded-xl border border-gray-700">
                        <span class="text-gray-400 text-sm">SCORE: <span id="archive-score">${this.score}</span></span>
                    </div>
                </div>

                <!-- Target Sentence -->
                <div class="absolute top-32 left-1/2 -translate-x-1/2 w-full max-w-md px-4 z-20">
                    <div class="bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-4 text-center">
                        <p class="text-gray-500 text-xs uppercase tracking-widest mb-2">완성할 문장</p>
                        <h2 class="text-xl font-bold text-gray-200">${this.targetSentence.jp}</h2>
                    </div>
                </div>

                <!-- Collected Words -->
                <div class="absolute bottom-32 left-1/2 -translate-x-1/2 z-20">
                    <div id="collected-words" class="flex gap-2 min-h-[50px] px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl">
                        <!-- Collected words appear here -->
                    </div>
                </div>

                <!-- Word Choices -->
                <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-full max-w-md px-4">
                    <div class="flex flex-wrap justify-center gap-3">
                        ${this.generateWordChoices()}
                    </div>
                </div>

                <!-- Flashlight Effect -->
                <div class="absolute inset-0 pointer-events-none z-10"
                     style="background: radial-gradient(circle at 50% 50%, transparent 10%, rgba(0,0,0,0.95) 40%);">
                </div>
            </div>
        `;
    },

    generateWordChoices() {
        const allWords = [...this.targetSentence.words];
        // Add some wrong words
        const wrongWords = ['それ', 'あの', '今日', '明日', '何'];
        const choices = [...allWords, ...wrongWords.slice(0, 3)].sort(() => Math.random() - 0.5);

        return choices.map(word => `
            <button onclick="SilentArchiveGame.selectWord('${word}')" 
                class="px-4 py-2 bg-gray-800/80 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 hover:border-gray-500 transition-all active:scale-95">
                ${word}
            </button>
        `).join('');
    },

    selectWord(word) {
        const isCorrect = this.targetSentence.words[this.collectedWords.length] === word;

        if (isCorrect) {
            this.collectedWords.push(word);
            this.score += 20;
            document.getElementById('archive-score').textContent = this.score;

            const collected = document.getElementById('collected-words');
            collected.innerHTML = this.collectedWords.map(w =>
                `<span class="text-gray-200 text-lg font-bold">${w}</span>`
            ).join('');

            // Check completion
            if (this.collectedWords.length === this.targetSentence.words.length) {
                this.levelComplete();
            }
        } else {
            this.makeNoise(35);
        }
    },

    makeNoise(amount) {
        this.noiseLevel = Math.min(100, this.noiseLevel + amount);
        document.getElementById('noise-bar').style.width = this.noiseLevel + '%';

        // Monster hears and approaches
        this.monsterDistance = Math.max(0, this.monsterDistance - amount * 0.5);
        document.getElementById('monster-dist').textContent = Math.round(this.monsterDistance) + 'm';

        if (this.monsterDistance <= 0) {
            this.gameOver();
        }
    },

    startLoop() {
        this.gameLoop = setInterval(() => {
            // Noise decays over time
            this.noiseLevel = Math.max(0, this.noiseLevel - 2);
            document.getElementById('noise-bar').style.width = this.noiseLevel + '%';

            // Monster slowly retreats if quiet
            if (this.noiseLevel < 10) {
                this.monsterDistance = Math.min(100, this.monsterDistance + 0.5);
                document.getElementById('monster-dist').textContent = Math.round(this.monsterDistance) + 'm';
            }
        }, 500);
    },

    levelComplete() {
        this.isPlaying = false;
        clearInterval(this.gameLoop);
        this.score += 100;
        alert('✨ 문장 완성! +100점');

        setTimeout(() => {
            this.collectedWords = [];
            this.prepareSentence();
            this.renderStage();
            this.startLoop();
        }, 1000);
    },

    gameOver() {
        this.isPlaying = false;
        clearInterval(this.gameLoop);
        alert('💀 잡혔습니다... 최종 점수: ' + this.score);
        this.renderMenu();
    }
};

// Global exposure
window.SilentArchiveGame = SilentArchiveGame;
