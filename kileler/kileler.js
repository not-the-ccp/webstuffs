/* The club's bee: a slow circuit of the page, never resting long. */
(function () {
  var bee = document.getElementById("bee");
  if (!bee) return;
  var t = 0;
  function place() {
    var w = window.innerWidth;
    var h = Math.max(window.innerHeight, document.body.scrollHeight);
    var x = -50 + (w + 100) * (0.5 + 0.48 * Math.cos(t * 0.21));
    var y = h * 0.08 + h * 0.05 * Math.sin(t * 0.53) + 20 * Math.sin(t * 1.3);
    var tilt = 14 * Math.sin(t * 0.21 + Math.PI / 2);
    bee.style.transform = "translate(" + x + "px, " + y + "px) rotate(" + tilt + "deg)";
  }
  function tick() {
    t += 0.016;
    place();
    requestAnimationFrame(tick);
  }
  place();
  requestAnimationFrame(tick);
})();
