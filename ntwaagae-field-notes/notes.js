// Field-note tally: count of dated entries in the notebook.
(function () {
  var tally = document.getElementById("tally");
  if (!tally) return;
  var entries = document.querySelectorAll(".entry .dateline");
  var count = entries.length;
  var i = 0;
  function tick() {
    i += 1;
    tally.textContent = i;
    if (i < count) window.setTimeout(tick, 260);
  }
  tick();
})();
