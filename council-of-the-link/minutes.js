/* Council of the Single Link — minutes.js
   When the reader reaches Item 3 (the step that identifies the
   constraint), the sagging weak link in the header chain is
   found and set sound. Purely decorative; the minutes stand
   without it. */
(function () {
  "use strict";
  var weak = document.getElementById("weakened");
  if (!weak) return;

  var target = document.querySelector(".item:nth-of-type(3)");
  if (!("IntersectionObserver" in window) || !target) return;

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        weak.classList.add("found");
        io.disconnect();
      }
    });
  }, { threshold: 0.3 });

  io.observe(target);
})();
