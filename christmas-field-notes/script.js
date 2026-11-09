/* Ashley Midwinter — Field Notes · script.js */
/* Falling snow (canvas) and two cosmetic switches. Text stays readable without it. */

(function () {
  var canvas = document.getElementById("snow");
  var ctx;
  var flakes = [];
  var width, height;

  if (!canvas || !canvas.getContext) return;
  ctx = canvas.getContext("2d");

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  for (var i = 0; i < 60; i++) {
    flakes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 4 + 1,
      d: Math.random() * Math.PI * 2,
      s: Math.random() * 1 + 0.5
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "rgba(244, 245, 238, 0.85)";
    ctx.beginPath();
    for (var i = 0; i < flakes.length; i++) {
      var f = flakes[i];
      f.y += f.s;
      f.d += 0.01;
      f.x += Math.sin(f.d) * 0.6;
      if (f.y > height) { f.y = -10; f.x = Math.random() * width; }
      ctx.moveTo(f.x, f.y);
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
    }
    ctx.fill();
    requestAnimationFrame(draw);
  }
  draw();

  var logButton = document.getElementById("log-button");
  var candleButton = document.getElementById("candle-button");
  var body = document.body;

  if (logButton) {
    logButton.addEventListener("click", function () {
      body.classList.toggle("log-lit");
      logButton.textContent = body.classList.contains("log-lit") ? "Damp the Yule log" : "Light the Yule log";
    });
  }
  if (candleButton) {
    candleButton.addEventListener("click", function () {
      body.classList.toggle("candle-lit");
      candleButton.textContent = body.classList.contains("candle-lit") ? "Shutter the light" : "Reading light";
    });
  }
})();
