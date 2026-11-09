// The Orbit Sheet — counts 67P rotations, 12.4-hour day, since 1969.
(function () {
  var el = document.getElementById("spin");
  if (!el) return;
  var DAY_MS = 12.4 * 3600 * 1000;
  var START = Date.UTC(1969, 2, 11); // plate observations of 1969
  function tick() {
    var spins = Math.floor((Date.now() - START) / DAY_MS);
    el.textContent = spins.toLocaleString();
  }
  tick();
  setInterval(tick, 60000);
})();
