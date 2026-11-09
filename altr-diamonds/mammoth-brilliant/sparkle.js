/* Sparkle field for the Mammoth Brilliant product sheet.
   A quiet canvas of grading-lamp glints; the page reads fine without it. */
(function () {
  'use strict';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) return;

  var canvas = document.createElement('canvas');
  canvas.id = 'sparkles';
  document.body.appendChild(canvas);
  var ctx = canvas.getContext('2d');
  var W, H, dpr;
  var glints = [];
  var COUNT = 42;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function newGlint(anywhere) {
    return {
      x: Math.random() * W,
      y: anywhere ? Math.random() * H : H + 10,
      r: 0.6 + Math.random() * 1.8,
      vy: 0.08 + Math.random() * 0.28,
      phase: Math.random() * Math.PI * 2,
      speed: 0.02 + Math.random() * 0.05
    };
  }

  function diamond(x, y, r) {
    ctx.beginPath();
    ctx.moveTo(x, y - r * 2.2);
    ctx.lineTo(x + r, y);
    ctx.lineTo(x, y + r * 2.2);
    ctx.lineTo(x - r, y);
    ctx.closePath();
    ctx.fill();
  }

  function frame(t) {
    ctx.clearRect(0, 0, W, H);
    for (var i = 0; i < glints.length; i++) {
      var g = glints[i];
      g.y -= g.vy;
      g.phase += g.speed;
      var twinkle = Math.max(0, Math.sin(g.phase));
      var alpha = 0.10 + 0.55 * twinkle * twinkle;
      ctx.fillStyle = 'rgba(159, 240, 255,' + alpha.toFixed(3) + ')';
      diamond(g.x, g.y, g.r);
      if (g.y < -12) glints[i] = newGlint(false);
    }
    requestAnimationFrame(frame);
  }

  resize();
  window.addEventListener('resize', resize);
  for (var i = 0; i < COUNT; i++) glints.push(newGlint(true));
  requestAnimationFrame(frame);
})();
