/* Obituary No. 212 — studio dust, the green fish, and the ledger's count. */
(function () {
  "use strict";

  // Drifting dust motes in the studio light.
  var dust = document.getElementById("dust");
  if (dust) {
    var N = 26;
    for (var i = 0; i < N; i++) {
      var m = document.createElement("span");
      var size = 2 + Math.random() * 3;
      m.style.left = Math.random() * 100 + "vw";
      m.style.width = size + "px";
      m.style.height = size + "px";
      m.style.animationDuration = (9 + Math.random() * 14) + "s";
      m.style.animationDelay = (-Math.random() * 20) + "s";
      m.style.opacity = String(0.15 + Math.random() * 0.4);
      if (Math.random() < 0.25) m.style.background = "rgba(156, 124, 47, 0.4)";
      dust.appendChild(m);
    }
  }

  // Entry 418: click to watch it turn. It has never been corrected,
  // but it has, the family insists, been observed.
  var entry = document.getElementById("last-entry");
  if (entry) {
    entry.style.cursor = "pointer";
    entry.title = "Observe, do not correct.";
    entry.addEventListener("click", function () {
      entry.classList.remove("pulse");
      void entry.offsetWidth; // restart the animation
      entry.classList.add("pulse");
    });
  }

  // The colophon count: 418 uncorrected passages and counting.
  var count = document.getElementById("count");
  if (count) {
    var n = 418;
    setInterval(function () {
      if (Math.random() < 0.2) {
        n += 1;
        count.textContent = String(n);
        count.style.transition = "none";
        count.style.color = "#3d7a52";
        requestAnimationFrame(function () {
          count.style.transition = "color 1.2s ease";
          count.style.color = "";
        });
      }
    }, 4000);
  }
})();
