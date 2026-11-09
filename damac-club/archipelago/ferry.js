/* One Thousand Islands — THP-20 · The Tea House Pressing
   The turntable: click a track to play it (one at a time),
   the ferry follows the cursor at low tide, and the running
   time on the sleeve counts up while the side is spinning. */
(function () {
  "use strict";

  var tracks = Array.prototype.slice.call(document.querySelectorAll(".track"));
  var played = 0;

  tracks.forEach(function (track) {
    track.style.cursor = "pointer";
    track.addEventListener("click", function () {
      var wasPlaying = track.classList.contains("playing");
      tracks.forEach(function (t) {
        t.classList.remove("playing");
        delete t.dataset.wasPlayed;
      });
      if (wasPlaying) {
        played = 0;
        return;
      }
      track.classList.add("playing");
      track.dataset.wasPlayed = "1";
    });
  });

  /* running-time counter on the kicker, 53'13" is the whole side */
  var kicker = document.querySelector(".kicker");
  var totalSeconds = 53 * 60 + 13;
  if (kicker) {
    setInterval(function () {
      var any = tracks.some(function (t) { return t.classList.contains("playing"); });
      if (!any) return;
      played = (played + 1) % totalSeconds;
      var m = Math.floor(played / 60);
      var s = played % 60;
      var label = m + "\u2032" + (s < 10 ? "0" : "") + s + "\u2033";
      kicker.dataset.now = label;
      kicker.style.borderBottom = "2px solid rgba(201, 69, 44, .7)";
      kicker.setAttribute("title", "now playing · " + label);
    }, 1000);
  }

  /* the little ferry leans toward the pointer, like a ferry toward the pier */
  var ferry = document.querySelector(".ferry");
  if (ferry && window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener("pointermove", function (e) {
      var x = e.clientX / window.innerWidth - 0.5;
      var lean = Math.max(-8, Math.min(8, x * 14));
      ferry.style.transform = "rotate(" + lean + "deg)";
    }, { passive: true });
  }
})();
