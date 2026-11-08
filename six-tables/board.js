/* The West Stands — thread 0417 small board touches.
   All content is readable with JavaScript disabled. */
(function () {
  "use strict";

  // Stamp a post "READ" when it scrolls into view, one at a time.
  var posts = document.querySelectorAll(".post");
  if (!posts.length) return;

  function stamp(el) {
    if (!el.hasAttribute("data-stamped")) {
      el.setAttribute("data-stamped", "1");
      el.setAttribute("data-stamp", "READ");
    }
  }

  if ("IntersectionObserver" in window) {
    var seen = 0;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          seen += 1;
          // leave the first post unstamped: it is the thread's front
          if (entry.target !== posts[0]) {
            setTimeout(function () { stamp(entry.target); }, 220);
          }
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });
    posts.forEach(function (p) { io.observe(p); });
  } else {
    for (var i = 1; i < posts.length; i++) stamp(posts[i]);
  }
})();
