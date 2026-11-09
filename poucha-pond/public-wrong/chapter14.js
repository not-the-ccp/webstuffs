/* Chapter 14 — the case clock. Walks the case from the party's end
   (11:15 p.m.) to the dawn patrol (3:20 a.m.), one minute per second,
   then holds on the patrol until the page is flipped. */
(function () {
  var el = document.getElementById("clock");
  if (!el) return;
  var start = 23 * 60 + 15;   // 11:15 p.m.
  var end = 27 * 60 + 20;     // 3:20 a.m. the next day
  var tick = 0;

  function fmt(total) {
    var h = Math.floor(total / 60) % 24;
    var m = total % 60;
    var mer = h < 12 ? "a.m." : "p.m.";
    var shown = h % 12;
    if (shown === 0) shown = 12;
    return shown + ":" + (m < 10 ? "0" : "") + m + " " + mer;
  }

  setInterval(function () {
    var total = start + tick;
    if (total >= end) {
      el.textContent = fmt(end) + " · patrol in progress · do not flip";
      return;
    }
    tick += 1;
    el.textContent = fmt(total);
  }, 1000);
})();
