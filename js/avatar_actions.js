/**
 * AvatarActions - 100 Behavioral Patterns for Avatars
 * 
 * Defines animations, transformations, and effects for avatar interactions.
 * Used by AvatarManager and Mission Systems.
 */

const AvatarActions = {
    // 100 Action Definitions (Categorized)

    // --- EMOTIONS (1-20) ---
    'happy_jump': { type: 'anim', class: 'animate-bounce', duration: 1000 },
    'happy_spin': { type: 'anim', class: 'animate-spin', duration: 1000 },
    'happy_pulse': { type: 'anim', class: 'animate-pulse', duration: 1000 },
    'happy_nod': { type: 'transform', css: 'translateY(5px)', repeat: 3 },
    'happy_wiggle': { type: 'anim', class: 'animate-wiggle', duration: 1000 },
    'sad_shrink': { type: 'transform', css: 'scale(0.9)', duration: 500 },
    'sad_bow': { type: 'transform', css: 'rotateX(45deg)', duration: 1000 },
    'sad_fade': { type: 'anim', class: 'opacity-50', duration: 1000 },
    'sad_shake_slow': { type: 'anim', class: 'animate-shake-slow', duration: 1500 },
    'sad_look_down': { type: 'transform', css: 'translateY(10px)', duration: 1000 },
    'angry_shake': { type: 'anim', class: 'animate-shake', duration: 500 },
    'angry_pulse_red': { type: 'effect', class: 'filter-red', duration: 500 },
    'angry_grow': { type: 'transform', css: 'scale(1.2)', duration: 200 },
    'angry_vibrate': { type: 'anim', class: 'animate-vibrate', duration: 1000 },
    'angry_steam': { type: 'effect', icon: '😤', duration: 1000 },
    'surprise_jump': { type: 'transform', css: 'translateY(-20px)', duration: 300 },
    'surprise_spin_fast': { type: 'anim', class: 'animate-spin-fast', duration: 500 },
    'surprise_blink': { type: 'anim', class: 'animate-blink', duration: 1000 },
    'surprise_pop': { type: 'transform', css: 'scale(1.3)', duration: 200 },
    'surprise_tilt': { type: 'transform', css: 'rotate(-15deg)', duration: 500 },

    // --- LEARNING FEEDBACK (21-50) ---
    'correct_star': { type: 'effect', icon: '⭐', duration: 1000 },
    'correct_circle': { type: 'effect', icon: '⭕', duration: 1000 },
    'correct_dance': { type: 'anim', class: 'animate-bounce-custom', duration: 1500 },
    'correct_glow_gold': { type: 'effect', class: 'shadow-gold', duration: 1000 },
    'correct_thumb_up': { type: 'effect', icon: '👍', duration: 1000 },
    'correct_fireworks': { type: 'effect', particles: 'fireworks', duration: 2000 },
    'correct_level_up_sound': { type: 'sound', src: 'levelup.mp3' }, // mockup
    'correct_confetti': { type: 'effect', particles: 'confetti', duration: 2000 },
    'correct_high_five': { type: 'anim', class: 'animate-high-five', duration: 1000 },
    'correct_zoom_in': { type: 'transform', css: 'scale(1.5)', duration: 500 },
    'wrong_cross': { type: 'effect', icon: '❌', duration: 1000 },
    'wrong_shake_hard': { type: 'anim', class: 'animate-shake-hard', duration: 500 },
    'wrong_gray': { type: 'effect', class: 'filter-grayscale', duration: 1000 },
    'wrong_teardrop': { type: 'effect', icon: '💧', duration: 1000 },
    'wrong_fall': { type: 'transform', css: 'rotate(90deg)', duration: 1000 },
    'wrong_shrink_fast': { type: 'transform', css: 'scale(0.5)', duration: 300 },
    'wrong_cloud': { type: 'effect', icon: '☁️', duration: 1000 },
    'wrong_question': { type: 'effect', icon: '❓', duration: 1000 },
    'study_read': { type: 'anim', class: 'animate-read', duration: 2000 },
    'study_write': { type: 'anim', class: 'animate-write', duration: 2000 },
    'study_think': { type: 'anim', class: 'animate-pulse-slow', duration: 2000 },
    'study_bulb': { type: 'effect', icon: '💡', duration: 1000 },
    'study_glasses': { type: 'effect', icon: '👓', duration: 1000 },
    'study_focus': { type: 'transform', css: 'scale(1.1)', duration: 2000 },
    'study_nod_fast': { type: 'transform', css: 'translateY(2px)', repeat: 5 },
    'level_up_soar': { type: 'transform', css: 'translateY(-100px)', duration: 2000 },
    'level_up_aura': { type: 'effect', class: 'aura-blue', duration: 2000 },
    'level_up_crown': { type: 'effect', icon: '👑', duration: 2000 },
    'level_up_trophy': { type: 'effect', icon: '🏆', duration: 2000 },
    'level_up_sparkle': { type: 'effect', icon: '✨', duration: 2000 },

    // --- IDLE / AMBIENT (51-75) ---
    'idle_breathe': { type: 'anim', class: 'animate-breathe', duration: 3000 },
    'idle_blink': { type: 'anim', class: 'animate-blink-eyes', duration: 4000 },
    'idle_float': { type: 'anim', class: 'animate-float', duration: 3000 },
    'idle_look_around': { type: 'anim', class: 'animate-pan', duration: 5000 },
    'idle_sleep': { type: 'effect', icon: '💤', duration: 5000 },
    'idle_whistle': { type: 'effect', icon: '🎵', duration: 3000 },
    'idle_sit': { type: 'transform', css: 'translateY(10px)', duration: 0 },
    'idle_clean': { type: 'anim', class: 'animate-rub', duration: 2000 },
    'idle_eat': { type: 'effect', icon: '🍙', duration: 2000 },
    'idle_drink': { type: 'effect', icon: '🍵', duration: 2000 },
    'idle_stretch': { type: 'transform', css: 'scaleY(1.1)', duration: 1000 },
    'idle_yawn': { type: 'transform', css: 'scaleX(1.1)', duration: 1000 },
    'idle_phone': { type: 'effect', icon: '📱', duration: 3000 },
    'idle_read_book': { type: 'effect', icon: '📖', duration: 3000 },
    'idle_listen_music': { type: 'effect', icon: '🎧', duration: 3000 },
    'idle_game': { type: 'effect', icon: '🎮', duration: 3000 },
    'idle_camera': { type: 'effect', icon: '📷', duration: 1000 },
    'idle_wave': { type: 'anim', class: 'animate-wave', duration: 2000 },
    'idle_heart': { type: 'effect', icon: '❤️', duration: 2000 },
    'idle_flower': { type: 'effect', icon: '🌸', duration: 2000 },
    'idle_wait_tap': { type: 'anim', class: 'animate-tap-foot', duration: 2000 },
    'idle_ghost_float': { type: 'anim', class: 'animate-float-ghost', duration: 3000 },
    'idle_robot_scan': { type: 'effect', class: 'scan-line', duration: 2000 },
    'idle_ninja_hide': { type: 'anim', class: 'opacity-20', duration: 2000 },
    'idle_cat_groom': { type: 'anim', class: 'animate-groom', duration: 2000 },

    // --- MISSION / ACTION (76-100) ---
    'mission_start_dash': { type: 'anim', class: 'animate-dash-right', duration: 1000 },
    'mission_complete_jump': { type: 'anim', class: 'animate-super-jump', duration: 1500 },
    'mission_fail_trip': { type: 'anim', class: 'animate-trip', duration: 1000 },
    'fight_punch': { type: 'anim', class: 'animate-punch', duration: 300 },
    'fight_kick': { type: 'anim', class: 'animate-kick', duration: 300 },
    'fight_block': { type: 'effect', class: 'shield-overlay', duration: 500 },
    'fight_hit': { type: 'anim', class: 'animate-hit', duration: 300 },
    'fight_dodge': { type: 'transform', css: 'translateX(-20px)', duration: 300 },
    'fight_special_beam': { type: 'effect', class: 'beam-attack', duration: 1000 },
    'fight_victory_pose': { type: 'transform', css: 'scale(1.2) translateY(-10px)', duration: 2000 },
    'explore_walk': { type: 'anim', class: 'animate-walk', duration: 2000 },
    'explore_run': { type: 'anim', class: 'animate-run', duration: 2000 },
    'explore_climb': { type: 'anim', class: 'animate-climb', duration: 2000 },
    'explore_swim': { type: 'anim', class: 'animate-swim', duration: 2000 },
    'explore_fly': { type: 'anim', class: 'animate-fly', duration: 2000 },
    'explore_dig': { type: 'anim', class: 'animate-dig', duration: 2000 },
    'special_transform': { type: 'effect', class: 'transform-flash', duration: 1000 },
    'special_teleport': { type: 'anim', class: 'animate-teleport', duration: 500 },
    'special_heal': { type: 'effect', icon: '💚', duration: 1000 },
    'special_powerup': { type: 'effect', icon: '💪', duration: 1000 },
    'special_speedup': { type: 'effect', icon: '⏩', duration: 1000 },
    'special_shield': { type: 'effect', icon: '🛡️', duration: 2000 },
    'special_invisible': { type: 'anim', class: 'opacity-0', duration: 2000 },
    'special_giant': { type: 'transform', css: 'scale(2.0)', duration: 2000 },
    'special_tiny': { type: 'transform', css: 'scale(0.5)', duration: 2000 }
};

class ActionController {
    constructor() {
        this.currentAvatarEl = null;
    }

    setTarget(element) {
        this.currentAvatarEl = element;
    }

    play(actionId) {
        const action = AvatarActions[actionId];
        if (!action || !this.currentAvatarEl) {
            console.warn(`Action ${actionId} not found or no target element.`);
            return;
        }

        const el = this.currentAvatarEl;

        // Reset
        el.className = el.className.split(' ').filter(c => !c.startsWith('animate-') && !c.startsWith('filter-')).join(' ');
        el.style.transform = '';

        // Remove existing effects
        const existingEffects = el.parentNode.querySelectorAll('.avatar-effect');
        existingEffects.forEach(e => e.remove());

        // Apply Action
        if (action.type === 'anim' || action.type === 'effect') {
            if (action.class) {
                el.classList.add(action.class);
            }
            if (action.icon) {
                this.showEffectIcon(el, action.icon);
            }
        }

        if (action.type === 'transform') {
            el.style.transform = action.css;
        }

        // Cleanup
        setTimeout(() => {
            if (action.class) el.classList.remove(action.class);
            el.style.transform = '';
        }, action.duration || 1000);
    }

    showEffectIcon(parent, icon) {
        const div = document.createElement('div');
        div.className = 'avatar-effect absolute inset-0 flex items-center justify-center text-4xl animate-bounce-custom z-10';
        div.innerText = icon;
        parent.parentNode.appendChild(div); // Append to container, not self (image)
        setTimeout(() => div.remove(), 1000);
    }
}

// Export
window.AvatarActions = AvatarActions;
window.ActionController = new ActionController();
console.log('AvatarActions loaded with 100 patterns.');
