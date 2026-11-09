/* Entry 2004/363 — almanac touches: a slow fall of winter dots
   over the sky band, and a live line of figures under the masthead. */
(function () {
  "use strict";

  /* --- falling dots: only over the dark sky band at the top ---------------- */
  var canvas = document.getElementById("fall");
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext("2d");
  var dots = [];
  var N = 60;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  function makeDot(randomY) {
    return {
      x: Math.random() * canvas.width,
      y: randomY ? Math.random() * canvas.height : -6,
      r: 0.8 + Math.random() * 1.8,
      vy: 0.25 + Math.random() * 0.55,
      vx: -0.15 + Math.random() * 0.3,
      a: 0.35 + Math.random() * 0.5
    };
  }
  for (var i = 0; i < N; i++) dots.push(makeDot(true));

  function step() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var horizon = canvas.height * 0.72;
    for (var i = 0; i < dots.length; i++) {
      var d = dots[i];
      d.y += d.vy;
      d.x += d.vx + Math.sin(d.y * 0.012) * 0.2;
      if (d.y > horizon || d.x < -8 || d.x > canvas.width + 8) {
        dots[i] = makeDot(false);
        continue;
      }
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(244, 241, 232, " + d.a + ")";
      ctx.fill();
    }
    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);

  /* --- the figures line under the masthead ---------------------------------- */
  var ticker = document.getElementById("ticker");
  if (ticker) {
    var lines = [
      "31\u00B0F \u00B7 barometer 29.91 inHg, steady \u00B7 sky clear \u00B7 circuit closed",
      "reuptake complete \u00B7 strait warm on both walls \u00B7 no rain out",
      "day 363 of 366 \u00B7 the pineal reading is taken \u00B7 the book closes",
      "epinephrine \u00B7 norepinephrine \u00B7 dopamine \u00B7 one strait, two walls",
      "92 years, 7 months \u00B7 the fixture does not move; the sky moves around it"
    ];
    var idx = 0;
    setInterval(function () {
      idx = (idx + 1) % lines.length;
      ticker.style.opacity = "0";
      setTimeout(function () {
        ticker.textContent = lines[idx];
        ticker.style.opacity = "1";
      }, 450);
    }, 5200);
    ticker.style.transition = "opacity 0.45s";
  }
})();
