/* The Deep Drawer — sonar.js
 * Marine snow + a depth gauge that descends as you read.
 * Decorative only; the placard is fully legible without it.
 */
(function () {
  "use strict";

  var reduced = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) return;

  /* ---- marine snow: drifting particulate ---- */
  var snow = document.getElementById("snow");
  if (snow) {
    var count = 42;
    for (var i = 0; i < count; i++) {
      var p = document.createElement("i");
      var size = 1 + Math.random() * 2.4;
      p.style.left = (Math.random() * 100).toFixed(2) + "vw";
      p.style.top = (Math.random() * 100).toFixed(2) + "vh";
      p.style.width = size + "px";
      p.style.height = size + "px";
      p.style.opacity = (0.15 + Math.random() * 0.4).toFixed(2);
      var dur = 26 + Math.random() * 50;
      p.style.animationDuration = dur.toFixed(1) + "s";
      p.style.animationDelay = (-Math.random() * dur).toFixed(1) + "s";
      snow.appendChild(p);
    }
  }

  /* ---- depth gauge: depth = scroll distance, in "metres" ---- */
  var gaugeVal = document.getElementById("gauge-val");
  var gauge = document.getElementById("gauge");
  if (gaugeVal && gauge) {
    var ticking = false;
    function paint() {
      ticking = false;
      var doc = document.documentElement;
      var max = Math.max(1, doc.scrollHeight - window.innerHeight);
      var frac = Math.min(1, Math.max(0, window.scrollY / max));
      /* bench to hadal floor: 0 m to 10,935 m */
      var metres = Math.round(frac * 10935);
      gaugeVal.textContent = metres.toLocaleString("en-GB") + " m";
      /* the deeper you read, the dimmer the gauge — then it pings back */
      var glow = 0.25 + 0.5 * (1 - frac);
      gauge.style.opacity = glow.toFixed(2);
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; requestAnimationFrame(paint); }
    }, { passive: true });
    window.addEventListener("resize", paint);
    paint();
  }

  /* ---- sonar echo on click: one blip at the cursor ---- */
  document.addEventListener("click", function (e) {
    var dot = document.createElement("span");
    dot.textContent = "";
    dot.style.cssText =
      "position:fixed;z-index:99;pointer-events:none;border-radius:50%;" +
      "border:1px solid rgba(89,242,214,0.8);width:8px;height:8px;" +
      "left:" + (e.clientX - 4) + "px;top:" + (e.clientY - 4) + "px;" +
      "transform:scale(1);opacity:0.9;transition:transform 0.9s ease-out,opacity 0.9s ease-out;";
    document.body.appendChild(dot);
    requestAnimationFrame(function () {
      dot.style.transform = "scale(9)";
      dot.style.opacity = "0";
    });
    setTimeout(function () { dot.remove(); }, 1000);
  });
})();
