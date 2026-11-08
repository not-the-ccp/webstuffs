/* FM-9 Addendum A — the bench roll for a satellite fix. Purely decorative;
   the printed HDOP table is the authoritative answer. */
(function () {
  "use strict";

  var btn = document.getElementById("roll-btn");
  var sats = document.getElementById("sats");
  var out = document.getElementById("roll-out");
  if (!btn || !sats || !out) return;

  var lines = {
    2: [
      "Two satellites. That is a direction, not a place. The receiver holds the signal like a lamp held at arm's length.",
      "Two satellites. The geometry declines to close. The bench says: watch the sky and wait."
    ],
    3: [
      "Three satellites. A circle, and a circle is not a place. The skipper's rule applies: steer to where the circle crosses the channel and note it as an estimate.",
      "Three satellites. The receiver draws its circle and leaves. You are somewhere on the line; the rock will tell you which somewhere."
    ],
    4: [
      "Four satellites, the smallest honest fix. The clock error resolves, the geometry closes, and the numbers sit in the log like the rest.",
      "Four satellites. The fourth does its quiet work on your clock and the fix lands. Plot it, move on, be back before the tide turns."
    ],
    5: [
      "Five satellites. One of them is a spare, kept to cross-check the others. A kitchen fix, with the door open.",
      "Five satellites. The extra bird argues with nobody and agrees with everybody. Trust the fix to the metre."
    ],
    6: [
      "Six satellites. A generous sky. The fix closes before you have finished reading the number, which is the receiver's way of saying thank you.",
      "Six satellites. Redundant, comfortable, the geometry stacked like a well-set table. Log all of it."
    ]
  };

  btn.addEventListener("click", function () {
    var n = parseInt(sats.value, 10);
    var d = 1 + Math.floor(Math.random() * 20);
    var pool = lines[n] || lines[4];
    var line = pool[Math.floor(Math.random() * pool.length)];
    out.textContent = "d20: " + d + " with " + n + " satellites in view. " + line;
  });
})();
