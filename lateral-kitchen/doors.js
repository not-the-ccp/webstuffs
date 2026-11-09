/* The Lateral — score of nine doors, seven open, the eighth held, the ninth by standing. */
(function () {
  var holder = document.getElementById("doors");
  if (!holder) return;
  for (var i = 1; i <= 9; i++) {
    var door = document.createElement("span");
    door.className = "door";
    door.title = "door " + i;
    holder.appendChild(door);
    if (i <= 7) {
      (function (d, delay) {
        window.setTimeout(function () { d.classList.add("open"); }, delay);
      })(door, 300 + i * 160);
    }
  }
})();
