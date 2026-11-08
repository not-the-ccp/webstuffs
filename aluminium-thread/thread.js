/* Thread Nº 214 — a light that comes back from the shelf */
(function () {
  "use strict";

  // The window-light trick: the shimmer pauses briefly over whichever
  // post is being read, as if the metal in that post were flashing.
  var head = document.querySelector(".thread-head");
  var shimmer = document.querySelector(".shimmer");
  if (head && shimmer) {
    head.addEventListener("pointermove", function (e) {
      var w = head.clientWidth || 1;
      var x = ((e.clientX - head.getBoundingClientRect().left) / w) * 100;
      shimmer.style.animation = "none";
      shimmer.style.transition = "background-position 0.2s";
      shimmer.style.background =
        "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.6) 50%, transparent 60%)";
      shimmer.style.backgroundSize = "300% 100%";
      shimmer.style.backgroundPosition = x + "% 0";
      clearTimeout(window.__shineTimer);
      window.__shineTimer = setTimeout(function () {
        shimmer.style.background = "";
        shimmer.style.backgroundSize = "";
        shimmer.style.backgroundPosition = "";
        shimmer.style.animation = "";
      }, 1200);
    });
  }

  // A quiet last-seen clock in the thread meta line.
  var meta = document.querySelector(".thread-meta");
  var started = Date.now();
  if (meta) {
    var span = meta.querySelector(".tag");
    var label = document.createElement("span");
    meta.appendChild(document.createTextNode(" \u00b7 "));
    meta.appendChild(label);
    setInterval(function () {
      var m = Math.floor((Date.now() - started) / 60000);
      label.textContent = m < 1 ? "replies land any minute" : m + " minute" + (m === 1 ? "" : "s") + " since the thread was read";
      if (span) span.textContent = m < 1 ? "FOUND, NOT LOST" : "FOUND, STILL FOUND";
    }, 30000);
  }

  // Posts flash like polished metal when they enter the reading path.
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.transition = "box-shadow 0.6s, border-color 0.6s";
          entry.target.style.boxShadow = "4px 5px 0 rgba(43,42,39,0.10), 0 0 0 1px rgba(232,235,238,0.9)";
          entry.target.style.borderColor = "rgba(185,190,196,0.9)";
          setTimeout(function () {
            entry.target.style.boxShadow = "";
            entry.target.style.borderColor = "";
          }, 900);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.35 });
    document.querySelectorAll(".post").forEach(function (p) { io.observe(p); });
  }
})();
