/* The Colonial Register, Vol. IX — small machinery for the plate. */
(function () {
  "use strict";

  // Reveal entry sections as they enter the viewport.
  var entries = document.querySelectorAll(".entry");
  entries.forEach(function (el) { el.classList.add("reveal"); });

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (obs) {
      obs.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("shown");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    entries.forEach(function (el) { io.observe(el); });
  } else {
    entries.forEach(function (el) { el.classList.add("shown"); });
  }

  // When the Green Ledger's line is reached, let it settle in like wet ink.
  var ledgerLine = document.querySelector(".ledger-line");
  if (ledgerLine) {
    var seen = false;
    function inkIn() {
      if (seen) return;
      seen = true;
      ledgerLine.classList.add("inset");
    }
    if ("IntersectionObserver" in window) {
      var io2 = new IntersectionObserver(function (obs) {
        obs.forEach(function (e) {
          if (e.isIntersecting) { inkIn(); io2.disconnect(); }
        });
      }, { threshold: 0.4 });
      io2.observe(ledgerLine);
    } else {
      inkIn();
    }
  }

  // The plate's brass shield sways gently with the page scroll, like
  // something hung on a door.
  var shield = document.querySelector(".shield");
  if (shield && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var t = 0;
    var raf;
    function tick() {
      t += 0.012;
      var sway = Math.sin(t) * 1.4 + Math.min(window.scrollY / 400, 4) * 0.6;
      shield.style.transform = "rotate(" + sway + "deg)";
      raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
  }

  // Compass bearing in the running head, counting the veldt miles
  // of the reader's progress.
  var vol = document.querySelector(".vol");
  if (vol) {
    var base = vol.textContent;
    window.addEventListener("scroll", function () {
      var h = document.documentElement;
      var max = h.scrollHeight - h.clientHeight;
      var km = (max > 0 ? (h.scrollTop / max) * 1879 : 0);
      vol.textContent = base + " · bearing " + Math.floor(km) + " km";
    }, { passive: true });
  }
})();
