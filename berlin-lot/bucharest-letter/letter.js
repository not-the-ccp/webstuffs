/* The Dâmbovița Letter — No. 41
   A small touch: the flame flickers with the reader's clock, and the
   moth drifts a little further for every ten minutes past eight.
   Everything reads fine without it. */

(function () {
  "use strict";
  var flame = document.querySelector(".flame");
  var flameInner = document.querySelector(".flame-inner");
  var moth = document.querySelectorAll(".moth");
  if (!flame) return;

  function drift() {
    var now = new Date();
    var mins = now.getHours() * 60 + now.getMinutes();
    var afterEight = mins - (8 * 60 + 10);
    var wander = (afterEight % 37) - 18; // the ledger's own arithmetic
    moth.forEach(function (m) {
      m.style.marginLeft = wander * 0.15 + "px";
    });
    var s = 1 + Math.sin(now.getTime() / 480) * 0.05;
    flame.style.opacity = 0.9 + (s - 1) * 0.6;
  }

  drift();
  setInterval(drift, 2000);
})();
