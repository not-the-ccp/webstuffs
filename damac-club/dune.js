/* Damac Club — Guide No. 119: a small matchday wind */
(function () {
  var dune = document.querySelector(".dune");
  if (!dune) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    dune.style.animation = "none";
    return;
  }

  // A light gust: nudge the dunes when the visitor scrolls, then let them settle.
  var settling = false;
  window.addEventListener("scroll", function () {
    if (settling) return;
    settling = true;
    dune.style.transition = "transform 1.8s ease-out";
    dune.style.transform = "translateY(-8px)";
    setTimeout(function () {
      dune.style.transform = "translateY(0)";
      setTimeout(function () { dune.style.transition = ""; settling = false; }, 1800);
    }, 400);
  }, { passive: true });
})();
