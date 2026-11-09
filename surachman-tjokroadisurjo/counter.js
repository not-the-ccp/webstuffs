/* Back-office visitor counter. The number stands even without this script;
   with it, the little odometer turns once per sitting, as the lamp is lit. */
(function () {
  var el = document.getElementById("counter");
  if (!el) return;
  var n = parseInt(el.textContent, 10) || 1294;
  n += 1;
  el.textContent = String(n).padStart(6, "0");
})();
