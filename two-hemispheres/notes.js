// Two Hemispheres, One Shot — click a track to drop the needle.
(function () {
  var vinyl = document.getElementById("vinyl");
  var tracks = document.querySelectorAll(".tracks li");
  var current = null;

  tracks.forEach(function (track) {
    track.addEventListener("click", function () {
      if (track === current) {
        // lift the needle
        track.classList.remove("playing");
        current = null;
        if (vinyl) vinyl.classList.remove("spinning");
        return;
      }
      tracks.forEach(function (t) { t.classList.remove("playing"); });
      track.classList.add("playing");
      current = track;
      if (vinyl) vinyl.classList.add("spinning");
    });
  });
})();
