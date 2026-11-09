/* The 472 crossings, counted once, at the speed a kettle comes to the boil. */
(function () {
  "use strict";

  // Insert the bridge ribbon under the cover sheet, then count up to 472.
  var ribbon = document.createElement("div");
  ribbon.className = "bridge-ribbon";
  ribbon.setAttribute("aria-hidden", "true");
  ribbon.innerHTML =
    "472 crossings &middot; no consolidation &middot; count as found: <span class=\"count\">0</span>";

  var cover = document.querySelector(".cover-sheet");
  if (cover && cover.parentNode) {
    cover.parentNode.insertBefore(ribbon, cover.nextSibling);
  }

  var target = 472;
  var countEl = ribbon.querySelector(".count");
  if (!countEl) return;

  var started = false;

  function run() {
    if (started) return;
    started = true;
    var start = null;
    var duration = 2600; // a kettle, roughly
    function tick(ts) {
      if (start === null) start = ts;
      var p = Math.min(1, (ts - start) / duration);
      // ease out, like water settling
      var eased = 1 - Math.pow(1 - p, 3);
      countEl.textContent = String(Math.round(target * eased));
      if (p < 1) {
        requestAnimationFrame(tick);
      } else {
        countEl.textContent = "472";
        countEl.style.color = "#f2c3bc";
      }
    }
    requestAnimationFrame(tick);
  }

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          run();
          io.disconnect();
        }
      });
    }, { threshold: 0.4 });
    io.observe(ribbon);
  } else {
    window.addEventListener("load", run);
  }
})();
