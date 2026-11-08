/* Question File No. 212 — a quiet touch for the ask desk.
   The ledger line, once the page has settled, ticks through the
   register as if it were being struck by the clerk's pen. Text
   stays fully readable without this script. */
(function () {
  "use strict";

  var line = document.querySelector(".ledgerqa");
  if (!line || !("IntersectionObserver" in window)) return;

  var done = false;

  function mark() {
    if (done) return;
    done = true;
    line.style.transition = "transform 600ms ease, box-shadow 600ms ease";
    line.style.transform = "rotate(0deg)";
    line.style.boxShadow = "9px 9px 0 rgba(122, 46, 46, 0.14)";
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        mark();
        observer.disconnect();
      }
    });
  }, { threshold: 0.35 });

  observer.observe(line);
})();
