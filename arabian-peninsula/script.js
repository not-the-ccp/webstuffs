// The Ledger of the Ground — a slow reveal, like sand settling
(function () {
  var els = document.querySelectorAll(".masthead, .item");
  if (!("IntersectionObserver" in window)) {
    els.forEach(function (el) { el.classList.add("revealed"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(function (el) { io.observe(el); });
})();
