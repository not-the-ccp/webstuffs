/* Dream Dictionary, Entry S-104 — a small light on the heading stars. */
(function () {
  var stars = document.querySelector("h1.caps");
  if (!stars) return;
  var base = getComputedStyle(stars).color;
  var i = 0;
  setInterval(function () {
    if (i === 1) {
      stars.style.textShadow = "0 0 26px rgba(216, 178, 92, 0.95)";
    } else if (i === 3) {
      stars.style.textShadow = "0 0 18px rgba(216, 178, 92, 0.55)";
    }
    i = (i + 1) % 4;
  }, 2600);
})();
