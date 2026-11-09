/* Notice 19/66 — the office keeps count */
(function () {
  "use strict";

  // Count up to the number of the item: nineteen.
  var counter = document.getElementById("counter");
  if (counter) {
    var n = 0;
    var target = 19;
    var tick = function () {
      n += 1;
      counter.textContent = String(n).padStart(2, "0");
      if (n < target) {
        // hold on the smaller numbers, as the office does on names it must get right
        setTimeout(tick, n < 9 ? 260 : 110);
      }
    };
    setTimeout(tick, 500);
  }

  // Stamp the badge a member hovers over.
  var badges = document.querySelectorAll("#badges li");
  Array.prototype.forEach.call(badges, function (badge) {
    badge.addEventListener("mouseenter", function () {
      badge.style.borderLeftColor = "#c8502e";
    });
    badge.addEventListener("mouseleave", function () {
      badge.style.borderLeftColor = "";
    });
  });

  // One bootprint per claim, no more than six: the walking club.
  var notice = document.getElementById("notice");
  if (notice) {
    var prints = 0;
    notice.addEventListener("click", function (e) {
      if (e.target.closest("a")) return; // a claim, not a footprint
      if (prints >= 6) return;
      prints += 1;
      var o = document.createElement("span");
      o.className = "bootprint";
      o.textContent = "⚲";
      o.style.position = "fixed";
      o.style.left = (e.clientX - 12) + "px";
      o.style.top = (e.clientY - 26) + "px";
      o.style.zIndex = "50";
      o.style.fontSize = "30px";
      o.style.color = "rgba(217, 164, 65, 0.9)";
      o.style.pointerEvents = "none";
      o.style.transition = "opacity 2.2s ease, transform 2.2s ease";
      o.style.transform = "rotate(" + (e.clientX % 30 - 15) + "deg)";
      document.body.appendChild(o);
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          o.style.opacity = "0";
          o.style.transform = "translateY(26px)";
        });
      });
      setTimeout(function () { o.remove(); }, 2400);
    });
  }
})();
