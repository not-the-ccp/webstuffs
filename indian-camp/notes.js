// Indian Camp — T.T. No. 4: tap a track to hear the sleeve note; the disc keeps spinning.
document.querySelectorAll(".tracks li").forEach(function (li) {
  var note = document.createElement("span");
  note.className = "track-note";
  note.textContent = li.dataset.note || "";
  li.appendChild(note);
  li.addEventListener("click", function () {
    var wasOpen = li.classList.contains("open");
    document.querySelectorAll(".tracks li.open").forEach(function (other) {
      other.classList.remove("open");
    });
    if (!wasOpen) {
      li.classList.add("open");
      document.getElementById("disc").classList.add("paused");
    } else {
      document.getElementById("disc").classList.remove("paused");
    }
  });
});
