/* Lot 23 — a little hammer, and a little falling gold. */
(function () {
  "use strict";

  // Drifting diamond dust (the same dust that lights up in the grading lamp).
  var dust = document.querySelector(".dust");
  if (dust) {
    var FLAKES = 26;
    for (var i = 0; i < FLAKES; i++) {
      var f = document.createElement("i");
      f.style.left = (Math.random() * 100) + "vw";
      f.style.animationDuration = (7 + Math.random() * 12) + "s";
      f.style.animationDelay = (-Math.random() * 18) + "s";
      var s = 2 + Math.random() * 3;
      f.style.width = s + "px";
      f.style.height = s + "px";
      dust.appendChild(f);
    }
  }

  // The hammer is final.
  var gavel = document.getElementById("gavel");
  var sold = document.getElementById("sold");
  if (gavel && sold) {
    var strikes = 0;
    gavel.addEventListener("click", function () {
      strikes += 1;
      gavel.classList.remove("hammering");
      // force reflow so the animation can restart
      void gavel.offsetWidth;
      gavel.classList.add("hammering");
      if (strikes >= 3) {
        sold.classList.remove("show");
        void sold.offsetWidth;
        sold.classList.add("show");
        strikes = 0;
      }
    });
    sold.addEventListener("animationend", function () {
      sold.classList.remove("show");
    });
  }
})();
