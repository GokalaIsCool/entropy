# 🤝 Contributing to Entropy

Welcome! We are excited that you want to contribute to **Entropy**. 

Whether you're fixing a typo, designing a hilarious new CSS decay effect, or writing Chrome extension logic, your contribution is welcome!

---

## 🐣 First Time Contributing to Open Source?

Don't worry! Here is the exact step-by-step git guide:

### 1. Fork the Repository
Click the **"Fork"** button at the top right of the GitHub page. This creates your own copy of the project under your GitHub account.

### 2. Clone Your Fork
Clone your copy to your local machine:
```bash
git clone https://github.com/<YOUR_GITHUB_USERNAME>/entropy.git
cd entropy
```

### 3. Create a New Branch
Always work on a separate branch instead of `main`:
```bash
git checkout -b feature/comic-sans-rot
```
*(Give your branch a descriptive name based on what you are building)*

### 4. Make Your Changes & Test Locally
- Open Google Chrome ➔ `chrome://extensions`.
- Click **"Load unpacked"** and select the `entropy` folder.
- Open `entropy/demo/index.html` in Chrome and test your changes!
- If you made changes to `popup.js` or `manifest.json`, click the little **refresh icon 🔄** on the extension card in `chrome://extensions`.

### 5. Commit Your Code
```bash
git add .
git commit -m "Add Comic Sans font rot to decay stage 2"
```

### 6. Push to Your Fork
```bash
git push origin feature/comic-sans-rot
```

### 7. Open a Pull Request (PR)
1. Go to your fork on GitHub.
2. You'll see a green button saying **"Compare & pull request"**. Click it!
3. Add a quick description of what you changed (and a screenshot/GIF if it's a visual effect).
4. Click **"Create pull request"**! 🎉

---

## 🛡️ Core Rules for Contributors
1. **Never delete real website elements**: We only change CSS classes (`classList.add`). We don't delete `<div>` tags or break login forms.
2. **Every effect must be reversible**: If the user clicks **Reset**, the page must snap back to 100% normal.
3. **Keep it beginner friendly**: Write clean, well-commented HTML, CSS, and Vanilla JavaScript. Avoid heavy external libraries.

Have questions or need help? Ping us in the college club group or open a GitHub Issue!
