// Bench & Benchers — a small touch for the ledger: the panel stamps settle
// onto the page in order, as if nailed to the board.
(function () {
  var panels = document.querySelectorAll(".entry");
  if (!panels.length) return;
  panels.forEach(function (entry, i) {
    entry.style.opacity = "0";
    entry.style.transform = "translateY(6px)";
    entry.style.transition = "opacity 0.5s ease " + (i * 0.12) + "s, transform 0.5s ease " + (i * 0.12) + "s";
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        entry.style.opacity = "1";
        entry.style.transform = "none";
      });
    });
  });
})();
