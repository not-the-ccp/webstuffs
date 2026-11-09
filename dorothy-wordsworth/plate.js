/* Plate IX — a single quiet touch: the wall reading, checked at dusk. */
(function () {
  var kicker = document.querySelector('.note-kicker');
  if (!kicker) return;
  var base = kicker.textContent;
  var bow = 14; // millimetres out of true, at the middle of the wall
  var id = setInterval(function () {
    bow += Math.random() < 0.5 ? -0.5 : 0.5;
    bow = Math.max(13.5, Math.min(14.5, bow));
    kicker.textContent = base + ' — the wall, checked this evening: ' + bow.toFixed(1) + ' mm out of true';
  }, 4000);
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) { clearInterval(id); kicker.textContent = base; }
  });
})();
