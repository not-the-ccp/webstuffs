// The Gulf Register — thread clock, Gulf time (UTC-5)
(function () {
  "use strict";

  var el = document.getElementById("board-clock");
  if (!el) return;

  function two(n) { return n < 10 ? "0" + n : "" + n; }

  function tick() {
    var now = new Date();
    var utc = now.getTime() + now.getTimezoneOffset() * 60000;
    var gulf = new Date(utc - 5 * 3600000);
    var h = gulf.getHours();
    var ap = h < 12 ? "am" : "pm";
    var h12 = h % 12; if (h12 === 0) h12 = 12;
    el.textContent = h12 + ":" + two(gulf.getMinutes()) + " " + ap;
  }

  tick();
  setInterval(tick, 30000);

  // Briefly mark the loft's line when the page opens.
  var line = document.querySelector(".loft-line");
  if (line) {
    var card = line.closest(".post");
    if (card) {
      card.classList.add("highlight");
      setTimeout(function () { card.classList.remove("highlight"); }, 4000);
    }
  }
})();
