// Drift meter — Tidal Records TID-1912, Div. 2
(function () {
  var form = document.getElementById('drift-form');
  var out = document.getElementById('drift-out');
  if (!form || !out) return;

  function fmt(n, dp) {
    return n.toLocaleString('en-US', { minimumFractionDigits: dp, maximumFractionDigits: dp });
  }

  form.addEventListener('click', function (e) {
    var btn = e.target && e.target.closest('button');
    if (!btn) return;
    var rate = parseFloat(form.pair.value); // cm/yr
    var from = parseInt(form.from.value, 10);
    var to = parseInt(form.to.value, 10);
    if (!(rate > 0) || !(from > 0) || !(to > from)) {
      out.textContent = 'Enter a later year as the second year, and the meter will keep the record straight.';
      return;
    }
    var years = to - from;
    var metres = (rate * years) / 100;
    var channelWidths = metres / 200;
    var rock = 'the two-hundred-metre reef channel';
    var body;
    if (metres < 1) {
      body = fmt(metres * 100, 1) + ' cm — less than the width of the reef channel by a long mile';
    } else if (metres < 1000) {
      body = fmt(metres, 1) + ' m — about ' + fmt(channelWidths, 2) + ' of ' + rock;
    } else {
      body = fmt(metres / 1000, 2) + ' km — about ' + fmt(channelWidths, 1) + ' lengths of ' + rock;
    }
    out.textContent = years + ' years \u00d7 ' + rate + ' cm/yr \u2248 ' + body + ', at the mean rate for the pair.';
  });
})();
