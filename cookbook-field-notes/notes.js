// Notebook No. 47 — small touches: the stamp inks itself, the wing redraws.
(function () {
  var stamp = document.querySelector(".stamp");
  if (stamp) {
    stamp.style.transition = "none";
    stamp.style.opacity = "0";
    stamp.style.transform = "rotate(-7deg) scale(1.6)";
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        stamp.style.transition = "opacity 0.35s ease, transform 0.35s cubic-bezier(.2,1.6,.4,1)";
        stamp.style.opacity = "0.8";
        stamp.style.transform = "rotate(-7deg) scale(1)";
      });
    });
  }

  var paths = document.querySelectorAll(".wing path");
  paths.forEach(function (p) {
    try {
      var len = p.getTotalLength();
      p.style.strokeDasharray = len;
      p.style.strokeDashoffset = len;
      p.style.transition = "stroke-dashoffset 1.4s ease 0.3s";
      requestAnimationFrame(function () {
        requestAnimationFrame(function () { p.style.strokeDashoffset = "0"; });
      });
    } catch (e) { /* leave the sketch as drawn */ }
  });
})();
