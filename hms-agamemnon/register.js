/* The Naval Register — a signal flag row that spells AGAMEMNON,
   and a slow blink of the telegraph lamps. */

// International signal flag backgrounds, approximated.
var FLAGS = [
  ["#ffffff", "#000000"],            // A — white with blue canton
  ["#f2b705", "#ffffff"],            // G — yellow over white
  ["#ffffff", "#f2b705"],            // M — white over yellow
  ["#ffffff", "#ffffff"],            // E — plain white
  ["#0a2f5c", "#0a2f5c"],            // N — blue (navy)
  ["#ffffff", "#0a2f5c"]             // O — white with blue canton (approx)
];

function makeFlag(a, b) {
  var f = document.createElement("span");
  f.className = "flag";
  f.style.background = "linear-gradient(180deg, " + a + " 0 50%, " + b + " 50% 100%)";
  return f;
}

function buildFlags() {
  var row = document.getElementById("flags");
  if (!row) return;
  // Repeat the AGAMEMNON flags until the row is a fair width.
  var word = "AGAMEMNON";
  var sets = 2;
  for (var s = 0; s < sets; s++) {
    for (var i = 0; i < word.length; i++) {
      var spec = FLAGS[i] || ["#ffffff", "#0a2f5c"];
      row.appendChild(makeFlag(spec[0], spec[1]));
    }
    var gap = document.createElement("span");
    gap.style.width = "22px";
    row.appendChild(gap);
  }
}

// The telegraph lamp: blink at a gentle, irregular rate.
function telegraph() {
  var lamps = document.querySelectorAll(".lamp");
  if (!lamps.length) return;
  function retime() {
    var delay = (Math.random() * 2.2 + 0.8).toFixed(2) + "s";
    lamps.forEach(function (l) {
      l.style.animationDuration = delay;
    });
    setTimeout(retime, 2600 + Math.random() * 2200);
  }
  retime();
}

document.addEventListener("DOMContentLoaded", function () {
  buildFlags();
  telegraph();
});
