/* im-goin-down — interactive timeline (progressive enhancement) */
(function () {
  'use strict';

  document.documentElement.classList.add('js');

  var heads = document.querySelectorAll('.timeline .event-head');
  heads.forEach(function (head) {
    head.setAttribute('aria-expanded', 'false');
    head.setAttribute('tabindex', '0');

    function toggle() {
      var event = head.closest('.event');
      var open = event.classList.toggle('open');
      head.setAttribute('aria-expanded', String(open));
    }

    head.addEventListener('click', toggle);
    head.addEventListener('keydown', function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggle();
      }
    });
  });
})();
