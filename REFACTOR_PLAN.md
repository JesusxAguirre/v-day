# Valentine's Day Interactive - Refactor Plan

## Project Overview
Refactoring existing Valentine's interactive app to support theme selection (cats/bears/chocobos), improved animations, and love letter reveal feature.

## Current State
- ✅ Basic "Will you be my Valentine?" interaction
- ✅ GIF stages with emotional progression (Chiikawa theme)
- ✅ Yes/No buttons with guilt-trip mechanics
- ✅ Runaway button behavior
- ✅ Background music with toggle
- ✅ Basic floating hearts animation
- ✅ Confetti on "Yes" page

## Goals
1. **Theme Selection System**: User can choose between cats, bears, or chocobos
2. **Enhanced Falling Hearts**: Better animation, more dynamic
3. **Love Letter Reveal**: Animated letter opening with message
4. **Extensible Architecture**: Easy to add new themes without touching core logic

---

## Implementation Stages

### Stage 1: Architecture Setup ⏳
**Status**: PENDING

**Tasks**:
- [ ] Create theme configuration system (`themes.js`)
- [ ] Define theme interface (name, gifStages array, colors, etc.)
- [ ] Setup cats theme data (find/curate 8 cat GIFs for emotional stages)
- [ ] Setup bears theme data (find/curate 8 bear GIFs)
- [ ] Setup chocobos theme data (find/curate 8 chocobo GIFs)
- [ ] Create theme storage mechanism (localStorage)

**Files to Create**:
- `themes.js` - Theme configuration and data

**Files to Modify**:
- None yet

**Notes**:
- Each theme needs 8 GIFs: normal → confused → pleading → sad → sadder → devastated → very devastated → crying
- Plus 1 celebration GIF for the "Yes" page
- Color schemes should match theme (cats = warm, bears = brown/honey, chocobos = yellow/blue)

---

### Stage 2: Theme Selection Screen 🎯
**Status**: PENDING

**Tasks**:
- [ ] Create new `theme-select.html` page
- [ ] Design theme cards (visual preview + name)
- [ ] Add theme preview animations
- [ ] Implement theme selection logic
- [ ] Save selected theme to localStorage
- [ ] Redirect to main `index.html` with theme applied
- [ ] Add CSS for theme selection page

**Files to Create**:
- `theme-select.html` - Theme selection page
- `theme-select.css` - Styles for theme picker
- `theme-select.js` - Theme selection logic

**Files to Modify**:
- Project structure (theme-select becomes entry point)

**Design Notes**:
- Show 3 cards with animated GIF previews
- Click card → animate selection → transition to game
- Smooth transitions, matching pink Valentine's aesthetic

---

### Stage 3: Integrate Theme System into Game 🔧
**Status**: PENDING

**Tasks**:
- [ ] Refactor `script.js` to load theme from localStorage
- [ ] Replace hardcoded `gifStages` array with theme data
- [ ] Apply theme colors to UI dynamically
- [ ] Update `yes.html` to use theme celebration GIF
- [ ] Add "Change Theme" button to allow switching
- [ ] Test all 3 themes work correctly with existing mechanics

**Files to Modify**:
- `script.js` - Load and apply theme
- `yes-script.js` - Apply theme to success page
- `style.css` - Dynamic theme colors (CSS variables?)
- `index.html` - Add theme change button
- `yes.html` - Add theme change button

**Technical Approach**:
```javascript
// Load theme on page load
const currentTheme = loadTheme() // from localStorage
const themeData = THEMES[currentTheme] // from themes.js

// Apply GIFs dynamically
const gifStages = themeData.gifStages

// Apply colors via CSS variables
document.documentElement.style.setProperty('--primary-color', themeData.colors.primary)
```

---

### Stage 4: Enhanced Falling Hearts Animation 💕
**Status**: PENDING

**Tasks**:
- [ ] Create dedicated hearts animation module
- [ ] Increase heart count and variety
- [ ] Add random sizes, speeds, rotation
- [ ] Add horizontal drift/sway effect
- [ ] Consider using Canvas for performance (optional)
- [ ] Make hearts theme-aware (cats = paws, bears = honey, chocobos = feathers?)

**Files to Create**:
- `animations.js` - Reusable animation utilities

**Files to Modify**:
- `style.css` - Enhanced @keyframes
- `index.html` - Include animations.js
- `yes.html` - Include animations.js

**Animation Details**:
- 20-30 hearts falling continuously
- Random spawn positions across width
- Varying fall speeds (8-15s duration)
- Slight horizontal sway using sine waves
- Rotation during fall
- Staggered animation delays for natural flow

---

### Stage 5: Love Letter Reveal Feature 💌
**Status**: PENDING

**Tasks**:
- [ ] Design letter envelope + paper graphics (CSS or SVG)
- [ ] Create envelope opening animation
- [ ] Create paper unfolding animation
- [ ] Write customizable message content
- [ ] Add "Open Letter" button/trigger
- [ ] Integrate into "Yes" page
- [ ] Add close/fold-back functionality

**Files to Create**:
- `letter.css` - Letter styling and animations
- `letter.js` - Letter interaction logic

**Files to Modify**:
- `yes.html` - Add letter component
- `yes-script.js` - Trigger letter reveal

**Letter Flow**:
1. Closed envelope appears on yes.html
2. User clicks envelope
3. Envelope opens (flap lifts)
4. Letter slides out
5. Letter unfolds
6. Message revealed with typewriter effect
7. Option to fold back and re-read

**Message Content** (customizable):
```
My Dearest Valentine,

From the moment I saw you, my heart knew.
Every day with you is a gift I cherish.
You make my world brighter, warmer, and infinitely better.

Will you be mine?

Forever yours,
[Your Name]
```

---

### Stage 6: Polish & Testing ✨
**Status**: PENDING

**Tasks**:
- [ ] Test all themes on desktop
- [ ] Test all themes on mobile
- [ ] Verify music plays correctly on all browsers
- [ ] Check localStorage persistence
- [ ] Optimize GIF loading (preload?)
- [ ] Add loading states for GIFs
- [ ] Accessibility check (keyboard navigation, ARIA labels)
- [ ] Performance optimization (if needed)
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)

**Files to Modify**:
- All files (bug fixes and polish)

**Testing Checklist**:
- [ ] Theme selection works
- [ ] Theme persists on page reload
- [ ] All GIFs load correctly
- [ ] Animations smooth on mobile
- [ ] Music toggle works
- [ ] Letter reveal works
- [ ] No console errors
- [ ] Works on iPhone Safari
- [ ] Works on Android Chrome

---

## Project Structure (After Refactor)

```
v-day/
├── index.html              # Main game page
├── yes.html               # Success page
├── theme-select.html      # NEW: Theme picker (entry point)
├── script.js              # Main game logic (refactored)
├── yes-script.js          # Success page logic
├── themes.js              # NEW: Theme configurations
├── theme-select.js        # NEW: Theme selection logic
├── animations.js          # NEW: Animation utilities
├── letter.js              # NEW: Letter reveal logic
├── style.css              # Main styles (with CSS variables)
├── theme-select.css       # NEW: Theme picker styles
├── letter.css             # NEW: Letter component styles
├── music/
│   └── beabadoobee - Glue Song (Lyrics).mp3
└── README.md
```

---

## Technical Decisions

### Theme System
- **Storage**: localStorage (key: `valentine-theme`)
- **Default**: cats (if no selection made)
- **Format**: Simple string identifier (`'cats'`, `'bears'`, `'chocobos'`)

### CSS Approach
- CSS Custom Properties for theme colors
- Keep existing class-based styles
- Override colors via `:root` variables set by JS

### Animation Strategy
- Pure CSS for hearts (performant enough)
- Canvas only if performance issues arise
- RequestAnimationFrame for letter animations

### Browser Support
- Modern browsers (ES6+)
- No IE11 support needed
- Mobile-first responsive design

---

## Resources Needed

### GIFs to Find
- **Cats**: 8 emotional stages + 1 celebration
- **Bears**: 8 emotional stages + 1 celebration  
- **Chocobos**: 8 emotional stages + 1 celebration

### Potential Sources
- Tenor.com
- Giphy.com
- Final Fantasy XIV GIF collections (for chocobos)

---

## Notes
- Keep existing functionality intact during refactor
- Test each stage independently before moving to next
- Maintain pink Valentine's aesthetic across all themes
- Ensure mobile responsiveness throughout
- Keep code clean and commented for future customization
