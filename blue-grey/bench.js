/* Blue & Grey — the mixing bench: blends blue (#2e4a78) and grey (#6d6f72) */
(function () {
  "use strict";

  var BLUE = { r: 0x2e, g: 0x4a, b: 0x78 };
  var GREY = { r: 0x6d, g: 0x6f, b: 0x72 };

  var NAMES = [
    [10, "deep harbor blue"],
    [25, "midnight water"],
    [38, "wet slate"],
    [50, "overcast at dusk"],
    [62, "ash with cold in it"],
    [75, "spent grey"],
    [90, "ceiling grey"],
    [101, "pure grey"]
  ];

  var slider = document.getElementById("ratio");
  var swatch = document.getElementById("swatch");
  var partsBlue = document.getElementById("parts");
  var partsGrey = document.getElementById("parts-grey");
  var nameEl = document.getElementById("name");

  if (!slider || !swatch) return; // without the elements the page still reads

  function nameFor(bluePct) {
    for (var i = 0; i < NAMES.length; i++) {
      if (bluePct <= NAMES[i][0]) return NAMES[i][1];
    }
    return "pure grey";
  }

  function mix(bluePct) {
    var t = bluePct / 100;
    var r = Math.round(GREY.r + (BLUE.r - GREY.r) * t);
    var g = Math.round(GREY.g + (BLUE.g - GREY.g) * t);
    var b = Math.round(GREY.b + (BLUE.b - GREY.b) * t);
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }

  function update() {
    var bluePct = Number(slider.value);
    swatch.style.background = mix(bluePct);
    partsBlue.textContent = bluePct;
    partsGrey.textContent = 100 - bluePct;
    nameEl.textContent = nameFor(bluePct);
  }

  slider.addEventListener("input", update);
  update();
})();
