/* Lot 2364 — the rood stand: paints the board frame and runs the hammer. */
(function () {
  "use strict";

  // Paint the 64 squares of the fixed board frame behind the sheet.
  var wrap = document.getElementById("squares");
  if (wrap) {
    var frag = document.createDocumentFragment();
    for (var r = 0; r < 8; r++) {
      for (var c = 0; c < 8; c++) {
        var sq = document.createElement("i");
        if ((r + c) % 2 === 1) sq.className = "dark";
        frag.appendChild(sq);
      }
    }
    wrap.appendChild(frag);
  }

  // The hammer climbs in bids of one hundred and forty, from the
  // bottom of the estimate, and falls at the rating of record.
  var el = document.getElementById("hammer");
  if (!el) return;

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var target = 23640;
  var fmt = function (n) { return "\u20AC" + n.toLocaleString("en-GB"); };

  if (reduce) {
    el.textContent = fmt(target);
    el.classList.add("fallen");
    return;
  }

  var bids = [
    12000, 12140, 12280, 12560, 12840, 13120, 13540,
    14020, 14600, 15180, 15760, 16480, 17200, 18060,
    18920, 19780, 20740, 21500, 22260, 22800, 23180,
    23400, 23640
  ];
  var i = 0;
  var step = function () {
    el.textContent = fmt(bids[i]);
    i += 1;
    if (i < bids.length) {
      // the pace quickens as the paddles rise
      var gap = i < 8 ? 700 : i < 16 ? 520 : i < 21 ? 420 : 260;
      setTimeout(step, gap);
    } else {
      el.classList.add("fallen");
    }
  };
  // the count stands open for a moment before the first paddle
  setTimeout(step, 900);
})();
