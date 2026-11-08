/* Placard No. 17 — a slow light sweep and the radio set's dial */
(function () {
  "use strict";

  // The radio's tuning dial, counting drift in the gallery dark.
  var dial = document.createElement("span");
  dial.className = "dial";
  dial.textContent = "SET 89.2 \u00B7 DRIFT 00:00";
  var seconds = 0;
  setInterval(function () {
    seconds += 1;
    var m = String(Math.floor(seconds / 60)).padStart(2, "0");
    var s = String(seconds % 60).padStart(2, "0");
    dial.textContent = "SET 89.2 \u00B7 DRIFT " + m + ":" + s;
  }, 1000);

  var hall = document.querySelector(".placard-no");
  if (hall) hall.appendChild(document.createTextNode(" \u00B7 "));
  if (hall) hall.appendChild(dial);
})();
