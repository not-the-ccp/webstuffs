// Entry 41 — Plecotus auritus : the count's pace
(function () {
  "use strict";

  // Reveal the marginalia strip with a slow fade, once the page settles.
  var strip = document.querySelector(".side-strip");
  if (strip && "IntersectionObserver" in window) {
    strip.style.opacity = "0";
    strip.style.transition = "opacity 1.4s ease";
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          strip.style.opacity = "1";
          obs.disconnect();
        }
      });
    }, { threshold: 0.2 });
    obs.observe(strip);
  }

  // The red-ink ledge count: one, at one pace.
  var rows = document.querySelectorAll(".measure-row.highlight dd");
  rows.forEach(function (dd) {
    dd.addEventListener("mouseenter", function () {
      dd.style.color = "#f6c9bd";
    });
    dd.addEventListener("mouseleave", function () {
      dd.style.color = "";
    });
  });
})();
