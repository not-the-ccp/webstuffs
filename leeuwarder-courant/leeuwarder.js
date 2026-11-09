/* Service LC — departure board effects.
   All times are already in the HTML; this only animates them. */
(function () {
  "use strict";

  var GLYPHS = "0123456789:•";

  function scramble(el, target) {
    var frame = 0, total = 18;
    var timer = setInterval(function () {
      frame++;
      var out = "";
      for (var i = 0; i < target.length; i++) {
        out += (i < (frame / total) * target.length)
          ? target[i]
          : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
      }
      el.textContent = out;
      if (frame >= total) {
        el.textContent = target;
        clearInterval(timer);
      }
    }, 55);
  }

  var times = document.querySelectorAll(".board-time");

  if (times.length && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    times.forEach(function (el, i) {
      var target = el.getAttribute("data-t") || el.textContent;
      setTimeout(function () { scramble(el, target); }, 350 + i * 260);
    });
  }

  // "next 05:52 in H:MM:SS" — counts to the next 05:52 local.
  var count = document.getElementById("countdown");
  if (count) {
    function nextDep() {
      var now = new Date();
      var dep = new Date(now);
      dep.setHours(5, 52, 0, 0);
      if (dep <= now) dep.setDate(dep.getDate() + 1);
      return dep - now;
    }
    function tick() {
      var ms = nextDep();
      var h = Math.floor(ms / 3600000);
      var m = Math.floor((ms % 3600000) / 60000);
      var s = Math.floor((ms % 60000) / 1000);
      count.textContent =
        h + "h " + String(m).padStart(2, "0") + "m " + String(s).padStart(2, "0") + "s";
    }
    tick();
    setInterval(tick, 1000);
  }

  // clicking a row re-runs its flash
  document.querySelectorAll(".board-row").forEach(function (row) {
    row.addEventListener("click", function () {
      row.classList.remove("flash");
      void row.offsetWidth;
      row.classList.add("flash");
    });
  });
})();
