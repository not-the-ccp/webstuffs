// Press the stamp: a small rubber-stamp effect on click, purely cosmetic.
(function () {
  var stamp = document.querySelector('.stamp');
  if (!stamp) return;
  var pressed = false;
  stamp.style.transition = 'transform 120ms ease-out';
  stamp.addEventListener('click', function () {
    pressed = !pressed;
    stamp.style.transform = pressed
      ? 'rotate(9deg) scale(0.94)'
      : 'rotate(9deg) scale(1)';
  });
})();
