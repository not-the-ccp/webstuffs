// The Two-Leg Tour — scoreboard bell, spring 1976 edition.
// The page is fully readable without this; the bell just rings.

(function () {
  var board = document.getElementById("scoreboard");
  var bell = document.getElementById("bell");
  var note = document.getElementById("scoreboard-note");
  if (!board || !bell) return;

  var goals = Array.prototype.slice.call(board.querySelectorAll(".goal"));

  bell.addEventListener("click", function () {
    if (board.classList.contains("show")) {
      board.classList.remove("show");
      note.textContent = "Press \u201Cring the bell\u201D for the result as called.";
      bell.textContent = "Ring the bell \u2014 show the result";
      return;
    }
    // Ring one goal at a time, the way the turnstiles counted.
    var i = 0;
    board.classList.add("show");
    var timer = setInterval(function () {
      if (i < goals.length) {
        goals[i].textContent = "\u25CF";
        i++;
      } else {
        clearInterval(timer);
        note.textContent = "As called: Liverpool 5, Club Brugge 2. The cup goes to Anfield's keep.";
        bell.textContent = "Sound it again \u2014 hide the result";
      }
    }, 260);
  });
})();
