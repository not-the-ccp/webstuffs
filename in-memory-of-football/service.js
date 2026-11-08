/* Memorial clock: the final's last 90 minutes, kept by the kitchen. */
(function () {
  var time = document.getElementById('sb-time');
  var sub = document.getElementById('sb-sub');
  if (!time || !sub) return;

  var minutes = 0;
  var total = 90;

  function fmt(m) {
    var pad = function (n) { return (n < 10 ? '0' : '') + n; };
    return pad(Math.floor(m)) + ':' + pad(m % 1);
  }

  var sayings = [
    'the clock is running, as it always was',
    'the kettle is on until the PA speaks',
    'nobody has walked, and nobody will',
    'the garnish remains unexplained',
    'the refrigerator keeps the truest eulogy',
    'a brass band somewhere in the stand',
    'the tray has been dropped once already'
  ];
  var saying = 0;

  function tick() {
    if (minutes >= total) {
      time.classList.add('final');
      time.textContent = 'FT';
      sub.textContent = 'full time — no more goals will be scored';
      return;
    }
    time.textContent = fmt(minutes);
    if (minutes === 45) {
      sub.textContent = 'half time — the urn is wiped down, the eggs are re-poached';
    } else if (minutes === 90) {
      sub.textContent = 'injury time has been denied';
    } else if (minutes > 0 && minutes % 15 === 0) {
      sub.textContent = sayings[saying++ % sayings.length];
    }
    minutes += 1;
  }

  tick();
  setInterval(tick, 600);
})();
