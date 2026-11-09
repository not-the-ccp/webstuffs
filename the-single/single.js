// Aldergate & the Ravine — Guidebook Entry No. 7: The Single
// Turn the 45 over: A-side up, B-side down. No other machinery.
(function () {
  var disc = document.getElementById("disc");
  if (!disc) return;
  function flip() {
    disc.classList.toggle("flipped");
    disc.setAttribute("aria-pressed", disc.classList.contains("flipped") ? "true" : "false");
  }
  disc.addEventListener("click", flip);
  disc.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      flip();
    }
  });
})();
