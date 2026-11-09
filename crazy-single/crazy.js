/* The Night Table Record Exchange — CRAZY product page effects */

(function () {
  'use strict';

  // --- crate counter ---
  var n = 0;
  var addBtn = document.getElementById('add');
  var count = document.getElementById('count');
  if (addBtn && count) {
    addBtn.addEventListener('click', function () {
      n += 1;
      count.textContent = 'Your crate: ' + n + (n === 1 ? ' copy' : ' copies');
      count.style.color = '#ffd166';
      setTimeout(function () { count.style.color = ''; }, 400);
    });
  }

  // --- vinyl glows on the beat ---
  var disc = document.getElementById('disc');
  if (disc) {
    var beats = ['rgba(255, 93, 143, .45)', 'rgba(255, 209, 102, .55)', 'rgba(69, 240, 216, .5)'];
    var i = 0;
    setInterval(function () {
      var g = beats[i % beats.length];
      disc.style.boxShadow =
        '0 0 0 2px rgba(255, 209, 102, .35), 0 0 42px ' + g + ', inset 0 0 34px rgba(0,0,0,.8)';
      i += 1;
    }, 1300);
  }

  // --- equalizer bars in the footer ---
  var eq = document.getElementById('eq');
  if (eq) {
    for (var b = 0; b < 24; b++) {
      var bar = document.createElement('i');
      bar.style.animationDuration = (0.5 + Math.random() * 0.9).toFixed(2) + 's';
      bar.style.animationDelay = (-Math.random()).toFixed(2) + 's';
      eq.appendChild(bar);
    }
  }
})();
