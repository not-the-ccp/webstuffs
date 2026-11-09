/* Leipzig Central Lost Property Bureau — Notice 1809/47 */

(function () {
  "use strict";

  /* The stamp: first click, one thud, then it stays. */
  var stamp = document.getElementById("stamp");
  if (stamp) {
    stamp.addEventListener("click", function () {
      stamp.classList.add("stamped");
    });
    /* the night watch stamps it while you are reading */
    setTimeout(function () { stamp.classList.add("stamped"); }, 2600);
  }

  /* Note rain: a handful of falling clefs and noteheads. */
  var rain = document.getElementById("note-rain");
  if (rain) {
    var glyphs = ["\u266A", "\u266B", "\u266C", "\u2669", "\u266E", "\u266D"];
    var count = Math.min(14, Math.max(8, Math.floor(window.innerWidth / 130)));
    for (var i = 0; i < count; i++) {
      var s = document.createElement("span");
      s.textContent = glyphs[i % glyphs.length];
      s.style.left = (Math.random() * 96 + 2) + "%";
      s.style.fontSize = (1.1 + Math.random() * 1.4) + "rem";
      s.style.animationDuration = (14 + Math.random() * 22) + "s";
      s.style.animationDelay = (-Math.random() * 30) + "s";
      s.style.color = "rgba(94, 18, 20, " + (0.12 + Math.random() * 0.2) + ")";
      rain.appendChild(s);
    }
  }

  /* The clerk's counter: the holding period, renewed every winter. */
  var days = document.getElementById("claim-days");
  if (days) {
    var held = 0;
    var base = "The record is the same.";
    var ticker = setInterval(function () {
      held += 30; /* one winter renewal */
      days.textContent = base + " Ticket 1809 on the rack, day " + held + ".";
      if (held >= 120) {
        clearInterval(ticker);
        days.textContent = base + " Holding period renewed. The clerk signs: the record is the same.";
      }
    }, 2400);
    /* respect the reader: stop if the tab is not visible */
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) { clearInterval(ticker); }
    });
  }
})();
