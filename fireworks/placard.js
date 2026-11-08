// Placard No. 47 — a single restrained touch: the accession register line
// darkens slowly when the case is first in view, as if the light were turned down.
(function () {
  var el = document.querySelector("main p em");
  if (!el || !("IntersectionObserver" in window)) return;
  var seen = false;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && !seen) {
        seen = true;
        el.style.transition = "color 2.4s ease";
        el.style.color = "#23201a";
        io.disconnect();
      }
    });
  }, { threshold: 0.6 });
  io.observe(el);
})();
