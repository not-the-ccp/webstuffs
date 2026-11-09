// Placard No. 31 — a slow lamp sweep across the case glass.
(function () {
  "use strict";
  var frame = document.querySelector(".placard-frame");
  if (!frame || !window.matchMedia || !window.matchMedia("(prefers-reduced-motion: no-preference)").matches) return;

  var sweep = document.createElement("div");
  sweep.setAttribute("aria-hidden", "true");
  sweep.style.cssText =
    "position:absolute;inset:0;pointer-events:none;overflow:hidden;" +
    "background:linear-gradient(105deg, transparent 42%, rgba(255,246,214,0.10) 50%, transparent 58%);" +
    "transform:translateX(-100%);transition:transform 2.4s ease-in-out;";
  frame.appendChild(sweep);

  var timer = setInterval(function () {
    sweep.style.transform = "translateX(100%)";
    setTimeout(function () {
      sweep.style.transition = "none";
      sweep.style.transform = "translateX(-100%)";
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          sweep.style.transition = "transform 2.4s ease-in-out";
        });
      });
    }, 2600);
  }, 9000);

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) clearInterval(timer);
  });
})();
