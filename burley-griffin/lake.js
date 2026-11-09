// The family lake ledger — click a year, the water moves.

var ENTRIES = [
  { year: 1913, level: 12, text: "1913 — the plan is won. Walter and Marion Burley Griffin take the competition; the lake exists first on paper, and the water here is only the paper's water." },
  { year: 1920, level: 8, text: "1920 — Griffin leaves the project. No substantial work is done on the lake; the water goes down to the level of a promise and the family marks it as a low." },
  { year: 1929, level: 5, text: "1929 — the Depression closes the drawers. The proposal waits; the ledger keeps one line per year, and this line is the thinnest." },
  { year: 1944, level: 20, text: "1944 — the decision is made to build it. The town site at Yass is given over and the axes start to line up with the mountains again." },
  { year: 1963, level: 96, text: "1963 — the dam holds, and the Molonglo stops. Water at: full story, first page. The water comes in, in Grandfather's words, like something that had been expecting you." },
  { year: 1969, level: 90, text: "1969 — Black Mountain Tower goes up on the northern axis, and from the south end the view is finally the view he drew. The gratin dish is bought that year, shaped like the lake." },
  { year: 2003, level: 28, text: "2003 — the long dry starts. The water comes off the eastern bank and the old farm track shows in the grass. Mother begins her count, and the lamp goes on the apron." },
  { year: 2009, level: 74, text: "2009 — the rains return and the lake takes the shape back. The sheet comes off the chair, the trap comes in, and the ninety days are said to have run out properly." }
];

var buttons = document.getElementById("ledger-buttons");
var water = document.getElementById("water-line");
var caption = document.getElementById("water-caption");

function setEntry(entry, btn) {
  water.style.height = entry.level + "%";
  caption.textContent = entry.text;
  var all = buttons.getElementsByTagName("button");
  for (var i = 0; i < all.length; i++) all[i].className = "";
  if (btn) btn.className = "active";
}

for (var i = 0; i < ENTRIES.length; i++) {
  (function (entry) {
    var b = document.createElement("button");
    b.type = "button";
    b.textContent = entry.year;
    b.addEventListener("click", function () { setEntry(entry, b); });
    buttons.appendChild(b);
  })(ENTRIES[i]);
}

setEntry(ENTRIES[4], buttons.getElementsByTagName("button")[4]);
