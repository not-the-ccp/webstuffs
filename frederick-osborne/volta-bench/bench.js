// The Volta Bench — tank water, whale discipline, and the fourth glass

(function () {
  "use strict";

  // Tank water level: the slider is the tap at the end of the bench.
  var slider = document.getElementById("water-level");
  var readout = document.getElementById("water-readout");
  var water = document.getElementById("tank-water");
  var whale = document.getElementById("whale");

  function describe(cm) {
    if (cm >= 13.5) return cm.toFixed(1) + " cm — the whale's eye breaks the surface";
    if (cm >= 8) return cm.toFixed(1) + " cm — the whale rides low, stern to schooner still 41 cm";
    if (cm >= 4) return cm.toFixed(1) + " cm — refill from the fourth glass";
    if (cm > 0) return cm.toFixed(1) + " cm — the tank is at fault";
    return "0.0 cm — dry dock; the log records this and moves on";
  }

  function setLevel(cm) {
    var h = (cm / 14) * 78; // 78% of the tank at the full 14 cm
    if (water) water.style.height = h + "%";
    if (whale) whale.style.bottom = (8 + h * 0.45) + "%";
    if (readout) readout.textContent = describe(cm);
  }

  if (slider && readout) {
    slider.addEventListener("input", function () {
      setLevel(parseFloat(slider.value));
    });
    setLevel(parseFloat(slider.value));
  }

  // The whale keeps 41 cm. The page does the same on hover: it holds, then resumes.
  if (whale) {
    whale.style.cursor = "help";
    whale.addEventListener("mouseenter", function () {
      whale.style.animationPlayState = "paused";
    });
    whale.addEventListener("mouseleave", function () {
      whale.style.animationPlayState = "running";
    });
    whale.title = "41 cm off the stern, on waxed twine, do not improve.";
  }

  // A small clock for the verandah, kept the way the bench ledger keeps its entries.
  var entry37 = "9 December";
  var daysEl = document.createElement("div");
  daysEl.className = "tank-note";
  daysEl.id = "bench-days";
  var main = document.querySelector("main");
  if (main) {
    daysEl.textContent = "The water has been moving since " + entry37 +
      "; the log will say the rest.";
    main.appendChild(daysEl);
  }
})();
