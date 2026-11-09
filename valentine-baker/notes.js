// Field Notes, Plate 9 — a slow barometer in the corner of the notebook.
// The number drifts the way the mist on the heath drifts; the reading
// is the weather the subject of the notes never once waited out.
(function () {
  var el = document.querySelector('.date-line');
  if (!el) return;
  var base = 29.84;
  var tick = 0;
  setInterval(function () {
    tick += 1;
    var b = base + Math.sin(tick / 5) * 0.06;
    var old = el.getAttribute('data-baro');
    if (old === null) el.setAttribute('data-baro', true);
    var m = el.textContent.match(/barometer\s+[\d.]+/);
    if (!m) return;
    var falling = b < base;
    el.textContent = el.textContent.replace(
      /barometer\s+[\d.]+( and (falling|rising))?/,
      'barometer ' + b.toFixed(2) + ' and ' + (falling ? 'falling' : 'rising')
    );
  }, 4000);
})();
