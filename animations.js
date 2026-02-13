/**
 * Enhanced Falling Hearts Animation System
 * Creates dynamic, varied falling hearts/emoji animations
 */

class FallingHeartsAnimation {
    constructor(options = {}) {
        this.container = options.container || document.querySelector('.hearts-bg')
        this.heartCount = options.heartCount || 25
        this.emojis = options.emojis || ['💕', '💗', '💖', '💝', '💓', '❤️', '💞']
        this.minDuration = options.minDuration || 8
        this.maxDuration = options.maxDuration || 15
        this.minSize = options.minSize || 1
        this.maxSize = options.maxSize || 2.5
        
        this.hearts = []
        this.init()
    }

    /**
     * Initialize the animation system
     */
    init() {
        // Clear existing content
        this.container.innerHTML = ''
        
        // Create hearts
        for (let i = 0; i < this.heartCount; i++) {
            this.createHeart(i)
        }
    }

    /**
     * Create a single heart element with random properties
     * @param {number} index - Heart index for stagger delay
     */
    createHeart(index) {
        const heart = document.createElement('div')
        heart.className = 'falling-heart'
        
        // Random properties
        const emoji = this.emojis[Math.floor(Math.random() * this.emojis.length)]
        const size = this.randomRange(this.minSize, this.maxSize)
        const duration = this.randomRange(this.minDuration, this.maxDuration)
        const delay = (index / this.heartCount) * 2 // Stagger initial spawn
        const startX = Math.random() * 100 // Start position (0-100%)
        const drift = this.randomRange(-30, 30) // Horizontal drift
        const rotation = this.randomRange(-180, 180) // End rotation
        
        heart.textContent = emoji
        heart.style.cssText = `
            position: absolute;
            left: ${startX}%;
            font-size: ${size}rem;
            opacity: ${this.randomRange(0.1, 0.2)};
            animation: fallAndSway ${duration}s linear ${delay}s infinite;
            --drift: ${drift}px;
            --rotation: ${rotation}deg;
            pointer-events: none;
            user-select: none;
        `
        
        this.container.appendChild(heart)
        this.hearts.push(heart)
    }

    /**
     * Generate random number in range
     * @param {number} min - Minimum value
     * @param {number} max - Maximum value
     * @returns {number} Random number in range
     */
    randomRange(min, max) {
        return Math.random() * (max - min) + min
    }

    /**
     * Update emojis (theme-specific icons)
     * @param {Array} emojis - Array of emoji strings
     */
    updateEmojis(emojis) {
        this.emojis = emojis
        this.hearts.forEach(heart => {
            const emoji = this.emojis[Math.floor(Math.random() * this.emojis.length)]
            heart.textContent = emoji
        })
    }

    /**
     * Destroy animation and clean up
     */
    destroy() {
        this.container.innerHTML = ''
        this.hearts = []
    }
}

/**
 * Theme-specific emoji sets
 */
const THEME_EMOJIS = {
    cats: ['😻', '😺', '😸', '😹', '🐱', '🐈', '💕'],
    bears: ['🐻', '🧸', '💕', '💗', '🍯', '💖'],
    chocobos: ['🐤', '🐥', '⭐', '✨', '💛', '💙', '🌟']
}

/**
 * Initialize hearts animation with theme support
 */
function initHeartsAnimation() {
    const currentTheme = ThemeManager.getCurrentTheme()
    const emojis = THEME_EMOJIS[currentTheme] || THEME_EMOJIS.cats
    
    return new FallingHeartsAnimation({
        heartCount: 25,
        emojis: emojis,
        minDuration: 8,
        maxDuration: 15,
        minSize: 1.2,
        maxSize: 2.5
    })
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { FallingHeartsAnimation, THEME_EMOJIS, initHeartsAnimation }
}
