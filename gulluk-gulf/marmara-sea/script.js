/* Sea of Marmara — Field Notes · Entry M-1
   Interactive touches: a tide ripple under the page and a pressed-leaf
   fragment that dries and re-dries when clicked. The text is fully
   readable without this script. */

(function () {
  'use strict';

  // Tide ripple canvas behind the content.
  (function ripple() {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.style.position = 'fixed';
    canvas.style.inset = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '1';
    document.body.appendChild(canvas);

    var drops = [];
    var w, h;
    var running = true;

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    document.addEventListener('mousemove', function (e) {
      drops.push({ x: e.clientX, y: e.clientY, r: 0, a: 1 });
    });

    function draw() {
      if (running) {
        ctx.clearRect(0, 0, w, h);
      }
      for (var i = drops.length; i--; ) {
        var d = drops[i];
        d.r += 1.8;
        d.a -= 0.014;
        if (d.a <= 0) {
          drops.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, 2 * Math.PI);
        ctx.strokeStyle = 'rgba(11, 36, 54, ' + d.a + ')';
        ctx.lineWidth = 2.2;
        ctx.stroke();
      }
      requestAnimationFrame(draw);
    }
    draw();

    // Stop after ten minutes so the page keeps its own reckoning.
    setTimeout(function () { running = false; }, 1000 * 60 * 10);
  })();

  // Pressed-leaf fragment: click to dry / re-wet.
  (function fragment() {
    var fragments = document.querySelectorAll('.fragment');
    fragments.forEach(function (el) {
      el.style.cursor = 'pointer';
      el.title = 'press the leaf';
      el.addEventListener('click', function () {
        el.classList.toggle('dried');
      });
    });
  })();
})();
