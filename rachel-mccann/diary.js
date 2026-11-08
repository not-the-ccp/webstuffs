/* A little stopwatch: the date line quietly counts up to 52.84, the winning time. */
(function () {
  var dateLine = document.querySelector(".date-line");
  if (!dateLine) return;
  var target = 52.84, t0 = null, dur = 3200;
  var chip = document.createElement("span");
  chip.className = "stopwatch";
  chip.setAttribute("aria-hidden", "true");
  dateLine.appendChild(chip);
  chip.textContent = "  ·  0.00";
  function step(ts) {
    if (t0 === null) t0 = ts;
    var p = Math.min(1, (ts - t0) / dur);
    var eased = 1 - Math.pow(1 - p, 3);
    chip.textContent = "  ·  " + (target * eased).toFixed(2);
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
})();
