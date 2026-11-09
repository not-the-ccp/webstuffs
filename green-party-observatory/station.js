// Park Street station: the dial's needle drifts slowly between
// FALLING and STEADY, as a slowly rising pressure allows.
(function () {
  var needle = document.querySelector(".dial-needle");
  if (!needle || !("requestAnimationFrame" in window)) return;

  var t = 0;
  function tick() {
    t += 0.008;
  // degrees from vertical, eased swing
  var deg = -22 + 16 * Math.sin(t);
  needle.setAttribute("transform", "rotate(" + deg.toFixed(2) + " 60 62)");
  requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();
