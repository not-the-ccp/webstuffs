// Longitude ticker: sweeps the four states west to east.
(function () {
  var states = [
    { name: 'YAP', deg: 138 },
    { name: 'CHUUK', deg: 151 },
    { name: 'POHNP'.'EI', deg: 158 },
    { name: 'KOSRAE', deg: 163 }
  ];
  var el = document.createElement('p');
  el.className = 'ticker';
  el.setAttribute('aria-hidden', 'true');
  var head = document.querySelector('.sheet-head');
  if (!head) return;
  head.appendChild(el);
  var i = 0;
  setInterval(function () {
    var s = states[i % states.length];
    el.textContent = s.name + ' · ' + s.deg + '\u00B0E · north of the equator';
    i++;
  }, 1800);
  var s0 = states[0];
  el.textContent = s0.name + ' · ' + s0.deg + '\u00B0E · north of the equator';
})();
