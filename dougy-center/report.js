// West Hillsdale Junior High — Form 9R
// Small touches for the report: the ledger counts up, the register
// line gets stamped when it scrolls into view, and the lantern
// leans a little when the page is tilted by the scroll position.

(function () {
  "use strict";

  function onVisible(el, fn) {
    if (!("IntersectionObserver" in window)) { fn(); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { fn(); io.disconnect(); }
      });
    }, { threshold: 0.4 });
    io.observe(el);
  }

  // Ledger numbers count up, then settle with a pencil tick.
  var ledger = document.querySelector(".ledger");
  if (ledger) {
    var nums = ledger.querySelectorAll("li strong");
    onVisible(ledger, function () {
      nums.forEach(function (el, i) {
        var final = el.textContent.trim();
        var isZero = final === "$0";
        var isPlus = final.indexOf("+") !== -1;
        var target = parseInt(final.replace(/\D/g, ""), 10) || 0;
        var prefix = isZero ? "$" : "";
        var suffix = isPlus ? "+" : "";
        if (!isFinite(target) || target === 0) return;
        var start = null;
        var dur = 900 + i * 140;
        function step(ts) {
          if (start === null) start = ts;
          var p = Math.min(1, (ts - start) / dur);
          p = 1 - Math.pow(1 - p, 3);
          el.textContent = prefix + Math.round(target * p) + suffix;
          if (p < 1) requestAnimationFrame(step);
          else el.textContent = final;
        }
        requestAnimationFrame(step);
      });
    });
  }

  // The verbatim register line gets a "filed" stamp.
  var verbatim = document.querySelector(".verbatim");
  if (verbatim) {
    onVisible(verbatim, function () {
      var stamp = document.createElement("span");
      stamp.className = "stamp";
      stamp.textContent = "FILED · PERIOD 4 · 14 OCT";
      verbatim.appendChild(stamp);
    });
  }

  // The lantern leans gently with scroll direction.
  var lantern = document.querySelector(".lantern");
  if (lantern) {
    var lastY = window.scrollY;
    window.addEventListener("scroll", function () {
      var y = window.scrollY;
      var d = (y - lastY) * 0.02;
      d = Math.max(-4, Math.min(4, d));
      lantern.style.rotate = d + "deg";
      lastY = y;
    }, { passive: true });
  }
})();
