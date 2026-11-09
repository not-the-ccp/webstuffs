/* A quiet touch: hold the note, and the drone line settles into the room. */
(function () {
  var btn = document.getElementById("hold");
  var line = document.getElementById("drone-line");
  if (!btn || !line) return;

  var held = false;
  btn.addEventListener("click", function () {
    held = !held;
    line.style.opacity = held ? "0.45" : "1";
    btn.textContent = held ? "Let the note go" : "Hold the note";
    if (held) {
      line.textContent = "The great drone holds. The room at three degrees keeps it.";
    } else {
      line.textContent = "The great drone holds at 98\u00BC Hz.";
    }
  });
})();
