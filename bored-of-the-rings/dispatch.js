/* The Bored Dispatch — Letter No. 53
   Small mechanicals for the boathouse newsletter. The text stands without this. */
(function () {
  "use strict";

  /* seamless ticker: duplicate the strip so the -50% loop has no seam */
  var track = document.getElementById("ticker-track");
  if (track) track.innerHTML += track.innerHTML;

  /* the ring glows when touched, then remembers for a while */
  var ring = document.querySelector(".ring");
  if (ring) {
    var timeout = null;
    var touches = 0;
    ring.addEventListener("click", function () {
      ring.classList.add("lit");
      touches += 1;
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(function () {
        ring.classList.remove("lit");
        var cap = document.querySelector(".ring-caption");
        if (cap) {
          var n = document.getElementById("letter-no");
          var no = n ? n.textContent.trim() : "";
          cap.textContent = touches >= 3
            ? "Touched " + touches + " times this sitting. It glows. It will not answer, and Letter No. " + no + " declines to say why."
            : "The Ring, as rendered by the Club's engraver, Mr. D. Quibb, after the cover of the founding copy. Click it; it glows. It will not answer.";
        }
      }, 2600);
    });
  }

  /* sections rise as the tide comes in */
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && items.length) {
    var seen = new WeakSet();
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting && !seen.has(e.target)) {
          seen.add(e.target);
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }

  /* the letter number, if the post was late, counts up to where it is */
  var num = document.getElementById("letter-no");
  if (num && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var target = parseInt(num.textContent, 10) || 53;
    var t0 = null;
    function step(ts) {
      if (!t0) t0 = ts;
      var p = Math.min((ts - t0) / 1200, 1);
      num.textContent = String(Math.round(target * p));
      if (p < 1) requestAnimationFrame(step);
      else num.textContent = String(target);
    }
    requestAnimationFrame(step);
  }
})();
