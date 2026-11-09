// Card 215 — the nutmeg drawer. Clicking the pencil line slides the note
// out of the drawer, and back again. The note stays readable either way.
(function () {
  var note = document.getElementById("nutmeg");
  var line = document.getElementById("nutmeg-note");
  if (!note || !line) return;
  note.addEventListener("click", function () {
    line.classList.toggle("closed");
    if (line.classList.contains("closed")) {
      note.setAttribute("title", "Click to open the drawer again");
    } else {
      note.setAttribute("title", "Click to shut the drawer");
    }
  });
})();
