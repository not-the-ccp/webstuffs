// LS-1923 sleeve: tapping a track marks it as the one on the turntable.
(function () {
  var tracks = document.querySelectorAll("ol li[data-track]");
  tracks.forEach(function (li) {
    li.addEventListener("click", function () {
      var was = li.classList.contains("playing");
      tracks.forEach(function (other) { other.classList.remove("playing"); });
      if (!was) li.classList.add("playing");
    });
  });
})();
