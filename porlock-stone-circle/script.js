// FM-9 Chapter 12 — small touch: stamp appears on load.
document.addEventListener("DOMContentLoaded", function () {
  var stamp = document.querySelector(".stamped");
  if (stamp) {
    stamp.style.opacity = "0";
    stamp.style.transition = "opacity 600ms ease";
    setTimeout(function () { stamp.style.opacity = "1"; }, 500);
  }
});
