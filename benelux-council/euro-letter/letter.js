/* The Naga Courier, 21 June 2024 — the stamp lands when the clip is ready. */
(function () {
  "use strict";
  var stamp = document.getElementById("stamp");
  if (!stamp) return;
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  stamp.style.opacity = "0";
  stamp.style.transition = "opacity 0.25s ease-out, transform 0.25s ease-out";
  stamp.style.transform = "rotate(-9deg) scale(1.25)";

  function land() {
    stamp.style.opacity = "0.82";
    stamp.style.transform = "rotate(-9deg) scale(1)";
  }

  if (document.readyState === "complete") {
    setTimeout(land, 450);
  } else {
    window.addEventListener("load", function () { setTimeout(land, 450); });
  }
})();
