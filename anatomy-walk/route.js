// The Dissection Route — small touches only; the sheet reads without this.
(function () {
  "use strict";

  var year = document.getElementById("year");
  if (year) {
    year.textContent = "dry season " + new Date().getFullYear();
  }

  // Mark the walker's progress down the route: a dot appears on each
  // stop heading as it scrolls into view. Text is untouched.
  var stops = document.querySelectorAll(".stop-head");
  if (!stops.length || !("IntersectionObserver" in window)) { return; }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });

  stops.forEach(function (stop) { observer.observe(stop); });
})();
