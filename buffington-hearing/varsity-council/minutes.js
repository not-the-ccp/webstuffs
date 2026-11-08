// Session 45 — three-downs demonstration on Exhibit B
(function () {
  var ball = document.getElementById("ball");
  var snap = document.getElementById("snap");
  var reset = document.getElementById("reset");
  var note = document.getElementById("plan-note");
  if (!ball || !snap) return;

  var down = 1;
  var left = 12;

  function advance() {
    if (down > 3) return;
    // a carry of between 6 and 14 yards, in plan percentage
    left = Math.min(96, left + 8 + Math.round(Math.random() * 7));
    ball.style.left = left + "%";
    down += 1;
    if (down <= 3) {
      snap.textContent = "Snap — down " + down + " of 3";
      note.textContent = "Down " + down + " of 3. The ball has moved; the law has not.";
    } else {
      snap.textContent = "Fourth down — not in the rulebook";
      snap.disabled = true;
      reset.hidden = false;
      note.textContent = "That is the third down. A fourth is not in the rulebook here; on the other side of the plan, the same ball gets one more try.";
    }
  }

  function restore() {
    down = 1;
    left = 12;
    ball.style.left = left + "%";
    snap.textContent = "Snap — down 1 of 3";
    snap.disabled = false;
    reset.hidden = true;
    note.textContent = "Press the snap. Three downs on this side of the plan; the fourth is not in the rulebook.";
  }

  snap.addEventListener("click", advance);
  reset.addEventListener("click", restore);
})();
