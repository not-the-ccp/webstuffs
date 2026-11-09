/* State Border Answers Desk — Sheet No. 41: the desk rules its lines in. */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    // Rule the closing line across the foot of the sheet, the way the ledger rules its tally.
    var foot = document.getElementById("ft-rule");
    if (foot) {
      window.setTimeout(function () { foot.classList.add("ruled"); }, 600);
    }

    // A question, asked across the border, is ruled into the sheet, not the air:
    // clicking a heading shades the answer the colour of the cream plate.
    var qs = document.querySelectorAll(".q");
    qs.forEach(function (q) {
      var h = q.querySelector("h2");
      if (!h) { return; }
      h.style.cursor = "pointer";
      h.addEventListener("click", function () {
        q.classList.toggle("ruled-in");
      });
    });
  });
})();
