/* Special Session No. 44 — the seal is pressed when the page settles */
(function () {
  "use strict";

  var stamp = document.getElementById("stamp");
  if (!stamp) return;

  // Press the seal shortly after the session is read.
  window.addEventListener("load", function () {
    setTimeout(function () {
      stamp.classList.add("stamped");
    }, 900);
  });

  // The barometer keeps its own counsel, but it drifts on the page.
  var baro = 29.91;
  var reading = document.createElement("p");
  reading.className = "baro-line";
  reading.style.cssText =
    "font-family:'Special Elite',monospace;font-size:.8rem;letter-spacing:.15em;" +
    "color:rgba(232,199,102,.6);text-align:center;margin-top:.8rem;";
  reading.textContent = "BAROMETER " + baro.toFixed(2) + " — FALLING";

  var footer = document.querySelector(".council-footer");
  if (footer) footer.appendChild(reading);

  setInterval(function () {
    baro = Math.max(29.6, Math.min(29.99, baro + (Math.random() - 0.55) * 0.01));
    reading.textContent = "BAROMETER " + baro.toFixed(2) + " — FALLING";
  }, 4000);
})();
