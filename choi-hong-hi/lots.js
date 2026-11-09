/* Sale No. 117, Lot 418 — catalogue desk scripts */
(function () {
  "use strict";

  /* The lot figure counts up from Lot 000 to Lot 418 when the page settles. */
  var figure = document.getElementById("lot-number");
  if (figure) {
    var target = parseInt(figure.getAttribute("data-value"), 10) || 418;
    var t0 = null;
    var duration = 1400;
    function step(ts) {
      if (t0 === null) t0 = ts;
      var p = Math.min((ts - t0) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      figure.textContent = String(Math.round(target * eased)).padStart(3, "0");
      if (p < 1) requestAnimationFrame(step);
      else figure.textContent = String(target);
    }
    requestAnimationFrame(step);
  }

  /* Tap the seal: it stamps onto the lot, with a second impression on repeat. */
  var seal = document.getElementById("seal");
  if (seal) {
    seal.addEventListener("click", function () {
      seal.classList.remove("stamped");
      void seal.offsetWidth; /* restart the stamp animation */
      seal.classList.add("stamped");
    });
  }

  /* The session clock: a slow gavel countdown toward the two o'clock hammer. */
  var clock = document.getElementById("session-clock");
  if (clock) {
    var hammer = new Date();
    hammer.setHours(14, 0, 0, 0);
    if (hammer.getTime() <= Date.now()) hammer.setDate(hammer.getDate() + 1);
    function tick() {
      var ms = hammer.getTime() - Date.now();
      if (ms < 0) ms = 0;
      var h = Math.floor(ms / 3600000);
      var m = Math.floor((ms % 3600000) / 60000);
      var s = Math.floor((ms % 60000) / 1000);
      clock.textContent = "the gavel at two o'clock in " +
        h + "h " + String(m).padStart(2, "0") + "m " + String(s).padStart(2, "0") + "s";
    }
    tick();
    setInterval(tick, 1000);
  }
})();
