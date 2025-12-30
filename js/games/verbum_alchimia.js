/**
 * Verbum Alchimia Game - Medieval Alchemy Cauldron
 * 
 * "잘못된 주문(단어)은 폭발을 부른다."
 * A fluid-based language puzzle game.
 */

const VerbumAlchimiaGame = {
    isInitialized: false,
    isPlaying: false,
    score: 0,
    ingredients: [],
    targetPotion: null,
    cauldronHealth: 100,

    // Medieval color palette
    colors: {
        gold: '#FFD700',
        purple: '#8B5CF6',
        green: '#10B981',
        red: '#EF4444',
        dark: '#1f1a30'
    },

    init() {
        if (this.isInitialized) return;
        console.log('🧪 Verbum Alchimia Engine Initializing...');
        this.renderMenu();
        this.isInitialized = true;
    },

    renderMenu() {
        const container = document.getElementById('game-container');
        if (!container) return;

        container.innerHTML = `
            <div class="min-h-screen bg-gradient-to-b from-[#1f1a30] via-[#2d1f47] to-[#1a1a2e] flex flex-col items-center justify-center p-6 relative overflow-hidden">
                <!-- Magical particles -->
                <div class="absolute inset-0 overflow-hidden pointer-events-none">
                    ${Array(20).fill().map(() => `
                        <div class="absolute w-2 h-2 bg-purple-400/30 rounded-full animate-float" 
                             style="left: ${Math.random() * 100}%; top: ${Math.random() * 100}%; animation-delay: ${Math.random() * 5}s;"></div>
                    `).join('')}
                </div>

                <div class="relative z-10 text-center">
                    <!-- Cauldron Icon -->
                    <div class="mb-8">
                        <div class="relative w-32 h-32 mx-auto">
                            <div class="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
                            <div class="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center border-4 border-purple-500/50 shadow-2xl">
                                <i class="fas fa-flask text-purple-300 text-5xl"></i>
                            </div>
                        </div>
                    </div>

                    <h1 class="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 mb-2">
                        VERBUM ALCHIMIA
                    </h1>
                    <p class="text-purple-300/60 text-lg font-serif italic mb-2">연금술의 언어</p>
                    <p class="text-purple-400/50 text-sm mb-8 max-w-xs mx-auto">
                        올바른 재료를 조합하여 마법의 물약을 만드세요
                    </p>

                    <button onclick="VerbumAlchimiaGame.startGame()" 
                        class="w-64 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-black text-lg rounded-2xl shadow-[0_0_40px_rgba(168,85,247,0.4)] hover:shadow-[0_0_60px_rgba(168,85,247,0.6)] transition-all active:scale-95">
                        <i class="fas fa-magic mr-2"></i> 연금술 시작
                    </button>
                </div>

                <!-- Back Button -->
                <button onclick="DisplayManager.goBack()" 
                    class="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all">
                    <i class="fas fa-arrow-left"></i>
                </button>
            </div>

            <style>
                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
                    50% { transform: translateY(-20px) rotate(180deg); opacity: 0.8; }
                }
                .animate-float { animation: float 6s ease-in-out infinite; }
            </style>
        `;
    },

    startGame() {
        console.log('Starting Verbum Alchimia...');
        this.isPlaying = true;
        this.score = 0;
        this.ingredients = [];
        this.cauldronHealth = 100;
        this.preparePotion();
        this.renderStage();
    },

    preparePotion() {
        const potions = [
            { name: '치료의 물약', word: '薬', ingredients: ['薬', '草'], color: 'green' },
            { name: '힘의 물약', word: '力', ingredients: ['力', '火'], color: 'red' },
            { name: '지혜의 물약', word: '知', ingredients: ['知', '水'], color: 'blue' }
        ];
        this.targetPotion = potions[Math.floor(Math.random() * potions.length)];
    },

    renderStage() {
        const container = document.getElementById('game-container');
        if (!container) return;

        container.innerHTML = `
            <div class="min-h-screen bg-gradient-to-b from-[#1f1a30] to-[#0f0a1a] relative overflow-hidden">
                <!-- HUD -->
                <div class="absolute top-4 left-4 right-4 flex justify-between items-start z-20">
                    <button onclick="VerbumAlchimiaGame.renderMenu()" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                        <i class="fas fa-times"></i>
                    </button>
                    <div class="bg-black/50 backdrop-blur-sm px-4 py-2 rounded-xl border border-purple-500/30">
                        <span class="text-purple-400 font-bold">SCORE: <span id="alchemy-score">${this.score}</span></span>
                    </div>
                </div>

                <!-- Target Potion -->
                <div class="absolute top-20 left-1/2 -translate-x-1/2 text-center z-20">
                    <p class="text-purple-400/60 text-xs uppercase tracking-widest mb-2">목표 물약</p>
                    <div class="bg-black/40 backdrop-blur-xl border border-purple-500/30 rounded-2xl px-8 py-4">
                        <h2 class="text-2xl font-black text-white">${this.targetPotion.name}</h2>
                        <p class="text-purple-300 text-lg mt-1">${this.targetPotion.ingredients.join(' + ')}</p>
                    </div>
                </div>

                <!-- Cauldron -->
                <div class="absolute bottom-24 left-1/2 -translate-x-1/2 z-10">
                    <div class="relative">
                        <!-- Bubbles -->
                        <div class="absolute -top-8 left-1/2 -translate-x-1/2 flex gap-2">
                            <div class="w-4 h-4 bg-purple-500/50 rounded-full animate-bounce" style="animation-delay: 0s;"></div>
                            <div class="w-3 h-3 bg-pink-500/50 rounded-full animate-bounce" style="animation-delay: 0.2s;"></div>
                            <div class="w-5 h-5 bg-purple-400/50 rounded-full animate-bounce" style="animation-delay: 0.4s;"></div>
                        </div>
                        
                        <!-- Cauldron Body -->
                        <div class="w-48 h-32 bg-gradient-to-b from-gray-700 to-gray-900 rounded-b-full rounded-t-3xl border-4 border-gray-600 flex items-center justify-center relative overflow-hidden">
                            <div id="cauldron-liquid" class="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-purple-600/80 to-transparent rounded-b-full">
                                <div id="collected-ingredients" class="flex items-center justify-center gap-1 pt-4 text-white text-2xl font-bold"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Ingredients Shelf -->
                <div class="absolute top-1/2 -translate-y-1/2 left-0 right-0 px-8">
                    <div class="flex justify-center gap-4 flex-wrap">
                        ${this.generateIngredientButtons()}
                    </div>
                </div>

                <!-- Brew Button -->
                <div class="absolute bottom-8 left-1/2 -translate-x-1/2">
                    <button onclick="VerbumAlchimiaGame.brewPotion()" 
                        class="px-10 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-black rounded-xl shadow-lg hover:scale-105 transition-all">
                        <i class="fas fa-fire mr-2"></i> 조합하기
                    </button>
                </div>
            </div>
        `;
    },

    generateIngredientButtons() {
        const allIngredients = ['薬', '草', '力', '火', '知', '水', '毒', '光', '闇', '風'];
        return allIngredients.map(ing => `
            <button onclick="VerbumAlchimiaGame.addIngredient('${ing}')" 
                class="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-800/50 to-pink-800/50 border-2 border-purple-500/30 text-white text-2xl font-bold hover:scale-110 hover:border-purple-400 transition-all shadow-lg">
                ${ing}
            </button>
        `).join('');
    },

    addIngredient(ing) {
        if (this.ingredients.length >= 3) return;

        this.ingredients.push(ing);
        const collected = document.getElementById('collected-ingredients');
        if (collected) {
            collected.innerHTML = this.ingredients.map(i => `<span class="animate-pulse">${i}</span>`).join(' ');
        }
    },

    brewPotion() {
        const isCorrect = this.targetPotion.ingredients.every(i => this.ingredients.includes(i)) &&
            this.ingredients.length === this.targetPotion.ingredients.length;

        if (isCorrect) {
            this.score += 100;
            document.getElementById('alchemy-score').textContent = this.score;
            alert('🎉 물약 완성! +100점');
        } else {
            alert('💥 폭발! 잘못된 조합입니다.');
        }

        this.ingredients = [];
        document.getElementById('collected-ingredients').innerHTML = '';
        this.preparePotion();
        this.renderStage();
    }
};

// Global exposure
window.VerbumAlchimiaGame = VerbumAlchimiaGame;
