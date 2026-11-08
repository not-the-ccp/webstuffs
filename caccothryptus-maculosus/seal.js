/* Slowly draws the inner ring of the council seal, like a stamp being set. */
(function () {
  var ring = document.getElementById("sealring");
  if (!ring || !ring.getTotalLength) return;
  var len = ring.getTotalLength();
  ring.style.strokeWidth = "2";
  ring.style.strokeDasharray = len;
  ring.style.strokeDashoffset = len;
  ring.style.transition = "stroke-dashoffset 3.5s ease-out 0.4s";
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      ring.style.strokeDashoffset = "0";
    });
  });
})();
