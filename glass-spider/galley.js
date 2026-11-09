/* Galley Card No. 41 — the tour ledger reckoner */
(function () {
  var form = document.getElementById("reckoner");
  if (!form) return;
  var input = document.getElementById("show");
  var line = document.getElementById("resultLine");
  var bar = document.getElementById("barFill");
  var note = document.getElementById("resultNote");

  var legs = [
    { min: 1, max: 41, name: "Europe, the first leg" },
    { min: 42, max: 63, name: "North America, the second leg" },
    { min: 64, max: 68, name: "New Zealand, the third leg" },
    { min: 69, max: 86, name: "Australia, the home leg" }
  ];

  function reckon(n) {
    var leg = legs[0];
    for (var i = 0; i < legs.length; i++) {
      if (n >= legs[i].min && n <= legs[i].max) { leg = legs[i]; break; }
    }
    var inFilm = n >= 79 && n <= 86;
    var remaining = 86 - n;
    var week = Math.ceil(n / 12);

    line.innerHTML =
      "Show " + n + " of 86 &middot; " + leg.name +
      " &middot; " +
      (inFilm
        ? "the Sydney Entertainment Centre, first two weeks of November 1987 &middot; <strong>in the film</strong>."
        : "not one of the eight Sydney shows the film was cut from.");
    bar.style.width = Math.round((n / 86) * 100) + "%";
    note.textContent =
      remaining === 0
        ? "7 weeks into the run; the tour ends here, and the cake tin holds forty-one."
        : "Week " + week + " of the run; " + remaining + " show" + (remaining === 1 ? "" : "s") + " still to play.";
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var n = parseInt(input.value, 10);
    if (isNaN(n) || n < 1 || n > 86) {
      line.innerHTML = "The ledger only runs from show 1 to show 86 &mdash; the tin holds forty-one, not more.";
      bar.style.width = "0%";
      note.textContent = "Try a number between 1 and 86.";
      return;
    }
    input.value = n;
    reckon(n);
  });

  reckon(parseInt(input.value, 10) || 86);
})();
