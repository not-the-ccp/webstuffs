// The Geneva Register — small touches for Thread No. 4411.
// Readable without this file; it only adds the volunteer tally and post stamps.
(function () {
  "use strict";

  // Tally of volunteers, members and staff, counting up to 16,000,000.
  var tagline = document.querySelector(".tagline");
  if (tagline) {
    var target = 16000000;
    var span = document.createElement("span");
    span.className = "tally";
    span.setAttribute("aria-label", "approximately 16 million");
    tagline.insertAdjacentElement("beforebegin", span);
    var start = null;
    var duration = 2600;
    function frame(ts) {
      if (!start) start = ts;
      var t = Math.min(1, (ts - start) / duration);
      var eased = 1 - Math.pow(1 - t, 3);
      span.textContent = "\u2248" + Math.round(target * eased).toLocaleString("en-GB");
      if (t < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  // Stamp each post "KEPT" when it scrolls into view.
  var posts = document.querySelectorAll(".post");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var h = entry.target.querySelector("header");
          if (h && !h.querySelector(".kept")) {
            var s = document.createElement("span");
            s.className = "kept postno";
            s.textContent = "KEPT";
            h.appendChild(s);
          }
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    posts.forEach(function (p) { io.observe(p); });
  }
})();
