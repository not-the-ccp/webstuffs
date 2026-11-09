/* RP-47 — the disc turns while the liner notes are read on it. */
(function () {
  "use strict";
  var disc = document.getElementById("disc");
  if (!disc || !("IntersectionObserver" in window)) return;

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        disc.classList.add("spinning");
      } else {
        disc.classList.remove("spinning");
      }
    });
  }, { threshold: 0.4 });

  io.observe(disc);
})();
