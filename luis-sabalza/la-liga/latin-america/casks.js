// Entry 403 — a quiet cask count for the glossary's night table.
// The entry reads fine without it; this only fills the footer line.
(function () {
  var out = document.getElementById("caskCount");
  if (!out) return;
  var n = 0;
  var total = 20;
  out.textContent = "the casks are not yet counted";
  document.addEventListener("click", function (e) {
    if (e.target.closest("a, button, input, label")) return;
    n = n >= total ? 0 : n + 1;
    out.textContent =
      n === 0
        ? "the casks are not yet counted"
        : n + " of " + total + " casks filled, at the upper part of the middle of July";
  });
})();
