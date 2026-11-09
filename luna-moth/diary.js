/* The Green Ledger — stars, drifting moths, and the line that follows the cursor */
(function () {
  "use strict";

  var reduced = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // --- stars ---
  var stars = document.getElementById("stars");
  if (stars) {
    var n = 70;
    for (var i = 0; i < n; i++) {
      var s = document.createElement("span");
      s.style.left = (Math.random() * 100).toFixed(2) + "vw";
      s.style.top = (Math.random() * 62).toFixed(2) + "vh";
      s.style.animationDelay = (Math.random() * 4).toFixed(2) + "s";
      s.style.animationDuration = (3 + Math.random() * 4).toFixed(2) + "s";
      var sz = Math.random() < 0.8 ? 2 : 3;
      s.style.width = sz + "px";
      s.style.height = sz + "px";
      stars.appendChild(s);
    }
  }

  // --- drifting moths ---
  var drift = document.getElementById("drift");
  if (drift && !reduced) {
    var glyphs = ["\u2750", "\u2735", "\u2736"];
    for (var m = 0; m < 7; m++) {
      var mo = document.createElement("span");
      mo.textContent = glyphs[m % glyphs.length];
      mo.style.top = (6 + Math.random() * 60).toFixed(1) + "vh";
      mo.style.fontSize = (11 + Math.random() * 10).toFixed(0) + "px";
      mo.style.animationDuration = (26 + Math.random() * 34).toFixed(0) + "s";
      mo.style.animationDelay = (-Math.random() * 40).toFixed(1) + "s";
      drift.appendChild(mo);
    }
  }

  // --- the line: a thin luminous trail, kept under the cursor ---
  var line = document.createElement("div");
  line.setAttribute("aria-hidden", "true");
  line.style.cssText =
    "position:fixed;left:0;top:0;width:2px;height:0;margin:-110px 0 0 -1px;" +
    "background:linear-gradient(180deg,transparent,#b8e05a 65%,#f4fbef);" +
    "box-shadow:0 0 8px rgba(184,224,90,0.7);pointer-events:none;z-index:3;" +
    "opacity:0;transition:opacity 0.6s;";
  document.body.appendChild(line);

  if (!reduced && window.matchMedia("(pointer:fine)").matches) {
    var y = 0, target = 0;
    document.addEventListener("mousemove", function (e) {
      target = e.clientY;
      if (line.style.opacity === "0") line.style.opacity = "0.55";
    });
    document.addEventListener("mouseleave", function () {
      line.style.opacity = "0";
    });
    (function tick() {
      y += (target - y) * 0.12;
      line.style.top = y + "px";
      requestAnimationFrame(tick);
    })();
  }
})();
