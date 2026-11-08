/* Kaitou Music Fan List — Thread No. 214 little stirrings */

(function () {
  "use strict";

  // A few bees drifting across the thread.
  var glyphs = ["\u{1F41D}", "\u25C6", "\u25C7"];
  for (var i = 0; i < 7; i++) {
    var bee = document.createElement("span");
    bee.className = "bee-fly";
    bee.textContent = glyphs[i % glyphs.length];
    bee.style.left = (5 + Math.random() * 88) + "vw";
    bee.style.top = (8 + Math.random() * 80) + "vh";
    bee.style.animationDuration = (2.4 + Math.random() * 3).toFixed(2) + "s";
    bee.style.opacity = (0.35 + Math.random() * 0.4).toFixed(2);
    bee.style.fontSize = (0.8 + Math.random() * 0.9).toFixed(2) + "rem";
    document.body.appendChild(bee);
    var dx = (Math.random() * 24 - 12).toFixed(1) + "vw";
    var dy = (Math.random() * 18 - 9).toFixed(1) + "vh";
    bee.style.transition = "left " + (26 + Math.random() * 20).toFixed(0) + "s linear, top " + (26 + Math.random() * 20).toFixed(0) + "s linear";
    (function (el, ddx, ddy) {
      setTimeout(function () {
        el.style.left = (parseFloat(el.style.left) + parseFloat(ddx)).toFixed(1) + "vw";
        el.style.top = (parseFloat(el.style.top) + parseFloat(ddy)).toFixed(1) + "vh";
      }, 1200);
    })(bee, dx, dy);
  }

  // The draft note on the pin board keeps a caret where the typist stopped.
  var pinned = document.getElementById("pinned");
  if (pinned) {
    var caret = document.createElement("span");
    caret.className = "caret";
    pinned.appendChild(caret);
  }
})();
