# ⚡ Entropy — Progressive Visual Friction

> **A Chrome extension that cures doom-scrolling by literally rotting the CSS of distracting websites.**

> 🚧 **Project Status: Early Stage / MVP**  
> Entropy is currently in its initial development phase! The core DOM decay engine and basic Chrome extension popup are up and running. Advanced background tab-tracking, sound effects, and site presets are actively being developed. **It's the perfect time to contribute and shape the architecture from the ground up!**

---

## 💡 The Big Idea (Explain Like I'm 5)

Normal website blockers use hard force: **"ACCESS BLOCKED 🛑"**.
What do we do? We just turn the blocker off or open an incognito window.

**Entropy takes a psychological approach:**
- It does **not** block Twitter, Reddit, or YouTube Shorts.
- You can browse freely.
- But **for every minute you stay, the website gets progressively uglier and harder to read**.
- Spacing vanishes, colors desaturate, layouts tilt, text crams together, and images blow up.
- Eventually, the site looks so broken and uncomfortable that **you close the tab voluntarily**.

> *"Friction, not force."* We introduce the biological concept of **decay** into clean digital environments.

---

## ⏱️ The 4 Stages of Decay

| Stage | Time | What Happens to the Page |
| :--- | :--- | :--- |
| **Stage 0: Normal** | 0 – 10s | Website looks and functions completely normally. |
| **Stage 1: Warning** | 10 – 20s | Padding shrinks, margins collapse, colors fade into subtle grayscale. |
| **Stage 2: Decay** | 20 – 30s | Card backgrounds turn transparent, posts overlap, text crams together. |
| **Stage 3: Chaos** | 30s+ | Layout grid breaks, images blow up to massive sizes, site becomes unreadable. |

**Important Rule:** Everything is **100% reversible**! Clicking "Reset" instantly restores the page back to pristine condition. No actual page elements are permanently destroyed.

---

## 🛠️ Tech Stack (Zero Complicated Setup!)

No React, no Docker, no Node servers, no API keys, no databases.

- **HTML5**: For the extension popup and the local demo test feed.
- **CSS3**: For the visual friction effects (transitions, filters, transforms).
- **Vanilla JavaScript**: For timing, DOM classes, and Chrome Extension APIs (`chrome.scripting`, `chrome.tabs`).

Anyone who knows basic HTML/CSS/JS can start contributing immediately!

---

## 🚀 How to Run It on Your Machine (60-Second Setup)

You don't need to install anything other than **Google Chrome**!

### Step 1: Clone or Download this repo
```bash
git clone https://github.com/YOUR_USERNAME/entropy.git
```

### Step 2: Load the extension in Chrome
1. Open Google Chrome and type `chrome://extensions` in the address bar.
2. Turn **ON** the toggle switch for **Developer mode** (top-right corner).
3. Click the **"Load unpacked"** button (top-left).
4. Select the `entropy/` folder from this repo.
5. That's it! You'll see the **Entropy** icon appear in your browser toolbar.

### Step 3: Test It!
1. Double-click to open [`entropy/demo/index.html`](entropy/demo/index.html) in your browser (a mock social feed).
2. Click the **Entropy** extension puzzle piece / icon in your Chrome toolbar.
3. Click **"Apply Decay"** ➔ Watch the page rot right before your eyes!
4. Click **"Reset"** ➔ The page snaps cleanly back to normal.

---

## 📂 Project Structure

```text
entropy/
├── manifest.json         # Tells Chrome what the extension is & what permissions it needs
├── popup/                # The UI that opens when you click the extension icon
│   ├── popup.html        # Popup markup (Apply Decay, Reset buttons)
│   ├── popup.css         # Popup styles (dark theme)
│   └── popup.js          # Injects decay styles into the active tab
├── content/              # Code that modifies the web page
│   ├── content.js        # Helper functions to add/remove classes
│   └── decay.css         # The visual friction CSS rules (grayscale, cramming, chaos)
└── demo/
    └── index.html        # Practice test webpage (mock social media feed with timer)
```

---

## 🤝 How You Can Contribute (Good First Issues)

Whether you are in your 1st year or final year, there are tons of fun things to build:

- [ ] **🎨 Add new decay styles** (e.g. replace fonts with Comic Sans, blur images, tilt paragraphs).
- [ ] **📳 Hover jitter effect** (make buttons or posts shake when the cursor touches them).
- [ ] **🎯 Website presets** (write targeted decay CSS for YouTube Shorts, Reddit, or Twitter/X).
- [ ] **🔊 Creepy audio effect** (play a quiet retro vinyl crackle or creak when decay advances).
- [ ] **⚙️ Decay intensity slider** (let the user choose: Mild, Medium, or Hardcore rot).

See [CONTRIBUTING.md](CONTRIBUTING.md) to get started on your first pull request!

---

## 📜 License
MIT License — feel free to learn, hack, and contribute!
