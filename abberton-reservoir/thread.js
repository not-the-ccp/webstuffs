// Layer de la Haye Watershed Board — thread 44
// Small touches; the thread reads fine without this.

(function () {
  "use strict";

  // Count up the thread reads figure in the boardbar, starting just short.
  var meta = document.querySelector(".boardmeta");
  if (meta && /41,203 reads/.test(meta.textContent)) {
    var target = 41203;
    var start = target - 37;
    var t0 = null;
    function step(ts) {
      if (!t0) t0 = ts;
      var p = Math.min((ts - t0) / 1200, 1);
      var n = Math.round(start + (target - start) * p);
      meta.textContent = meta.textContent.replace(
        /[\d,]+ reads/,
        n.toLocaleString("en-GB") + " reads"
      );
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  // Nudge the number tabs on scroll-in, once per post.
  var posts = document.querySelectorAll(".post");
  if ("IntersectionObserver" in window && posts.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("seen");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.2 });
    posts.forEach(function (p) { io.observe(p); });
  } else {
    posts.forEach(function (p) { p.classList.add("seen"); });
  }

  // Ring the bell: clicking a .rank warden/warden-elder handle pulses the
  // post tab, as if the sluice-hut bell gave a single strike.
  posts.forEach(function (p) {
    var tab = p.querySelector(".rank");
    if (!tab) return;
    tab.style.cursor = "pointer";
    tab.addEventListener("click", function () {
      var style = p.style;
      style.transition = "transform 90ms ease";
      style.transform = "scale(1.012)";
      setTimeout(function () {
        style.transition = "transform 240ms ease";
        style.transform = "";
      }, 90);
    });
  });
})();
