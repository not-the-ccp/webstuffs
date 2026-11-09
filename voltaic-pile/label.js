// The Pile — the label turns at 33⅓, while you read.
(function () {
  var disc = document.getElementById('disc');
  if (!disc) return;
  var angle = 0;
  var playing = true;

  function turn() {
    if (playing) {
      angle = (angle + 33.3 / 60) % 360; // one revolution per second, like the record
      disc.style.transform = 'rotate(' + angle + 'deg)';
    }
    requestAnimationFrame(turn);
  }

  disc.addEventListener('click', function () {
    playing = !playing;
    disc.style.transition = playing ? 'none' : 'transform .8s ease-out';
  });

  turn();
})();
