/* The Salt Lake Walk — highlights the stop nearest the top of the screen */
document.addEventListener("DOMContentLoaded", function () {
  var stops = Array.prototype.slice.call(document.querySelectorAll(".stop"));
  if (!stops.length) return;
  document.body.classList.add("smooth");

  function mark() {
    var mid = window.innerHeight * 0.4;
    var current = null;
    stops.forEach(function (s) {
      var r = s.getBoundingClientRect();
      if (r.top <= mid) current = s;
    });
    stops.forEach(function (s) {
      s.classList.toggle("is-here", s === current);
    });
  }

  window.addEventListener("scroll", mark, { passive: true });
  window.addEventListener("resize", mark);
  mark();
});
