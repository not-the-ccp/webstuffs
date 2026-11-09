/* Prairie Bend Station — claim slip for vial No. 118 */
(function () {
  'use strict';

  var form = document.getElementById('claim-form');
  var line = document.getElementById('seal-line');
  var text = document.getElementById('seal-text');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var name = (document.getElementById('claim-name').value || '').trim();
    var offices = (document.getElementById('claim-office').value || '').trim();

    var caller = name ? name : 'the regular';
    var verdict;

    if (!offices) {
      verdict = 'The clerk has corked your slip and set it aside: the two offices go unspoken. The chemist requests them again, under the green lamp, before the 02:00 hour.';
    } else if (/lubric/i.test(offices) && /(acid|neutral)/i.test(offices)) {
      verdict = 'The clerk has corked the claim and applied the seal. ' + caller + ', your two offices are on the record — the lubricant, and the neutralizer of the acid — and vial No. 118 will be waiting at the office window, corked and unopened, when the rain lets you in.';
    } else {
      verdict = 'The clerk has corked the claim but the chemist has raised the green lamp: the offices, as stated, do not match the register. A second slip, in the same hand, is invited before the six months run out.';
    }

    text.textContent = verdict;
    line.hidden = false;
    line.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  /* the placard leans a little toward the cursor, as if listening */
  var placard = document.getElementById('placard');
  if (placard && window.matchMedia && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
    var ticking = false;
    window.addEventListener('mousemove', function (e) {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        var r = placard.getBoundingClientRect();
        var dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
        var dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
        dx = Math.max(-1, Math.min(1, dx));
        dy = Math.max(-1, Math.min(1, dy));
        placard.style.transform = 'perspective(1400px) rotateY(' + (dx * 1.6).toFixed(2) + 'deg) rotateX(' + (-dy * 1.2).toFixed(2) + 'deg)';
        ticking = false;
      });
    });
  }
})();
