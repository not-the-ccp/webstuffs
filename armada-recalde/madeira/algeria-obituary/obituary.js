// Algeria — Obituary: the seal settles, the pencil line steadies, once, on load.
(function () {
  "use strict";
  var seal = document.querySelector(".seal");
  if (seal) {
    seal.style.transition = "transform 1.4s cubic-bezier(0.22, 1, 0.36, 1)";
    window.setTimeout(function () { seal.style.transform = "rotate(5deg)"; }, 350);
  }
  var pencil = document.querySelector(".pencil-card");
  if (pencil) {
    pencil.style.transition = "transform 1.8s cubic-bezier(0.22, 1, 0.36, 1)";
    window.setTimeout(function () { pencil.style.transform = "rotate(-0.9deg)"; }, 600);
  }
})();
