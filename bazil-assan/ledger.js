/* The Assan Voyage Ledger — filter and landing notes.
   The table is complete and legible without this script. */
(function () {
  "use strict";

  var buttons = document.querySelectorAll(".filter");
  var rows = Array.prototype.slice.call(
    document.querySelectorAll("#ledger-body tr")
  );
  if (!rows.length || !buttons.length) return;

  // Filter the ledger by kind of voyage.
  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      buttons.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      var kind = btn.getAttribute("data-filter");
      rows.forEach(function (row) {
        row.hidden = kind !== "all" && row.getAttribute("data-kind") !== kind;
      });
    });
  });

  // Click a landing to mark it; where speech is available, read the note.
  var lastMarked = null;
  rows.forEach(function (row) {
    row.setAttribute("tabindex", "0");
    function select() {
      if (lastMarked) lastMarked.classList.remove("landing");
      lastMarked = row;
      row.classList.add("landing");
      var note = row.cells[4] && row.cells[4].textContent;
      var year = row.cells[0] && row.cells[0].textContent;
      if (window.speechSynthesis && note) {
        window.speechSynthesis.cancel();
        var utterance = new SpeechSynthesisUtterance(
          "Landing " + year + ". " + note
        );
        utterance.rate = 0.95;
        window.speechSynthesis.speak(utterance);
      }
    }
    row.addEventListener("click", select);
    row.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        select();
      }
    });
  });
})();
