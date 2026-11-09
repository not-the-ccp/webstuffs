/* The Keeper's Diary — twinkling stars, and one slow satellite */
(function () {
  "use strict";
  var canvas = document.getElementById("starfield");
  if (!canvas) return;
  var ctx = canvas.getContext("2d");
  var stars = [];
  var satellite = { x: -40, y: 120, speed: 0.35 };
  var W = 0, H = 0;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
    makeStars();
  }

  function makeStars() {
    stars = [];
    var count = Math.min(220, Math.floor((W * H) / 6500));
    for (var i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.3 + 0.3,
        base: Math.random() * 0.5 + 0.25,
        amp: Math.random() * 0.45,
        phase: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.9 + 0.25
      });
    }
  }

  function draw(t) {
    ctx.clearRect(0, 0, W, H);
    var time = t / 1000;
    for (var i = 0; i < stars.length; i++) {
      var s = stars[i];
      var a = s.base + s.amp * Math.sin(time * s.speed + s.phase);
      if (a < 0.03) a = 0.03;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(232, 228, 212, " + a.toFixed(3) + ")";
      ctx.fill();
    }
    /* the slow satellite, a small brass dot on a shallow arc */
    satellite.x += satellite.speed;
    if (satellite.x > W + 60) {
      satellite.x = -40;
      satellite.y = 60 + Math.random() * (H * 0.35);
    }
    var sy = satellite.y + Math.sin((satellite.x / W) * Math.PI * 2) * 14;
    ctx.beginPath();
    ctx.arc(satellite.x, sy, 1.8, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(230, 201, 135, 0.9)";
    ctx.fill();
    /* its faint trail */
    for (var k = 1; k <= 8; k++) {
      ctx.beginPath();
      ctx.arc(satellite.x - k * 9, sy - k * 1.2, 1.4 - k * 0.14, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(230, 201, 135, " + (0.28 - k * 0.03).toFixed(3) + ")";
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  resize();
  requestAnimationFrame(draw);
})();
