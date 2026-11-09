/* Chapter 11 · pump vacuum gauge — runs on load, no text depends on it */
(function () {
  var needle = document.getElementById("needle");
  var read = document.getElementById("vac");
  if (!needle || !read) return;

  var target = 30.0;   // inHg
  var duration = 2400; // ms
  var start = null;

  function frame(ts) {
    if (start === null) start = ts;
    var p = Math.min((ts - start) / duration, 1);
    var eased = 1 - Math.pow(1 - p, 3);
    var v = target * eased;
    // needle sweeps from -70deg (zero, left) to +70deg (full scale, right)
    var angle = -70 + 140 * eased;
    needle.style.transform = "translate(-50%, -100%) rotate(" + angle + "deg)";
    read.textContent = v.toFixed(1);
    if (p < 1) requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
})();
