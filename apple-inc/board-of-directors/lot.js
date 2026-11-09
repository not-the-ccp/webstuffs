// Lot 42 — the estimate settles, like the hammer.
(function () {
  var el = document.getElementById("estimate");
  if (!el || !("requestAnimationFrame" in window)) return;
  el.style.opacity = "0";
  el.style.transition = "opacity 1.4s ease, color 1.4s ease";
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      el.style.opacity = "1";
      setTimeout(function () { el.classList.add("settled"); }, 1400);
    });
  });
})();
