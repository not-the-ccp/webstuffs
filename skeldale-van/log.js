// The Darrowby Van — a small ledger touch: pressing the stamp "ink" it,
// and the wheels on the van line drawing spin if the page is scrolled.
(function () {
  var stamp = document.getElementById("stamp");
  if (stamp) {
    stamp.style.cursor = "pointer";
    var pressed = false;
    stamp.addEventListener("click", function () {
      pressed = !pressed;
      stamp.style.transform = pressed
        ? "rotate(-1.6deg) scale(0.96)"
        : "rotate(-1.6deg)";
      stamp.style.opacity = pressed ? "1" : "0.88";
      stamp.style.background = pressed ? "rgba(156, 59, 34, 0.08)" : "none";
    });
  }
  var svg = document.querySelector("svg.van");
  if (svg) {
    var wheels = svg.querySelectorAll("circle");
    var offset = 0;
    var ticking = false;
    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        offset += (window.scrollY % 90) - offset;
        wheels.forEach(function (w) {
          w.style.transform = "rotate(" + ((window.scrollY % 360) * 0.6) + "deg)";
          w.style.transformOrigin = "center";
          w.style.transformBox = "fill-box";
        });
        ticking = false;
      });
    });
  }
})();
