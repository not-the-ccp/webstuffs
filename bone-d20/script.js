/* Docket roll: Exhibit 14, rolled outside the record. */
(function () {
  var btn = document.getElementById("rollBtn");
  var face = document.getElementById("dieFace");
  var num = document.getElementById("dieNum");
  var note = document.getElementById("rollNote");
  if (!btn || !face || !num || !note) return;

  var rolls = 0;
  var spinning = false;

  var verdicts = {
    1: [
      "1. A one. The ledger makes room for a different ink.",
      "1. The alternator of 1987 nods from the margin.",
      "1. The Court, were it sitting, would grant a retelling — taller."
    ],
    20: [
      "20. A twenty. Somewhere, a Thursday survives.",
      "20. Again. The line at the bottom of the ledger agrees.",
      "20. The cornbread in the record remains Exhibit 15."
    ]
  };

  btn.addEventListener("click", function () {
    if (spinning) return;
    spinning = true;
    face.classList.add("spinning");
    var ticks = 0;
    var timer = setInterval(function () {
      num.textContent = Math.random() < 0.5 ? "1" : "20";
      ticks += 1;
      if (ticks >= 14) {
        clearInterval(timer);
        var result = Math.random() < 0.5 ? 1 : 20;
        num.textContent = String(result);
        face.classList.remove("spinning");
        rolls += 1;
        var lines = verdicts[result];
        note.textContent = lines[rolls % lines.length] + " (" + rolls + " roll" + (rolls === 1 ? "" : "s") + " off the record.)";
        spinning = false;
      }
    }, 90);
  });
})();
