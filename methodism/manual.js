/* FM-4 / Chapter 4 — the bearing readout drifts a little, like a compass over the circuit */
(function () {
  var el = document.getElementById("bearing");
  if (!el) return;
  var base = 41;
  setInterval(function () {
    var b = (base + Math.round(Math.sin(Date.now() / 9000) * 4) + 360) % 360;
    el.textContent = "Bearing " + String(b).padStart(3, "0") + "\u00B0";
  }, 3000);
})();
