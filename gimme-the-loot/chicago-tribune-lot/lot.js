/* Lot 21 — The Chicago Tribune · catalogue effects */
(function () {
  "use strict";

  // The morning edition never stops: a live count of copies off the presses.
  var countEl = document.getElementById("edition-count");
  if (countEl) {
    var copies = 1224907;
    setInterval(function () {
      copies += 1 + Math.floor(Math.random() * 7);
      countEl.textContent = copies.toLocaleString("en-US");
    }, 1800);
  }

  // The lot number ticks over from the previous lot, as the book is opened.
  var numEl = document.getElementById("lot-num");
  if (numEl) {
    var n = 15;
    var tick = setInterval(function () {
      numEl.textContent = String(n);
      if (n >= 21) {
        clearInterval(tick);
        numEl.textContent = "21";
        numEl.style.transition = "transform 0.4s ease, color 0.4s ease";
        numEl.style.transform = "scale(1.15)";
        numEl.style.color = "#8a2f22";
        setTimeout(function () { numEl.style.transform = "scale(1)"; }, 400);
      } else {
        n += 1;
      }
    }, 160);
  }

  // Re-thump the SOLD stamp on click, in case the buyer wants to hear it again.
  var stamp = document.getElementById("sold-stamp");
  if (stamp) {
    stamp.style.cursor = "pointer";
    stamp.addEventListener("click", function () {
      stamp.style.animation = "none";
      // force reflow so the animation can replay
      void stamp.offsetWidth;
      stamp.style.animation = "thump 0.5s ease-out forwards";
    });
  }
})();
