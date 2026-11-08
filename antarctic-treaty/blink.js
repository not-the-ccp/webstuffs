// ATCS-9000 reference — caret blink. Purely cosmetic; the page reads fine without it.
(function () {
  var caret = document.querySelector('.caret');
  if (!caret) return;
  var on = true;
  setInterval(function () {
    on = !on;
    caret.classList.toggle('hidden', !on);
  }, 600);
})();
