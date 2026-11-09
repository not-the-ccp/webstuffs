// FM-9 Annex 7-K — diagnostic console for the error register
(function () {
  "use strict";

  var input = document.getElementById("err-input");
  var result = document.getElementById("err-result");
  var rows = Array.prototype.slice.call(document.querySelectorAll(".err-table tbody tr"));

  if (!input || !result) return;

  // Recovery orders, keyed by code, as printed in the write-ups (7-K.05).
  var recovery = {
    "AE-0499": "None. No earlier stratum is available; the fault is logged to record the bottom, not to avoid it.",
    "AE-3200": "Accept the shipment, note the mismatch, and do not spend the season's survey budget on it.",
    "AE-2700": "File under the working stack; a clean boot is not a fault.",
    "AE-1700": "None needed; this is the fault the stack outgrew into.",
    "AE-1600": "Accept the new administration and keep the Linear B archives current.",
    "AE-1530": "Retry on the next season's sailing; keep the Dodecanese stations stocked.",
    "AE-1147": "None issued. The register closes here; the sea itself was not in fault."
  };

  function exactCode(query) {
    var q = query.trim().toUpperCase().replace(/\s+/g, " ");
    if (!q) return null;
    for (var i = 0; i < rows.length; i++) {
      if (rows[i].getAttribute("data-code") === q) return rows[i];
    }
    return null;
  }

  function printRow(row) {
    result.className = "hit";
    result.textContent =
      row.getAttribute("data-code") + "  " + row.getAttribute("data-meaning") +
      "\nSeverity:      " + row.getAttribute("data-sev") +
      "\nFirst observed: " + row.getAttribute("data-when") +
      "\nSubsystem:     " + row.getAttribute("data-sys") +
      "\nRecovery:      " + (recovery[row.getAttribute("data-code")] || "See write-up 7-K.05.");
  }

  function printMiss(query) {
    result.className = "miss";
    result.textContent = "NO SUCH CODE IN THE REGISTER (" + query.trim() + ").";
  }

  function filterRows(query) {
    var q = query.trim().toLowerCase();
    rows.forEach(function (row) {
      var text = (row.getAttribute("data-code") + " " + row.getAttribute("data-meaning") + " " + row.getAttribute("data-sys") + " " + row.getAttribute("data-when")).toLowerCase();
      var match = !q || text.indexOf(q) !== -1;
      row.classList.toggle("dimmed", !match);
      row.classList.remove("marked");
      if (q && match) row.classList.add("marked");
    });
  }

  var lookupTimer = null;

  input.addEventListener("input", function () {
    filterRows(input.value);
    clearTimeout(lookupTimer);
    lookupTimer = setTimeout(function () {
      var q = input.value;
      if (!q.trim()) { result.textContent = ""; result.className = ""; return; }
      var row = exactCode(q);
      if (row) { printRow(row); return; }
      var hits = rows.filter(function (r) {
        return !r.classList.contains("dimmed");
      });
      if (hits.length === 1) { printRow(hits[0]); }
      else if (hits.length > 1) {
        result.className = "hit";
        result.textContent = hits.length + " MATCHES IN REGISTER: " + hits.map(function (r) { return r.getAttribute("data-code"); }).join(", ") + ".";
      } else { printMiss(q); }
    }, 250);
  });
})();
