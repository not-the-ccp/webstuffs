// Field notes, No. 27 — a little life in the margin.

// The margin note drifts between observations, the way a pencil
// drifts between sentences in a real book.
var marginPhrases = [
  "the fog came up off the lake at nine, as if the water had a second opinion",
  "the canal is the size of a river's memory of itself",
  "eleven at dusk, nine after the fog — the ledger does not argue",
  "a city is a crossing that has taken on the habit of staying",
  "the plate stays in the bilge; the lake keeps what the lake puts out"
];

var margin = document.getElementById("marginNote");
var marginIndex = 0;

if (margin) {
  setInterval(function () {
    marginIndex = (marginIndex + 1) % marginPhrases.length;
    margin.style.opacity = "0";
    setTimeout(function () {
      margin.textContent = marginPhrases[marginIndex];
      margin.style.opacity = "1";
    }, 400);
  }, 9000);
  margin.style.transition = "opacity 0.4s";
}

// The census count can be underlined twice, the ledger way.
var big = document.getElementById("bigCount");
if (big) {
  big.style.cursor = "pointer";
  big.addEventListener("click", function () {
    big.classList.toggle("underlined");
  });
}
