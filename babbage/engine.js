/* Entry B-9 — the counter ticks up to the fifty held, then rests */
(function () {
  var el = document.getElementById('counterValue');
  if (!el) return;
  var n = 0;
  var tick = function () {
    n += 1;
    el.textContent = (n < 10 ? '0' : '') + n;
    if (n < 50) {
      setTimeout(tick, 120 + Math.floor(Math.random() * 200));
    } else {
      el.textContent = '50';
    }
  };
  setTimeout(tick, 600);
})();
