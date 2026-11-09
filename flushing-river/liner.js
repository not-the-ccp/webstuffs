// Spin the record faster while the reader's eye is on a track.
(function () {
  var disc = document.getElementById("record");
  if (!disc) return;

  var tracks = document.querySelectorAll(".tr");
  tracks.forEach(function (tr) {
    tr.addEventListener("mouseenter", function () { disc.classList.add("fast"); });
    tr.addEventListener("mouseleave", function () { disc.classList.remove("fast"); });
  });

  // Clicking a track stamp prints its catalogue mark beside the note.
  tracks.forEach(function (tr) {
    var no = tr.querySelector(".no");
    if (!no) return;
    no.style.cursor = "pointer";
    no.addEventListener("click", function () {
      var len = tr.querySelector(".len");
      if (!len) return;
      len.style.fontWeight = "bold";
      len.style.color = "#9c4a2a";
      setTimeout(function () {
        len.style.fontWeight = "";
        len.style.color = "";
      }, 900);
    });
  });
})();
