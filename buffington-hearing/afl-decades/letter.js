/* Reading mark: a quiet elapsed-time in the corner, one frame at a time. */
(function () {
  var el = document.getElementById("timer");
  if (!el) return;
  var start = null;
  function tick(ts) {
    if (start === null) start = ts;
    var s = Math.floor((ts - start) / 1000);
    var m = Math.floor(s / 60);
    if (s >= 3) {
      el.textContent = "read " + m + ":" + String(s % 60).padStart(2, "0");
      el.classList.add("on");
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();
