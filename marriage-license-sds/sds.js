// MSD-55 — Section 8 illumination-differential calculator
(function () {
  var lux = document.getElementById("lux");
  var boredom = document.getElementById("boredom");
  var forms = document.getElementById("forms");
  var outLux = document.getElementById("lux-out");
  var outBoredom = document.getElementById("boredom-out");
  var outForms = document.getElementById("forms-out");
  var result = document.getElementById("result");
  if (!lux || !boredom || !forms || !result) return;

  function classFor(d) {
    if (d < 150) return ["I (nominal)", "eight-hour exposure, no breaks required"];
    if (d < 400) return ["II (moderate)", "two full sittings, one break of five minutes"];
    if (d < 800) return ["III (elevated)", "one full sitting, 20-minute breaks for the clerk alone"];
    return ["IV (severe)", "view from the window side only; the clerk may close his eyes"];
  }

  function update() {
    var l = Number(lux.value);
    var b = Number(boredom.value);
    var f = Number(forms.value);
    outLux.textContent = l;
    outBoredom.textContent = b;
    outForms.textContent = f;

    // The room's ambient light is held at a fixed 350 lux at the counter;
    // the differential is the window light minus that, nudged up by the
    // forms on the counter and down by whatever attention survives.
    var differential = Math.round((l - 350) * (1 + 0.03 * f) - 6 * b);
    if (differential < 0) differential = 0;
    var cls = classFor(differential);
    result.innerHTML =
      "Illumination differential: <strong>" + differential +
      "</strong> &rarr; Class " + cls[0] + ". Limit: " + cls[1] + ".";
  }

  [lux, boredom, forms].forEach(function (el) {
    el.addEventListener("input", update);
  });
  update();
})();
