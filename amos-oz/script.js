// Amos Oz — Cause No. TA-3314/19. Verbatim record enhancements.
// Everything below is a layer on top of the record; the text stands without it.
(function () {
  "use strict";

  var verbatim = document.querySelector(".verbatim");
  var stamp = document.querySelector(".stamp");
  var seal = document.querySelector(".seal");

  if (verbatim) {
    // Blinking caret after the entry read into the record.
    var cursor = document.createElement("span");
    cursor.className = "cursor";
    cursor.setAttribute("aria-hidden", "true");
    verbatim.appendChild(cursor);
  }

  if (stamp) {
    // The FILED stamp drops into place once, then keeps its slow wiggle.
    setTimeout(function () {
      stamp.style.transition = "transform 0.9s cubic-bezier(0.17, 0.67, 0.83, 0.67)";
      stamp.style.transform = "rotate(-14deg) scale(1)";
    }, 300);
  }

  if (seal) {
    // The wax seal pulses gently when pressed.
    seal.addEventListener("mousedown", function () {
      seal.style.transform = "scale(0.94)";
    });
    seal.addEventListener("mouseup", function () {
      seal.style.transform = "scale(1)";
    });
    seal.addEventListener("mouseleave", function () {
      seal.style.transform = "scale(1)";
    });
  }
})();
