// Small change folio — the middle coin keeps its pressure.
(function () {
  "use strict";
  var nickel = document.querySelector(".nickel");
  if (!nickel) return;
  var angle = 0;
  function rest() {
    angle += 1.6;
    // The coin only moves when the page has been read a while;
    // otherwise it lies still in the palm, middle coin pressing.
    var read = Math.min(window.scrollY || 0, 400);
    var tilt = Math.sin(angle / 40) * (2 + read / 100);
    nickel.style.transform = "rotate(" + tilt.toFixed(2) + "deg)";
    window.setTimeout(rest, 900);
  }
  window.addEventListener("load", function () {
    nickel.style.animation = "none";
    rest();
  });
})();
