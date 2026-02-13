/**
 * Theme Configuration System
 * 
 * Each theme contains:
 * - id: unique identifier
 * - name: display name
 * - emoji: representative emoji
 * - colors: theme color palette
 * - gifStages: array of 8 GIFs for emotional progression
 * - celebrationGif: GIF shown on success page
 */

const THEMES = {
    cats: {
        id: 'cats',
        name: 'Gatitos',
        emoji: '🐱',
        colors: {
            primary: '#FF6B9D',      // Pink
            secondary: '#FFA07A',    // Light salmon
            accent: '#FFD700',       // Gold
            background: '#FFE4E8',   // Light pink
            gradient1: '#ffb3c1',
            gradient2: '#ff8fa3',
            gradient3: '#fff0f3'
        },
        gifStages: [
            // 0: Normal/Curious - gato feliz
            'https://media.tenor.com/1PlpyzHT2UoAAAAM/happy-catto.gif',
            // 1: Confused - gato con celular confundido
            'https://media.tenor.com/cxTH4XWKUVIAAAAM/cat.gif',
            // 2: Pleading - gato con ojitos tristes
            'https://media.tenor.com/u4mpua8vD3IAAAAm/%C3%BCzg%C3%BCnkedikuzeyefe.webp',
            // 3: Sad - gato llorando
            'https://media.tenor.com/c6nXyQmertAAAAAm/the-voices.webp',
            // 4: Sadder - gato más triste
            'https://media.tenor.com/c6nXyQmertAAAAAm/the-voices.webp',
            // 5: Devastated - gato devastado
            'https://media.tenor.com/u4mpua8vD3IAAAAm/%C3%BCzg%C3%BCnkedikuzeyefe.webp',
            // 6: Very devastated - gato súper triste
            'https://media.tenor.com/c6nXyQmertAAAAAm/the-voices.webp',
            // 7: Crying/Running away - gato llorando y escapando
            'https://media.tenor.com/c6nXyQmertAAAAAm/the-voices.webp'
        ],
        celebrationGif: 'https://media.tenor.com/1PlpyzHT2UoAAAAM/happy-catto.gif',
        previewGif: 'https://media.tenor.com/1PlpyzHT2UoAAAAM/happy-catto.gif'
    },

    bears: {
        id: 'bears',
        name: 'Ositos',
        emoji: '🐻',
        colors: {
            primary: '#8B4513',      // Saddle brown
            secondary: '#D2691E',    // Chocolate
            accent: '#F4A460',       // Sandy brown
            background: '#FFF8DC',   // Cornsilk
            gradient1: '#DEB887',    // Burlywood
            gradient2: '#D2B48C',    // Tan
            gradient3: '#FFEFD5'     // Papaya whip
        },
        gifStages: [
            // 0: Normal/Feliz - osito cute
            'https://media.tenor.com/K0Op-0SpsvkAAAAm/dudu-cute.webp',
            // 1: Confused - osito confundido
            'https://media.tenor.com/8wSdqWgiu6oAAAAm/no-nope.webp',
            // 2: Pleading - osito suplicando
            'https://media.tenor.com/sOVYL1RsYyYAAAAm/munch-face.webp',
            // 3: Sad - osito triste "te extraño"
            'https://media.tenor.com/_1xqhO5RzVYAAAAm/i-miss-you-bear-milk-and-mocha.webp',
            // 4: Sadder - osito más triste
            'https://media.tenor.com/7zfJK1SOYxoAAAAM/milk-and-mocha.gif',
            // 5: Devastated - osito devastado llorando
            'https://media.tenor.com/sWXhCC4A2woAAAAm/bubu-bubu-dudu.webp',
            // 6: Very devastated - osito muy devastado
            'https://media.tenor.com/hoblaIrKqRgAAAAm/bubu-dudu.webp',
            // 7: Crying/Running away - osito corriendo
            'https://media.tenor.com/p6fbpOnCi0sAAAAM/sport-running.gif'
        ],
        celebrationGif: 'https://media.tenor.com/1jTcRfvGwVsAAAAm/bubu-dudu-kiss.webp',
        previewGif: 'https://media.tenor.com/jkVthFR60pgAAAAm/feliz-cumplea%C3%B1os.webp'
    },

    chocobos: {
        id: 'chocobos',
        name: 'Chocobos',
        emoji: '🐤',
        colors: {
            primary: '#FFD700',      // Gold
            secondary: '#FFA500',    // Orange
            accent: '#87CEEB',       // Sky blue
            background: '#FFFACD',   // Lemon chiffon
            gradient1: '#FFE4B5',    // Moccasin
            gradient2: '#FFDAB9',    // Peach puff
            gradient3: '#FFF8DC'     // Cornsilk
        },
        gifStages: [
            // 0: Normal/Feliz - chocobo básico
            'https://media.tenor.com/belTaL7aLmMAAAAM/chocobo.gif',
            // 1: Confused - chocobo sentado/confundido
            'https://media.tenor.com/SdOOst2xxcIAAAAM/chocobo-sit.gif',
            // 2: Pleading/Tierno - chocobo abrazo
            'https://media.tenor.com/Q-kcz63z31sAAAAM/chocobo-hug.gif',
            // 3: Sad - sad/upset
            'https://media.tenor.com/aVOsoQAWgLAAAAAM/sad-upset.gif',
            // 4: Sadder - FF14 triste
            'https://media.tenor.com/gr2miGlm4a8AAAAM/ff14-ffxiv.gif',
            // 5: Devastated - FF14 devastado
            'https://media.tenor.com/9tpIHSh8-3wAAAAM/ff14-ffxiv.gif',
            // 6: Very devastated - FFX muy triste
            'https://media.tenor.com/EE2TRW9ZB3IAAAAM/chocobo-ffx.gif',
            // 7: Running away - chocobo corriendo
            'https://media.tenor.com/BfzE9URFftMAAAAM/chocobo-ff14.gif'
        ],
        celebrationGif: 'https://media.tenor.com/dhPLRYfEMEYAAAAM/chocobo-final-fantasy.gif',
        previewGif: 'https://media.tenor.com/belTaL7aLmMAAAAM/chocobo.gif'
    }
}

/**
 * Theme Management Functions
 */

const ThemeManager = {
    STORAGE_KEY: 'valentine-theme',
    DEFAULT_THEME: 'cats',

    /**
     * Get current theme from localStorage or default
     * @returns {string} Theme ID
     */
    getCurrentTheme() {
        return localStorage.getItem(this.STORAGE_KEY) || this.DEFAULT_THEME
    },

    /**
     * Save theme selection to localStorage
     * @param {string} themeId - Theme identifier (cats, bears, chocobos)
     */
    saveTheme(themeId) {
        if (!THEMES[themeId]) {
            console.error(`Invalid theme: ${themeId}`)
            return
        }
        localStorage.setItem(this.STORAGE_KEY, themeId)
    },

    /**
     * Get theme data object
     * @param {string} themeId - Optional theme ID, defaults to current
     * @returns {object} Theme configuration object
     */
    getThemeData(themeId = null) {
        const id = themeId || this.getCurrentTheme()
        return THEMES[id] || THEMES[this.DEFAULT_THEME]
    },

    /**
     * Apply theme colors to CSS custom properties
     * @param {string} themeId - Optional theme ID, defaults to current
     */
    applyThemeColors(themeId = null) {
        const theme = this.getThemeData(themeId)
        const root = document.documentElement

        root.style.setProperty('--theme-primary', theme.colors.primary)
        root.style.setProperty('--theme-secondary', theme.colors.secondary)
        root.style.setProperty('--theme-accent', theme.colors.accent)
        root.style.setProperty('--theme-background', theme.colors.background)
        root.style.setProperty('--theme-gradient1', theme.colors.gradient1)
        root.style.setProperty('--theme-gradient2', theme.colors.gradient2)
        root.style.setProperty('--theme-gradient3', theme.colors.gradient3)
    },

    /**
     * Get all available themes for selection UI
     * @returns {Array} Array of theme objects
     */
    getAllThemes() {
        return Object.values(THEMES)
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { THEMES, ThemeManager }
}
