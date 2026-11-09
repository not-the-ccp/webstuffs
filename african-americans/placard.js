/* Placard No. 9 — the reading light, the census count, the almanac line */
(function () {
  "use strict";

  var reduced = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var $ = function (id) { return document.getElementById(id); };

  /* the reading light follows the visitor across the glass */
  var light = $("light"), kase = $("case");
  if (light && kase && !reduced) {
    kase.addEventListener("mousemove", function (e) {
      var r = kase.getBoundingClientRect();
      light.style.setProperty("--lx", ((e.clientX - r.left) / r.width) * 100 + "%");
      light.style.setProperty("--ly", ((e.clientY - r.top) / r.height) * 100 + "%");
    });
  }

  /* the curator's lamp can be switched, and it stays off */
  var lamp = $("lamp");
  if (lamp) {
    lamp.addEventListener("click", function () {
      lamp.classList.toggle("off");
    });
  }

  /* the census figure counts up, and lands in full */
  var count = $("censusCount");
  if (count && !reduced) {
    var target = parseInt(count.getAttribute("data-to"), 10);
    var start = null, dur = 2600;
    function fmt(n) {
      return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    function tick(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      count.textContent = fmt(Math.round(target * eased));
      if (p < 1) {
        window.requestAnimationFrame(tick);
      } else {
        count.textContent = fmt(target);
      }
    }
    window.requestAnimationFrame(tick);
  }

  /* the almanac line writes itself, and then sits still */
  var found = $("foundText");
  if (found && !reduced) {
    var line = found.textContent;
    setTimeout(function () {
      found.classList.add("typing");
      var i = 0;
      (function type() {
        found.textContent = line.slice(0, ++i);
        if (i < line.length) {
          setTimeout(type, 26 + Math.random() * 40);
        } else {
          setTimeout(function () { found.classList.remove("typing"); }, 1600);
        }
      })();
    }, 700);
  }
})();
