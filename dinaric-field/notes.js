/* Dinaric Field Notes — small currents in the wire */
(function () {
  "use strict";

  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* the ink line fills as the notebook is read */
  var bar = document.querySelector(".ink-progress");
  if (bar) {
    var onScroll = function () {
      var doc = document.documentElement;
      var max = doc.scrollHeight - doc.clientHeight;
      var frac = max > 0 ? (window.scrollY || doc.scrollTop) / max : 0;
      bar.style.width = (frac * 100).toFixed(2) + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* the compass needle keeps pointing where the reader's eye wanders */
  var needle = document.getElementById("needle");
  if (needle && !reduced) {
    window.addEventListener("mousemove", function (e) {
      var x = (e.clientX / window.innerWidth) * 2 - 1; // -1 .. 1
      needle.style.transform = "rotate(" + (x * 55).toFixed(1) + "deg)";
    }, { passive: true });
    setInterval(function () {
      /* a slow breath when the cursor is still, like the Sana in a calm week */
      var base = needle.style.transform || "rotate(0deg)";
      needle.style.transform = base; // no-op keeps the last bearing
    }, 60000);
  }

  /* pressed leaves let go, slowly, from the top of the page */
  if (!reduced) {
    var count = 7;
    for (var i = 0; i < count; i++) {
      var leaf = document.createElement("span");
      leaf.className = "falling-leaf";
      leaf.style.left = (4 + Math.random() * 92) + "vw";
      leaf.style.animationDuration = (14 + Math.random() * 16).toFixed(1) + "s";
      leaf.style.animationDelay = (-Math.random() * 20).toFixed(1) + "s";
      leaf.style.opacity = (0.18 + Math.random() * 0.25).toFixed(2);
      var scale = (0.6 + Math.random() * 0.9).toFixed(2);
      leaf.style.transform = "scale(" + scale + ")";
      document.body.appendChild(leaf);
    }
  }

  /* entries lift their ink a degree as they arrive */
  var entries = document.querySelectorAll(".entry");
  if ("IntersectionObserver" in window && !reduced && entries.length) {
    var io = new IntersectionObserver(function (list) {
      list.forEach(function (item) {
        if (item.isIntersecting) {
          item.target.style.opacity = "1";
          io.unobserve(item.target);
        }
      });
    }, { threshold: 0.15 });
    entries.forEach(function (el) {
      el.style.opacity = "0.86";
      el.style.transition = "opacity 0.9s ease";
      io.observe(el);
    });
  }
})();
