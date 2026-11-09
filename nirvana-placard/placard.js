// Placard No. 41 — the visitor counter, kept the old way
(function () {
  var el = document.getElementById("visitor-counter");
  if (!el) return;
  var n = parseInt(el.textContent, 10);
  if (isNaN(n)) n = 4216;
  n += 1;
  el.textContent = String(n).replace(/^(\d)$/, "0000$1").padStart(6, "0");
})();
