/* The Delta Ledger — one line at a time on the wire */
(function () {
  "use strict";

  var lines = [
    "Naval stores confirms: the best are from a cask near by. No further comment.",
    "The 334,500th line is held for the memorial. No flowers. Nothing.",
    "Seu Benedito will not answer whistles, but he answers rope, on rotation.",
    "The sandal remains on the shelf. The shelf says nothing.",
    "The square takes one at a time, from 10 June. The rope takes no bribes.",
    "The fare from São Luís is unchanged. The delta is the only honest form of transport.",
    "The club has voted a third time to keep the question open. The mouth, not the rock."
  ];

  var wire = document.getElementById("wire");
  var btn = document.getElementById("wireBtn");
  if (!wire || !btn) return;

  var i = 0;
  btn.addEventListener("click", function () {
    wire.textContent = "— " + lines[i % lines.length] + " —";
    i++;
    wire.classList.remove("fresh");
    // restart the animation
    void wire.offsetWidth;
    wire.classList.add("fresh");
  });
})();
