/* The Juche Line — concourse clock and gold-row flash */

(function () {
  "use strict";

  // Concourse clock: starts at 00:00:00, runs one station-second per
  // real second, never past 01:00:00 (the board resets, as is the rule).
  var clockEl = document.getElementById("station-clock");
  if (clockEl) {
    var seconds = 0;
    var pad = function (n) { return (n < 10 ? "0" : "") + n; };
    var tickClock = function () {
      seconds = (seconds + 1) % 3600;
      clockEl.textContent =
        pad(Math.floor(seconds / 3600)) + ":" +
        pad(Math.floor((seconds % 3600) / 60)) + ":" +
        pad(seconds % 60);
    };
    tickClock();
    setInterval(tickClock, 1000);
  }

  // The gold-marked service: a slow blink on the 0000 JUCHE row,
  // as the departure board lights its head service.
  var heroRow = document.getElementById("row-juche");
  if (heroRow) {
    setInterval(function () {
      heroRow.classList.toggle("flash");
    }, 2200);
  }
})();
