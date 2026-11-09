(function () {
  var slider = document.getElementById('year');
  if (!slider) return;

  var yearOut = document.getElementById('year-out');
  var reignOut = document.getElementById('reign-out');
  var eventOut = document.getElementById('event-out');
  var rows = document.querySelectorAll('#ledger-rows li');

  var events = {};
  rows.forEach(function (li) {
    events[li.getAttribute('data-year')] = li;
  });

  function firstYearText(li) {
    // text after the "yyyy — " lead-in
    var t = li.textContent;
    var i = t.indexOf('—');
    return i >= 0 ? t.slice(i + 1).trim() : t.trim();
  }

  function update() {
    var year = parseInt(slider.value, 10);
    var reign = year - 1967; // 1967 is the first year of the reign
    yearOut.textContent = year;
    reignOut.textContent = 'year ' + (reign + 1) + ' of the reign';

    rows.forEach(function (li) { li.classList.remove('marked'); });

    var li = events[year];
    if (li) {
      li.classList.add('marked');
      eventOut.textContent = firstYearText(li);
    } else {
      eventOut.textContent = 'No entry in the wing\u2019s ledger for this year; the long gallery was numbered, the lamps were struck, and the ledger left unmarked, as she left such years.';
    }
  }

  slider.addEventListener('input', update);
  update();
})();
