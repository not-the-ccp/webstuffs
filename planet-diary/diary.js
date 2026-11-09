(function () {
  "use strict";

  var PLANETS = [
    { name: "Mercury", au: 0.39 },
    { name: "Venus", au: 0.72 },
    { name: "Earth", au: 1.0 },
    { name: "Mars", au: 1.52 },
    { name: "Jupiter", au: 4.84 },
    { name: "Saturn", au: 9.58 },
    { name: "Uranus", au: 19.2 },
    { name: "Neptune", au: 30.05 }
  ];

  function periodYears(au) {
    return Math.pow(au, 1.5);
  }

  function compare(au) {
    var below = null;
    var above = null;
    for (var i = 0; i < PLANETS.length; i++) {
      var p = PLANETS[i];
      if (p.au < au && (below === null || p.au > below.au)) below = p;
      if (p.au > au && (above === null || p.au < above.au)) above = p;
    }
    if (below === null) return "inside even Mercury's circuit at " + PLANETS[0].au + " AU.";
    if (above === null) return "outside even Neptune's circuit at " + PLANETS[PLANETS.length - 1].au + " AU, " + below.name + " the nearest inside.";
    return "between " + below.name + " (" + below.au + " AU) and " + above.name + " (" + above.au + " AU).";
  }

  function work(au) {
    var years = periodYears(au);
    var days = Math.round(years * 365.25);
    return (
      au + " AU \u2192 sidereal period \u2248 " +
      years.toFixed(2) + " years, or about " +
      days.toLocaleString("en-US") + " days \u00b7 " + compare(au) + "."
    );
  }

  var input = document.getElementById("orbit-au");
  var button = document.getElementById("orbit-go");
  var out = document.getElementById("orbit-out");
  if (!input || !button || !out) return;

  button.addEventListener("click", function () {
    var au = parseFloat(input.value);
    if (isNaN(au) || au <= 0) {
      out.textContent = "Enter a distance in AU above zero and the log will work the period.";
      return;
    }
    out.textContent = work(au);
  });

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      button.click();
    }
  });
})();
