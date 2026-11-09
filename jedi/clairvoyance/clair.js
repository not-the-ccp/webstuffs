/* Entry 433 — a little light in the sitting room */

(function () {
  "use strict";

  var reduce = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* scatter the stars */
  var field = document.getElementById("starfield");
  if (field) {
    var n = 70;
    var frag = document.createDocumentFragment();
    for (var i = 0; i < n; i++) {
      var s = document.createElement("span");
      s.className = "star";
      s.style.left = (Math.random() * 100).toFixed(2) + "%";
      s.style.top = (Math.random() * 100).toFixed(2) + "%";
      s.style.setProperty("--tw", (3 + Math.random() * 7).toFixed(2) + "s");
      s.style.setProperty("--td", (Math.random() * 8).toFixed(2) + "s");
      s.style.width = s.style.height = (1.5 + Math.random() * 2.5).toFixed(1) + "px";
      if (Math.random() < 0.25) s.style.background = "#57c7b8";
      frag.appendChild(s);
    }
    field.appendChild(frag);
  }

  /* the pupil follows the reader, but only when she is not looking at it */
  var pupil = document.querySelector(".pupil-bg");
  var iris = document.querySelector(".iris-bg");
  if (pupil && !reduce) {
    var cx = 100, cy = 60, tx = 0, ty = 0, px = 0, py = 0;
    window.addEventListener("mousemove", function (e) {
      tx = Math.max(-9, Math.min(9, (e.clientX / window.innerWidth - 0.5) * 22));
      ty = Math.max(-6, Math.min(6, (e.clientY / window.innerHeight - 0.5) * 14));
    }, { passive: true });
    (function step() {
      px += (tx - px) * 0.04;
      py += (ty - py) * 0.04;
      pupil.setAttribute("cx", (cx + px).toFixed(2));
      iris.setAttribute("cx", (cx + px * 0.6).toFixed(2));
      requestAnimationFrame(step);
    })();
  }

  /* the kept sentence, read once: it dims its own glow and is left to stand */
  var kept = document.querySelector(".kept");
  if (kept) {
    var seen = false;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && !seen) {
          seen = true;
          kept.style.transition = "box-shadow 2.5s ease, border-color 2.5s ease";
          kept.style.boxShadow = "0 0 8px rgba(216,166,63,0.05), 0 10px 30px rgba(0,0,0,0.4)";
          kept.style.borderColor = "rgba(216,166,63,0.25)";
          io.disconnect();
        }
      });
    }, { threshold: 0.5 });
    io.observe(kept);
  }
})();
