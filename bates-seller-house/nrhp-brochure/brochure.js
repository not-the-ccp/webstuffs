/* Brochure No. 7 — counters and the official stamp */
(function () {
  "use strict";

  function fmt(n, format, suffix) {
    if (format === "compact") {
      if (n >= 1000000) return (n / 1000000).toFixed(n % 1000000 === 0 ? 0 : 1) + "M+";
      if (n >= 1000) return Math.round(n / 1000) + "K";
    }
    return n.toLocaleString("en-US") + (suffix || "");
  }

  var nums = document.querySelectorAll(".counter .num");
  nums.forEach(function (el) {
    var target = parseInt(el.getAttribute("data-count"), 10);
    var format = el.getAttribute("data-format");
    var suffix = el.getAttribute("data-suffix");
    var start = null;
    var dur = 1200;
    function step(ts) {
      if (!start) start = ts;
      var t = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - t, 3);
      el.textContent = fmt(Math.round(target * eased), format, suffix);
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });

  var btn = document.getElementById("stampBtn");
  var stamp = document.getElementById("stamp");
  if (btn && stamp) {
    btn.addEventListener("click", function () {
      stamp.classList.remove("shown");
      void stamp.offsetWidth; /* restart animation */
      stamp.classList.add("shown");
    });
  }
})();
