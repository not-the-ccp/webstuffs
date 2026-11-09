/* The Matinik Chronicle — small clock, sea line, and one stamp */
(function () {
  'use strict';

  // Island time (Atlantic / Martinique).
  function tick() {
    var el = document.getElementById('island-time');
    if (!el) return;
    var now;
    try {
      now = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'America/Martinique',
        hour: '2-digit',
        minute: '2-digit'
      }).format(new Date());
    } catch (e) {
      var d = new Date();
      now = String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
    }
    el.textContent = now;
  }
  tick();
  setInterval(tick, 30000);

  // The sea, as reported at the ferry counter.
  var seaEl = document.getElementById('sea');
  if (seaEl) {
    var seas = [
      'fair, with a swell',
      'calm as a verandah',
      'noticeable, and noticing back',
      'a good way, say the crabs',
      'biosphere-certified since 2021'
    ];
    var i = 0;
    setInterval(function () {
      i = (i + 1) % seas.length;
      seaEl.textContent = seas[i];
    }, 8000);
  }

  // The SEATED stamp on the Reward notice.
  var ad = document.getElementById('sold-ad');
  if (ad) {
    ad.setAttribute('role', 'button');
    ad.setAttribute('tabindex', '0');
    ad.setAttribute('aria-pressed', 'false');
    function toggle() {
      var on = ad.classList.toggle('stamped');
      ad.setAttribute('aria-pressed', on ? 'true' : 'false');
    }
    ad.addEventListener('click', toggle);
    ad.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
  }
})();
