/* A quiet fall of snow behind the sheet. Purely ornamental;
   the page reads fine with this removed. */
(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reduce.matches) return;

  var c = document.getElementById("fall");
  if (!c) return;
  var ctx = c.getContext("2d");
  var flakes = [];
  var W, H;

  function resize() {
    W = c.width = window.innerWidth;
    H = c.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  for (var i = 0; i < 70; i++) {
    flakes.push({
      x: Math.random() * W,
      y: Math.random() * H,
      r: 0.6 + Math.random() * 1.6,
      s: 0.15 + Math.random() * 0.4,
      d: Math.random() * Math.PI * 2
    });
  }

  function tick() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = "#31465e";
    for (var i = 0; i < flakes.length; i++) {
      var f = flakes[i];
      f.d += 0.01;
      f.x += Math.sin(f.d) * 0.3;
      f.y += f.s;
      if (f.y > H + 4) { f.y = -4; f.x = Math.random() * W; }
      ctx.globalAlpha = 0.12 + (f.r / 2.2) * 0.25;
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
      ctx.fill();
    }
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();
