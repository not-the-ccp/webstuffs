// Midtown Madness — In Memoriam: small effects, all decorative.
// The page reads fully without any of this.

(function () {
  "use strict";

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Current year in the epitaph, so the range always reads true.
  var yearNow = document.getElementById("yearNow");
  if (yearNow) yearNow.textContent = String(new Date().getFullYear());

  // A speedometer that revs up as you scroll, then holds at the top
  // speed it ever managed — because this one finished its run.
  var speedo = document.getElementById("speedo");
  if (speedo && !reduce) {
    var shown = 0, top = 0, ticking = false;

    function paint() {
      ticking = false;
      speedo.textContent = shown + " mph";
    }

    function update() {
      var doc = document.documentElement;
      var max = Math.max(doc.scrollHeight - window.innerHeight, 1);
      var frac = Math.min(Math.max(window.scrollY / max, 0), 1);
      var target = Math.round(frac * 128); // top speed, mph, of the old demo
      shown += Math.ceil((target - shown) / 4 || 1);
      if (shown > top) top = shown;
      paint();
    }

    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
    update();
  } else if (speedo) {
    speedo.textContent = "128 mph";
  }

  // Blink the epitaph once the dispatch has been read — a courtesy light.
  var dispatch = document.querySelector(".entry--dispatch");
  if (dispatch && "IntersectionObserver" in window && !reduce) {
    new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          dispatch.classList.add("entry--dispatch--seen");
          e.target.classList.add("entry--dispatch--seen");
        }
      });
    }, { threshold: 0.5 }).observe(dispatch);
  }
})();
