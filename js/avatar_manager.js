/**
 * Avatar Manager - 30 3D Character Avatar System
 * 
 * Manages avatar selection, display, and user preferences.
 */

const AvatarManager = {
    avatars: [],
    selectedAvatarId: null,

    // Avatar Categories
    categories: [
        { id: 'kawaii', name: '귀여움', icon: '🌸' },
        { id: 'cool', name: '멋짐', icon: '⚡' },
        { id: 'mystical', name: '신비', icon: '🔮' },
        { id: 'nature', name: '자연', icon: '🌿' },
        { id: 'futuristic', name: '미래', icon: '🚀' }
    ],

    // Initialize avatars (will be populated from avatars.json)
    async init() {
        try {
            const response = await fetch('data/avatars.json');
            this.avatars = await response.json();
        } catch (e) {
            console.warn('Failed to load avatars.json, using defaults');
            this.avatars = this.getDefaultAvatars();
        }

        // Load user's saved avatar
        const savedAvatar = localStorage.getItem('jap_bong_avatar');
        if (savedAvatar) {
            this.selectedAvatarId = parseInt(savedAvatar);
        }
    },

    // Default avatars if JSON not available
    getDefaultAvatars() {
        const themes = [
            { name: 'Sakura', category: 'kawaii', color: '#FFB7C5' },
            { name: 'Kitsune', category: 'mystical', color: '#FF6B35' },
            { name: 'Tanuki', category: 'nature', color: '#8B4513' },
            { name: 'Neko', category: 'kawaii', color: '#FFC0CB' },
            { name: 'Samurai', category: 'cool', color: '#4A5568' },
            { name: 'Ninja', category: 'cool', color: '#1A202C' },
            { name: 'Miko', category: 'mystical', color: '#E53E3E' },
            { name: 'Tengu', category: 'mystical', color: '#2D3748' },
            { name: 'Usagi', category: 'kawaii', color: '#FEFCBF' },
            { name: 'Inu', category: 'nature', color: '#D69E2E' },
            { name: 'Oni', category: 'cool', color: '#9B2C2C' },
            { name: 'Kappa', category: 'nature', color: '#38A169' },
            { name: 'Yuki', category: 'kawaii', color: '#E2E8F0' },
            { name: 'Ryu', category: 'mystical', color: '#3182CE' },
            { name: 'Tora', category: 'cool', color: '#ED8936' },
            { name: 'Kuma', category: 'nature', color: '#744210' },
            { name: 'Tsuru', category: 'kawaii', color: '#FFFFFF' },
            { name: 'Hebi', category: 'mystical', color: '#48BB78' },
            { name: 'Tako', category: 'nature', color: '#805AD5' },
            { name: 'Hoshi', category: 'kawaii', color: '#FAF089' },
            { name: 'Cyber', category: 'futuristic', color: '#00FFFF' },
            { name: 'Neon', category: 'futuristic', color: '#FF00FF' },
            { name: 'Mecha', category: 'futuristic', color: '#718096' },
            { name: 'Hologram', category: 'futuristic', color: '#7FFFD4' },
            { name: 'Pixel', category: 'futuristic', color: '#32CD32' },
            { name: 'Koi', category: 'nature', color: '#F6AD55' },
            { name: 'Fuji', category: 'nature', color: '#667EEA' },
            { name: 'Matcha', category: 'kawaii', color: '#68D391' },
            { name: 'Ramen', category: 'kawaii', color: '#FBD38D' },
            { name: 'Sensei', category: 'cool', color: '#2B6CB0' }
        ];

        return themes.map((theme, index) => ({
            id: index + 1,
            name: theme.name,
            category: theme.category,
            color: theme.color,
            image: null // Will use generated placeholder
        }));
    },

    // Get avatar by ID
    getAvatar(id) {
        return this.avatars.find(a => a.id === id);
    },

    // Get avatars by category
    getAvatarsByCategory(categoryId) {
        return this.avatars.filter(a => a.category === categoryId);
    },

    // Select avatar
    selectAvatar(id) {
        this.selectedAvatarId = id;
        localStorage.setItem('jap_bong_avatar', id.toString());

        if (typeof DisplayManager !== 'undefined' && DisplayManager.user) {
            DisplayManager.setAvatar(id);
        }
    },

    // Get current avatar
    getCurrentAvatar() {
        if (this.selectedAvatarId) {
            return this.getAvatar(this.selectedAvatarId);
        }
        return null;
    },

    // Render avatar placeholder (SVG)
    renderAvatarPlaceholder(avatar) {
        const initials = avatar.name.substring(0, 2).toUpperCase();
        return `
            <div class="w-full h-full rounded-full flex items-center justify-center text-white font-black text-2xl"
                 style="background: linear-gradient(135deg, ${avatar.color}, ${this.adjustColor(avatar.color, -30)})">
                ${initials}
            </div>
        `;
    },

    // Adjust color brightness
    adjustColor(hex, amount) {
        const num = parseInt(hex.replace('#', ''), 16);
        const r = Math.min(255, Math.max(0, (num >> 16) + amount));
        const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + amount));
        const b = Math.min(255, Math.max(0, (num & 0x0000FF) + amount));
        return '#' + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
    },

    // Render avatar selection screen
    renderSelectionScreen() {
        const container = document.getElementById('avatar-grid');
        if (!container) return;

        let html = '';

        this.categories.forEach(category => {
            const categoryAvatars = this.getAvatarsByCategory(category.id);
            if (categoryAvatars.length === 0) return;

            html += `
                <div class="mb-6">
                    <h3 class="text-sm font-bold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider">
                        ${category.icon} ${category.name}
                    </h3>
                    <div class="grid grid-cols-5 gap-3">
            `;

            categoryAvatars.forEach(avatar => {
                const isSelected = this.selectedAvatarId === avatar.id;
                html += `
                    <button onclick="AvatarManager.selectAvatar(${avatar.id}); AvatarManager.renderSelectionScreen();"
                        class="relative w-14 h-14 rounded-full overflow-hidden ${isSelected ? 'ring-4 ring-primary ring-offset-2' : 'hover:scale-110'} transition-all">
                        ${avatar.image ?
                        `<img src="${avatar.image}" class="w-full h-full object-cover">` :
                        this.renderAvatarPlaceholder(avatar)
                    }
                        ${isSelected ? `
                            <div class="absolute inset-0 bg-primary/20 flex items-center justify-center">
                                <i class="fas fa-check text-white text-xl drop-shadow-lg"></i>
                            </div>
                        ` : ''}
                    </button>
                `;
            });

            html += `
                    </div>
                </div>
            `;
        });

        container.innerHTML = html;
    }
};

// Add Avatar Select Screen renderer
if (typeof ScreenRenderers !== 'undefined') {
    ScreenRenderers.avatarSelect = (dm) => `
        <div class="min-h-screen bg-background-light dark:bg-background-dark flex flex-col">
            <header class="p-4 flex items-center justify-between">
                <div class="w-10"></div>
                <h2 class="text-lg font-bold text-gray-900 dark:text-white">캐릭터 선택</h2>
                <button onclick="if(AvatarManager.selectedAvatarId) DisplayManager.navigateTo('dashboard'); else alert('캐릭터를 선택해주세요!');" 
                    class="text-primary font-bold">완료</button>
            </header>
            
            <div class="flex-1 px-4 pb-8">
                <div class="text-center mb-6">
                    <div id="selected-avatar-preview" class="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                        <!-- Preview will be updated dynamically -->
                    </div>
                    <p class="text-gray-500 dark:text-gray-400 text-sm">나만의 캐릭터를 선택하세요</p>
                </div>
                
                <div id="avatar-grid"></div>
            </div>
        </div>
    `;
}

// Auto-initialize
document.addEventListener('DOMContentLoaded', () => {
    AvatarManager.init();
});

// Global exposure
window.AvatarManager = AvatarManager;
