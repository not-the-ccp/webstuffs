/* Chapter IX — the queue at the yard, one dot per member, one line deep. */
(function () {
  'use strict';

  var queueEl = document.getElementById('queue');
  var joinEl = document.getElementById('join');
  if (!queueEl || !joinEl) return;

  var MAX = 24;
  var count = 0;

  function addDot(front) {
    if (count >= MAX) return;
    var dot = document.createElement('span');
    dot.className = front ? 'dot front' : 'dot';
    queueEl.appendChild(dot);
    count += 1;
    if (count >= MAX) {
      joinEl.textContent = 'Queue full — shutter closing';
      joinEl.disabled = true;
    }
  }

  joinEl.addEventListener('click', function () {
    addDot(count === 0);
  });

  // The yard fills on its own: one constituent every few seconds,
  // never more than the wall can hold.
  function fill() {
    addDot(count === 0);
    setTimeout(fill, 2600 + Math.random() * 3800);
  }
  setTimeout(fill, 1200);
})();
