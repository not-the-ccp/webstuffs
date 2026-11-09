/* The Griffith Walk — marks the current stop as the walker scrolls past it */
(function () {
  var stops = Array.prototype.slice.call(document.querySelectorAll(".stop"));
  if (!stops.length || !("IntersectionObserver" in window)) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        stops.forEach(function (s) { s.classList.remove("at-stop"); });
        entry.target.classList.add("at-stop");
      }
    });
  }, { threshold: 0.55 });

  stops.forEach(function (s) { observer.observe(s); });
})();
