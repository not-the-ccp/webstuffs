/* Placard lamp: a soft wall-wash light that follows the visitor's hand.
   Purely decorative; the text is fully readable with this off. */
(function () {
  var paper = document.querySelector('.placard');
  if (!paper || !window.matchMedia || !window.matchMedia('(hover: hover)').matches) return;

  var lamp = document.createElement('div');
  lamp.className = 'placard-lamp';
  lamp.setAttribute('aria-hidden', 'true');
  paper.appendChild(lamp);

  paper.style.position = 'relative';
  paper.style.overflow = 'hidden';

  function move(e) {
    var r = paper.getBoundingClientRect();
    lamp.style.background =
      'radial-gradient(260px circle at ' +
      (e.clientX - r.left) + 'px ' + (e.clientY - r.top) +
      'px, rgba(255, 244, 214, 0.35), rgba(255, 244, 214, 0) 70%)';
    lamp.style.opacity = '1';
  }

  paper.addEventListener('mousemove', move);
  paper.addEventListener('mouseenter', move);
  paper.addEventListener('mouseleave', function () {
    lamp.style.opacity = '0';
  });
})();
