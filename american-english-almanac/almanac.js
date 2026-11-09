/* The Saltfleet Weather Almanac — a little weather of its own */
(function () {
  "use strict";

  /* --- drizzle over the sky --- */
  var canvas = document.getElementById("rain");
  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext("2d");
    var drops = [];
    function size() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    size();
    window.addEventListener("resize", size);
    for (var i = 0; i < 70; i++) {
      drops.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        l: 6 + Math.random() * 12,
        s: 2 + Math.random() * 3
      });
    }
    function tick() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(72,97,107,0.55)";
      ctx.lineWidth = 1;
      for (var i = 0; i < drops.length; i++) {
        var d = drops[i];
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x - 2, d.y + d.l);
        ctx.stroke();
        d.y += d.s;
        d.x -= 0.4;
        if (d.y > canvas.height) {
          d.y = -d.l;
          d.x = Math.random() * canvas.width;
        }
      }
      requestAnimationFrame(tick);
    }
    tick();
  }

  /* --- the barometer keeps a small, honest weather of its own --- */
  var baro = document.getElementById("baro");
  if (baro) {
    var p = 29.91;
    setInterval(function () {
      p += (Math.random() - 0.48) * 0.02;
      if (p < 29.75) p = 29.75;
      if (p > 30.07) p = 30.07;
      baro.textContent = p.toFixed(2);
    }, 2400);
  }
})();
