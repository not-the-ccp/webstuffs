/* Tatum Ranch Hazard Desk — porch counter, kept in pencil */
(function () {
  var el = document.getElementById('counter');
  if (!el) return;
  var base = parseInt(el.textContent.replace(/\D/g, ''), 10) || 314;
  var start = base;
  setInterval(function () {
    if (Math.random() < 0.35) {
      start += 1;
      el.textContent = String(start).padStart(6, '0');
    }
  }, 7000);
})();
