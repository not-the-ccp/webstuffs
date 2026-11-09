/* A small touch for the letter page: the rubber stamps
   settle in with a light press when the page loads. */
document.addEventListener("DOMContentLoaded", function () {
  var stamps = document.querySelectorAll(".stamp");
  stamps.forEach(function (stamp, i) {
    stamp.style.opacity = "0";
    stamp.style.transition = "opacity 320ms ease " + (120 + i * 180) + "ms";
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        stamp.style.opacity = stamp.classList.contains("stamp--post") ? "0.7" : "0.78";
      });
    });
  });
});
