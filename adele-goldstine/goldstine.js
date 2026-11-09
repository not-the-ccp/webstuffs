/* The Moore School Ledger — classifieds extras */
(function () {
  "use strict";

  /* edition clock: the press runs a little fast */
  var clock = document.getElementById("editionClock");
  if (clock) {
    var t = 9 * 3600 + 41 * 60;
    setInterval(function () {
      t = (t + 1) % 86400;
      var h = Math.floor(t / 3600), m = Math.floor((t % 3600) / 60);
      clock.textContent =
        (h < 10 ? "0" : "") + h + ":" + (m < 10 ? "0" : "") + m;
    }, 1000);
  }

  /* double the ticker text so the loop has no gap */
  var track = document.getElementById("tickerTrack");
  if (track) { track.innerHTML += track.innerHTML; }

  /* pressing an ad stamps it, then lets it settle */
  var ads = document.querySelectorAll(".ad");
  for (var i = 0; i < ads.length; i++) {
    (function (ad) {
      ad.addEventListener("click", function (e) {
        if (e.target.closest("a")) return;
        ad.classList.remove("stamped");
        void ad.offsetWidth; /* restart the press animation */
        ad.classList.add("stamped");
        setTimeout(function () { ad.classList.remove("stamped"); }, 1400);
      });
    })(ads[i]);
  }
})();
