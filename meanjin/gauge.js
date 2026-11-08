// MEANJIN — the river gauge.
// Click the seal and the needle moves: Fair -> Risen -> Under the Wall -> Fair.
(function () {
  var states = ["Fair", "Risen", "Under the Wall"];
  var i = 0;
  var readout = document.getElementById("gauge-read");
  var seal = document.getElementById("seal");
  if (!readout || !seal) return;

  seal.style.cursor = "pointer";
  seal.title = "Set the river gauge";

  seal.addEventListener("click", function () {
    i = (i + 1) % states.length;
    readout.textContent = states[i];
    readout.style.color =
      i === 0 ? "#1e5c3a" : i === 1 ? "#a64b23" : "#9c2b1e";
    seal.classList.remove("tick");
    void seal.offsetWidth; // restart the animation
    seal.classList.add("tick");
  });
})();
