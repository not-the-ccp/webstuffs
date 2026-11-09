/* Woodbine Lane County School — Term Report 5C/92: little machine of red ink */

(function () {
  'use strict';

  // Stamp the phrases on load, one after another, like a seal being set.
  var phrases = document.querySelectorAll('.phrase[data-stamp]');
  phrases.forEach(function (el, i) {
    setTimeout(function () {
      el.classList.add('stamped');
    }, 500 + i * 650);
  });

  // Set each footer stamp with a thunk when it scrolls into view.
  var stamps = document.querySelectorAll('.foot-stamps .stamp');
  if ('IntersectionObserver' in window && stamps.length) {
    var seen = new WeakSet();
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting && !seen.has(e.target)) {
          seen.add(e.target);
          e.target.classList.add('thunk');
        }
      });
    }, { threshold: 0.4 });
    stamps.forEach(function (s) { io.observe(s); });
  } else {
    stamps.forEach(function (s) { s.classList.add('thunk'); });
  }

  // The tally: recounting the market row, three mornings, thirty-one goods.
  var counts = { 'human-made': 14, 'proudly human': 9, 'AI-free': 5, 'variants': 3 };
  var total = 0;
  for (var k in counts) total += counts[k];

  function pad(n) { return (n < 10 ? '0' : '') + n; }

  // A quiet counter in the candidates line, like a ledger being kept.
  var cands = document.querySelector('.candidates');
  if (cands) {
    var tally = document.createElement('span');
    tally.style.fontFamily = 'Caveat, cursive';
    tally.style.color = '#1f3a6e';
    tally.style.fontSize = '1.1rem';
    tally.style.marginLeft = '8px';
    tally.textContent = '(market row tally: 0)';
    cands.appendChild(tally);

    var n = 0;
    var timer = setInterval(function () {
      n += 1;
      tally.textContent = '(market row tally: ' + pad(n) + ' of ' + pad(total) + ')';
      if (n >= total) {
        clearInterval(timer);
        tally.textContent = '(market row tally: ' + pad(total) + ' goods, 3 mornings, all hands)';
      }
    }, 120);
  }

  // Assessor's verdict, written in at the end, as red ink dries.
  var verdict = document.getElementById('verdict');
  if (verdict) {
    var finalText = verdict.textContent;
    verdict.style.transition = 'color 1.2s ease';
    setTimeout(function () { verdict.style.color = '#7a1f1f'; }, 1800);
    void finalText;
  }

  // Gentle tilt of the preserved line as the pointer crosses it — a card
  // being lifted off the shelf and put back, almost.
  var kept = document.querySelector('.kept');
  if (kept) {
    kept.addEventListener('mouseenter', function () {
      kept.style.transition = 'transform 0.3s ease';
      kept.style.transform = 'rotate(-1.2deg) translateY(-2px)';
    });
    kept.addEventListener('mouseleave', function () {
      kept.style.transform = 'rotate(0deg) translateY(0)';
    });
  }
})();
