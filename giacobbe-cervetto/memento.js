/* Gentle reveal for the funeral sheet; text is fully readable without it. */
(function () {
  var sections = document.querySelectorAll("main section");
  if (!("IntersectionObserver" in window)) return;
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("lit");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  sections.forEach(function (s) { obs.observe(s); });
})();
