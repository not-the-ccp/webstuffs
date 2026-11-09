/* The Six-String Route — the strings are load-bearing */
(function () {
  var hero = document.getElementById('hero');
  var button = document.getElementById('strum');
  if (!hero) return;

  var timer = null;

  function strum() {
    hero.classList.remove('strum');
    // force reflow so the animation can restart
    void hero.offsetWidth;
    hero.classList.add('strum');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      hero.classList.remove('strum');
    }, 1400);
  }

  button.addEventListener('click', strum);
  hero.querySelector('svg').addEventListener('click', strum);

  // a quiet idle flick, once a while, if nobody is strumming
  setInterval(function () {
    if (!document.hidden && !hero.classList.contains('strum')) {
      strum();
    }
  }, 24000);
})();
