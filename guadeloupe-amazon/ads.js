/* The Roseau & Pointe-à-Pitre Advertiser — small effects for the classified column */
(function () {
  'use strict';

  /* The violet macaw is crossed out of the register, with a stamp. */
  function strike() {
    var name = document.getElementById('strikeName');
    var ad = name ? name.closest('.ad.crossed') : document.querySelector('.ad.crossed');
    if (name) name.classList.add('struck');
    if (ad) ad.classList.add('stamped');
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', strike);
  } else {
    strike();
  }

  /* A market-day clock above the drawer: the barometer, the ebb, the price. */
  var tickerText = document.getElementById('tickerText');
  if (tickerText) {
    var half = tickerText.textContent.split('NOTICE').slice(1).join('NOTICE').trim();
    tickerText.textContent = ('NOTICE ' + half + 'NOTICE ' + half);
  }

  /* Each ad, when clicked, turns its price tag over, like a small coin. */
  document.querySelectorAll('.price-tag').forEach(function (tag, i) {
    tag.style.transition = 'transform 0.45s ease';
    tag.style.transitionDelay = (i * 0.04) + 's';
    var flipped = false;
    tag.addEventListener('click', function (e) {
      e.stopPropagation();
      flipped = !flipped;
      tag.style.transform = flipped ? 'rotateZ(-4deg) scale(1.08)' : 'rotateZ(0) scale(1)';
      tag.style.boxShadow = flipped
        ? '3px 4px 0 rgba(122, 31, 168, 0.55)'
        : '2px 2px 0 rgba(0,0,0,0.35)';
    });
  });

  /* The parrot in the lead notice tilts toward the cursor, but only a little,
     and only out of politeness. */
  var parrot = document.querySelector('.parrot-slot .parrot');
  if (parrot && window.matchMedia && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.addEventListener('mousemove', function (e) {
      var x = (e.clientX / window.innerWidth - 0.5) * 10;
      var y = (e.clientY / window.innerHeight - 0.5) * 6;
      parrot.style.transform = 'translateY(' + (-y * 0.4) + 'px) rotate(' + x + 'deg)';
    });
  }
})();
