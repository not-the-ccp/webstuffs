// B-89 departure board: a small clock and an occasional "ON TIME" blink.
(function () {
  var board = document.getElementById("board");
  if (!board) return;
  var base = "B-89";
  var d = new Date();
  var hh = String(d.getHours()).padStart(2, "0");
  var mm = String(d.getMinutes()).padStart(2, "0");
  board.textContent = base + " · " + hh + ":" + mm + " · ON TIME";
  var dark = false;
  setInterval(function () {
    dark = !dark;
    board.style.opacity = dark ? "0.75" : "1";
  }, 1600);
})();
