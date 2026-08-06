window.addEventListener('load', () => {
  document.documentElement.classList.add('js-loaded');
  if (window.performance && performance.mark) {
    performance.mark('nonCriticalScriptLoaded');
  }
});
