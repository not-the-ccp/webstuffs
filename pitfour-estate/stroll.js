// The Pitfour Post — stroll planner for the autumn stroll.
// The club's house rate: 2.75 miles per hour; one kiosk tea per mile beyond two.
(function () {
  "use strict";
  var form = document.getElementById("plan-form");
  var out = document.getElementById("plan-out");
  if (!form || !out) return;

  var RATE = 2.75; // mph

  function fmt(n) {
    return (Math.round(n * 10) / 10).toLocaleString("en-GB");
  }

  function plan() {
    var boxes = form.querySelectorAll('input[name="feat"]');
    var miles = 0;
    var n = 0;
    boxes.forEach(function (b) {
      if (b.checked) {
        miles += parseFloat(b.value) || 0;
        n += 1;
      }
    });

    if (n === 0) {
      out.classList.remove("ready");
      out.textContent = "Your stroll so far: 0 miles — tick a feature, or tick none and walk the ring, as the rule allows.";
      return;
    }

    var minutes = Math.round((miles / RATE) * 60);
    var h = Math.floor(minutes / 60);
    var m = minutes % 60;
    var time = h > 0 ? h + " h " + m + " min" : m + " min";
    var teas = Math.max(0, Math.floor(miles - 2));
    var tea = teas === 0 ? "the kiosk can sleep" : teas + (teas === 1 ? " tea" : " teas") + " at the kiosk";

    out.classList.add("ready");
    out.textContent = "Your stroll: " + fmt(miles) + " mile" + (miles === 1 ? "" : "s") +
      " at " + n + " stop" + (n === 1 ? "" : "s") + " — " + time +
      " at the house rate, and " + tea + ".";
  }

  form.addEventListener("change", plan);
  plan();
})();
