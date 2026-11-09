/* The Scrapbook Frequency — the counter that will not move further */
(function () {
  "use strict";

  var el = document.getElementById("counter");
  if (!el) return;

  // The counter runs from 07:41 up to 07:56, as the play decrees.
  // Each reading holds for a beat. At the top it pauses, then —
  // once, as the script says it does on its own — steps back to
  // 07:44, climbs again, and holds at 07:56 for the last line.
  var seq = [];
  for (var m = 41; m <= 56; m++) seq.push(m, m, m);   // hold each reading
  seq.push(56, 56, 56);                                // a longer pause
  seq.push(44, 44, 45, 46, 47);                        // the one step back
  seq.push(48, 56, 56, 56, 56, 56);                     // and the final hold

  var i = 0;
  function step() {
    var n = seq[i % seq.length];
    el.textContent = "07:" + (n < 10 ? "0" : "") + n;
    i++;
  }
  step();
  setInterval(step, 1500);
})();
