/* White River Records WRC-582 — the record plays whether or not you are listening */

(function () {
  "use strict";

  var tracks = Array.prototype.slice.call(document.querySelectorAll("#tracklist li"));
  var disc = document.querySelector(".disc");
  var playing = -1;

  function setTrack(i) {
    if (i === playing) return;
    playing = i;
    tracks.forEach(function (li, j) {
      li.classList.toggle("playing", j === i);
    });
    if (i >= 0) {
      var name = tracks[i].textContent.replace(/^[A-B]\d\s*/, "").trim();
      document.title = "Now playing: " + name + " · WRC-582";
    } else {
      document.title = document.title.replace(/^Now playing: .* · WRC-582$/, "Crossroads of America — Liner Notes, Sessions 2017–2024 · White River Records WRC-582");
    }
  }

  tracks.forEach(function (li, i) {
    li.addEventListener("mouseenter", function () { setTrack(i); });
    li.addEventListener("click", function () {
      setTrack(i);
      if (disc) disc.classList.remove("paused");
    });
  });

  if (disc) {
    disc.addEventListener("click", function () {
      disc.classList.toggle("paused");
    });
  }

  // the till plain settles when the reader reaches the credits
  var colophon = document.querySelector(".colophon");
  if (colophon && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          colophon.classList.add("arrived");
          io.disconnect();
        }
      });
    }, { threshold: 0.6 });
    io.observe(colophon);
  }
})();
