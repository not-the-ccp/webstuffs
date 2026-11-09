/* The Line — ledger speed: sixteen frames per second, no drops. */
(function () {
  "use strict";
  var el = document.getElementById("frames");
  if (!el) return;

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var target = 0;
  var shown = 0;
  var timer = null;

  function step() {
    // sixteen frames per second, the speed the chancery keeps
    if (shown < target) {
      shown += 16;
      if (shown > target) shown = target;
      el.textContent = String(shown);
    } else {
      clearInterval(timer);
      timer = null;
    }
  }

  function countTo() {
    var rect = el.getBoundingClientRect();
    if (rect.bottom > window.innerHeight && rect.top < window.innerHeight) {
      target = 397 * 16; // every cover, counted at the ledger speed
      if (reduce) {
        shown = target;
        el.textContent = String(shown);
        return;
      }
      if (!timer) timer = setInterval(step, 2000 / 16);
    }
  }

  window.addEventListener("scroll", countTo, { passive: true });
  window.addEventListener("resize", countTo, { passive: true });
  window.addEventListener("load", countTo);

  // a small, quiet effect: the tally line settles when reached
  var tally = document.querySelector(".tally");
  if (tally) {
    tally.addEventListener("click", function () {
      tally.style.transform = "rotate(0deg)";
    }, { once: true });
  }
})();
