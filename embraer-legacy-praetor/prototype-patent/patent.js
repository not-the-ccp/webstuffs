/* Gentle touches for the patent summary: stamp re-settles on load, claim lines light up as they scroll into view. */
(function () {
  "use strict";

  var stamp = document.querySelector(".stamp");
  if (stamp) {
    stamp.style.animation = "none";
    void stamp.offsetWidth; /* restart animation */
    stamp.style.animation = "";
  }

  var claims = document.querySelectorAll("ol.claims li");
  if ("IntersectionObserver" in window && claims.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    claims.forEach(function (c) { io.observe(c); });
  }
})();
