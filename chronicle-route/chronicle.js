/* The Chronicle Route — brochure effects */
(function () {
  "use strict";

  var reduce = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // 1. Scroll reveal for the spreads
  var spreads = document.querySelectorAll(".spread, .cover");
  if (!reduce && "IntersectionObserver" in window) {
    spreads.forEach(function (el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
    });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.style.opacity = "1";
          e.target.style.transform = "none";
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    spreads.forEach(function (el) { io.observe(el); });
  }

  // 2. The ledger line: typewriter the 1952 line once when it scrolls in
  var line = document.querySelector(".ledger-line");
  if (line && !reduce && "IntersectionObserver" in window) {
    var text = line.textContent.replace(/^\s+|\s+$/g, "");
    var io2 = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        io2.unobserve(line);
        line.textContent = "";
        var i = 0;
        (function tick() {
          i += 1 + Math.floor(Math.random() * 2);
          line.textContent = text.slice(0, i);
          if (i < text.length) setTimeout(tick, 34);
        })();
      });
    }, { threshold: 0.6 });
    io2.observe(line);
  }

  // 3. Visitors-counter in the footer fine print, kept the Snuff Mill way
  var fine = document.querySelector(".fine");
  if (fine) {
    var count = 4812; // 907 + 988 + 987 + 487 + 445, roughly
    var el = document.createElement("span");
    el.style.marginLeft = "1em";
    el.style.color = "#ffd500";
    function show() {
      el.textContent = "· ledger line read to visitors: " +
        String(count).padStart(6, "0");
    }
    show();
    fine.appendChild(el);
    setInterval(function () {
      count += 1;
      show();
    }, 9000);
  }
})();
