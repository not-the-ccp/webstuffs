// Garage unit No. 1 — session clock. Text of the log is complete without it.
(function () {
  var el = document.getElementById("session");
  if (!el) return;
  var start = Date.now();
  var lap = 6; // this session follows laps 1–6, set down in the log
  function pad(n) { return String(n).padStart(2, "0"); }
  function tick() {
    var s = Math.floor((Date.now() - start) / 1000);
    // the garage keeps its own idea of a lap: four minutes, like a wet track
    var done = lap + Math.floor(s / 240);
    var inLap = s % 240;
    el.textContent = "LAP " + done + " · " +
      pad(Math.floor(inLap / 3600)) + ":" +
      pad(Math.floor(inLap / 60) % 60) + ":" +
      pad(inLap % 60);
  }
  tick();
  setInterval(tick, 1000);
})();
