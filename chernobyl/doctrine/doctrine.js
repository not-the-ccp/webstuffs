// Bench 7 · the doctrine ledger, scrubbed by year
(function () {
  var scrub = document.getElementById("year-scrub");
  if (!scrub) return;

  var yearOut = document.getElementById("year");
  var noteOut = document.getElementById("ledger-note");
  var rows = Array.prototype.slice.call(document.querySelectorAll("#ledger tbody tr"));

  var notes = {
    1968: "Prague, in one night",
    1969: "normalisation",
    1970: "the decade opens",
    1972: "Helsinki signs the map",
    1975: "the stripe is a feature",
    1979: "the needle wobbles",
    1980: "Solidarity",
    1981: "one size down",
    1985: "Gorbachev at the helm",
    1988: "repealed in one sentence",
    1989: "the lid comes off",
    1990: "troops come home",
    1991: "the ledger closes"
  };

  function render() {
    var y = parseInt(scrub.value, 10);
    if (yearOut) yearOut.textContent = y;

    // nearest entry at or before the scrubbed year
    var active = null;
    for (var i = 0; i < rows.length; i++) {
      if (parseInt(rows[i].getAttribute("data-year"), 10) <= y) active = rows[i];
    }
    for (var j = 0; j < rows.length; j++) rows[j].classList.remove("active");
    if (active) {
      active.classList.add("active");
      if (noteOut) {
        var y2 = parseInt(active.getAttribute("data-year"), 10);
        noteOut.textContent = (notes[y2] || "the line holds") + (y2 < y ? " · held until " + y : "");
      }
    }
  }

  scrub.addEventListener("input", render);
  render();
})();
