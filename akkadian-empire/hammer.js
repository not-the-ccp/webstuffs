// Lot 12 — the hammer stays up until it is brought down.
(function () {
  var button = document.getElementById("hammer");
  var line = document.getElementById("hammer-line");
  if (!button || !line) return;

  var down = false;
  button.addEventListener("click", function () {
    down = !down;
    if (down) {
      line.textContent = "Hammer down: sold as a unit, to the bench at Fenn Court, at the estimate.";
    } else {
      line.textContent = "The hammer is up.";
    }
  });
})();
