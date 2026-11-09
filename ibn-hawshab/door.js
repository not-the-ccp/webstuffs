// The mission door: a gentle sway on scroll, one knock's worth of patience.
(function () {
  var door = document.querySelector(".doorfig svg");
  if (!door) return;
  var ticking = false;
  window.addEventListener("scroll", function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var y = window.scrollY || 0;
      var angle = Math.sin(y / 140) * 1.2;
      door.style.transform = "rotate(" + angle + "deg)";
      door.style.transformOrigin = "50% 0%";
      ticking = false;
    });
  }, { passive: true });
})();
