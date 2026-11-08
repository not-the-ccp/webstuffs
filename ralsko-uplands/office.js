/* The upland case — a small touch for the office: ebb cards before the mast. */
(function () {
  "use strict";

  // Mark claims one by one, as if the examiner were reading them aloud.
  var claims = document.querySelectorAll(".claims-list li");
  if (!claims.length || !window.matchMedia ||
      !window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
    return;
  }

  var i = 0;
  var timer = null;

  function advance() {
    if (i > 0) {
      claims[i - 1].classList.remove("marked");
    }
    if (i < claims.length) {
      claims[i].classList.add("marked");
      claims[i].scrollIntoView({ block: "nearest" });
      i += 1;
      timer = setTimeout(advance, 900);
    } else {
      i = 0;
      timer = setTimeout(advance, 2600);
    }
  }

  // Begin the reading once the claims section enters view.
  var section = document.querySelector(".claims-list");
  if ("IntersectionObserver" in window && section) {
    var seen = false;
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !seen) {
          seen = true;
          advance();
          observer.disconnect();
        }
      });
    }, { threshold: 0.25 });
    observer.observe(section);
  } else {
    advance();
  }
})();
