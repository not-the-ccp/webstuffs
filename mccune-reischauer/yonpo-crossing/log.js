/* Build Log No. 12 — bench effects: the day tick, the barbs, the mist */
(function () {
  'use strict';

  // Barbs along the double wire
  var barbs = document.getElementById('barbs');
  if (barbs) {
    var svgNS = 'http://www.w3.org/2000/svg';
    for (var x = 40; x < 1200; x += 80) {
      var g = document.createElementNS(svgNS, 'g');
      g.setAttribute('transform', 'translate(' + x + ',20) rotate(' + (x % 160 === 40 ? -34 : 34) + ')');
      var l1 = document.createElementNS(svgNS, 'path');
      l1.setAttribute('d', 'M-9,-3 L9,3 M-9,3 L9,-3');
      l1.setAttribute('stroke', 'currentColor');
      l1.setAttribute('stroke-width', '2');
      g.appendChild(l1);
      barbs.appendChild(g);
    }
  }

  // Day counter between 25 June 1950 and 27 July 1953 (1,128 days)
  var tick = document.getElementById('tick');
  if (tick) {
    var start = Date.UTC(1950, 5, 25);
    var end = Date.UTC(1953, 6, 27);
    var total = Math.round((end - start) / 86400000); // 1128
    var day = 0;
    tick.classList.add('live');
    setInterval(function () {
      var now = Date.now();
      var frac = (now - start) / (end - start);
      if (frac <= 0) { day = 0; }
      else if (frac >= 1) { day = total; }
      else { day = Math.floor(frac * total); }
      tick.textContent = 'day ' + day.toLocaleString('en-US') + ' of ' + total.toLocaleString('en-US');
    }, 1000);
  }

  // The mist, lowered and raised
  var btn = document.getElementById('fog');
  var mist = document.getElementById('mist');
  if (btn && mist) {
    btn.addEventListener('click', function () {
      var down = mist.classList.toggle('down');
      btn.textContent = down ? 'clear the mist' : 'lower the mist';
    });
  }
})();
