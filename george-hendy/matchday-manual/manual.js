/* Field-office touch: clauses fade in as they come into view,
   like pages being filed. Text stays fully readable with JS off. */
(function () {
  var clauses = document.querySelectorAll(".clause");
  if (!("IntersectionObserver" in window)) return;
  clauses.forEach(function (c) {
    c.style.opacity = "0";
    c.style.transform = "translateY(8px)";
    c.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  });
  var seen = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.style.opacity = "1";
        e.target.style.transform = "none";
        seen.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  clauses.forEach(function (c) { seen.observe(c); });
})();
