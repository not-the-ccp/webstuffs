/* FM/RS-49 — ledger strip & station clock for Chapter XLIX */
(function () {
  'use strict';

  var lines = [
    '49\u00B000\u2032 N \u00B7 LEDGER OPEN',
    'ENTRY 01 \u00B7 K\u00D6LN UNIFORM \u00B7 2010 \u00B7 LINE WRITTEN ONCE',
    'ENTRY 02 \u00B7 STUTTGART RED \u00B7 2014\u201317 \u00B7 NO OBJECTION',
    'ENTRY 03 \u00B7 HSV SASH \u00B7 TWO LINES, TWO CROSINGS',
    'ENTRY 04 \u00B7 MAINZ 05 \u00B7 RESIDENCE LONGEST \u00B7 BOOK THICKEST HERE',
    'ENTRY 05 \u00B7 N\u00DCRNBERG LOAN \u00B7 ONE SEASON, ONE LINE, NO ROUNDING',
    'ENTRY 06 \u00B7 LION CITY SAILORS \u00B7 LINE STILL OPEN',
    'KEEPER\u2019S RULE \u00B7 ONE LEDGER \u00B7 ONE LINE PER HEAD \u00B7 EXACT CHANGE',
    'STAMP CHECKED TWICE \u00B7 ENTERED ONCE',
    'NEXT CROSSING \u00B7 25 FEBRUARY, DATE OF BIRTH, FULL FIGURE'
  ];

  var textEl = document.getElementById('ledger-text');
  if (!textEl) return;

  var idx = 0;
  var caret = '\u258B';

  function render() {
    idx = (idx + 1) % lines.length;
    textEl.textContent =
      lines[idx] + '  \u00B7  ' + lines[(idx + 1) % lines.length] +
      '  \u00B7  ' + lines[(idx + 2) % lines.length] + '  \u00B7  ' + caret;
  }

  // rotate the ledger lines; the CSS animation keeps the strip drifting
  render();
  setInterval(render, 11000);

  // the open line in Exhibit A gets a slow "pen" highlight on scroll
  var table = document.querySelector('.ledger-table');
  if (table && 'IntersectionObserver' in window) {
    var rows = table.querySelectorAll('tbody tr');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) entry.target.classList.add('at-bench');
        else entry.target.classList.remove('at-bench');
      });
    }, { threshold: 0.6 });
    rows.forEach(function (r) { io.observe(r); });
  }
})();
