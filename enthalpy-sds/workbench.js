// Work bench for SDS H-1, Section 3: W = Pext * dV at the standard pressure.
(function () {
  "use strict";
  var Pext = 100; // kPa
  var slider = document.getElementById("dv");
  var dvOut = document.getElementById("dvval");
  var wOut = document.getElementById("wval");
  if (!slider || !dvOut || !wOut) return;

  function update() {
    var dv = parseFloat(slider.value);
    var w = (Pext * dv) / 1000; // kPa * L = kJ
    dvOut.textContent = dv.toFixed(1);
    wOut.textContent = w.toFixed(2);
  }

  slider.addEventListener("input", update);
  update();
})();
