/* Route No. 4 — fills the walked chalk line and marks stops as passed. */
(function () {
  var route = document.getElementById("route");
  if (!route) return;
  var stops = Array.prototype.slice.call(route.querySelectorAll(".stop"));

  function fillLine() {
    var top = route.getBoundingClientRect().top + window.pageYOffset;
    var height = route.offsetHeight;
    var marker = window.scrollY + window.innerHeight * 0.55;
    var pct = (marker - top) / height;
    pct = Math.max(0, Math.min(1, pct));
    route.style.setProperty("--walked", (pct * 100).toFixed(2) + "%");
  }

  if ("IntersectionObserver" in window) {
    var seen = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) entry.target.classList.add("visited");
      });
    }, { threshold: 0.25 });
    stops.forEach(function (s) { seen.observe(s); });
  } else {
    stops.forEach(function (s) { s.classList.add("visited"); });
  }

  window.addEventListener("scroll", fillLine, { passive: true });
  window.addEventListener("resize", fillLine);
  fillLine();
})();
