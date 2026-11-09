/* The Rear Watch Reading Club — flagellum table */
(function () {
  "use strict";

  var PITCH_UM = 4.4;    // micrometres per turn, E. coli filament
  var BODY_UM = 2;       // body length
  var HAIR_UM = 70;      // human hair width, for the comparison line

  var slider = document.getElementById("rpm");
  if (!slider) return;

  var rpmOut = document.getElementById("rpm-out");
  var hpsOut = document.getElementById("hps");
  var speedOut = document.getElementById("speed");
  var blsOut = document.getElementById("bls");
  var compareOut = document.getElementById("compare");
  var screw = document.querySelector("#rotor .r-screw");

  function fmt(n, digits) {
    return n.toLocaleString("en-GB", {
      minimumFractionDigits: digits,
      maximumFractionDigits: digits
    });
  }

  var last = 0;
  var angle = 0;

  function tick(ts) {
    if (!last) last = ts;
    var dt = (ts - last) / 1000;
    last = ts;
    var rpm = Number(slider.value);
    // visual rate: one on-screen revolution per 300 real turns
    angle = (angle + (rpm / 300) * 360 * dt) % 360;
    screw.style.transform = "rotate(" + angle + "deg)";
    window.requestAnimationFrame(tick);
  }

  function update() {
    var rpm = Number(slider.value);
    var hz = rpm / 60;
    var speed = hz * PITCH_UM;           // um/s
    var bls = speed / BODY_UM;           // body lengths per second

    rpmOut.textContent = fmt(rpm, 0);
    hpsOut.textContent = fmt(hz, hz < 10 ? 1 : 0);
    speedOut.textContent = fmt(speed, 0) + " \u00b5m/s";
    blsOut.textContent = fmt(bls, bls < 10 ? 1 : 0);

    var hairS = HAIR_UM / speed;
    compareOut.innerHTML =
      "At this speed a <em>coli</em> crosses a human hair (about " +
      HAIR_UM + " &micro;m) in " + fmt(hairS, hairS < 0.1 ? 2 : 1) +
      " seconds.";
  }

  slider.addEventListener("input", update);
  update();
  window.requestAnimationFrame(tick);
})();
