/* Quay script for Guidebook No. FR-1857 0643 — one long evening's dust */
(function () {
  "use strict";

  var night = document.querySelector(".night");
  if (!night) return;

  /* stars over the quay */
  var starsBox = document.getElementById("stars");
  if (starsBox) {
    for (var i = 0; i < 70; i++) {
      var s = document.createElement("span");
      s.className = "star";
      s.style.left = (Math.random() * 100).toFixed(2) + "%";
      s.style.top = (Math.random() * 100).toFixed(2) + "%";
      s.style.animationDelay = (Math.random() * 4).toFixed(2) + "s";
      var scale = 0.6 + Math.random() * 1.4;
      s.style.transform = "scale(" + scale.toFixed(2) + ")";
      starsBox.appendChild(s);
    }
  }

  /* orchid petals, one per street of the itinerary */
  var petalsBox = document.getElementById("petals");
  if (petalsBox) {
    for (var p = 0; p < 9; p++) {
      var petal = document.createElement("span");
      petal.className = "petal";
      petal.style.left = (Math.random() * 96 + 2).toFixed(1) + "%";
      petal.style.animationDuration = (14 + Math.random() * 18).toFixed(1) + "s";
      petal.style.animationDelay = (Math.random() * 20).toFixed(1) + "s";
      petal.style.opacity = (0.25 + Math.random() * 0.35).toFixed(2);
      petalsBox.appendChild(petal);
    }
  }

  /* the quay lamp: lit, one evening set; strike it and the evening holds */
  var lamp = document.getElementById("lamp");
  var state = document.getElementById("lampstate");
  var lit = true;

  function setLamp(on) {
    lit = on;
    if (lamp) lamp.classList.toggle("off", !on);
    document.body.classList.toggle("lights-out", !on);
    if (state) {
      state.textContent = on
        ? "Quay lamp: lit \u00b7 one evening set"
        : "Quay lamp: struck \u00b7 the evening holds the load";
    }
  }

  if (lamp) {
    lamp.addEventListener("click", function () { setLamp(!lit); });
    lamp.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setLamp(!lit);
      }
    });
  }
})();
