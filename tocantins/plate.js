/* Plate 27 — the capital counter. A suggestion, not a schedule. */
(function () {
  var yearEl = document.getElementById("dockYear");
  var btn = document.getElementById("dockBtn");
  if (!yearEl || !btn) return;

  var START = 1989;
  var LAST = 2026;
  var blocks = 0;
  var settled = false;

  function render() {
    var year = Math.min(START + blocks, LAST);
    var status = settled
      ? "counter at rest — 2026 ledger closed at 1,595,994"
      : (year === LAST
        ? "the counter stands in Palmas; see the winning rules"
        : "construction " + (blocks === 1 ? "begun" : "continues"));
    yearEl.textContent = "Palmas · " + year + " · " + status;
  }

  btn.addEventListener("click", function () {
    if (settled) {
      blocks = 0;
      settled = false;
      render();
      return;
    }
    if (blocks >= 37) {
      settled = true;
      render();
      return;
    }
    blocks += 1;
    render();
  });

  btn.setAttribute("aria-label", "Advance the capital counter one block");
  render();
})();
