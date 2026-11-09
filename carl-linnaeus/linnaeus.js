// Sift the working card of the Systema by group or by a word.
(function () {
  var groupSel = document.getElementById("group");
  var termInput = document.getElementById("term");
  var rows = Array.prototype.slice.call(
    document.querySelectorAll("#systema tbody tr")
  );
  var count = document.getElementById("count");
  if (!groupSel || !termInput || !count) return;

  function sift() {
    var group = groupSel.value;
    var term = termInput.value.trim().toLowerCase();
    var shown = 0;
    rows.forEach(function (row) {
      var text = row.textContent.toLowerCase();
      var ok =
        (!group || row.getAttribute("data-group") === group) &&
        (!term || text.indexOf(term) !== -1);
      row.classList.toggle("hidden", !ok);
      if (ok) shown += 1;
    });
    count.textContent =
      shown === rows.length
        ? "All eleven names stand, as printed."
        : shown + " of 11 names stand in the card.";
  }

  groupSel.addEventListener("change", sift);
  termInput.addEventListener("input", sift);
  sift();
})();
