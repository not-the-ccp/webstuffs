/* Records Room · a gentle settle for the questions */
(function () {
  var sections = document.querySelectorAll(".qa section");
  if (!("IntersectionObserver" in window) || !sections.length) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.style.opacity = "1";
        e.target.style.transform = "none";
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  sections.forEach(function (s, i) {
    if (i > 0) {
      s.style.opacity = "0.35";
      s.style.transform = "translateY(8px)";
      s.style.transition = "opacity 600ms ease, transform 600ms ease";
      io.observe(s);
    }
  });
})();
