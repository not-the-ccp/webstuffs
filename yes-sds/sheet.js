/* Yes — Safety Data Sheet No. 1995-05-15: the exposure clock */
(function () {
  "use strict";

  // A small, quiet clock: the song is 4:11 long. We tick through one
  // listening of it, and mark the bridge at 3:47 with a pulse.
  var TOTAL = 4 * 60 + 11;   // seconds
  var BRIDGE = 3 * 60 + 47;

  function two(n) { return (n < 10 ? "0" : "") + n; }

  var clock = document.createElement("p");
  clock.className = "signal clock";
  clock.setAttribute("role", "status");
  clock.innerHTML =
    "<strong>Exposure monitor:</strong> <span class=\"clock-t\">0:00</span> / 4:11" +
    " · <span class=\"clock-b\">bridge in 3:47</span>";

  var head = document.querySelector(".head-hazard");
  if (head) head.insertBefore(clock, head.querySelector(".signal"));

  var t = document.querySelector(".clock-t");
  var b = document.querySelector(".clock-b");
  var sec = 0;

  setInterval(function () {
    sec = (sec + 1) % (TOTAL + 24); // a 24-second rest between listens
    if (t) t.textContent = two(Math.floor(Math.min(sec, TOTAL) / 60)) + ":" + two(Math.min(sec, TOTAL) % 60);
    if (b) {
      var remain = BRIDGE - sec;
      b.textContent = sec > BRIDGE && sec < TOTAL
        ? "in the bridge — eyes closed"
        : remain <= 10 ? "bridge in " + remain + " s" : "bridge at 3:47";
      b.style.color = remain >= 0 && remain <= 5 ? "#8a2f21" : "";
    }
  }, 1000);
})();
