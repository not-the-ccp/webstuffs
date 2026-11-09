/* Field Notes on the Calculus — the tide instrument and the fan */

(function () {
  "use strict";

  /* ---- the turning tide: a curve, a moving point, its tangent ---- */

  var slider = document.getElementById("tide-slider");
  var dot = document.getElementById("tide-dot");
  var tangent = document.getElementById("tangent");
  var readout = document.getElementById("tide-readout");

  if (!slider || !dot || !tangent || !readout) return;

  // the tide curve, in screen coordinates: y = (u - 0.5)^2 * 120 + 40, x = 40 + 220u
  function px(u) { return 40 + 220 * u; }
  function py(u) { return (u - 0.5) * (u - 0.5) * 120 + 40; }
  function screenSlope(u) { return (240 * (u - 0.5)) / 220; }

  function render(u) {
    var x = px(u), y = py(u), m = screenSlope(u);
    dot.setAttribute("cx", x.toFixed(2));
    dot.setAttribute("cy", y.toFixed(2));
    // tangent, a half-unit each side in screen space, normalised
    var len = 110;
    var dx = len / 2 / Math.sqrt(1 + m * m);
    var dy = m * dx;
    tangent.setAttribute("x1", (x - dx).toFixed(2));
    tangent.setAttribute("y1", (y - dy).toFixed(2));
    tangent.setAttribute("x2", (x + dx).toFixed(2));
    tangent.setAttribute("y2", (y + dy).toFixed(2));

    // the slope in the field's own units: one tide-mark at the turn
    var s = 2 * (u - 0.5);
    var sign = s > 0.005 ? "+" : s < -0.005 ? "\u2212" : "";
    var note;
    if (Math.abs(s) < 0.06) {
      note = "the tide is flat, and the drum agrees";
    } else if (s > 0) {
      note = "the water is falling toward the turn";
    } else {
      note = "the water is rising, instantaneously, all along";
    }
    readout.textContent =
      "t = " + u.toFixed(2) +
      " \u00b7 tangent slope " + sign + Math.abs(s).toFixed(2) +
      " tide-marks \u00b7 " + note;
  }

  slider.addEventListener("input", function () {
    render(this.value / 100);
  });

  render(0.5);

  /* ---- the fan: click to check it; it is fixed, but the survey verifies ---- */

  var fan = document.getElementById("fan");
  if (fan) {
    var stopped = false;
    fan.style.cursor = "pointer";
    fan.title = "one fan (fixed); click to verify by tap";
    fan.addEventListener("click", function () {
      stopped = !stopped;
      fan.classList.toggle("off", stopped);
    });
  }
})();
