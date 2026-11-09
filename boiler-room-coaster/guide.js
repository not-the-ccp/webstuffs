/* The Boiler Room — a car that runs the track, slowly, on loop.
   Purely decorative; the entry reads fine with this off. */
(function () {
  var path = document.getElementById("trackpath");
  var car = document.getElementById("carnet");
  if (!path || !car || !path.getTotalLength) return;

  var len = path.getTotalLength();
  var t = 0;
  var DURATION = 22000; // one full circuit

  function tick() {
    t = (t + 1000 / 60 / DURATION) % 1;
    var p = path.getPointAtLength(t * len);
    car.setAttribute("cx", p.x);
    car.setAttribute("cy", p.y);
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();
