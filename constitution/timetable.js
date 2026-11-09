/* Sheet No. 43 — The Framing Line: stamp the ratifications in, in order,
   the way the ledger took them. Purely decorative; the sheet reads whole
   with the script out. */
(function () {
  "use strict";
  var rows = Array.prototype.slice.call(
    document.querySelectorAll("table.tt tbody tr[data-stn]")
  );
  if (!rows.length) return;

  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");

  function stamp(row, delay) {
    window.setTimeout(function () {
      row.classList.add("ratified");
    }, delay);
  }

  if (reduced && reduced.matches) {
    rows.forEach(function (row) { stamp(row, 0); });
  } else {
    rows.forEach(function (row, i) { stamp(row, 500 + i * 420); });
  }
})();
