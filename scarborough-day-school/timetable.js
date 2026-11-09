/* The Beechwood Branch — platform effects for Service SCB-1 */
(function () {
  "use strict";

  // Seamless ticker: duplicate the line so the -50% roll loops cleanly.
  var tick = document.getElementById("tickertext");
  if (tick) {
    tick.textContent += " " + tick.textContent.trim();
  }

  // A slow departure-board clock, kept to the minute, in the valley's own time.
  var status = document.getElementById("status");
  if (status) {
    var boardStates = [
      "IN REPAIR BY DESIGN",
      "NEXT: THEATRE SPECIAL, ON REQUEST",
      "ENROLLMENT RARELY EXCEEDING 150",
      "THE BELL, RETUNED, F MAJOR",
      "HYDE PARK 07:02 — PUNCTUAL"
    ];
    var i = 0;
    setInterval(function () {
      i = (i + 1) % boardStates.length;
      status.textContent = boardStates[i];
    }, 5200);
  }

  // Mark the row of the timetable that matches the present hour-and-minute,
  // so the page keeps its own time against the printed one.
  var rows = document.querySelectorAll("table.tt tbody tr");
  if (!rows.length) return;

  function matchRow() {
    var now = new Date();
    var target = now.getHours() * 60 + now.getMinutes();
    var best = null, bestDiff = 1e9;
    rows.forEach(function (tr) {
      var cell = tr.querySelector(".time");
      if (!cell) return;
      var parts = cell.textContent.trim().split(":");
      if (parts.length !== 2) return;
      var t = parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
      var diff = Math.abs(t - target);
      diff = Math.min(diff, 1440 - diff); // the day wraps at the gate
      if (diff < bestDiff) { bestDiff = diff; best = tr; }
    });
    rows.forEach(function (tr) { tr.classList.remove("now"); });
    if (best) best.classList.add("now");
  }

  matchRow();
  setInterval(matchRow, 60000);
})();
