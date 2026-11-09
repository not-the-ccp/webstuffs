// The Enclave Walk — the rail pin follows the walk.
(function () {
  var pin = document.getElementById('rail-pin');
  if (!pin) return;

  function place() {
    var doc = document.documentElement;
    var max = doc.scrollHeight - window.innerHeight;
    var f = max > 0 ? (window.scrollY / max) : 0;
    pin.style.top = (4 + f * 92) + '%';
  }

  window.addEventListener('scroll', place, { passive: true });
  window.addEventListener('resize', place);
  place();
})();
