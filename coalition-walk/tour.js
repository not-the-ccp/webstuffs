/* The Coalition Walk — highlights the stop nearest the top of the viewport as you scroll. */
(function () {
  var stops = Array.prototype.slice.call(document.querySelectorAll(".stop"));
  if (!stops.length) return;

  function mark() {
    var line = window.innerHeight * 0.38;
    var current = null;
    for (var i = 0; i < stops.length; i++) {
      var r = stops[i].getBoundingClientRect();
      if (r.top <= line) current = stops[i];
    }
    for (var j = 0; j < stops.length; j++) {
      stops[j].classList.toggle("current", stops[j] === current);
    }
  }

  var ticking = false;
  window.addEventListener("scroll", function () {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(function () { mark(); ticking = false; });
    }
  });
  mark();
})();
