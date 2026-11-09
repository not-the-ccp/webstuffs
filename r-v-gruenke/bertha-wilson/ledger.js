/* The Ledger of Firsts — filter by house, keep the count honest. */
(function () {
  "use strict";

  var ledger = document.getElementById("firsts-ledger");
  if (!ledger) return;

  var rows = Array.prototype.slice.call(ledger.querySelectorAll("tbody tr"));
  var count = document.getElementById("ledger-count");
  var buttons = Array.prototype.slice.call(ledger.querySelectorAll(".filter"));
  var total = rows.length;

  function applyFilter(house) {
    var shown = 0;
    rows.forEach(function (row) {
      var match = house === "all" || row.getAttribute("data-house") === house;
      row.classList.toggle("hidden", !match);
      if (match) shown += 1;
    });
    if (count) {
      count.textContent = "Entries shown: " + shown + " of " + total + ".";
    }
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      buttons.forEach(function (b) { b.classList.remove("is-on"); });
      button.classList.add("is-on");
      applyFilter(button.getAttribute("data-house"));
    });
  });

  applyFilter("all");
})();
