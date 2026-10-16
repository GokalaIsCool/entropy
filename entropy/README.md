# Entropy — Week 1 & Week 2 Implementation

This repository contains the foundations for **Entropy**, a productivity Chrome extension that applies progressive, reversible visual friction instead of hard binary website blocks.

---

## 📂 Project Structure

```text
entropy/
├── manifest.json         # Manifest V3 extension configuration
├── popup/
│   ├── popup.html        # Extension popup interface
│   ├── popup.css         # Popup styles (dark mode)
│   └── popup.js          # Popup logic (chrome.tabs & chrome.scripting)
├── content/
│   ├── content.js        # Reversible page modification functions
│   └── decay.css         # Progressive decay CSS rules
└── demo/
    └── index.html        # Week 1 practice webpage (DOM & timer)
```

*(Note: In subsequent weeks, this same project will expand to include `background/service-worker.js` and `options/`.)*

---

## 🧪 Week 1: JavaScript & DOM Fundamentals

### What you learned and implemented:
1. **Variables (`let` vs `const`)**:
   - `const`: For elements (`const chameleonBtn = document.querySelector(...)`) and static configurations that don't change.
   - `let`: For mutable values that update over time (`let secondsElapsed = 0`, `let timerInterval = null`).
2. **Functions**:
   - Modular functions like `cycleButtonAppearance()`, `evaluateDecayStage()`, `startTimer()`, and `resetAll()`.
3. **Conditionals (`if` / `else if` / `else`)**:
   - Progressively checking time thresholds:
     - `secondsElapsed >= 30` ➔ Stage 3 (Chaos)
     - `secondsElapsed >= 20` ➔ Stage 2 (Decay)
     - `secondsElapsed >= 10` ➔ Stage 1 (Warning)
     - `else` ➔ Stage 0 (Normal)
4. **Arrays**:
   - `buttonAppearances`: List of CSS classes cycled on button clicks.
   - `decayStages`: Configuration of timing thresholds, descriptions, and badge classes.
5. **DOM Selection**:
   - `document.querySelector('#...')` to target elements on the page.
6. **CSS Classes**:
   - `classList.add()`, `classList.remove()`, and `classList.contains()` to reversibly toggle styles.
7. **Event Listeners**:
   - `button.addEventListener('click', ...)` responding to user actions.

### How to test Week 1:
1. Open [`entropy/demo/index.html`](demo/index.html) in your browser.
2. Click **"Change My Appearance"** to see the button cycle through Neon Glow, Warning Stripes, and Glitch Angle styles.
3. Click **"Start Timer"** and watch the page gradually rot:
   - **At 10s**: Padding disappears, text crams tightly together.
   - **At 20s**: Background becomes semi-transparent, cards overlap.
   - **At 30s**: CSS grid breaks, profile pictures expand into massive distorted graphics.
4. Click **"Reset Page"** to cleanly remove all decay and restore the page.

---

## 🚀 Week 2: Your First Chrome Extension

### What you learned and implemented:
1. **Manifest V3 (`manifest.json`)**:
   - Declares the extension version, metadata, and default popup (`popup/popup.html`).
2. **Permissions**:
   - `"activeTab"`: Grants temporary access to the active tab when the user clicks the extension action icon.
   - `"scripting"`: Enables programmatic script and CSS injection via `chrome.scripting`.
3. **Popup Interface (`popup/`)**:
   - Features **"Apply Decay"** and **"Reset"** buttons.
   - Uses `chrome.tabs.query({ active: true, currentWindow: true })` to find the active tab.
   - Uses `chrome.scripting.insertCSS` to inject [`content/decay.css`](content/decay.css).
   - Uses `chrome.scripting.executeScript` to apply reversible classes to `document.body`.

### How to load and test the unpacked extension in Chrome:
1. Open Google Chrome.
2. Navigate to `chrome://extensions` in the address bar.
3. Enable **Developer mode** (toggle in the top-right corner).
4. Click the **"Load unpacked"** button in the top-left.
5. Select the `entropy` folder:
   `/Users/himanshushukla/Desktop/melody/entropy`
6. Open [`entropy/demo/index.html`](demo/index.html) in a Chrome tab.
7. Click the **Entropy** extension puzzle piece / icon in your Chrome toolbar.
8. Click **"Apply Decay"** ➔ The webpage modifies itself via the extension!
9. Click **"Reset"** ➔ The webpage reverts cleanly back to normal.
