// Studio B console: a small waveform strip under the masthead,
// animated when JavaScript is available; the page is fully readable without it.
(function () {
  var wrap = document.createElement('div');
  wrap.className = 'wave';
  wrap.setAttribute('aria-hidden', 'true');
  var bars = [];
  var N = 26;
  for (var i = 0; i < N; i++) {
    var b = document.createElement('i');
    wrap.appendChild(b);
    bars.push(b);
  }
  var masthead = document.querySelector('.masthead');
  if (masthead) masthead.insertBefore(wrap, masthead.firstChild.nextSibling.nextSibling);

  function tick() {
    for (var i = 0; i < N; i++) {
      // a "drum ahead of the synths" feel: peaks drifting left to right
      var h = 20 + 65 * Math.abs(Math.sin(i * 0.55 + performance.now() / 260));
      bars[i].style.height = h.toFixed(0) + '%';
    }
    requestAnimationFrame(tick);
  }
  tick();
})();
