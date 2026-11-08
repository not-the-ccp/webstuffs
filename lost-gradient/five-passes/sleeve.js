/* Five Passes — the needle: clicking a track sets it playing. */
(function () {
  var tracks = Array.prototype.slice.call(document.querySelectorAll("li.track"));
  if (!tracks.length) return;
  tracks.forEach(function (track, i) {
    track.setAttribute("role", "button");
    track.setAttribute("tabindex", "0");
    function play() {
      var wasPlaying = track.classList.contains("playing");
      tracks.forEach(function (t) { t.classList.remove("playing"); });
      if (!wasPlaying) track.classList.add("playing");
    }
    track.addEventListener("click", play);
    track.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); play(); }
    });
  });
})();
