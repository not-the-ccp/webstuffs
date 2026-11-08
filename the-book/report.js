// Small touches for the report sheet.
// 1) The rubber stamp thuds in when the marking block scrolls into view.
// 2) Hovering a red teacher's note tilts it a touch more, as if being re-read.

document.addEventListener("DOMContentLoaded", function () {
  var marking = document.querySelector(".marking");
  var stamp = document.querySelector(".stamp");
  if (marking && stamp && "IntersectionObserver" in window) {
    stamp.style.animation = "none";
    var seen = false;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting && !seen) {
          seen = true;
          stamp.style.animation = "thud .5s ease-out both";
          io.disconnect();
        }
      });
    }, { threshold: 0.4 });
    io.observe(marking);
  }

  document.querySelectorAll(".teacher-note").forEach(function (note) {
    note.addEventListener("mouseenter", function () {
      note.style.transform = "rotate(0deg)";
    });
    note.addEventListener("mouseleave", function () {
      note.style.transform = "rotate(-.6deg)";
    });
  });
});
