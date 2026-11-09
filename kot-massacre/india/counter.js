/* Article No. 104 — the last digit of the visitor counter is live, like the lamp */
(function () {
  var digit = document.getElementById('live-digit');
  if (!digit) return;
  var n = 4;
  setInterval(function () {
    n = (n + 1) % 10;
    digit.textContent = String(n);
  }, 1600);
})();
