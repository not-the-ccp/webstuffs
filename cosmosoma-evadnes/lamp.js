// The night lamp at No. 14 Kruiskade.
// Click it to put it out; the sheet stays readable in the dark.
(function () {
  var lamp = document.getElementById("lamp");
  if (!lamp) return;
  lamp.addEventListener("click", function () {
    document.body.classList.toggle("lamp-out");
    lamp.setAttribute("aria-pressed",
      document.body.classList.contains("lamp-out") ? "true" : "false");
  });
  // the lamp breathes: a slow, faint pulse added on top of the flicker
  var glow = document.querySelector(".lamp-glow");
  if (!glow) return;
  var t = 0;
  setInterval(function () {
    t += 0.05;
    if (document.body.classList.contains("lamp-out")) return;
    glow.style.boxShadow =
      "0 0 " + (10 + 6 * Math.sin(t)) + "px rgba(255, 217, 120, 0.7)";
  }, 60);
})();
