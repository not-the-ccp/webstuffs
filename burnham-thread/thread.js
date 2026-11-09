/* Trailhead Forum — Thread No. 3174: interactive timeline */

(function () {
  var events = document.querySelectorAll('#timeline .event');
  events.forEach(function (event) {
    var toggle = event.querySelector('.toggle');
    var detail = event.querySelector('.detail');
    var id = detail.getAttribute('id');
    toggle.setAttribute('aria-controls', id);

    toggle.addEventListener('click', function () {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      if (expanded) {
        detail.setAttribute('hidden', '');
        toggle.textContent = 'More';
      } else {
        detail.removeAttribute('hidden');
        toggle.textContent = 'Less';
      }
    });
  });
})();
