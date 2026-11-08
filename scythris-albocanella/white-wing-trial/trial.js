// Small touches for the transcript: reveal lines as they enter view,
// and let the seal glow if the reader taps it (the lamp, after all).
(function () {
  document.documentElement.classList.add("js");

  var lines = document.querySelectorAll(".record .ln, .record .exhibit");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    lines.forEach(function (el) { io.observe(el); });
  } else {
    lines.forEach(function (el) { el.classList.add("in"); });
  }

  var seal = document.getElementById("seal");
  if (seal) {
    seal.style.cursor = "pointer";
    seal.addEventListener("click", function () {
      seal.classList.toggle("lit");
    });
  }
})();
