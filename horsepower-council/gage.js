// The Council's Gage — horsepower to watts, as stated in the minutes.
(function () {
  var controls = document.getElementById("gauge-controls");
  var hpInput = document.getElementById("gauge-hp");
  var out = document.getElementById("gauge-w");
  if (!controls || !hpInput || !out) { return; }

  var wattsPer = 745.7;

  function render() {
    var value = parseFloat(hpInput.value);
    var watts = isFinite(value) ? value * wattsPer : NaN;
    out.textContent = isFinite(watts)
      ? watts.toLocaleString("en-US", { maximumFractionDigits: 2 }) + " W"
      : "\u2014";
  }

  controls.addEventListener("click", function (event) {
    var btn = event.target.closest("button[data-watts]");
    if (!btn) { return; }
    wattsPer = parseFloat(btn.getAttribute("data-watts"));
    controls.querySelectorAll("button").forEach(function (b) {
      b.classList.toggle("active", b === btn);
    });
    render();
  });

  hpInput.addEventListener("input", render);
  render();
})();
