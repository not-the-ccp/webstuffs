// Small touch for the watch thread: the watching count drifts while the page is open.
(function () {
  var el = document.getElementById("watchers");
  if (!el) return;
  var n = parseInt(el.textContent, 10) || 41;
  setInterval(function () {
    if (Math.random() < 0.4) {
      n = Math.max(12, n + (Math.random() < 0.5 ? -1 : 1));
      el.textContent = n;
    }
  }, 5000);
})();
