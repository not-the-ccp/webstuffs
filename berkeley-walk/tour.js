/* Berkeley on Foot — thin progress line across the top of the page. */
(function () {
  var bar = document.getElementById('tour-progress');
  if (!bar) return;
  function update() {
    var doc = document.documentElement;
    var max = doc.scrollHeight - doc.clientHeight;
    bar.style.width = (max > 0 ? (doc.scrollTop / max) * 100 : 0) + '%';
  }
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
