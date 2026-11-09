// Build Log No. 47 — the stone tally, done a second time,
// because the second count wins.
(function () {
  var btn = document.getElementById("tally");
  var out = document.getElementById("stone-count");
  if (!btn || !out) return;
  var busy = false;
  btn.addEventListener("click", function () {
    if (busy) return;
    busy = true;
    var n = 0;
    var total = 941;
    var step = Math.max(1, Math.round(total / 90));
    var id = setInterval(function () {
      n += step;
      if (n >= total) {
        n = total;
        clearInterval(id);
        busy = false;
      }
      out.textContent = n;
    }, 16);
  });
})();
