/* The Khayyam Wheel turns one spoke (30 degrees) at a time, as Rule 14 allows. */
(function () {
  var wheel = document.getElementById("khayyam-wheel");
  if (!wheel) return;
  var angle = 0;
  wheel.addEventListener("click", function () {
    angle = (angle + 30) % 360;
    wheel.style.transform = "rotate(" + angle + "deg)";
  });
  wheel.setAttribute("tabindex", "0");
  wheel.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      wheel.click();
    }
  });
})();
