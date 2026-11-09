/* Soho Dial — the night shift keeps the dial moving */
(function () {
  var lamp = document.getElementById("onair");
  if (!lamp) return;

  var bars = 5;
  var tick = setInterval(function () {
    // sweep the on-air lamp like a tuning dial
    var v = 0.55 + 0.45 * Math.abs(Math.sin(Date.now() / 900));
    lamp.style.opacity = v.toFixed(2);
  }, 220);

  // the bells are counted in the margin: one, twice, once small, once low
  if ("Notification" in window) {
    document.addEventListener("visibilitychange", function () {
      clearInterval(tick);
      tick = null;
    });
  }
  void bars;
})();
