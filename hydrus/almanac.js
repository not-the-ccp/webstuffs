/* The Saltfleet Weather Almanac — Entry No. 114, Hydrus
   Night-sky effects: twinkling field, star names on the plaque, the loft glass needle. */

(function () {
  'use strict';

  /* --- scatter the field stars behind the sheet --- */
  var field = document.getElementById('starfield');
  if (field) {
    var count = Math.min(150, Math.max(70, Math.floor(window.innerWidth / 9)));
    for (var i = 0; i < count; i++) {
      var s = document.createElement('span');
      s.className = 'field-star';
      var size = Math.random() < 0.85 ? 1 + Math.random() * 1.6 : 2.6 + Math.random() * 2.2;
      s.style.width = size + 'px';
      s.style.height = size + 'px';
      s.style.left = (Math.random() * 100) + '%';
      s.style.top = (Math.random() * 100) + '%';
      s.style.animationDelay = (Math.random() * 4).toFixed(2) + 's';
      s.style.animationDuration = (2.6 + Math.random() * 4).toFixed(2) + 's';
      field.appendChild(s);
    }
  }

  /* --- name the constellation stars --- */
  var plaque = document.getElementById('serpent');
  if (plaque && !window.__hydrusNamed) {
    window.__hydrusNamed = true;
    var tip = document.createElement('div');
    tip.className = 'star-tip';
    tip.style.display = 'none';
    document.body.appendChild(tip);

    plaque.querySelectorAll('g.star').forEach(function (g) {
      var name = g.getAttribute('data-name');
      var show = function (evt) {
        tip.textContent = name;
        tip.style.display = 'block';
        var r = g.getBoundingClientRect();
        tip.style.left = (r.left + r.width / 2) + 'px';
        tip.style.top = (r.top - 34) + 'px';
      };
      var hide = function () { tip.style.display = 'none'; };
      g.addEventListener('mouseenter', show);
      g.addEventListener('mouseleave', hide);
      g.addEventListener('click', function () {
        var c = g.querySelector('circle');
        c.style.r = parseFloat(c.getAttribute('r')) * 1.5;
        setTimeout(function () { c.style.r = ''; }, 900);
      });
    });
  }

  /* --- the loft glass: the needle breathes between stay and a touch of fall --- */
  var needle = document.getElementById('needle');
  if (needle) {
    var t0 = Date.now();
    setInterval(function () {
      var t = (Date.now() - t0) / 1000;
      // degrees: 0 = straight up (STAY), negative toward FALL
      var deg = -14 + 7 * Math.sin(t / 6.5) + 2 * Math.sin(t / 2.3);
      needle.style.transform = 'rotate(' + deg.toFixed(2) + 'deg)';
    }, 120);
  }
})();
