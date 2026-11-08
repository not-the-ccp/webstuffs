/* A quiet pad: a slow layered sine drift across the masthead canvas.
   Purely decorative; the diary reads fine with scripting off. */
(function () {
  var canvas = document.getElementById("wave");
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext("2d");
  var W = canvas.width, H = canvas.height;
  var t = 0;

  function draw() {
    ctx.clearRect(0, 0, W, H);
    // pad layer (teal, slow)
    wave(0.5, H * 0.28, 0.008, 0.25, t * 0.6, "rgba(79, 214, 194, 0.85)");
    // magenta counter-drift
    wave(0.34, H * 0.18, 0.014, 0.5, -t * 0.45, "rgba(227, 79, 162, 0.75)");
    // drum tick (amber, steady beat)
    tick(t);
    t += 1 / 60;
    requestAnimationFrame(draw);
  }

  function wave(f, amp, k, ph, shift, color) {
    ctx.beginPath();
    for (var x = 0; x <= W; x += 2) {
      var y = H / 2 + Math.sin(x * k * 6 + ph + shift) * amp;
      if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = color;
    ctx.lineWidth = 1.4;
    ctx.stroke();
  }

  function tick(t) {
    // one amber dot per "beat", moving across the canvas
    var period = 1.6;
    var x = ((t / period) % 1) * W;
    ctx.beginPath();
    ctx.arc(x, H / 2, 2.4, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(232, 163, 61, 0.95)";
    ctx.fill();
  }

  draw();
})();
