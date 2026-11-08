// Small touches for the minutes: the "PASSED 8-1" stamp comes down
// once the page is settled, and the wax seal wobbles if picked up.

(function () {
  "use strict";

  var stamp = document.getElementById("stamp");
  if (stamp) {
    window.setTimeout(function () {
      stamp.classList.add("stamped");
    }, 900);
  }

  var seal = document.getElementById("seal");
  if (seal) {
    seal.addEventListener("click", function () {
      seal.style.transition = "transform .25s ease";
      seal.style.transform = "rotate(-12deg) scale(1.06)";
      window.setTimeout(function () {
        seal.style.transform = "rotate(0) scale(1)";
      }, 260);
    });
  }
})();
