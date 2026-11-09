/* Form 3B sheet — snow, file number, and the SATISFIED stamp */
(function () {
  "use strict";

  var field = document.getElementById("snowfield");
  if (field && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var glyphs = ["*", "·", "+", "❄"];
    for (var i = 0; i < 42; i++) {
      var f = document.createElement("span");
      f.className = "flake";
      f.textContent = glyphs[i % glyphs.length];
      f.style.left = (Math.random() * 100) + "vw";
      f.style.fontSize = (0.6 + Math.random() * 0.9) + "rem";
      f.style.animationDuration = (7 + Math.random() * 12) + "s";
      f.style.animationDelay = (-Math.random() * 18) + "s";
      f.style.opacity = (0.4 + Math.random() * 0.5).toFixed(2);
      field.appendChild(f);
    }
  }

  /* file number counts up the register, as if being stamped */
  var fileNo = document.getElementById("fileNo");
  if (fileNo) {
    var target = 1884;
    var n = 1800;
    var t = setInterval(function () {
      n += 1 + Math.floor(Math.random() * 4);
      if (n >= target) { n = target; clearInterval(t); }
      fileNo.textContent = "PVM/3B/" + n;
    }, 60);
  }

  /* the examiner's stamp lands once the remarks are reached */
  var stamp = document.getElementById("stampBig");
  if (stamp && "IntersectionObserver" in window) {
    var grades = document.querySelectorAll(".grade, .held-line");
    var el = grades.length ? grades[0] : document.body;
    new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          stamp.classList.add("landed");
          obs.disconnect();
        }
      });
    }, { threshold: 0.4 }).observe(el);
  } else if (stamp) {
    stamp.classList.add("landed");
  }
})();
