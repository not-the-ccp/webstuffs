(function () {
  'use strict';

  var form = document.getElementById('chase-calculator');
  if (!form) return;

  var runsInput = form.elements['runs'];
  var ballsInput = form.elements['balls'];
  var rateOut = document.getElementById('required-rate');
  var ballsOut = document.getElementById('balls-left');
  var noteOut = document.getElementById('calc-note');
  var noscript = document.querySelector('.calculator .noscript');

  if (noscript) {
    noscript.style.display = 'none';
  }

  function calculate() {
    var runs = parseInt(runsInput.value, 10) || 0;
    var balls = parseInt(ballsInput.value, 10) || 0;
    var rate = balls ? (runs / balls) * 6 : 0;

    rateOut.textContent = rate.toFixed(2);
    ballsOut.textContent = balls;

    if (balls > 0) {
      noteOut.textContent =
        runs + ' runs from ' + balls + ' balls = ' + rate.toFixed(2) + ' runs per over.';
    } else {
      noteOut.textContent = 'Enter a number of balls greater than zero.';
    }
  }

  form.addEventListener('input', calculate);
  form.addEventListener('change', calculate);
  calculate();

  var rows = document.querySelectorAll('.scorecard tbody tr');
  rows.forEach(function (row) {
    row.tabIndex = 0;
    row.classList.add('selectable');

    function select() {
      rows.forEach(function (r) {
        r.classList.remove('highlight');
      });
      row.classList.add('highlight');
    }

    row.addEventListener('click', select);
    row.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        select();
      }
    });
  });
})();
