// OpenSky brochure: the fare-ticket counter of airspace passes, ticking like squawk traffic.
(function () {
  var el = document.getElementById("passes");
  if (!el) return;
  var n = 10400000; // a fair day's intake, in millions
  function tick() {
    n += 3 + Math.floor(Math.random() * 12);
    el.textContent = String(n).padStart(8, "0");
  }
  tick();
  setInterval(tick, 900);
})();
