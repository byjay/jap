/**
 * Sushi Survival Game Engine
 * Hyper-Realism Language Survival Prototype
 */

const SushiSurvival = {
    isInitialized: false,
    isPlaying: false,
    score: 0,
    health: 100,
    langMode: 'ko', // 'ko', 'ja'
    spawnInterval: null,
    beltSpeed: 3,
    activeSushi: [],

    // Config
    SPLASH_IMAGE: 'file:///C:/Users/FREE/.gemini/antigravity/brain/9714cde9-3336-40a1-bec6-0c0163482e9d/sushi_survival_splash_1767061821700.png',

    init() {
        if (this.isInitialized) return;
        console.log('Sushi Survival Engine Initializing...');
        this.renderMenu();
        this.isInitialized = true;
    },

    renderMenu() {
        const container = document.getElementById('game-container');
        container.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${this.SPLASH_IMAGE}')`;

        container.innerHTML = `
            <div class="game-menu-overlay animate-fade-in text-center">
                <div class="mb-2">
                    <span class="bg-amber-500 text-black text-[10px] font-black px-3 py-1 rounded-full tracking-widest uppercase">Ultra High-End Prototype</span>
                </div>
                <h1 class="game-title mb-8">SUSHI SURVIVAL</h1>
                <p class="text-white/70 mb-12 max-w-sm mx-auto font-medium leading-relaxed">
                    회전하는 초밥 속에서 흩어진 자모를 낚아채세요.<br>괴물이 모두 먹어치우기 전에 단어를 완성해야 합니다.
                </p>
                <div class="flex flex-col gap-4 items-center">
                    <button onclick="SushiSurvival.startGame()" class="btn-game-primary w-64 group">
                        <span class="group-hover:tracking-widest transition-all">START SURVIVAL</span>
                    </button>
                    <div class="flex gap-4 mt-6">
                        <button class="stat-pill border-amber-500/50 hover:bg-white/10 transition-colors">RANKING</button>
                        <button class="stat-pill border-white/20 hover:bg-white/10 transition-colors">SETTINGS</button>
                    </div>
                </div>
            </div>
        `;
    },

    startGame() {
        console.log('Game Starting...');
        this.isPlaying = true;
        this.score = 0;
        this.health = 100;
        this.renderStage();
        this.startLoop();
    },

    renderStage() {
        const container = document.getElementById('game-container');
        container.innerHTML = `
            <div class="game-stats animate-fade-in">
                <div class="stat-pill"><i class="fas fa-heart text-red-500 mr-2"></i> LP: <span id="game-lp">100</span></div>
                <div class="stat-pill"><i class="fas fa-trophy text-amber-400 mr-2"></i> SCORE: <span id="game-score">0</span></div>
            </div>
            
            <div id="word-target" class="absolute top-32 left-1/2 -translate-x-1/2 bg-white/5 backdrop-blur-xl border border-white/20 p-6 rounded-3xl text-center min-w-[280px]">
                <p class="text-xs text-white/50 mb-2 uppercase tracking-tighter">Target Word</p>
                <h2 id="current-word-display" class="text-4xl font-black text-white tracking-widest">---</h2>
                <div id="collected-jamos" class="flex justify-center gap-2 mt-4 h-12"></div>
            </div>

            <div class="absolute bottom-40 w-full">
                <div class="sushi-belt">
                    <div id="sushi-spawn-layer" class="relative h-full w-full overflow-hidden"></div>
                </div>
            </div>

            <div class="monster-silhouette">
                <img src="${this.SPLASH_IMAGE}" class="h-full opacity-20 grayscale brightness-0 invert" style="mask-image: linear-gradient(to left, black, transparent);">
            </div>
            
            <button onclick="SushiSurvival.renderMenu()" class="fixed top-4 right-4 text-white/50 hover:text-white text-2xl">
                <i class="fas fa-times"></i>
            </button>
        `;

        this.prepareNextWord();
    },

    prepareNextWord() {
        const words = ['초밥', '스시', '라면', '우동', '기차', '바다'];
        const target = words[Math.floor(Math.random() * words.length)];
        document.getElementById('current-word-display').textContent = target;
        this.targetJamos = this.decompose(target);
        console.log('Target Jamos:', this.targetJamos);
    },

    decompose(str) {
        // Simplified Hangul decomposition for prototype
        const jamos = [];
        for (let char of str) {
            jamos.push(char); // Actual Unicode logic would go here
        }
        return jamos;
    },

    startLoop() {
        this.spawnInterval = setInterval(() => this.spawnSushi(), 1500);
    },

    spawnSushi() {
        const layer = document.getElementById('sushi-spawn-layer');
        if (!layer) return;

        const char = 'あいうえお가나다라마'[Math.floor(Math.random() * 10)];
        const sushi = document.createElement('div');
        sushi.className = 'absolute top-1/2 -translate-y-1/2 left-0 w-20 h-20 flex items-center justify-center cursor-pointer hover:scale-125 transition-transform';
        sushi.style.left = '-100px';
        sushi.innerHTML = `
            <div class="relative w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-amber-100">
                <span class="text-2xl font-black text-gray-800">${char}</span>
            </div>
        `;

        layer.appendChild(sushi);

        let pos = -100;
        const move = () => {
            if (!this.isPlaying) return;
            pos += this.beltSpeed;
            sushi.style.left = pos + 'px';

            if (pos > window.innerWidth) {
                sushi.remove();
                this.health -= 5;
                document.getElementById('game-lp').textContent = this.health;
                if (this.health <= 0) this.gameOver();
            } else {
                requestAnimationFrame(move);
            }
        };
        requestAnimationFrame(move);

        sushi.onclick = () => {
            this.score += 10;
            document.getElementById('game-score').textContent = this.score;
            sushi.classList.add('scale-0');
            setTimeout(() => sushi.remove(), 200);
        };
    },

    gameOver() {
        this.isPlaying = false;
        clearInterval(this.spawnInterval);
        alert('Game Over! Final Score: ' + this.score);
        this.renderMenu();
    }
};

// Global Exposure
window.SushiSurvival = SushiSurvival;
