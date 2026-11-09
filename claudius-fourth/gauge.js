/* The Correspondents' Board — the gauge of the family's years, 44 BC to AD 68 */
(function () {
  var segments = [
    {
      from: -44, to: -27, name: "The Republic, arguing",
      note: "The first of the family is dead at the Ides; the ledger is divided between Octavian and Antony. The board keeps this line as it comes."
    },
    {
      from: -27, to: 14, name: "Augustus",
      note: "The first of the family takes the gauge. The line is set, the window opened, and every reading after this one is kept in the family's hand."
    },
    {
      from: 14, to: 41, name: "Tiberius",
      note: "The uncle by marriage holds the window and takes some of it to Capri, which the board reads as a frontier note. The fourth of the family is ruled out of the weather of the house."
    },
    {
      from: 41, to: 54, name: "Claudius",
      note: "The fourth of the family, the one the ledger had ruled dry, sits down at the desk. AD 41 to AD 54, thirteen years, closed on 13 October with the board still in his hand. The line is ruled on, not rewritten."
    },
    {
      from: 54, to: 68, name: "Nero",
      note: "The line goes on in a new hand. The board does not rule beyond this one; the weather is not edited in public."
    }
  ];

  var slider = document.getElementById("year-slider");
  var readout = document.getElementById("gauge-readout");
  var bar = document.getElementById("gauge-bar");
  if (!slider || !readout) return;

  segments.forEach(function (seg, i) {
    var div = document.createElement("div");
    div.className = "seg seg-" + i;
    div.title = seg.name;
    bar.appendChild(div);
  });
  var segEls = bar.children;

  function formatYear(y) {
    if (y < 0) return (-y) + " BC";
    if (y === 0) return "1 AD";
    return y + " AD";
  }

  function render() {
    var y = parseInt(slider.value, 10);
    var i = 0;
    for (var k = 0; k < segments.length; k++) {
      if (y >= segments[k].from) i = k;
    }
    var seg = segments[i];
    for (var s = 0; s < segEls.length; s++) {
      segEls[s].classList.toggle("seg-active", s === i);
    }
    readout.innerHTML = "<strong>" + formatYear(y) + "</strong> — under the marker, the family reads <strong>" +
      seg.name + "</strong> (" + formatYear(seg.from) + " to " + formatYear(seg.to) + "). " + seg.note;
  }

  slider.addEventListener("input", render);
  render();
})();
