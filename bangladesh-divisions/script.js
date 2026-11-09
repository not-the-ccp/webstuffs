/* Roll-sheet engine: click a division tile and the page reads it back. */
(function () {
  var note = document.getElementById("tile-note");
  if (!note) return;
  var idle = note.textContent;

  function speak(tile) {
    var seat = tile.getAttribute("data-seat");
    var n = tile.getAttribute("data-n");
    note.textContent = seat + " — seat of the division, " + n + " districts under it.";
    note.classList.add("lit");
  }

  Array.prototype.forEach.call(document.querySelectorAll(".tile"), function (tile) {
    tile.addEventListener("click", function () { speak(tile); });
    tile.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); speak(tile); }
    });
    tile.addEventListener("blur", function () {
      note.textContent = idle;
      note.classList.remove("lit");
    });
  });
})();
