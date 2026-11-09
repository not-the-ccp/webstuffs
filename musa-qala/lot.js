// Lot 2007 — drifting dust, and the hammer price.

(function () {
  "use strict";

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---- dust canvas: motes rising and drifting leftward, like wind off the Helmand ----
  var canvas = document.getElementById("dust");
  if (canvas && !reduce && canvas.getContext) {
    var ctx = canvas.getContext("2d");
    var W = 0, H = 0, motes = [];

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resize);
    resize();

    var COUNT = Math.min(90, Math.floor(W / 14));
    for (var i = 0; i < COUNT; i++) motes.push(newMote(true));

    function newMote(anywhere) {
      return {
        x: Math.random() * W,
        y: anywhere ? Math.random() * H : H + 6,
        r: 0.4 + Math.random() * 1.7,
        vy: -(0.08 + Math.random() * 0.4),
        vx: -(0.1 + Math.random() * 0.5),
        a: 0.12 + Math.random() * 0.4,
        w: Math.random() * Math.PI * 2
      };
    }

    function tick() {
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < motes.length; i++) {
        var m = motes[i];
        m.w += 0.01;
        m.x += m.vx + Math.sin(m.w) * 0.15;
        m.y += m.vy;
        if (m.y < -8 || m.x < -8) motes[i] = newMote(false);
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(224, 190, 130," + m.a + ")";
        ctx.fill();
      }
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  // ---- the hammer: a small count-up when the estimate scrolls into view ----
  var el = document.getElementById("hammer");
  if (el) {
    var TARGET = 4500;
    var started = false;

    function format(n) {
      return "£" + n.toLocaleString("en-GB");
    }

    function run() {
      if (started) return;
      started = true;
      if (reduce) { el.textContent = format(TARGET); el.classList.add("met"); return; }
      var t0 = null;
      var DUR = 1400;
      function step(ts) {
        if (!t0) t0 = ts;
        var p = Math.min(1, (ts - t0) / DUR);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = format(Math.round(TARGET * eased));
        if (p < 1) requestAnimationFrame(step);
        else { el.textContent = format(TARGET); el.classList.add("met"); }
      }
      requestAnimationFrame(step);
    }

    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { run(); io.disconnect(); }
        });
      }, { threshold: 0.4 });
      io.observe(el);
    } else {
      run();
    }
  }
})();
