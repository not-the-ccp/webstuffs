/* The Cambridgeshire Letter — a small touch: the count, checked against the kettle. */
(function () {
  var stamp = document.querySelector(".stamp");
  if (!stamp) return;
  // a slow, patient wobble, like the door they can't agree on
  var t = 0;
  setInterval(function () {
    t += 1;
    var angle = -9 + Math.sin(t / 9) * 2.5;
    stamp.style.transform = "rotate(" + angle.toFixed(2) + "deg)";
  }, 420);

  // the fog lifts, briefly, at random
  var fog = document.querySelector(".fog");
  if (fog) {
    setInterval(function () {
      if (Math.random() < 0.35) {
        fog.style.transition = "opacity 4s ease";
        fog.style.opacity = "0.15";
        setTimeout(function () { fog.style.opacity = "1"; }, 5000);
      }
    }, 20000);
  }
})();
