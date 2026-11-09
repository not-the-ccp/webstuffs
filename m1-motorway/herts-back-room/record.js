/* record.js — The Back Room at Watford, Claim No. HX-2025-0063
   Small touches for the verbatim record: the clock in the footer keeps
   counting up from the pen-down time of 13:22, and the margin note
   cycles through the exhibits as the court would. Text is fully
   readable without this script. */
(function () {
  "use strict";

  // —— record clock: 13:22:00 and counting ——
  var clockEl = document.getElementById("record-time");
  if (clockEl) {
    var seconds = 13 * 3600 + 22 * 60;
    var pad = function (n) { return (n < 10 ? "0" : "") + n; };
    var tick = function () {
      seconds += 1;
      var h = Math.floor(seconds / 3600) % 24;
      var m = Math.floor(seconds / 60) % 60;
      var s = seconds % 60;
      clockEl.textContent = pad(h) + ":" + pad(m) + ":" + pad(s);
    };
    setInterval(tick, 1000);
  }

  // —— margin note: the exhibits, in order ——
  var noteEl = document.getElementById("mn-line");
  if (noteEl) {
    var exhibits = [
      "Exhibit 7 photographed in place; chalk not disturbed.",
      "Exhibit 12, the old folio, filed from the etiquette chapter.",
      "Exhibit 7A, the sister board from the north end of the M1.",
      "Exhibit 15, the ribbon of beetroot, returned to the plaintiff.",
      "The paste was not eaten. The circle turned.",
      "Exhibit 7 read back to the court: uncorrected, and so it stands."
    ];
    var i = 0;
    setInterval(function () {
      i = (i + 1) % exhibits.length;
      noteEl.style.opacity = 0;
      setTimeout(function () {
        noteEl.textContent = exhibits[i];
        noteEl.style.opacity = 1;
      }, 350);
    }, 6000);
    if (noteEl) noteEl.style.transition = "opacity 0.35s ease";
  }
})();
