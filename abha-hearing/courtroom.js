/* In re the ERR-114 Message — page fade as the record is read */
(function () {
  var pages = document.querySelectorAll(".page");
  if (!("IntersectionObserver" in window)) {
    pages.forEach(function (p) { p.classList.add("in-view"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("in-view");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  pages.forEach(function (p) { io.observe(p); });
})();
