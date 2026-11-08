// Folio 31 — gentle rise-in for the question cards; text is fully readable without it.
(function () {
  var cards = document.querySelectorAll(".qa");
  if (!("IntersectionObserver" in window)) return;
  var seen = new WeakSet();
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting || seen.has(entry.target)) return;
      seen.add(entry.target);
      var el = entry.target;
      var index = Array.prototype.indexOf.call(cards, el);
      el.style.animationDelay = (index % 4) * 0.08 + "s";
      el.classList.add("fade-in");
      io.unobserve(el);
    });
  }, { threshold: 0.15 });
  cards.forEach(function (c) { io.observe(c); });
})();
