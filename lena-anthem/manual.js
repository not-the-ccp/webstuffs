/* Malmö Sound Section — FM-04/11, Chapter 7
   Conscience Register meter: tallies the Declaration Ledger (7.4)
   against entry FA-11. No ticket counter, no paywall, no premium altitude. */
(function () {
  "use strict";

  var boxes = document.querySelectorAll(".declaration-block .decl");
  if (!boxes.length) return;

  var meter = document.createElement("div");
  meter.className = "conscience-meter";
  meter.setAttribute("aria-live", "polite");

  var label = document.createElement("p");
  label.style.margin = "0";
  var bar = document.createElement("div");
  bar.className = "meter-bar";
  var fill = document.createElement("div");
  fill.className = "meter-fill";
  bar.appendChild(fill);
  meter.appendChild(label);
  meter.appendChild(bar);
  document.body.appendChild(meter);

  var neon = document.getElementById("neon-line");

  function update() {
    var done = 0;
    boxes.forEach(function (b) { if (b.checked) done++; });
    var total = boxes.length;
    var pct = Math.round((done / total) * 100);
    fill.style.width = pct + "%";
    label.textContent = "CONSCIENCE REGISTER · FA-11";
    label.appendChild(document.createElement("br"));
    label.appendChild(document.createTextNode(
      done + " / " + total + " declarations sung" + (pct === 100 ? " — VERIFIED" : "")
    ));
    if (neon) {
      neon.style.animationPlayState = pct === 100 ? "running" : "running";
      neon.innerHTML = pct === 100
        ? "DANSA I NEON — VERIFIED"
        : "DANSA I NEON — STILL ON";
    }
  }

  boxes.forEach(function (b) {
    b.addEventListener("change", update);
  });

  update();
})();
