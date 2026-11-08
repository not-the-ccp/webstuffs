// Chapter 12 — scale readout and pre-entry checklist
(function () {
  "use strict";

  var scale = document.getElementById("scale");
  var value = document.getElementById("scale-value");
  var caption = document.getElementById("scale-caption");

  var stops = [
    [1, "a few atoms across; the regime where tunneling is the only honest word"],
    [3, "a small virus capsid, a DNA helix lying on its side"],
    [10, "a quantum dot turning red as it shrinks; three in ten atoms on the surface"],
    [20, "a gold cluster going red instead of yellow"],
    [40, "a long protein, a guide RNA stretched out on the deck"],
    [80, "the edge of the range; a virus that can be argued about at a checkpoint"],
    [100, "the outer boundary of the chapter; beyond this, the lumps you know"]
  ];

  function describe(nm) {
    var best = stops[0];
    for (var i = 0; i < stops.length; i++) {
      if (nm >= stops[i][0]) best = stops[i];
    }
    return best[1];
  }

  if (scale && value && caption) {
    scale.addEventListener("input", function () {
      value.textContent = scale.value;
      caption.textContent = describe(parseInt(scale.value, 10));
    });
  }

  var items = document.querySelectorAll("#checklist li");
  for (var j = 0; j < items.length; j++) {
    items[j].addEventListener("click", function () {
      this.classList.toggle("done");
    });
  }
})();
