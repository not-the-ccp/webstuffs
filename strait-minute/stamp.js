// The club stamp: press it and it lands.
(function () {
  var stamp = document.getElementById("stamp");
  if (!stamp) return;
  var presses = 0;
  function land() {
    stamp.classList.remove("stamped");
    // force reflow so the animation restarts
    void stamp.offsetWidth;
    stamp.classList.add("stamped");
    presses += 1;
    if (presses === 3) {
      stamp.textContent = "NO. 14 · KEDUA PANTAI";
    }
  }
  stamp.addEventListener("click", land);
  stamp.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      land();
    }
  });
})();
