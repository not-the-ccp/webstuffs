// Small touches for the build log: a sun strip and a sheet counter.
(function () {
  var strip = document.createElement('div');
  strip.id = 'sun-strip';
  strip.setAttribute('aria-hidden', 'true');
  document.body.appendChild(strip);

  var meta = document.querySelectorAll('.entry-meta');
  meta.forEach(function (el, i) {
    el.setAttribute('data-sheet', String(i + 1));
  });
})();
