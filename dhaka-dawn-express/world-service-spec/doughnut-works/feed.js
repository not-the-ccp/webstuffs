/* Product Sheet No. 41 — the receiving line, kept warm */
(function () {
  var readouts = [
    "all bands \u00b7 carrier never down since 1919",
    "forty and more languages \u00b7 each kept in order",
    "the brief is on the slow heat \u00b7 the stewpan is warm",
    "Bletchley Park annex \u00b7 last check six years in the making",
    "the yard holds the weather \u00b7 the ring keeps the hour",
    "fry a nice brown \u00b7 the standing order, on account",
    "not one more than the whole \u00b7 and not one less"
  ];
  var readout = document.getElementById("feed-readout");
  var meter = document.getElementById("feed-meter");
  if (!readout || !meter) return;
  var bars = meter.querySelectorAll("i");
  var idx = 0;
  function tick() {
    for (var i = 0; i < bars.length; i++) bars[i].classList.toggle("on", i < 3 + Math.floor(Math.random() * 6));
    idx = (idx + 1) % readouts.length;
    readout.textContent = readouts[idx];
  }
  tick();
  setInterval(tick, 3200);
})();
