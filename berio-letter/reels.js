/* Tape & Score — the tape between the reels advances a little,
   then holds, the way a tape operator holds a cue. */
(function () {
  var tape = document.getElementById("tape");
  if (!tape) return;
  var offset = 0;
  function tick() {
    offset = (offset + 0.6) % 20;
    tape.style.backgroundPosition = offset + "px 0";
  }
  setInterval(tick, 90);
})();
