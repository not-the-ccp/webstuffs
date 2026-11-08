// The Celestial Empire — a quiet highlight as the brochure is read.
(function () {
  var sections = Array.prototype.slice.call(document.querySelectorAll(".brochure .entry"));
  if (!("IntersectionObserver" in window) || !sections.length) return;
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        sections.forEach(function (s) { s.classList.remove("lit"); });
        entry.target.classList.add("lit");
      }
    });
  }, { rootMargin: "-40% 0px -40% 0px", threshold: 0 });
  sections.forEach(function (s) { observer.observe(s); });
})();
