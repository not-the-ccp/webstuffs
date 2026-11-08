// The Asunción Ledger — letter reveal
(function () {
  var paras = Array.prototype.slice.call(document.querySelectorAll(".letter p"));

  if (!("IntersectionObserver" in window)) {
    paras.forEach(function (p) { p.classList.add("in"); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  paras.forEach(function (p, i) {
    p.style.transitionDelay = (i % 4) * 90 + "ms";
    io.observe(p);
  });
})();
