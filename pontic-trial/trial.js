/* Case No. 21 — the desk, the clock, and the gavel. The text stands without this file. */
(function () {
  "use strict";

  // Docket clock: the sitting runs from 10:14 a.m. forward, one minute per five seconds.
  var hourEl = document.getElementById("hour");
  if (hourEl) {
    var startMin = 10 * 60 + 14; // 10:14
    var min = startMin;
    setInterval(function () {
      min += 1;
      var h = Math.floor(min / 60) % 12 || 12;
      var m = String(min % 60).padStart(2, "0");
      var meridiem = h < 12 ? "a.m." : "p.m.";
      hourEl.textContent = "Folio 1 · " + h + ":" + m + " " + meridiem + " · the clock keeps the sitting";
    }, 5000);
  }

  // Gavel: strikes the desk. The transcript does not depend on the count.
  var btn = document.getElementById("gavelBtn");
  var count = document.getElementById("gavelCount");
  var sheet = document.querySelector(".sheet");
  var n = 0;
  if (btn && count) {
    btn.addEventListener("click", function () {
      n += 1;
      count.textContent =
        n === 1
          ? "the desk has been struck once"
          : n === 2
            ? "the desk has been struck twice, as the clerk struck it at the opening"
            : "the desk has been struck " + n + " times; the court tolerates no more than the record requires";
      if (sheet) {
        sheet.classList.remove("shake");
        // force reflow so the animation may restart
        void sheet.offsetWidth;
        sheet.classList.add("shake");
      }
    });
  }
})();
