/* trail.js — the cartridge lamp on the switch flap */
(function () {
  "use strict";
  var header = document.querySelector(".guide-header h1");
  if (!header) return;
  var lamp = document.createElement("span");
  lamp.className = "cartridge-blink";
  lamp.textContent = " \u25A0";
  lamp.title = "ready to load";
  header.appendChild(lamp);
  var lit = true;
  setInterval(function () {
    lit = !lit;
    lamp.style.opacity = lit ? "1" : "0.25";
  }, 900);
})();
