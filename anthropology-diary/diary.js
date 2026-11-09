/* The Thule Notebook — snow over the ice, and entries that thaw in. */
(function () {
  "use strict";

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ——— entries fade in as the reader reaches them ——— */
  var entries = document.querySelectorAll(".entry");
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (box) {
      box.forEach(function (item) {
        if (item.isIntersecting) {
          item.target.classList.add("seen");
          io.unobserve(item.target);
        }
      });
    }, { threshold: 0.12 });
    entries.forEach(function (el) { io.observe(el); });
  } else {
    entries.forEach(function (el) { el.classList.add("seen"); });
  }

  /* ——— a light, patient snowfall ——— */
  if (reduce) return;
  var canvas = document.getElementById("snow");
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext("2d");
  var flakes = [];
  var N = 90;

  function size() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  size();
  window.addEventListener("resize", size);

  function newFlake(top) {
    return {
      x: Math.random() * canvas.width,
      y: top ? -10 : Math.random() * canvas.height,
      r: 0.8 + Math.random() * 2.1,
      vy: 0.3 + Math.random() * 0.9,
      vx: -0.2 + Math.random() * 0.4,
      sway: Math.random() * Math.PI * 2,
      swaySpeed: 0.004 + Math.random() * 0.01,
      a: 0.25 + Math.random() * 0.5
    };
  }
  for (var i = 0; i < N; i++) flakes.push(newFlake(false));

  var t = 0;
  function tick() {
    t += 1;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ffffff";
    for (var i = 0; i < flakes.length; i++) {
      var f = flakes[i];
      f.sway += f.swaySpeed;
      f.y += f.vy;
      f.x += f.vx + Math.sin(f.sway) * 0.35;
      if (f.y > canvas.height + 6) { flakes[i] = f = newFlake(true); }
      if (f.x > canvas.width + 8) f.x = -8;
      if (f.x < -8) f.x = canvas.width + 8;
      ctx.globalAlpha = f.a * (0.7 + 0.3 * Math.sin(t * 0.02 + f.sway));
      ctx.beginPath();
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();
