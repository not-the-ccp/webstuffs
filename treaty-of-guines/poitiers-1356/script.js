/* A Letter of Apology upon the Matter of Poitiers — small effects.
   The candle follows the reader's hand; the seal may be pressed. */

(function () {
  "use strict";

  var candle = document.getElementById("candle");
  var press = document.getElementById("press");
  var stamp = document.getElementById("stamp");

  if (candle) {
    var tx = 50, ty = -20, cx = 50, cy = -20, raf = null;

    function tick() {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      candle.style.setProperty("--gx", cx.toFixed(2) + "%");
      candle.style.setProperty("--gy", cy.toFixed(2) + "%");
      raf = requestAnimationFrame(tick);
    }

    window.addEventListener("mousemove", function (e) {
      tx = (e.clientX / window.innerWidth) * 100;
      ty = (e.clientY / window.innerHeight) * 100 - 20;
      if (!raf) raf = requestAnimationFrame(tick);
    }, { passive: true });

    tick();
  }

  if (press && stamp) {
    press.addEventListener("click", function () {
      stamp.classList.remove("show");
      // force reflow so the animation may replay
      void stamp.offsetWidth;
      stamp.classList.add("show");
      window.setTimeout(function () {
        stamp.classList.remove("show");
      }, 1700);
    });
  }
})();
