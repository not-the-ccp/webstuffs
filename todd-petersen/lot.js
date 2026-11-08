// Lot 47 — a single hammer tap, once, and the sale is noted.
(function () {
  var plate = document.getElementById("gavel");
  var note = document.getElementById("hammer-note");
  if (!plate || !note) return;
  var fallen = false;
  plate.addEventListener("click", function () {
    if (fallen) return;
    fallen = true;
    plate.classList.add("struck");
    note.textContent = "the hammer has fallen — lot 47 is sold, room 3";
    note.classList.add("fallen");
    setTimeout(function () { plate.classList.remove("struck"); }, 420);
  });
})();
