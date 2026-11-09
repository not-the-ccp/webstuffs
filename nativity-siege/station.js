// Nativity Gate Terminus — a small clockwork for the struck line.
// The train-dot runs the six-stop route once per siege-day (39s cycle).
(function () {
  var dot = document.getElementById("trainDot");
  if (dot) {
    dot.classList.add("running");
    dot.addEventListener("animationiteration", function () {
      // Each completed pass logs one clean round in the plate register.
      var rounds = parseInt(dot.dataset.rounds || "0", 10) + 1;
      dot.dataset.rounds = String(rounds);
    });
  }
})();
