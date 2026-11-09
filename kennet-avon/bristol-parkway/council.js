/* The Joint Stationary Committee — waiting-room effects.
   The minutes read the same with or without this; the clock and the
   passing trains are only the waiting room being the waiting room. */
(function () {
  "use strict";

  /* ---- station clock, kept in the corner of the waiting room ---- */
  var clockEl = document.getElementById("station-clock");
  if (clockEl) {
    var fogNote = " the fog has not been counted.";
    var ticks = 0;
    function pad(n) { return (n < 10 ? "0" : "") + n; }
    function tick() {
      var d = new Date();
      clockEl.textContent = "Station time: " +
        pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds()) +
        fogNote;
      /* every eleventh minute the gauge keeper's clock is eleven seconds fast */
      if (d.getMinutes() % 11 === 0 && ticks % 2 === 0) {
        clockEl.textContent = "Station time: " +
          pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds()) +
          " (gauge clock, eleven seconds fast)";
      }
      ticks++;
    }
    tick();
    setInterval(tick, 1000);
  }

  /* ---- trains passing in the ticket ribbon above the minute sheet ---- */
  var row = document.getElementById("train-row");
  if (row && typeof row.ownerSVGElement !== "undefined") {
    var NS = "http://www.w3.org/2000/svg";

    function makeTrain(delay, duration, y) {
      var g = document.createElementNS(NS, "g");
      var body = document.createElementNS(NS, "rect");
      body.setAttribute("x", "-70");
      body.setAttribute("y", String(y));
      body.setAttribute("width", "52");
      body.setAttribute("height", "10");
      body.setAttribute("rx", "2");
      body.setAttribute("fill", "#ffb347");
      var nose = document.createElementNS(NS, "path");
      nose.setAttribute("d", "M -18 " + y + " h 10 l 8 10 h -18 z");
      nose.setAttribute("fill", "#ffb347");
      g.appendChild(body);
      g.appendChild(nose);
      for (var i = 0; i < 3; i++) {
        var wheel = document.createElementNS(NS, "circle");
        wheel.setAttribute("cx", String(-58 + i * 18));
        wheel.setAttribute("cy", String(y + 12));
        wheel.setAttribute("r", "2.4");
        wheel.setAttribute("fill", "#ffb347");
        g.appendChild(wheel);
      }
      var animate = document.createElementNS(NS, "animateTransform");
      animate.setAttribute("attributeName", "transform");
      animate.setAttribute("type", "translate");
      animate.setAttribute("from", "-90 0");
      animate.setAttribute("to", "1290 0");
      animate.setAttribute("dur", duration + "s");
      animate.setAttribute("begin", delay + "s");
      animate.setAttribute("repeatCount", "indefinite");
      g.appendChild(animate);
      row.appendChild(g);

      /* the puff of steam that follows the train */
      var puff = document.createElementNS(NS, "circle");
      puff.setAttribute("r", "4");
      puff.setAttribute("cy", String(y + 2));
      puff.setAttribute("cx", "-90");
      puff.setAttribute("class", "train-puff");
      puff.style.animationDuration = duration + "s";
      puff.style.animationDelay = delay + "s";
      row.appendChild(puff);
    }

    /* four platforms: four services, staggered, as the platform warden kept them */
    makeTrain(0, 9, 14);
    makeTrain(3.1, 12, 18);
    makeTrain(5.6, 10.5, 15);
    makeTrain(7.9, 14, 17);
  }
})();
