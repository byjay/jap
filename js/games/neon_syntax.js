/**
 * Neon Syntax Game - Cyberpunk Welding Factory
 * 
 * "단어를 용접하여 로봇을 기동하라."
 * A futuristic socket-snapping language game.
 */

const NeonSyntaxGame = {
    isInitialized: false,
    isPlaying: false,
    score: 0,
    level: 1,
    currentWord: null,
    collectedParts: [],
    spawnInterval: null,

    // Cyberpunk color palette
    colors: {
        neon: '#00FFFF',
        pink: '#FF00FF',
        yellow: '#FFFF00',
        dark: '#0a0a1f',
        metal: '#2d3436'
    },

    init() {
        if (this.isInitialized) return;
        console.log('⚡ Neon Syntax Engine Initializing...');
        this.renderMenu();
        this.isInitialized = true;
    },

    renderMenu() {
        const container = document.getElementById('game-container');
        if (!container) return;

        container.innerHTML = `
            <div class="min-h-screen bg-gradient-to-b from-[#0a0a1f] to-[#1a1a2e] flex flex-col items-center justify-center p-6">
                <!-- Cyberpunk Grid Background -->
                <div class="absolute inset-0 opacity-20" style="
                    background-image: linear-gradient(#00FFFF 1px, transparent 1px), linear-gradient(90deg, #00FFFF 1px, transparent 1px);
                    background-size: 50px 50px;
                "></div>

                <div class="relative z-10 text-center">
                    <!-- Glowing Logo -->
                    <div class="mb-8">
                        <div class="w-24 h-24 mx-auto bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-[0_0_60px_rgba(0,255,255,0.5)] animate-pulse">
                            <i class="fas fa-robot text-white text-5xl"></i>
                        </div>
                    </div>

                    <h1 class="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mb-4 tracking-tighter" style="text-shadow: 0 0 40px rgba(0,255,255,0.5);">
                        NEON SYNTAX
                    </h1>
                    <p class="text-cyan-300/70 text-sm mb-8 max-w-xs mx-auto font-mono">
                        단어를 용접하여 로봇을 기동하라
                    </p>

                    <!-- Difficulty Selection -->
                    <div class="flex gap-3 mb-8 justify-center">
                        <button class="px-4 py-2 bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 rounded-lg text-sm font-bold hover:bg-cyan-500/40 transition-all">
                            EASY
                        </button>
                        <button class="px-4 py-2 bg-purple-500/20 border border-purple-500/50 text-purple-300 rounded-lg text-sm font-bold hover:bg-purple-500/40 transition-all">
                            NORMAL
                        </button>
                        <button class="px-4 py-2 bg-pink-500/20 border border-pink-500/50 text-pink-300 rounded-lg text-sm font-bold hover:bg-pink-500/40 transition-all">
                            HARD
                        </button>
                    </div>

                    <button onclick="NeonSyntaxGame.startGame()" 
                        class="w-64 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black text-lg rounded-xl shadow-[0_0_30px_rgba(0,255,255,0.4)] hover:shadow-[0_0_50px_rgba(0,255,255,0.6)] transition-all active:scale-95">
                        <i class="fas fa-bolt mr-2"></i> ACTIVATE
                    </button>
                </div>

                <!-- Decorative Elements -->
                <div class="absolute bottom-10 left-10 text-cyan-500/30 font-mono text-xs">
                    <div>SYS.BOOT: OK</div>
                    <div>WELD.MODULE: READY</div>
                </div>

                <!-- Back Button -->
                <button onclick="DisplayManager.goBack()" 
                    class="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all">
                    <i class="fas fa-arrow-left"></i>
                </button>
            </div>
        `;
    },

    startGame() {
        console.log('Starting Neon Syntax...');
        this.isPlaying = true;
        this.score = 0;
        this.collectedParts = [];
        this.prepareLevel();
        this.renderStage();
    },

    prepareLevel() {
        // Generate target word
        const words = ['電気', '機械', '未来', 'ロボット', 'エネルギー', '光線'];
        this.currentWord = words[Math.floor(Math.random() * words.length)];
    },

    renderStage() {
        const container = document.getElementById('game-container');
        if (!container) return;

        container.innerHTML = `
            <div class="min-h-screen bg-[#0a0a1f] relative overflow-hidden">
                <!-- Grid Background -->
                <div class="absolute inset-0 opacity-10" style="
                    background-image: linear-gradient(#00FFFF 1px, transparent 1px), linear-gradient(90deg, #00FFFF 1px, transparent 1px);
                    background-size: 30px 30px;
                "></div>

                <!-- HUD -->
                <div class="absolute top-4 left-4 right-4 flex justify-between items-start z-20">
                    <button onclick="NeonSyntaxGame.renderMenu()" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                        <i class="fas fa-times"></i>
                    </button>
                    <div class="flex gap-4">
                        <div class="bg-black/50 backdrop-blur-sm px-4 py-2 rounded-xl border border-cyan-500/30">
                            <span class="text-cyan-400 font-mono text-sm">SCORE: <span id="neon-score" class="font-bold">${this.score}</span></span>
                        </div>
                        <div class="bg-black/50 backdrop-blur-sm px-4 py-2 rounded-xl border border-purple-500/30">
                            <span class="text-purple-400 font-mono text-sm">LEVEL: ${this.level}</span>
                        </div>
                    </div>
                </div>

                <!-- Target Word Display -->
                <div class="absolute top-24 left-1/2 -translate-x-1/2 z-20">
                    <div class="bg-black/60 backdrop-blur-xl border-2 border-cyan-500/50 rounded-2xl px-8 py-4 shadow-[0_0_40px_rgba(0,255,255,0.2)]">
                        <p class="text-cyan-400/70 text-xs font-mono uppercase tracking-widest mb-1">TARGET WORD</p>
                        <h2 id="target-word" class="text-4xl font-black text-white tracking-wider">${this.currentWord}</h2>
                    </div>
                </div>

                <!-- Robot Arm Area -->
                <div class="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#1a1a2e] to-transparent">
                    <div id="weld-zone" class="absolute bottom-20 left-1/2 -translate-x-1/2 w-64 h-20 border-2 border-dashed border-cyan-500/50 rounded-xl flex items-center justify-center gap-2">
                        <!-- Welded parts appear here -->
                    </div>
                    <p class="absolute bottom-8 left-1/2 -translate-x-1/2 text-cyan-500/50 text-xs font-mono uppercase tracking-widest">WELDING ZONE</p>
                </div>

                <!-- Parts Conveyor -->
                <div id="parts-layer" class="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-32">
                    <!-- Parts spawn here -->
                </div>
            </div>
        `;

        this.startLoop();
    },

    startLoop() {
        this.spawnInterval = setInterval(() => this.spawnPart(), 1200);
    },

    spawnPart() {
        const layer = document.getElementById('parts-layer');
        if (!layer) return;

        const chars = 'アイウエオカキクケコあいうえおかきくけこ電気機械未来光';
        const char = chars[Math.floor(Math.random() * chars.length)];

        const part = document.createElement('div');
        part.className = 'absolute w-16 h-16 cursor-pointer transition-transform hover:scale-125';
        part.style.left = '-80px';
        part.style.top = Math.random() * 80 + 'px';
        part.innerHTML = `
            <div class="w-full h-full rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border-2 border-cyan-400/50 flex items-center justify-center shadow-[0_0_20px_rgba(0,255,255,0.3)] backdrop-blur-sm">
                <span class="text-cyan-300 text-2xl font-bold">${char}</span>
            </div>
        `;

        layer.appendChild(part);

        let pos = -80;
        const speed = 3 + Math.random() * 2;

        const move = () => {
            if (!this.isPlaying) return;
            pos += speed;
            part.style.left = pos + 'px';

            if (pos > window.innerWidth + 100) {
                part.remove();
            } else {
                requestAnimationFrame(move);
            }
        };
        requestAnimationFrame(move);

        part.onclick = () => {
            this.collectPart(char);
            part.classList.add('scale-0', 'opacity-0');
            setTimeout(() => part.remove(), 200);
        };
    },

    collectPart(char) {
        this.collectedParts.push(char);
        this.score += 15;
        document.getElementById('neon-score').textContent = this.score;

        const zone = document.getElementById('weld-zone');
        const partEl = document.createElement('span');
        partEl.className = 'text-2xl font-bold text-cyan-300 animate-pulse';
        partEl.textContent = char;
        zone.appendChild(partEl);

        // Check if word is complete
        if (this.collectedParts.join('') === this.currentWord) {
            this.levelComplete();
        }
    },

    levelComplete() {
        this.isPlaying = false;
        clearInterval(this.spawnInterval);

        setTimeout(() => {
            this.level++;
            this.collectedParts = [];
            this.prepareLevel();
            this.renderStage();
        }, 2000);
    }
};

// Global exposure
window.NeonSyntaxGame = NeonSyntaxGame;
