// Pressing the grade stamp re-inks it.
(function () {
  var stamp = document.getElementById("grade-stamp");
  if (!stamp) return;
  var repress = function () {
    stamp.classList.remove("pressed");
    // restart the animation
    void stamp.offsetWidth;
    stamp.classList.add("pressed");
  };
  stamp.addEventListener("click", repress);
  window.addEventListener("load", function () {
    setTimeout(repress, 400);
  });
})();
