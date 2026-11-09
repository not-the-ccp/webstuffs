/* The Roost & the Creed — the seal keeps strict 3/4.
   The cross on the wax seal pulses, one, two, three, and nothing rushes. */
(function () {
  var seal = document.getElementById("seal");
  if (!seal) return;
  var beat = 0;
  setInterval(function () {
    beat = (beat + 1) % 4;
    if (beat === 3) {
      seal.style.transition = "none";
      seal.style.transform = "scale(1)";
    } else {
      seal.style.transition = "transform 0.18s ease-out";
      seal.style.transform = "scale(" + (beat === 0 ? 1.12 : 1.05) + ")";
    }
  }, 600);

  var line = document.getElementById("track-line");
  if (line) {
    line.addEventListener("click", function () {
      line.style.transition = "background 0.4s";
      line.style.background = "#e2d2ac";
      setTimeout(function () { line.style.background = ""; }, 600);
    });
  }
})();
