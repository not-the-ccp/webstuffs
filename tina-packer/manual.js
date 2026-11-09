// Standing Ovation — Chapter 7: the Season Ledger (Table 7-C)
(function () {
  "use strict";

  var seats = document.getElementById("seats");
  var shows = document.getElementById("shows");
  var weeks = document.getElementById("weeks");
  var ticket = document.getElementById("ticket");
  var button = document.getElementById("settle");
  var note = document.getElementById("ledgerNote");

  function fmt(n) {
    return n.toLocaleString("en-US");
  }

  function settle() {
    var s = parseInt(seats.value, 10);
    var h = parseInt(shows.value, 10);
    var w = parseInt(weeks.value, 10);
    var t = parseFloat(ticket.value);
    if (!(s > 0 && h > 0 && w > 0 && t >= 0)) {
      note.textContent = "The ledger will not settle: every figure must be a number, and the chairs, shows and weeks must each be at least one.";
      return;
    }
    var totalShows = h * w;
    var seated = s * totalShows;
    var boxOffice = seated * t;
    note.textContent =
      "Settled: " + totalShows + " shows across the season; " + fmt(seated) +
      " chairs pulled up to the stage, and a box office of $" + fmt(Math.round(boxOffice)) +
      " — the curtain call of the round is paid in full.";
  }

  button.addEventListener("click", settle);
})();
