/* Court of the Trophy — Cause No. 1987-L — transcript effects */
(function () {
  "use strict";

  /* Type out the line kept word for word, once the page has settled.
     Without this script the full sentence is already in the markup. */
  var kept = document.getElementById("kept-line");
  if (kept && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var full = kept.textContent;
    var i = 0;
    kept.classList.add("typing");
    kept.textContent = "";
    var timer = window.setInterval(function () {
      i += 1;
      kept.textContent = full.slice(0, i);
      if (i >= full.length) {
        window.clearInterval(timer);
        kept.classList.remove("typing");
      }
    }, 52);
  }

  /* The wax: each press affixes a fresh seal beside the caption. */
  var wax = document.getElementById("wax");
  var caption = document.querySelector(".caption");
  if (wax && caption) {
    wax.addEventListener("click", function () {
      wax.classList.remove("affixed");
      void wax.offsetWidth; /* restart the animation */
      wax.classList.add("affixed");

      var seals = caption.querySelectorAll(".stamp-seal");
      if (seals.length >= 5) {
        seals[0].remove();
      }
      var span = document.createElement("span");
      span.className = "stamp-seal";
      span.textContent = "†";
      span.style.position = "absolute";
      span.style.right = (8 + Math.random() * 26) + "%";
      span.style.top = (2 + Math.random() * 12) + "px";
      span.style.fontSize = "1.6rem";
      span.style.color = "rgba(122, 31, 31, " + (0.35 + Math.random() * 0.3) + ")";
      span.style.transform = "rotate(" + (Math.random() * 40 - 20) + "deg)";
      span.style.animation = "settle 0.9s ease-out both";
      caption.appendChild(span);
    });
  }
})();
