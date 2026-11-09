/* Sportpalast docket: click the section drawing to raise or lower the house lights. */
(function () {
  var svg = document.querySelector('.hall-section svg');
  var body = document.body;
  if (!svg) return;
  svg.style.cursor = 'pointer';
  svg.setAttribute('tabindex', '0');
  svg.setAttribute('aria-label', 'Toggle house lights');
  function toggle() {
    body.classList.toggle('lights-up');
  }
  svg.addEventListener('click', toggle);
  svg.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggle();
    }
  });
})();
