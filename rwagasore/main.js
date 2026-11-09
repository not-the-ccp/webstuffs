/* Bujumbura, October 1961 — No. 61 — shelf effects */
(function () {
  "use strict";

  // Scroll-reveal for the prose blocks and cards.
  var revealables = document.querySelectorAll(".prose h2, .prose p, .card, .ledger-line");
  revealables.forEach(function (el) { el.classList.add("reveal"); });

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("shown");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealables.forEach(function (el) { io.observe(el); });
  } else {
    revealables.forEach(function (el) { el.classList.add("shown"); });
  }

  // The desk lamp: the set number flickers gently, always on, never out.
  var lamp = document.querySelector(".setno .no");
  if (lamp) {
    setInterval(function () {
      lamp.classList.toggle("flash");
    }, 2600);
  }

  // A running-mile counter in the colophon: the rail head, counting out.
  var small = document.querySelector(".colophon .small");
  if (small && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var base = small.textContent.replace(/\s*·\s*mile\s+\d+\.$/, "");
    var mile = 0;
    setInterval(function () {
      mile = (mile + 1) % 14; // fourteen days, running on
      small.textContent = base + " · mile " + mile + ".";
    }, 900);
  }
})();
