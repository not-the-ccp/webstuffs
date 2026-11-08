// Re-stamp the grade: tapping anywhere on the sheet re-lands the 94.
document.addEventListener("DOMContentLoaded", function () {
  var stamp = document.getElementById("stamp");
  var sheet = document.querySelector(".sheet");
  if (!stamp || !sheet) return;
  sheet.addEventListener("click", function () {
    stamp.style.animation = "none";
    // force reflow so the animation restarts
    void stamp.offsetWidth;
    stamp.style.animation = "";
  });
});
