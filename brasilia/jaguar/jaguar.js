/* Studio 4: VU meters, dB readouts, and the breathing in the kennel */
(function () {
  "use strict";

  var vuMain = document.getElementById("vu-main");
  var vuPhone = document.getElementById("vu-phone");
  var dbMain = document.getElementById("db-main");
  var dbPhone = document.getElementById("db-phone");
  var onair = document.getElementById("onair");
  var apron = document.getElementById("apron");

  if (!vuMain) return;

  // A slow "breathing" envelope: the kennel behind the door.
  var t = 0;
  function level(base, jitter, breath) {
    return Math.max(0.05, Math.min(1, base + breath + (Math.random() - 0.5) * jitter));
  }

  function setBar(bar, v) {
    bar.style.height = Math.round(v * 100) + "%";
  }

  function tick() {
    t += 0.09;
    var breath = 0.32 * Math.sin(t) + 0.08 * Math.sin(t * 2.7); // the onça, breathing
    var mainBars = vuMain.querySelectorAll("i");
    var phoneBars = vuPhone.querySelectorAll("i");

    var peak = 0;
    for (var i = 0; i < mainBars.length; i++) {
      var v = level(0.42 + breath * 0.5, 0.5, breath * 0.22);
      setBar(mainBars[i], v);
      if (v > peak) peak = v;
    }
    var phoneBreath = breath * 0.5;
    var phonePeak = 0;
    for (var j = 0; j < phoneBars.length; j++) {
      var w = level(0.2 + phoneBreath * 0.4, 0.34, phoneBreath * 0.18);
      setBar(phoneBars[j], w);
      if (w > phonePeak) phonePeak = w;
    }

    // dB readouts drift with the meters, and pin to 0 when the room is loud.
    if (dbMain) dbMain.textContent = peak > 0.96 ? "0" : String(Math.round(-60 + peak * 54));
    if (dbPhone) dbPhone.textContent = phonePeak > 0.96 ? "0" : String(Math.round(-60 + phonePeak * 54));
  }

  tick();
  setInterval(tick, 110);

  // The ON AIR lamp answers the page: click it and the studio goes dark
  // for one held breath, then the broadcast resumes.
  if (onair && apron) {
    onair.style.cursor = "pointer";
    onair.addEventListener("click", function () {
      var off = document.body.classList.toggle("off-air");
      apron.classList.toggle("dark", off);
    });
  }

  // The count: day 90 of 90, holding.
  var count = document.getElementById("count");
  if (count) {
    var words = [
      "day 90 of 90 — the count runs out tonight",
      "the count has run out — the lamp is on",
      "the lamp is on the apron — day 90 of 90"
    ];
    var n = 0;
    setInterval(function () {
      n = (n + 1) % words.length;
      count.textContent = words[n];
    }, 5000);
  }
})();
