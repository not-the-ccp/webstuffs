// Sparse drift for the almanac: a thin fall of snow, always faint, never over the type.
(function () {
  var canvas = document.getElementById("drift");
  if (!canvas) return;
  var ctx = canvas.getContext("2d");
  var flakes = [];
  var N = 48;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  for (var i = 0; i < N; i++) {
    flakes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 0.6 + Math.random() * 1.4,
      vy: 0.12 + Math.random() * 0.3,
      vx: -0.05 - Math.random() * 0.12,
      a: 0.12 + Math.random() * 0.2
    });
  }

  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < N; i++) {
      var f = flakes[i];
      f.x += f.vx;
      f.y += f.vy;
      if (f.y > canvas.height + 4) { f.y = -4; f.x = Math.random() * canvas.width; }
      if (f.x < -4) { f.x = canvas.width + 4; }
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,255,255," + f.a + ")";
      ctx.fill();
      ctx.strokeStyle = "rgba(92,86,74," + (f.a * 0.35) + ")";
      ctx.lineWidth = 0.4;
      ctx.stroke();
    }
    requestAnimationFrame(tick);
  }
  tick();
})();
