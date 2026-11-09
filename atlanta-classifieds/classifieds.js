/* The Atlanta Ledger — Thursday Classifieds: press effects */
(function () {
  "use strict";

  var paper = document.querySelector(".paper");
  var press = document.getElementById("press");
  var stampWords = ["ATLANTA", "FULTON", "DEKALB", "1,000 FT", "BETA+", "529,110"];
  var i = 0;

  if (press && paper) {
    press.addEventListener("click", function () {
      paper.classList.remove("is-printing");
      // force reflow so the animation can restart
      void paper.offsetWidth;
      paper.classList.add("is-printing");

      var old = paper.querySelector(".stamp");
      if (old) old.remove();

      var stamp = document.createElement("div");
      stamp.className = "stamp";
      stamp.setAttribute("aria-hidden", "true");
      stamp.textContent = stampWords[i % stampWords.length];
      i += 1;
      paper.appendChild(stamp);
      setTimeout(function () { stamp.remove(); }, 1700);
    });
  }

  // The ticker keeps its own marquee via CSS; pause it while the sheet is pressed.
  var track = document.getElementById("ticker");
  if (paper && track) {
    paper.addEventListener("animationstart", function (e) {
      if (e.target === paper) track.style.animationPlayState = "paused";
    });
    paper.addEventListener("animationend", function (e) {
      if (e.target === paper) track.style.animationPlayState = "running";
    });
  }

  // Edition number matches the 2025 estimate; note it for the curious.
  document.querySelectorAll(".vol").forEach(function (el) {
    el.setAttribute("title", "Edition number fixed at the 2025 estimate: 529,110.");
  });
})();
