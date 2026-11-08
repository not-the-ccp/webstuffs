// Route No. 14 — distance readout as the walker scrolls
(function () {
  var readout = document.getElementById("distance-readout");
  if (!readout) return;
  var TOTAL = 2.3;
  window.addEventListener("scroll", function () {
    var doc = document.documentElement;
    var max = doc.scrollHeight - window.innerHeight;
    var frac = max > 0 ? Math.min(1, window.scrollY / max) : 1;
    var walked = (TOTAL * frac).toFixed(1);
    readout.textContent = walked + " km walked of " + TOTAL.toFixed(1) + " km.";
  }, { passive: true });
})();
