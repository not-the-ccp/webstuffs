/* Specification WW-24-0117 — receiving line: cycles the eight regional feeds */
(function () {
  var feeds = [
    "East & Southern Africa · 3675 kHz · carrier strong",
    "West & Central Africa · 4040 kHz · steady, a little rain",
    "Middle East · 9535 kHz · carrier strong",
    "South Asia · 9465 kHz · arriving before the 04:12",
    "East Asia · 11745 kHz · steady",
    "South America · 6175 kHz · faint at the edges",
    "North America · 7285 kHz · steady",
    "Europe & Commonwealth · 5905 kHz · carrier strong"
  ];
  var readout = document.getElementById("feed-readout");
  var meter = document.getElementById("feed-meter");
  if (!readout || !meter) return;
  var bars = meter.getElementsByTagName("i");
  var i = 3;

  function render() {
    readout.textContent = feeds[i % feeds.length];
    var strength = 4 + (i % 5); /* 4..8 bars */
    for (var b = 0; b < bars.length; b++) {
      bars[b].className = b < strength ? "on" : "";
    }
  }
  render();
  setInterval(function () { i += 1; render(); }, 4200);
})();
