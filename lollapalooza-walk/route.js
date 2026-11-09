// Lollapalooza itinerary — mark the current stop as you scroll the route.
(function () {
  var stops = Array.prototype.slice.call(document.querySelectorAll(".stop"));
  if (!("IntersectionObserver" in window) || stops.length === 0) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        stops.forEach(function (s) { s.classList.remove("at"); });
        entry.target.classList.add("at");
      }
    });
  }, { rootMargin: "-40% 0px -40% 0px" });

  stops.forEach(function (s) { observer.observe(s); });
})();
