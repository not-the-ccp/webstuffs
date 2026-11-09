(function () {
  'use strict';

  var legs = document.querySelectorAll('.leg');
  var counter = document.getElementById('leg-counter');
  var prev = document.getElementById('prev-leg');
  var next = document.getElementById('next-leg');
  var index = 0;

  function showLeg(n) {
    if (n < 0) {
      n = legs.length - 1;
    }
    if (n >= legs.length) {
      n = 0;
    }
    legs.forEach(function (el, i) {
      el.classList.toggle('is-active', i === n);
      if (i === n) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
    index = n;
    if (counter) {
      counter.textContent = 'Stop ' + (index + 1) + ' of ' + legs.length;
    }
  }

  if (prev && next && counter) {
    prev.addEventListener('click', function () {
      showLeg(index - 1);
    });
    next.addEventListener('click', function () {
      showLeg(index + 1);
    });
  }

  var form = document.getElementById('pace-form');
  var result = document.getElementById('pace-result');
  if (form && result) {
    form.addEventListener('click', function (e) {
      if (e.target.id !== 'calc') {
        return;
      }
      e.preventDefault();
      var pace = parseFloat(document.getElementById('pace').value);
      var start = document.getElementById('start').value;
      var km = 2.6;
      if (!pace || pace <= 0) {
        result.textContent = 'Enter a real walking pace.';
        return;
      }
      var minutes = pace * km;
      var text = 'At ' + pace + ' minutes per kilometre, the 2.6 km tour takes about ' + Math.round(minutes) + ' minutes on foot.';
      if (start) {
        var parts = start.split(':');
        var when = new Date();
        when.setHours(parts[0], parts[1], 0, 0);
        when.setMinutes(when.getMinutes() + minutes);
        var finish = when.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        text += ' Starting at ' + start + ', you will be back at platform 2 by ' + finish + '.';
      }
      result.textContent = text;
    });
  }
})();
