/* Transmission Register — Error TM-2008 : decorative behaviour only */
(function () {
  'use strict';
  var returnLink = document.querySelector('.see-also a');
  if (!returnLink) return;
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      event.preventDefault();
      returnLink.focus();
    }
  });
})();
