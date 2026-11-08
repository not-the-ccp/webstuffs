/* Seal of the Shed — one impression, not to be revised into a second. */
(function () {
  "use strict";
  var seal = document.getElementById("seal");
  var pron = document.getElementById("pron");
  if (!seal) return;
  var pressed = false;
  var lines = [
    "g: /dʒiː · in the east, what the school already calls it",
    "pressed once, 21 November 1999, between hoopings",
    "the seventh letter, facing the door, looking at the sea"
  ];
  seal.addEventListener("click", function () {
    seal.style.transform = "scale(0.92) rotate(-3deg)";
    setTimeout(function () {
      seal.style.transform = "";
    }, 140);
    pressed = !pressed;
    if (pron) {
      pron.textContent = pressed ? lines[1] : lines[0];
    }
  });
})();
