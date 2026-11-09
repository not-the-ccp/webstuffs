/* Embers drifting up the page — the file's only smoke. */
(function () {
  var canvas = document.getElementById("embers");
  if (!canvas) return;
  var ctx = canvas.getContext("2d");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var W, H, parts = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  function make(y) {
    return {
      x: Math.random() * W,
      y: y !== undefined ? y : H + 10,
      r: 0.8 + Math.random() * 2.2,
      vy: 0.25 + Math.random() * 0.7,
      vx: (Math.random() - 0.5) * 0.35,
      a: 0.15 + Math.random() * 0.4,
      hue: 18 + Math.random() * 26
    };
  }

  var n = Math.min(70, Math.floor(W / 18));
  for (var i = 0; i < n; i++) parts.push(make(Math.random() * H));

  function tick() {
    ctx.clearRect(0, 0, W, H);
    for (var i = 0; i < parts.length; i++) {
      var p = parts[i];
      p.y -= p.vy;
      p.x += p.vx + Math.sin(p.y * 0.01) * 0.2;
      if (p.y < -12) parts[i] = p = make();
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "hsla(" + p.hue + ", 85%, 58%, " + p.a + ")";
      ctx.shadowColor = "hsla(" + p.hue + ", 90%, 55%, 0.8)";
      ctx.shadowBlur = 6;
      ctx.fill();
      ctx.shadowBlur = 0;
    }
    if (!reduce) requestAnimationFrame(tick);
  }
  if (!reduce) requestAnimationFrame(tick);

  /* The stamp settles when the page is scrolled to the bottom. */
  var stamp = document.getElementById("stamp");
  if (stamp) {
    stamp.addEventListener("click", function () {
      stamp.style.transition = "transform 0.35s ease";
      stamp.style.transform = "rotate(0deg) scale(0.96)";
      setTimeout(function () { stamp.style.transform = ""; }, 350);
    });
  }
})();
