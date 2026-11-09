/* Fare Guide No. 7 — mark the station the traveller is standing at */
(function () {
  var stations = Array.prototype.slice.call(document.querySelectorAll(".station"));
  if (!stations.length || !("IntersectionObserver" in window)) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      entry.target.classList.toggle("active", entry.isIntersecting);
    });
  }, { rootMargin: "-40% 0px -40% 0px", threshold: 0 });

  stations.forEach(function (s) { observer.observe(s); });
})();
