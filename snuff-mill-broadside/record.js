/* Docket script for The Queen v. Vale, B-1974/03.
   All decorative; the record is fully readable without it. */

(function () {
  "use strict";

  // Starfield: scatter a few hundred white specks behind the record.
  var field = document.getElementById("starfield");
  if (field && !window.__starfieldDone) {
    var stars = 140;
    var frag = document.createDocumentFragment();
    for (var i = 0; i < stars; i++) {
      var s = document.createElement("i");
      s.style.left = (Math.random() * 100).toFixed(2) + "%";
      s.style.top = (Math.random() * 100).toFixed(2) + "%";
      s.style.opacity = (0.3 + Math.random() * 0.7).toFixed(2);
      frag.appendChild(s);
    }
    field.appendChild(frag);
    window.__starfieldDone = true;
  }

  // Visitor counter: opens at the last count on file and ticks on its own,
  // the way the desk says it does.
  var counter = document.getElementById("counter");
  if (counter) {
    var n = 4821;
    function paint() {
      counter.textContent = String(n).padStart(6, "0");
    }
    paint();
    setInterval(function () {
      n += 1;
      paint();
    }, 9000);
  }
})();
