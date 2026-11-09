// Lot 38 — the 38 matchdays board, Pamplona & Echarri, Auctioneers
(function () {
  var form = document.getElementById("recordForm");
  var warning = document.getElementById("calcWarning");
  var pointsOut = document.getElementById("pointsOut");
  var placedOut = document.getElementById("placedOut");

  if (!form) return;

  function strike() {
    var w = parseInt(document.getElementById("wins").value, 10) || 0;
    var d = parseInt(document.getElementById("draws").value, 10) || 0;
    var l = parseInt(document.getElementById("losses").value, 10) || 0;
    var total = w + d + l;

    if (total !== 38 || w < 0 || d < 0 || l < 0) {
      warning.textContent = "The board strikes no record but 38 matchdays: this one comes to " + total + ".";
      pointsOut.textContent = "\u2014";
      placedOut.textContent = "Enter a record of exactly 38 matchdays and the board will place the club.";
      return;
    }
    warning.textContent = "";

    var points = w * 3 + d;
    var rank;
    if (w >= 30) rank = "the title, and the hammer's reserve price is met";
    else if (w >= 25) rank = "the European places, second to fifth, kept by the standings";
    else if (w >= 17) rank = "the middle of the table, where a season is won and lost in pencil";
    else if (w >= 12) rank = "the lower half, watched at the turnstiles with a season ticket's patience";
    else rank = "the drop, the three seats behind the drum the board does not enjoy striking";

    pointsOut.textContent = points + " points from 38 matchdays";
    placedOut.textContent = "The board places the club at " + rank + ".";
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    strike();
  });
})();

// The hammer itself
(function () {
  var btn = document.getElementById("hammerBtn");
  var note = document.getElementById("hammerNote");
  if (!btn || !note) return;

  var struck = 0;
  btn.addEventListener("click", function () {
    struck++;
    if (struck === 1) {
      note.textContent = "The hammer strikes: LOT 38, SOLD, 11:40, Gate C. The tunnel is short and the Society is patient.";
    } else if (struck === 2) {
      note.textContent = "Struck again, for the books. The caterer's line remains unsold, having no reserve price and no appetite either.";
    } else {
      note.textContent = "The hammer rests. The lot is sold; the president, as ever, is not.";
    }
  });
})();
