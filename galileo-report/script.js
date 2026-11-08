// Small ephemeris ticker: counts seconds since the last (fictional)
// navigation-data upload from Fucino. Purely decorative; the report
// reads fine without it.
(function () {
  var el = document.getElementById("ephem");
  if (!el) return;

  // Last upload: 41 minutes 07 seconds before page load.
  var lastUpload = Date.now() - (41 * 60 + 7) * 1000;

  function pad(n) { return n < 10 ? "0" + n : "" + n; }

  function tick() {
    var s = Math.floor((Date.now() - lastUpload) / 1000);
    var h = Math.floor(s / 3600);
    var m = Math.floor((s % 3600) / 60);
    var sec = s % 60;
    el.innerHTML =
      "GND-OPS &middot; FUCINO &middot; LAST EPHMERIS UPLOAD " +
      pad(h) + ":" + pad(m) + ":" + pad(sec) + " AGO &middot; " +
      "30 SATELLITES TRACKED &middot; SIGNAL <span class='blink'>NOMINAL</span>";
  }

  tick();
  setInterval(tick, 1000);
})();
