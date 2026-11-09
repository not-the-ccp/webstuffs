/* Letter to the editor — the cider press arithmetic */

(function () {
  "use strict";

  // Double the ticker content so the loop seam is invisible.
  var track = document.getElementById("ticker-track");
  if (track) {
    track.innerHTML += track.innerHTML;
  }

  // Weigh the pulp, and juice, to the family.
  var form = document.getElementById("weigh-form");
  var covers = document.getElementById("covers");
  var outLitres = document.getElementById("out-litres");
  var outGlasses = document.getElementById("out-glasses");

  function runPress() {
    var n = parseInt(covers.value, 10);
    if (!isFinite(n) || n < 1) n = 1;
    if (n > 5000) n = 5000;
    var litres = (n * 0.21).toFixed(1); // one weigh-out of pulp per glass, pressed
    outLitres.textContent = litres + " L from the press";
    outGlasses.textContent = n.toLocaleString() + " glasses, none wasted";
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      runPress();
    });
    runPress();
  }

  // A tap on the misfiled line re-inks it, the way the ledger re-inks a page.
  var line = document.getElementById("recipe-line");
  if (line) {
    line.addEventListener("click", function () {
      line.style.transition = "none";
      line.style.opacity = "0.35";
      window.setTimeout(function () {
        line.style.transition = "opacity 0.5s ease";
        line.style.opacity = "1";
      }, 120);
    });
  }
})();
