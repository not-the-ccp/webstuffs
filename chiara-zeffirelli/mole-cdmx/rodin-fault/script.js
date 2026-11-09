/* Fault 2240 — The Rodin Sheet · interactive touches
   All text is present in the markup; this script only animates. */
(function () {
  'use strict';

  var reduced = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* 1 · The stack trace types itself in, line by line, when it enters view.
       The full text is already in the DOM; we only dim lines then reveal. */
  var code = document.querySelector('#console code');
  if (code && !reduced) {
    var lines = code.innerHTML.split('\n');
    var joined = false;

    function typeLines() {
      if (joined) return;
      joined = true;
      // Rebuild the code element as separate lines so we can reveal them.
      code.innerHTML = lines
        .map(function (ln) {
          return '<span class="tline" style="display:block;opacity:0;transition:opacity .28s ease">' +
            (ln === '' ? '&nbsp;' : ln) + '</span>';
        })
        .join('');
      var spans = code.querySelectorAll('.tline');
      spans.forEach(function (span, i) {
        setTimeout(function () { span.style.opacity = '1'; }, 320 + i * 420);
      });
    }

    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { typeLines(); io.disconnect(); }
        });
      }, { threshold: 0.35 });
      io.observe(code);
    } else {
      typeLines();
    }
  }

  /* 2 · The "FILED · DO NOT CLOSE" stamp slams in when the footer is seen. */
  var stamp = document.getElementById('stamp');
  if (stamp) {
    if (reduced) {
      stamp.style.opacity = '0.92';
    } else if ('IntersectionObserver' in window) {
      var so = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            setTimeout(function () { stamp.classList.add('stamped'); }, 350);
            so.disconnect();
          }
        });
      }, { threshold: 0.6 });
      so.observe(stamp);
    }
  }

  /* 3 · Standing error entries: hovering "reproduces" the fault, and a slow
       counter in the banner ticks through the affected systems. */
  var rows = document.querySelectorAll('.fault-row[data-seen]');
  rows.forEach(function (row) {
    row.setAttribute('tabindex', '0');
    row.addEventListener('mouseenter', markSeen);
    row.addEventListener('focus', markSeen);
    function markSeen() { row.setAttribute('data-live', 'true'); }
  });

  var sev = document.getElementById('fault-sev');
  if (sev && !reduced) {
    var systems = [
      'SEVERITY: ONE SCULPTURE',
      'AFFECTED: THE BIG POT',
      'AFFECTED: THE BALCONY, COLONIA ROMA',
      'AFFECTED: 16 ALCALDÍAS',
      'AFFECTED: THE DOUBLON, IN THE MIND ONLY'
    ];
    var i = 0;
    setInterval(function () {
      i = (i + 1) % systems.length;
      sev.style.opacity = '0.25';
      setTimeout(function () {
        sev.textContent = systems[i];
        sev.style.opacity = '1';
      }, 220);
    }, 3400);
    sev.style.transition = 'opacity .22s ease';
  }

  /* 4 · The mangled line 274: a brief static flicker when it first appears. */
  var scan = document.getElementById('scanline');
  if (scan && !reduced && 'IntersectionObserver' in window) {
    var fli = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          scan.style.filter = 'contrast(1.4)';
          setTimeout(function () { scan.style.filter = 'contrast(1.12)'; }, 160);
          setTimeout(function () { scan.style.filter = 'contrast(0.9)'; }, 340);
          setTimeout(function () { scan.style.filter = 'none'; }, 520);
          fli.disconnect();
        }
      });
    }, { threshold: 0.5 });
    fli.observe(scan);
  }
})();
