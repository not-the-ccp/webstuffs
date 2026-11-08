/* Small touches for SDS-KRS-114: underline the 2019 lodging annotation
   when it scrolls into view, and give the hazard diamond a slow idle sway. */
(function () {
  "use strict";

  var lodging = document.querySelector(".sds:nth-of-type(16) p");
  if (lodging && "IntersectionObserver" in window) {
    var seen = false;
    var io = new IntersectionObserver(function (entries) {
      if (!seen && entries.some(function (e) { return e.isIntersecting; })) {
        seen = true;
        lodging.classList.add("annot");
        io.disconnect();
      }
    }, { threshold: 0.4 });
    io.observe(lodging);
  }

  var diamond = document.querySelector(".diamond");
  if (diamond) {
    var t = 0;
    var base = 45;
    function sway() {
      if (diamond.dataset.swaying) return;
      diamond.dataset.swaying = "1";
      t += 0.016;
      var deg = base + Math.sin(t * 0.6) * 2.2;
      diamond.style.transform = "rotate(" + deg + "deg)";
      requestAnimationFrame(sway);
    }
    /* wait for the entrance animation to release its fill state */
    diamond.addEventListener("animationend", sway, { once: true });
    setTimeout(function () { if (!diamond.dataset.swaying) sway(); }, 1200);
  }
})();
