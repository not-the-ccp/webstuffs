/* Itinerary OT-07 — scroll: miles walked, route fill, stop lighting */
(function () {
  var fill = document.getElementById('routeFill');
  var walker = document.getElementById('routeWalker');
  var milesEl = document.getElementById('milesRead');
  var needle = document.getElementById('cmpNeedle');
  var stops = Array.prototype.slice.call(document.querySelectorAll('.stop'));
  var TOTAL = 101.0;

  function onScroll() {
    var doc = document.documentElement;
    var max = doc.scrollHeight - window.innerHeight;
    var p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    if (fill) fill.style.width = (p * 100).toFixed(2) + '%';
    if (walker) walker.style.left = (p * 100).toFixed(2) + '%';
    if (milesEl) milesEl.textContent = (p * TOTAL).toFixed(1);

    // light the stop the walker is standing in
    var mid = window.innerHeight * 0.5;
    for (var i = 0; i < stops.length; i++) {
      var r = stops[i].getBoundingClientRect();
      if (r.top <= mid && r.bottom >= mid) {
        stops[i].classList.add('lit');
      } else if (r.top > mid) {
        stops[i].classList.remove('lit');
      }
    }
  }

  function onWheel(e) {
    if (!needle) return;
    var drift = Math.max(-40, Math.min(40,
      (parseFloat(needle.dataset.rot || '0')) + e.deltaY * 0.02));
    needle.dataset.rot = drift;
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  window.addEventListener('wheel', onWheel, { passive: true });
  onScroll();
})();
