/* A Letter of Apology — projection-room touches.
   All decorative; the letter reads fine with scripting off. */
(function () {
  "use strict";

  // 1. The lamp breathes: a slow sine over the flicker overlay.
  var flicker = document.querySelector(".flicker");
  if (flicker && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var t0 = performance.now();
    (function breathe(now) {
      var t = (now - t0) / 1000;
      var b = 0.85 + 0.15 * Math.sin(t / 3.1) * Math.sin(t / 7.7);
      flicker.style.opacity = b.toFixed(3);
      requestAnimationFrame(breathe);
    })(t0);
  }

  // 2. Dust motes drifting in the projector beam above the marquee.
  var stage = document.createElement("div");
  stage.setAttribute("aria-hidden", "true");
  stage.style.cssText =
    "position:fixed;inset:0;pointer-events:none;z-index:4;overflow:hidden;";
  var canvas = document.createElement("canvas");
  stage.appendChild(canvas);
  document.body.appendChild(stage);

  var ctx = canvas.getContext("2d");
  var motes = [];
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  for (var i = 0; i < 26; i++) {
    motes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 0.6 + Math.random() * 1.6,
      vx: (Math.random() - 0.5) * 0.12,
      vy: 0.05 + Math.random() * 0.18,
      a: 0.10 + Math.random() * 0.30,
      ph: Math.random() * Math.PI * 2
    });
  }

  function drawMotes(now) {
    var t = now / 1000;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var beamTop = 0,
        beamMid = canvas.height * 0.3;
    for (var i = 0; i < motes.length; i++) {
      var m = motes[i];
      m.x += m.vx;
      m.y += m.vy;
      if (m.y > beamMid + 120) { m.y = -4; m.x = Math.random() * canvas.width; }
      if (m.x < -4) m.x = canvas.width + 4;
      if (m.x > canvas.width + 4) m.x = -4;
      var tw = 0.6 + 0.4 * Math.sin(t * 1.4 + m.ph);
      var fade = 1 - Math.max(0, (m.y - beamMid) / 120);
      ctx.beginPath();
      ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255,217,138," + (m.a * tw * fade).toFixed(3) + ")";
      ctx.fill();
    }
    if (!reduce) requestAnimationFrame(drawMotes);
  }
  if (!reduce) requestAnimationFrame(drawMotes);
  else drawMotes(0);

  // 3. The aperture iris closes a touch on hover of the marquee.
  var marquee = document.querySelector(".marquee");
  var blades = document.querySelectorAll(".iris .blade");
  if (marquee && blades.length) {
    var closed = false;
    var target = 0; // 0 open, 1 closed
    function setBlades() {
      blades.forEach(function (b, i) {
        var off = (target * 55) % 60;
        b.style.transform = "rotate(" + off + "deg)";
        b.style.opacity = (0.55 - target * 0.45).toFixed(2);
      });
    }
    marquee.addEventListener("mouseenter", function () { target = 1; setBlades(); });
    marquee.addEventListener("mouseleave", function () { target = 0; setBlades(); });
  }

  // 4. The signature line develops like a print: slight reveal on load.
  var sig = document.querySelector(".signature");
  if (sig && !reduce) {
    sig.style.opacity = "0";
    sig.style.transition = "opacity 2.4s ease 0.8s";
    requestAnimationFrame(function () { sig.style.opacity = "1"; });
  }
})();
