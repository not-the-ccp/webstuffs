// Thread No. 114 — the bench lamp. Lit by default; one press sets the evening.
(function () {
  var lamp = document.getElementById('lamp');
  var state = document.getElementById('lampstate');
  if (!lamp || !state) return;

  lamp.classList.add('lit');
  var lit = true;

  function toggle() {
    lit = !lit;
    lamp.classList.toggle('lit', lit);
    document.body.classList.toggle('lamplit', lit);
    state.textContent = lit
      ? 'Bench lamp: lit · one evening set'
      : 'Bench lamp: unlit · the fog keeps the thread';
  }

  lamp.addEventListener('click', toggle);
  lamp.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  });
})();
