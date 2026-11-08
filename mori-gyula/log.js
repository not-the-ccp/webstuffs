// Log stamp: mark each SDS section "filed" as it enters view.
(function () {
  var sections = document.querySelectorAll(".sds");
  if (!("IntersectionObserver" in window)) {
    sections.forEach(function (s) { s.classList.add("filed"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("filed");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  sections.forEach(function (s) { io.observe(s); });
})();
