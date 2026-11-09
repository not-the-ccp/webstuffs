/* Broadmoor estates office — file 41/7
   Drifting archive dust and a patient letterhead. */

(function () {
  "use strict";

  // Drifting dust motes over the heath.
  var dust = document.querySelector(".dust");
  if (dust) {
    var COUNT = 26;
    for (var i = 0; i < COUNT; i++) {
      var mote = document.createElement("span");
      mote.className = "mote";
      var size = 2 + Math.random() * 4;
      mote.style.width = size + "px";
      mote.style.height = size + "px";
      mote.style.left = (Math.random() * 100) + "vw";
      mote.style.animationDuration = (14 + Math.random() * 22) + "s";
      mote.style.animationDelay = (-Math.random() * 30) + "s";
      mote.style.opacity = (0.25 + Math.random() * 0.5).toFixed(2);
      dust.appendChild(mote);
    }
  }

  // The letterhead slowly condenses mist when the page sits still,
  // and the battlements answer with a faint light.
  var crenel = document.querySelector(".crenel.top svg path");
  var still = 0;
  if (crenel) {
    var target = 1, level = 1, moving = true;
    window.addEventListener("pointermove", function () {
      target = 0;
      moving = true;
    });
    setInterval(function () {
      if (moving) {
        level += (target - level) * 0.08;
        crenel.style.filter = "brightness(" + (0.9 + level * 0.3).toFixed(3) + ")";
        if (Math.abs(level - target) < 0.01) moving = false;
      } else {
        still = (still + 1) % 120;
        crenel.style.filter = "brightness(" + (1.2 + Math.sin(still * 0.05) * 0.12).toFixed(3) + ")";
      }
    }, 50);
  }

  // The seal remembers being clicked: a soft thump and a re-stamp.
  var seal = document.getElementById("seal");
  if (seal) {
    seal.style.cursor = "pointer";
    seal.setAttribute("tabindex", "0");
    function restamp() {
      seal.style.animation = "none";
      // force reflow so the animation can replay
      void seal.offsetWidth;
      seal.style.animation = "";
    }
    seal.addEventListener("click", restamp);
    seal.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        restamp();
      }
    });
  }
})();
