// Specimen time machine: what were the Sherborne jaws called in a given year?
(function () {
  var stages = [
    { from: 1824, to: 1881, name: "unrecorded", note: "the bones have not yet been collected; only the rule that will claim them exists" },
    { from: 1882, to: 1882, name: "(unrecorded)", note: "upper and lower jaw bones collected near Sherborne, Dorset" },
    { from: 1883, to: 1963, name: "Megalosaurus bucklandii", note: "assigned by Richard Owen to the first named non-bird dinosaur" },
    { from: 1964, to: 1973, name: "Megalosaurus sp.", note: "recognised as a different species; the assignment is quietly dropped" },
    { from: 1974, to: 2016, name: "Megalosaurus hesperis", note: "described as a new species — 'the West' for Dorset" },
    { from: 2017, to: 2100, name: "Duriavenator hesperis", note: "erected as its own genus; the west becomes a family" }
  ];

  var form = document.getElementById("tm-form");
  var input = document.getElementById("tm-year");
  var out = document.getElementById("tm-result");
  if (!form || !input || !out) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var y = parseInt(input.value, 10);
    if (isNaN(y) || y < 1824 || y > 2100) {
      out.innerHTML = "Enter a year between 1824 and 2100; the ledger only covers the specimen&rsquo;s own biography.";
      return;
    }
    var stage = null;
    for (var i = 0; i < stages.length; i++) {
      if (y >= stages[i].from && y <= stages[i].to) { stage = stages[i]; break; }
    }
    var years = y >= 1882 ? (y - 1882) + " years after it left Sherborne" : "before the bones were ever collected";
    var travel = y >= 1882 ? ", " + years : "";
    out.innerHTML = y + ": the specimen is <i>" + stage.name + "</i> — " + stage.note + travel + ".";
  });
})();
