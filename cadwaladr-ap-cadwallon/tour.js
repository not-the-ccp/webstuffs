/* The Cadwaladr Walk — pace bar, lit stops, dragon click. */
(function () {
  "use strict";

  var TOTAL_MILES = 19.4;
  var MILE_MARKS = [0, 2.9, 8.0, 11.7, 15.7, 17.5, 19.4];

  var fill = document.getElementById("paceFill");
  var milesEl = document.getElementById("paceMiles");
  var stopEl = document.getElementById("paceStop");
  var stops = Array.prototype.slice.call(document.querySelectorAll(".stop"));
  var dragon = document.getElementById("dragonSvg");

  function onScroll() {
    var doc = document.documentElement;
    var max = doc.scrollHeight - window.innerHeight;
    var p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    var miles = p * TOTAL_MILES;
    if (fill) fill.style.width = (p * 100).toFixed(1) + "%";
    if (milesEl) milesEl.textContent = miles.toFixed(1);

    var n = 0;
    for (var i = 0; i < MILE_MARKS.length; i++) {
      if (miles >= MILE_MARKS[i] - 0.05) n = i;
    }
    if (stopEl) stopEl.textContent = n === 0 ? "—" : n;

    var mid = window.innerHeight * 0.5;
    stops.forEach(function (s) {
      var r = s.getBoundingClientRect();
      if (r.top < mid && r.bottom > mid) {
        s.classList.add("lit");
        setTimeout(function () { s.classList.remove("lit"); }, 1500);
      }
    });
  }

  var ticking = false;
  window.addEventListener("scroll", function () {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(function () { onScroll(); ticking = false; });
    }
  }, { passive: true });
  onScroll();

  if (dragon) {
    var rumpus = false;
    dragon.addEventListener("click", function () {
      if (rumpus) return;
      rumpus = true;
      dragon.classList.add("rumpus");
      setTimeout(function () {
        dragon.classList.remove("rumpus");
        rumpus = false;
      }, 900);
    });
    var style = document.createElement("style");
    style.textContent =
      ".dragon.rumpus svg { animation: rumpus 0.9s ease; }" +
      "@keyframes rumpus { 0% { transform: scale(1); } 25% { transform: scale(1.25) rotate(-6deg); } 55% { transform: scale(1.05) rotate(5deg); } 100% { transform: scale(1); } }";
    document.head.appendChild(style);
  }
})();
