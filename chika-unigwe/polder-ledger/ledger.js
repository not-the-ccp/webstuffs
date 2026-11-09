// A small gauge reading for the counter: the sluice level drifts
// up and down by a centimetre or two, as it does at the board.
(function () {
  var note = document.getElementById("gauge-note");
  if (!note) return;
  var level = 128; // centimetres above the polder floor, as posted
  function tick() {
    level = Math.max(112, Math.min(141, level + (Math.random() < 0.5 ? -1 : 1)));
    note.innerHTML = "Sluice gauge, posted this hour: <strong>" + level + " cm</strong> &middot; the water boards keep the record; the shop only copies it.";
  }
  tick();
  setInterval(tick, 24000);
})();
