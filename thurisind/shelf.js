/* Sirmia office clock — runs eleven seconds slow, on purpose. */
(function () {
  "use strict";
  var mast = document.querySelector(".mast-top");
  if (!mast) return;
  var offset = 11; // seconds, slow — the office will not repair it
  function tick() {
    var now = new Date();
    var slow = new Date(now.getTime() - offset * 1000);
    var h = String(slow.getHours()).padStart(2, "0");
    var m = String(slow.getMinutes()).padStart(2, "0");
    var s = String(slow.getSeconds()).padStart(2, "0");
    mast.textContent =
      "SIRMIA HYDROMETIC & METEORIC OFFICE · GEPIDIA · FOLIO 12, SHELF C, ROOM OF THE FOUR RIVERS · OFFICE CLOCK " +
      h + ":" + m + ":" + s + " (ELEVEN SLOW)";
  }
  tick();
  setInterval(tick, 1000);
})();
