/* The Dobruja Courier — a small touch for the letter */
(function () {
  "use strict";

  var postmark = document.querySelector(".postmark-date");
  if (postmark) {
    var now = new Date();
    var months = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
    // The postmark keeps its printed date; only the year follows the reader.
    postmark.innerHTML = postmark.innerHTML.replace(/20\d\d/, String(now.getFullYear()));
  }

  // A faint ink line under the running text, as if the page were still drying.
  var seal = document.querySelector(".seal");
  if (seal) {
    seal.addEventListener("click", function () {
      seal.style.animation = "none";
      // force reflow, then re-press the seal
      void seal.offsetWidth;
      seal.style.animation = "";
    });
  }
})();
