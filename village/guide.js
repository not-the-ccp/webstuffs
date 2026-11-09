// Travel Guide, Entry No. 31 — the visitor book line appears when reached.
(function () {
  var line = document.querySelector("blockquote.book-line");
  if (!line) return;
  if (!("IntersectionObserver" in window)) {
    line.classList.add("read");
    return;
  }
  var shown = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        line.classList.add("read");
        shown.unobserve(line);
      }
    });
  }, { threshold: 0.4 });
  shown.observe(line);
})();
