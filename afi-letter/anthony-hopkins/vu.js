// VU meter: fake broadcast levels for the Dragon's Rehearsal strip.
(function () {
  var bars = document.querySelectorAll("#vu .bar");
  if (!bars.length) return;
  var n = bars.length;
  setInterval(function () {
    for (var i = 0; i < n; i++) {
      // envelope: louder in the middle of the strip
      var centre = 1 - Math.abs(i - (n - 1) / 2) / (n / 2);
      var level = 12 + centre * 70 * (0.4 + Math.random() * 0.6);
      bars[i].style.height = level + "%";
    }
  }, 220);
})();
