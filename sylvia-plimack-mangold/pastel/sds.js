/* SDS PM-04 — let the sections settle into the room like dust in late light. */
(function () {
  "use strict";
  document.documentElement.classList.add("js");
  var secs = document.querySelectorAll(".sec");
  if (!("IntersectionObserver" in window)) {
    secs.forEach(function (s) { s.classList.add("settled"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("settled");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  secs.forEach(function (s) { io.observe(s); });
})();
