// The client index: a filterable drawer, drawn from the card catalogue.
(function () {
  "use strict";

  var search = document.getElementById("roster-search");
  var chips = document.getElementById("chips");
  var rows = Array.prototype.slice.call(
    document.querySelectorAll("#roster-body tr")
  );
  var note = document.getElementById("roster-note");
  if (!search || !chips || !rows.length || !note) return;

  var genre = "all";
  var total = rows.length;

  function apply() {
    var q = search.value.trim().toLowerCase();
    var visible = 0;
    rows.forEach(function (row) {
      var matchesGenre = genre === "all" || row.getAttribute("data-genre") === genre;
      var text = row.textContent.toLowerCase();
      var matchesText = q === "" || text.indexOf(q) !== -1;
      var show = matchesGenre && matchesText;
      row.style.display = show ? "" : "none";
      if (show) visible += 1;
    });
    if (visible === total) {
      note.textContent = "Twelve cards in the drawer, four of them in the P drawer, all of them answered the same day.";
    } else if (visible === 0) {
      note.textContent = "The drawer is empty on this search; the catalogue answers the same day anyway — try fewer letters.";
    } else {
      note.textContent = visible + (visible === 1 ? " card" : " cards") + " in the drawer, answered the same day.";
    }
  }

  search.addEventListener("input", apply);

  chips.addEventListener("click", function (event) {
    var button = event.target.closest(".chip");
    if (!button) return;
    genre = button.getAttribute("data-genre") || "all";
    Array.prototype.forEach.call(chips.querySelectorAll(".chip"), function (c) {
      c.classList.toggle("active", c === button);
    });
    apply();
  });
})();
