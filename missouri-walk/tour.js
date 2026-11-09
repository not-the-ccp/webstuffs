(function () {
  var total = 0;
  document.querySelectorAll('.miles[data-mile]').forEach(function (el) {
    total += Number(el.getAttribute('data-mile')) || 0;
  });
  var show = document.querySelectorAll('#total-miles, #total-miles-2');
  show.forEach(function (el) {
    el.textContent = (total === Math.floor(total) ? total : total.toFixed(1)) + ' miles';
  });
  document.querySelectorAll('ul.stops li').forEach(function (li) {
    var tick = li.querySelector('.tick');
    if (!tick) {
      return;
    }
    tick.addEventListener('change', function () {
      li.style.textDecoration = tick.checked ? 'line-through' : '';
    });
  });
})();
