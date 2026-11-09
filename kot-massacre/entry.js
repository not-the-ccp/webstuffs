/* The Kot — drifting marigold petals over the armory night */
(function () {
  var canvas = document.getElementById("petals");
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext("2d");
  var petals = [];
  var COUNT = 26;

  function size() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", size);
  size();

  function make() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 2 + Math.random() * 3.5,
      vy: 0.15 + Math.random() * 0.4,
      vx: -0.15 + Math.random() * 0.3,
      sway: Math.random() * Math.PI * 2,
      swaySpeed: 0.004 + Math.random() * 0.008,
      hue: 32 + Math.random() * 14,
      alpha: 0.35 + Math.random() * 0.4
    };
  }

  for (var i = 0; i < COUNT; i++) petals.push(make());

  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < petals.length; i++) {
      var p = petals[i];
      p.sway += p.swaySpeed;
      p.x += p.vx + Math.sin(p.sway) * 0.35;
      p.y += p.vy;
      if (p.y > canvas.height + 10 || p.x < -12 || p.x > canvas.width + 12) {
        petals[i] = make();
        petals[i].y = -10;
        continue;
      }
      ctx.beginPath();
      ctx.ellipse(p.x, p.y, p.r, p.r * 0.65, p.sway, 0, Math.PI * 2);
      ctx.fillStyle = "hsla(" + p.hue + ", 88%, 58%, " + p.alpha + ")";
      ctx.fill();
    }
    requestAnimationFrame(tick);
  }
  tick();
})();
