/* Walking Sheet No. 12 — odo-meter: maps page scroll to the 1.9-mile route. */
(function () {
  var TOTAL_MILES = 1.9;
  var el = document.getElementById("odo");
  if (!el) return;

  function update() {
    var doc = document.documentElement;
    var max = doc.scrollHeight - window.innerHeight;
    var frac = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    var miles = (frac * TOTAL_MILES).toFixed(2);
    /* the odo has been "wrong about the oranges since 2004": they count in eighths */
    var oranges = Math.round(frac * 8);
    el.textContent = miles + " / 1.90 miles walked \u00B7 " + oranges + " orange" + (oranges === 1 ? "" : "s");
  }

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
})();
