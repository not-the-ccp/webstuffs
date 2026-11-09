/* The Gentle Pen — the reading lamp follows the reader down the page */
(function () {
  "use strict";
  var lamp = document.createElement("span");
  lamp.className = "lamp";
  lamp.setAttribute("aria-hidden", "true");
  document.body.appendChild(lamp);

  var last = 0;
  function place() {
    var doc = document.documentElement;
    var max = doc.scrollHeight - window.innerHeight;
    var frac = max > 0 ? Math.min(1, window.scrollY / max) : 1;
    var x = 1.2 + 0; // keep the lamp at the right hand
    var y = 1.2 + frac * Math.max(0, window.innerHeight - 3.2);
    lamp.style.left = x + "rem";
    lamp.style.right = "auto";
    lamp.style.top = y + "rem";
  }
  function onScroll() {
    if (last === window.scrollY) return;
    last = window.scrollY;
    place();
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  place();
})();
