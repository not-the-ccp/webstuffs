/* Sleet from noon — the card's weather, behind the paper. */
(function () {
  'use strict';

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var canvas = document.getElementById('sleet');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var flakes = [];
  var lit = false;
  var running = true;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function makeFlake() {
    return {
      x: Math.random() * canvas.width,
      y: -20 - Math.random() * canvas.height,
      len: 6 + Math.random() * 10,
      vy: 2.2 + Math.random() * 3.4,
      vx: 1.1 + Math.random() * 1.6,
      a: 0.12 + Math.random() * 0.3
    };
  }

  function seed() {
    flakes = [];
    var n = Math.min(160, Math.floor(canvas.width / 9));
    for (var i = 0; i < n; i++) {
      var f = makeFlake();
      f.y = Math.random() * canvas.height;
      flakes.push(f);
    }
  }

  function step() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < flakes.length; i++) {
      var f = flakes[i];
      ctx.strokeStyle = lit
        ? 'rgba(255, 214, 170, ' + (f.a * 0.9) + ')'
        : 'rgba(205, 222, 235, ' + f.a + ')';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(f.x, f.y);
      ctx.lineTo(f.x - f.vx * 1.4, f.y - f.len);
      ctx.stroke();
      f.x += f.vx;
      f.y += f.vy;
      if (f.y > canvas.height + 20 || f.x > canvas.width + 20) {
        flakes[i] = makeFlake();
      }
    }
    if (running) requestAnimationFrame(step);
  }

  if (!reduce) {
    resize();
    seed();
    requestAnimationFrame(step);
    window.addEventListener('resize', function () {
      resize();
      seed();
    });
    document.addEventListener('visibilitychange', function () {
      running = !document.hidden;
      if (running) requestAnimationFrame(step);
    });
  } else {
    // a still sky: one quiet pass of static sleet, then nothing
    resize();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < 60; i++) {
      var f = makeFlake();
      f.y = Math.random() * canvas.height;
      ctx.strokeStyle = 'rgba(205, 222, 235, ' + (f.a * 0.5) + ')';
      ctx.beginPath();
      ctx.moveTo(f.x, f.y);
      ctx.lineTo(f.x - f.vx * 1.4, f.y - f.len);
      ctx.stroke();
    }
  }

  var stove = document.getElementById('stove');
  if (stove) {
    stove.addEventListener('click', function () {
      lit = !lit;
      document.body.classList.toggle('lit', lit);
      stove.setAttribute('aria-pressed', lit ? 'true' : 'false');
      stove.textContent = lit ? 'bank the stove' : 'light the stove';
    });
  }
})();
