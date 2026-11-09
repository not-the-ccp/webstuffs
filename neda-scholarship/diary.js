// Ink-in reveal: paragraphs fade in as if being written.
(function () {
  var paras = document.querySelectorAll(".entry p");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) {
    paras.forEach(function (p) { p.classList.add("inked"); });
    return;
  }
  var i = 0;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("inked");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });
  paras.forEach(function (p) {
    p.style.transitionDelay = (i++ % 4) * 90 + "ms";
    io.observe(p);
  });
})();
