/* The Last Yellow Head — feather drift, trail marker, stop glow */
(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* --- drifting feathers (inline SVG) --- */
  if (!reduce) {
    var field = document.getElementById("feather-field");
    var palettes = [
      { fill: "#f2c437", rim: "#d95b2b" }, // yellow head
      { fill: "#6fae5e", rim: "#3f7a4d" }, // body green
      { fill: "#e9dcc4", rim: "#4a3220" }  // pale / bark
    ];
    var N = 14;
    for (var i = 0; i < N; i++) {
      var p = palettes[i % palettes.length];
      var w = 10 + Math.random() * 14;
      var h = w * 2.4;
      var svg =
        '<svg class="feather" width="' + w.toFixed(1) + '" height="' + h.toFixed(1) + '" viewBox="0 0 12 28" ' +
        'style="left:' + (Math.random() * 96).toFixed(1) + '%; animation-duration:' + (9 + Math.random() * 12).toFixed(1) + 's; animation-delay:' + (-Math.random() * 18).toFixed(1) + 's;">' +
        '<path d="M6 1 C10 6 11 13 9 19 C8 23 7 25 6 27 C5 25 4 23 3 19 C1 13 2 6 6 1 Z" fill="' + p.fill + '" opacity="0.8"/>' +
        '<path d="M6 2 L6 26" stroke="' + p.rim + '" stroke-width="0.7" opacity="0.7"/>' +
        '</svg>';
      field.insertAdjacentHTML("beforeend", svg);
    }
  }

  /* --- trail head follows scroll --- */
  var head = document.getElementById("trail-head");
  if (head) {
    var trail = head.parentElement;
    function place() {
      var doc = document.documentElement;
      var max = doc.scrollHeight - window.innerHeight;
      var frac = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      head.style.top = (frac * (trail.offsetHeight - 14)).toFixed(1) + "px";
    }
    window.addEventListener("scroll", place, { passive: true });
    window.addEventListener("resize", place);
    place();
  }

  /* --- glow the stop in view --- */
  var stops = Array.prototype.slice.call(document.querySelectorAll(".stop"));
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        e.target.classList.toggle("in-view", e.isIntersecting);
      });
    }, { threshold: 0.35 });
    stops.forEach(function (s) { io.observe(s); });
  } else {
    stops.forEach(function (s) { s.classList.add("in-view"); });
  }
})();
