/* The Ledger of the Lot — rule in the lines of the six calls. */
(function () {
  var rows = Array.prototype.slice.call(document.querySelectorAll("#call-table tbody tr"));
  var tally = document.getElementById("tally");
  if (!rows.length || !tally) return;

  var baseTally = tally.textContent;

  function ruleIn(row) {
    rows.forEach(function (r) { r.classList.remove("chosen"); });
    row.classList.add("chosen");
    var stood = 0, retired = 0, year, call;
    rows.forEach(function (r) {
      if (r.dataset.result === "stood") stood++;
      else retired++;
    });
    year = row.querySelector(".yr").textContent;
    call = row.querySelector("td").nextElementSibling.textContent;
    tally.textContent = "Ruled in: " + year + " — " + call +
      " Across the file as it stands, " + stood + " call" + (stood === 1 ? "" : "s") +
      " stood and " + retired + " was retired by the hand that made it.";
  }

  rows.forEach(function (row) {
    var yearCell = row.querySelector(".yr");
    yearCell.addEventListener("click", function () { ruleIn(row); });
    yearCell.setAttribute("role", "button");
    yearCell.setAttribute("tabindex", "0");
    yearCell.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); ruleIn(row); }
    });
  });

  // A second click on the chosen year strikes the rule and restores the base tally.
  var last = null;
  rows.forEach(function (row) {
    var yearCell = row.querySelector(".yr");
    var first = yearCell.onclick;
    yearCell.onclick = function () {
      if (last === row) {
        row.classList.remove("chosen");
        last = null;
        tally.textContent = baseTally;
      } else {
        last = row;
        ruleIn(row);
      }
    };
  });
})();
