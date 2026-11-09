// Card sweep: each question card lights its top edge once when it scrolls into view.
(function () {
  var cards = document.querySelectorAll(".qa");
  if (!("IntersectionObserver" in window)) return;
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("lit");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.35 });
  cards.forEach(function (c) { obs.observe(c); });
})();
