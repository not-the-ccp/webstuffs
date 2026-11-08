/* The Long Side — attic turntable: now-playing line and reel counter */
(function () {
  "use strict";

  var tracks = [
    "We Are Fearless — track 1, \"We Are Fearless\" (00:41)",
    "We Are Fearless — track 2, \"The Quiet Season\" (03:07)",
    "We Are Fearless — track 3, \"The Long Night\" (02:54)",
    "We Are Fearless — track 4, the kitchen chorus (02:12)",
    "We Are Fearless — track 5, \"The Last Train Out of Town\" (03:38)",
    "We Are Fearless — track 6, the bridge, sat down and listened (02:01)",
    "We Are Fearless — track 7, the hush before the amen (04:00)"
  ];

  var np = document.getElementById("now-playing");
  var reel = document.getElementById("reel");

  if (np) {
    var i = 0;
    setInterval(function () {
      i = (i + 1) % tracks.length;
      np.style.opacity = "0";
      setTimeout(function () {
        np.textContent = tracks[i];
        np.style.opacity = "1";
      }, 320);
    }, 6000);
    np.style.transition = "opacity .32s";
  }

  if (reel) {
    var count = 47000;
    setInterval(function () {
      count += 3 + Math.floor(Math.random() * 9);
      reel.textContent = String(count).padStart(6, "0");
    }, 1200);
  }
})();
