/* A quiet touch: the stamp straightens as it dries, and the postmark
   "stamps down" once when the letter loads. Text remains fully readable
   with scripting disabled. */
(function () {
  "use strict";

  var stamp = document.querySelector(".stamp");
  var postmark = document.querySelector(".postmark");

  if (postmark) {
    postmark.style.transition = "none";
    postmark.style.transform = "rotate(9deg) translateX(-0.4rem) scale(1.35)";
    postmark.style.opacity = "0";
    // force reflow, then let it stamp down
    void postmark.offsetWidth;
    postmark.style.transition = "transform 0.45s cubic-bezier(0.36, 1.6, 0.5, 1), opacity 0.25s ease";
    postmark.style.transform = "rotate(7deg) translateX(-0.4rem) scale(1)";
    postmark.style.opacity = "0.85";
  }

  if (stamp) {
    stamp.addEventListener("click", function () {
      stamp.style.transform =
        stamp.style.transform === "rotate(0deg)"
          ? "rotate(-2deg)"
          : "rotate(0deg)";
    });
    stamp.title = "Stamp No. 60 — click to straighten it";
  }

  // count the four years off, silently, in the postmark's third line
  if (postmark) {
    var line3 = postmark.querySelector(".pm-line3");
    if (line3) {
      var years = [2026, 1930, 1934, 1938, 1950, 1954, 1958, 1962, 1966,
        1970, 1974, 1978, 1982, 1986, 1990, 1994, 1998, 2002, 2006,
        2010, 2014, 2018, 2022];
      var i = 0;
      var base = line3.textContent;
      setInterval(function () {
        i = (i + 1) % years.length;
        line3.textContent = "EDITION " + years[i];
        if (years[i] === 2026) line3.textContent = base;
      }, 1600);
    }
  }
})();
