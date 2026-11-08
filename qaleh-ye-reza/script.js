// Qaleh-ye Reza — The Pass Roll
(function () {
  var results = [
    "The pass is closed. Hold for nothing; the square keeps its token.",
    "A mule is lost on the fold terrace. Replace it before your next turn.",
    "The watercourse pays the channel; the well terrace takes one token.",
    "The pass is open to every player for this turn only.",
    "The Reza line takes two tokens; the others take one.",
    "The pass is open, and the square gains one token per family still seated."
  ];

  var btn = document.getElementById("roll");
  var out = document.getElementById("roll-result");
  var table = document.querySelector(".roll-table");
  if (!btn || !out) return;

  btn.addEventListener("click", function () {
    var n = 1 + Math.floor(Math.random() * 6);
    out.textContent = n + " — " + results[n - 1];
    if (table) table.hidden = false;
  });
})();
