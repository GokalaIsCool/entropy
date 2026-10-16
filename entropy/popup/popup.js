/**
 * ENTROPY — POPUP CONTROLLER (popup/popup.js)
 * 
 * Demonstrates Chrome Manifest V3 APIs:
 * - chrome.tabs.query: Finds the currently active browser tab
 * - chrome.scripting.insertCSS: Injects extension-owned CSS rules into the page
 * - chrome.scripting.removeCSS: Safely removes extension CSS rules
 * - chrome.scripting.executeScript: Runs reversible DOM class manipulation
 */

document.addEventListener('DOMContentLoaded', () => {
  const btnApplyDecay = document.getElementById('btn-apply-decay');
  const btnReset = document.getElementById('btn-reset');
  const btnStage1 = document.getElementById('btn-stage-1');
  const btnStage2 = document.getElementById('btn-stage-2');
  const btnStage3 = document.getElementById('btn-stage-3');
  const popupStatus = document.getElementById('popup-status');
  const statusMessage = document.getElementById('status-message');

  /**
   * Helper: Get the currently active tab in the focused window
   */
  async function getActiveTab() {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    return tab;
  }

  /**
   * Check if a tab URL is supported (cannot inject scripts into chrome:// or chrome-extension://)
   */
  function isRestrictedUrl(url) {
    return !url || url.startsWith('chrome://') || url.startsWith('chrome-extension://') || url.startsWith('edge://');
  }

  /**
   * Applies decay CSS and classes to the active page
   */
  async function applyDecay(stage = 1) {
    try {
      const tab = await getActiveTab();
      if (!tab || !tab.id) {
        statusMessage.textContent = 'Error: No active tab found.';
        return;
      }

      if (isRestrictedUrl(tab.url)) {
        statusMessage.textContent = 'Chrome blocks extensions on internal chrome:// pages.';
        return;
      }

      // Step 1: Inject the decay stylesheet
      await chrome.scripting.insertCSS({
        target: { tabId: tab.id },
        files: ['content/decay.css']
      });

      // Step 2: Add decay classes to <body>
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: (selectedStage) => {
          document.body.classList.add('entropy-decay-active');
          document.body.classList.remove('entropy-stage-1', 'entropy-stage-2', 'entropy-stage-3');
          document.body.classList.add(`entropy-stage-${selectedStage}`);
        },
        args: [stage]
      });

      // Update popup UI
      popupStatus.textContent = `Stage ${stage}`;
      popupStatus.className = 'status-pill decayed';
      statusMessage.textContent = `Decay Stage ${stage} applied to tab.`;
    } catch (err) {
      console.error(err);
      statusMessage.textContent = `Error: ${err.message}`;
    }
  }

  /**
   * Completely removes decay effects and restores original page appearance
   */
  async function resetPage() {
    try {
      const tab = await getActiveTab();
      if (!tab || !tab.id) return;

      if (isRestrictedUrl(tab.url)) {
        statusMessage.textContent = 'Cannot modify internal chrome:// pages.';
        return;
      }

      // Step 1: Remove injected CSS
      try {
        await chrome.scripting.removeCSS({
          target: { tabId: tab.id },
          files: ['content/decay.css']
        });
      } catch (cssErr) {
        // Ignore if CSS was not currently inserted
      }

      // Step 2: Remove all decay classes from <body>
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
          document.body.classList.remove(
            'entropy-decay-active',
            'entropy-stage-1',
            'entropy-stage-2',
            'entropy-stage-3',
            'decay-stage-1',
            'decay-stage-2',
            'decay-stage-3'
          );
        }
      });

      // Update popup UI
      popupStatus.textContent = 'Normal';
      popupStatus.className = 'status-pill normal';
      statusMessage.textContent = 'Page reset cleanly. All decay removed.';
    } catch (err) {
      console.error(err);
      statusMessage.textContent = `Error: ${err.message}`;
    }
  }

  /**
   * Check initial page decay state when popup opens
   */
  async function checkInitialStatus() {
    try {
      const tab = await getActiveTab();
      if (!tab || isRestrictedUrl(tab.url)) return;

      const results = await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => document.body.classList.contains('entropy-decay-active')
      });

      const isDecayed = results && results[0] && results[0].result;
      if (isDecayed) {
        popupStatus.textContent = 'Decayed';
        popupStatus.className = 'status-pill decayed';
        statusMessage.textContent = 'Active tab currently has decay applied.';
      } else {
        popupStatus.textContent = 'Normal';
        popupStatus.className = 'status-pill normal';
        statusMessage.textContent = 'Active tab is normal.';
      }
    } catch (err) {
      // Ignored if permissions not yet active
    }
  }

  // Bind Event Listeners
  btnApplyDecay.addEventListener('click', () => applyDecay(1));
  btnReset.addEventListener('click', resetPage);
  btnStage1.addEventListener('click', () => applyDecay(1));
  btnStage2.addEventListener('click', () => applyDecay(2));
  btnStage3.addEventListener('click', () => applyDecay(3));

  // Initialize
  checkInitialStatus();
});
