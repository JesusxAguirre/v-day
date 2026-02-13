let musicPlaying = false

window.addEventListener('load', () => {
    // Apply theme
    const theme = ThemeManager.getThemeData()
    ThemeManager.applyThemeColors()
    
    // Set celebration GIF
    const catGif = document.getElementById('cat-gif')
    catGif.src = theme.celebrationGif

    // Initialize enhanced hearts animation
    initHeartsAnimation()

    launchConfetti()

    // Autoplay music (works since user clicked Yes to get here)
    const music = document.getElementById('bg-music')
    music.volume = 0.3
    music.play().catch(() => {})
    musicPlaying = true
    document.getElementById('music-toggle').textContent = '🔊'
})

function launchConfetti() {
    const theme = ThemeManager.getThemeData()
    const colors = [
        theme.colors.primary,
        theme.colors.secondary,
        theme.colors.accent,
        theme.colors.gradient1,
        theme.colors.gradient2,
        '#fff'
    ]
    const duration = 6000
    const end = Date.now() + duration

    // Initial big burst
    confetti({
        particleCount: 150,
        spread: 100,
        origin: { x: 0.5, y: 0.3 },
        colors
    })

    // Continuous side cannons
    const interval = setInterval(() => {
        if (Date.now() > end) {
            clearInterval(interval)
            return
        }

        confetti({
            particleCount: 40,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.6 },
            colors
        })

        confetti({
            particleCount: 40,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.6 },
            colors
        })
    }, 300)
}

function toggleMusic() {
    const music = document.getElementById('bg-music')
    if (musicPlaying) {
        music.pause()
        musicPlaying = false
        document.getElementById('music-toggle').textContent = '🔇'
    } else {
        music.play()
        musicPlaying = true
        document.getElementById('music-toggle').textContent = '🔊'
    }
}

/**
 * Change theme (go back to selection)
 */
function changeTheme() {
    window.location.href = 'theme-select.html'
}
