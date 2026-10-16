/**
 * ENTROPY — Content Script (content/content.js)
 * 
 * Provides safe, reversible DOM manipulation.
 * Applies or removes extension-owned CSS classes without altering the site's original markup.
 */

(() => {
  // Guard against re-declaration if injected multiple times
  if (window.__ENTROPY_INITIALIZED__) return;
  window.__ENTROPY_INITIALIZED__ = true;

  // Listen for commands from the extension popup
  chrome.runtime.onMessage?.addListener((request, sender, sendResponse) => {
    if (request.action === 'APPLY_DECAY') {
      const stage = request.stage || 1;
      applyEntropyDecay(stage);
      sendResponse({ status: 'applied', stage });
    } else if (request.action === 'RESET_DECAY') {
      resetEntropyDecay();
      sendResponse({ status: 'reset' });
    } else if (request.action === 'GET_DECAY_STATUS') {
      const isDecayed = document.body.classList.contains('entropy-decay-active');
      sendResponse({ isDecayed });
    }
    return true;
  });

  function applyEntropyDecay(stage) {
    document.body.classList.add('entropy-decay-active');
    
    // Clear previous stages
    document.body.classList.remove('entropy-stage-1', 'entropy-stage-2', 'entropy-stage-3');
    
    if (stage === 1) {
      document.body.classList.add('entropy-stage-1');
    } else if (stage === 2) {
      document.body.classList.add('entropy-stage-2');
    } else if (stage >= 3) {
      document.body.classList.add('entropy-stage-3');
    }
  }

  function resetEntropyDecay() {
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

  // Export functions to window for executeScript calls
  window.applyEntropyDecay = applyEntropyDecay;
  window.resetEntropyDecay = resetEntropyDecay;
})();
