// A quiet touch for the lantern: a slow breathing on top of the CSS flicker.
(function () {
  var lantern = document.getElementById("lantern");
  if (!lantern) return;
  var t = 0;
  function breathe() {
    t += 0.02;
    var s = 1 + 0.08 * Math.sin(t);
    lantern.style.transform = "scale(" + s.toFixed(3) + ")";
    requestAnimationFrame(breathe);
  }
  requestAnimationFrame(breathe);
})();
