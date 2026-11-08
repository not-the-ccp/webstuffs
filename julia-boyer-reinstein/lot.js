// Catalogue D, Lot 214 — one quiet touch: the green slip settles
// into the catalogue when it scrolls into view, like a stamp drying.
(function () {
  var slip = document.getElementById("slip-line");
  if (!slip || !("IntersectionObserver" in window)) return;
  var seen = false;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && !seen) {
        seen = true;
        slip.classList.add("inked");
        io.disconnect();
      }
    });
  }, { threshold: 0.6 });
  io.observe(slip);
})();
