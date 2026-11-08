/* The Dismantling Diary — rain, reveals, and one radio ripple */

(function () {
  "use strict";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* Rain over the sky */
  var rain = document.getElementById("rain");
  if (rain && !reduced) {
    for (var i = 0; i < 70; i++) {
      var d = document.createElement("span");
      d.className = "drop";
      d.style.left = (Math.random() * 100) + "vw";
      d.style.animationDuration = (0.8 + Math.random() * 0.9) + "s";
      d.style.animationDelay = (Math.random() * 4) + "s";
      d.style.opacity = (0.25 + Math.random() * 0.5).toFixed(2);
      rain.appendChild(d);
    }
  }

  /* Reveal entries as the reader climbs the pages */
  var entries = document.querySelectorAll(".entry");
  if ("IntersectionObserver" in window && !reduced) {
    var io = new IntersectionObserver(function (items) {
      items.forEach(function (item) {
        if (item.isIntersecting) {
          item.target.classList.add("revealed");
          io.unobserve(item.target);
        }
      });
    }, { threshold: 0.15 });
    entries.forEach(function (e) { io.observe(e); });
  } else {
    entries.forEach(function (e) { e.classList.add("revealed"); });
  }

  /* A small radio ripple, broadcast once the last entry is on screen */
  var last = document.querySelector(".entry.last");
  if (last && !reduced) {
    var fired = false;
    var show = function () {
      if (fired) return;
      fired = true;
      for (var r = 0; r < 3; r++) {
        var ring = document.createElement("span");
        ring.className = "ripple";
        var size = 26 + r * 30;
        ring.style.width = size + "px";
        ring.style.height = size + "px";
        ring.style.marginTop = (-size / 2) + "px";
        ring.style.marginRight = (-size / 2 + 14) + "px";
        ring.style.animation = "broadcast 2.4s ease-out " + (r * 0.45) + "s forwards";
        last.appendChild(ring);
      }
      if (!document.getElementById("ripple-key")) {
        var st = document.createElement("style");
        st.id = "ripple-key";
        st.textContent =
          "@keyframes broadcast { 0% { transform: scale(0.2); opacity: 0.9; } " +
          "100% { transform: scale(1.6); opacity: 0; } }";
        document.head.appendChild(st);
      }
      setTimeout(function () {
        last.querySelectorAll(".ripple").forEach(function (el) { el.remove(); });
      }, 3200);
    };
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (items) {
        items.forEach(function (item) {
          if (item.isIntersecting) {
            show();
            item.disconnect();
          }
        });
      }, { threshold: 0.4 }).observe(last);
    }
  }
})();
