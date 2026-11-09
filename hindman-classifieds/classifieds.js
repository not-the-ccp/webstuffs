/* The Helena Clarion — small clockwork for the classifieds page */
(function () {
  'use strict';

  // Pressing a notice's stamp marks it read (or sold), like the office does.
  var stamps = document.querySelectorAll('.ad-stamp');
  stamps.forEach(function (stamp) {
    stamp.setAttribute('role', 'button');
    stamp.setAttribute('tabindex', '0');
    stamp.setAttribute('aria-label', 'Mark this notice ' + (stamp.dataset.stamp || 'read').toLowerCase());
    function press() {
      stamp.classList.add('is-stamped');
      stamp.textContent = stamp.dataset.stamp || 'read';
    }
    stamp.addEventListener('click', press);
    stamp.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); press(); }
    });
  });

  // The catalogue line in Lot 33 is inked in slowly, once per visit,
  // as if the compositor were setting it fresh.
  var lotLine = document.querySelector('.ad--lot em');
  if (lotLine) {
    var full = lotLine.textContent;
    try {
      if (!sessionStorage.getItem('clarion-lot33')) {
        sessionStorage.setItem('clarion-lot33', '1');
        lotLine.textContent = '';
        var i = 0;
        var timer = setInterval(function () {
          lotLine.textContent = full.slice(0, ++i);
          if (i >= full.length) clearInterval(timer);
        }, 34);
      }
    } catch (e) { /* the line stands as set */ }
  }

  // The office bell: a soft count of the hour on the masthead rate strip,
  // so the reader knows how close the office is to closing.
  var note = document.getElementById('sheetNote');
  if (note) {
    var original = note.textContent;
    setInterval(function () {
      note.textContent = original + ' \u00b7 the bell is rung';
      setTimeout(function () { note.textContent = original; }, 1600);
    }, 24000);
  }
})();
