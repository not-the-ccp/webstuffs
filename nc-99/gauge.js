// Field Manual FM-229, Chapter 14 — milepost gauge for NC 99.
// Reads the same station table as Section 14.3.

(function () {
  "use strict";

  var TOTAL = 17.4;

  var stations = [
    { mile: 0.0,  name: "NC 92 / NC 306, east of Bath" },
    { mile: 3.1,  name: "Hyde / Washington County line" },
    { mile: 8.4,  name: "Belhaven" },
    { mile: 12.9, name: "Washington / Beaufort County line" },
    { mile: 14.6, name: "Pantego" },
    { mile: 17.4, name: "NC 32 / NC 45, south of Plymouth" }
  ];

  function countyAt(m) {
    if (m < 3.1) return "Hyde";
    if (m <= 8.4) return m < 8.4 ? "Hyde / Washington" : "Hyde / Washington";
    if (m < 12.9) return "Washington";
    return "Beaufort";
  }

  function nearest(m) {
    var best = stations[0], gap = Math.abs(m - best.mile);
    for (var i = 1; i < stations.length; i++) {
      var g = Math.abs(m - stations[i].mile);
      if (g < gap) { best = stations[i]; gap = g; }
    }
    return best;
  }

  function nextPeg(m) {
    for (var i = 0; i < stations.length; i++) {
      if (stations[i].mile > m + 0.001) return stations[i];
    }
    return null;
  }

  var slider = document.getElementById("milepost");
  var fill = document.getElementById("gaugeFill");
  var outPos = document.getElementById("outPos");
  var outCounty = document.getElementById("outCounty");
  var outStation = document.getElementById("outStation");
  var outPeg = document.getElementById("outPeg");

  function fmt(m) {
    return (Math.round(m * 10) / 10).toFixed(1);
  }

  function render() {
    var m = parseFloat(slider.value);
    fill.style.width = (m / TOTAL * 100) + "%";
    outPos.textContent = fmt(m) + " mi east of Bath";
    outCounty.textContent = countyAt(m);
    var near = nearest(m);
    outStation.textContent = near.name + " (" + fmt(near.mile) + ")";
    var peg = nextPeg(m);
    outPeg.textContent = peg
      ? fmt(peg.mile) + " — " + peg.name
      : "None set — the bearing ends at 17.4";
  }

  slider.addEventListener("input", render);
  render();
})();
