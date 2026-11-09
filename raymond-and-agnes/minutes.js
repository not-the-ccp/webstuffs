/* Small touches for the Council minutes page. The page is fully
   readable with scripts disabled; this only adds the chime line,
   the chamber clock, and a candle flicker on the seal. */
(function () {
  "use strict";

  // Brass chime line that follows the reading.
  var chime = document.createElement("div");
  chime.className = "chime-line";
  document.body.appendChild(chime);

  function paintChime() {
    var doc = document.documentElement;
    var max = doc.scrollHeight - window.innerHeight;
    var pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    chime.style.width = pct + "%";
  }
  window.addEventListener("scroll", paintChime, { passive: true });
  window.addEventListener("resize", paintChime);
  paintChime();

  // The chamber clock: the minutes were held at eight in the evening,
  // so the footer clock walks slowly from 8:00 to 11:00 as the page is read.
  var clock = document.getElementById("clock");
  if (clock) {
    var start = 8 * 60;       // 20:00
    var end = 11 * 60;        // 23:00
    function paintClock() {
      var doc = document.documentElement;
      var max = doc.scrollHeight - window.innerHeight;
      var t = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      var mins = Math.round(start + (end - start) * t);
      var h = Math.floor(mins / 60);
      var m = mins % 60;
      clock.textContent = "the hour given as " + h + (m ? ":" + String(m).padStart(2, "0") : " o'clock");
    }
    window.addEventListener("scroll", paintClock, { passive: true });
    paintClock();
  }

  // A candle flicker across the seal, driven by rAF but cheap: only the
  // filter brightness of one small SVG.
  var seal = document.querySelector(".seal-svg");
  if (seal && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var phase = 0;
    (function flicker(ts) {
      phase += 0.035;
      var glow = 0.92 + 0.08 * Math.sin(phase * 3.1) * Math.sin(phase * 1.7 + 2);
      seal.style.filter = "brightness(" + glow.toFixed(3) + ")";
      requestAnimationFrame(flicker);
    })(0);
  }
})();
