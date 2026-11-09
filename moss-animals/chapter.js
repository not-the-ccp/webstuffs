/* Chapter IV — plankton drift for the lophophore page */
(function () {
  var canvas = document.getElementById('plankton');
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext('2d');
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var W, H, motes = [];
  var COUNT = 46; // the polyps keep company in small numbers

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function seed() {
    motes = [];
    for (var i = 0; i < COUNT; i++) {
      motes.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: 0.8 + Math.random() * 2.4,
        s: 0.15 + Math.random() * 0.5,
        ph: Math.random() * Math.PI * 2,
        gold: Math.random() < 0.3
      });
    }
  }

  function step(t) {
    ctx.clearRect(0, 0, W, H);
    for (var i = 0; i < motes.length; i++) {
      var m = motes[i];
      m.x += Math.sin(t / 2400 + m.ph) * 0.35 + 0.06;
      m.y += Math.cos(t / 3100 + m.ph) * 0.22 + m.s * 0.18;
      if (m.x > W + 4) m.x = -4;
      if (m.y > H + 4) m.y = -4;
      if (m.y < -4) m.y = H + 4;
      var tw = 0.25 + 0.35 * (0.5 + 0.5 * Math.sin(t / 700 + m.ph * 3));
      ctx.beginPath();
      ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
      ctx.fillStyle = m.gold
        ? 'rgba(255,214,107,' + tw + ')'
        : 'rgba(155,231,255,' + tw + ')';
      ctx.fill();
    }
    if (!reduce) requestAnimationFrame(step);
  }

  window.addEventListener('resize', function () { resize(); seed(); });
  resize();
  seed();
  if (reduce) { step(0); } else { requestAnimationFrame(step); }
})();
