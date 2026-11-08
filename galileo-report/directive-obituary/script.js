// In Memoriam — a quiet epitaph: the line under the dates settles into
// place a moment after the reader arrives, the way red ink dries.
document.addEventListener("DOMContentLoaded", function () {
  var line = document.getElementById("epitaph");
  if (!line) return;
  line.style.opacity = "0";
  line.style.transition = "opacity 2.4s ease";
  window.requestAnimationFrame(function () {
    window.requestAnimationFrame(function () {
      line.style.opacity = "1";
    });
  });
});
