/**
 * Theme Selection Page Logic
 */

// Theme descriptions
const THEME_DESCRIPTIONS = {
    cats: 'Adorables gatitos con emociones expresivas 😻',
    bears: 'Tiernos ositos que transmiten cariño 🧸',
    chocobos: 'Mágicos chocobos de Final Fantasy llenos de encanto ✨'
}

/**
 * Initialize theme selection page
 */
function initThemeSelection() {
    const themeGrid = document.getElementById('theme-grid')
    const themes = ThemeManager.getAllThemes()

    themes.forEach(theme => {
        const card = createThemeCard(theme)
        themeGrid.appendChild(card)
    })

    // Initialize hearts animation
    initHeartsAnimation()
}

/**
 * Create a theme card element
 * @param {object} theme - Theme data object
 * @returns {HTMLElement} Theme card element
 */
function createThemeCard(theme) {
    const card = document.createElement('div')
    card.className = 'theme-card'
    card.style.setProperty('--card-primary', theme.colors.primary)
    card.style.setProperty('--card-gradient1', theme.colors.gradient1)
    card.style.setProperty('--card-gradient2', theme.colors.gradient2)
    card.style.setProperty('--card-bg1', theme.colors.background)
    card.style.setProperty('--card-bg2', theme.colors.gradient3)

    card.innerHTML = `
        <span class="theme-emoji">${theme.emoji}</span>
        <h2 class="theme-name">${theme.name}</h2>
        <div class="theme-preview">
            <img src="${theme.previewGif}" alt="${theme.name} preview">
        </div>
        <p class="theme-description">${THEME_DESCRIPTIONS[theme.id]}</p>
        <button class="select-button" onclick="selectTheme('${theme.id}')">
            Elegir ${theme.name}
        </button>
    `

    return card
}

/**
 * Handle theme selection
 * @param {string} themeId - Selected theme ID
 */
function selectTheme(themeId) {
    // Save theme to localStorage
    ThemeManager.saveTheme(themeId)

    // Add selected animation
    const selectedCard = event.target.closest('.theme-card')
    selectedCard.classList.add('selected')

    // Transition to main page after brief delay
    setTimeout(() => {
        window.location.href = 'index.html'
    }, 600)
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initThemeSelection)
