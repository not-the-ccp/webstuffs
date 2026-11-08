/* The Pump & Polder — a small tide, for the mark on the brass staff.
   Purely decorative; the letter reads fine without it. */
(function () {
  var tide = document.getElementById("tide");
  if (!tide || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var t = 0;
  function frame() {
    t += 0.016;
    var x = Math.sin(t * 0.7) * 50; // -50 .. 50
    tide.style.transform = "translateX(" + x + "%)";
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
