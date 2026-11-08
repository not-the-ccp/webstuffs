/* The letter is sealed on arrival: stamp pressed, wax set.
   Purely decorative — the letter reads perfectly without it. */
(function () {
  "use strict";

  // Wax seal, built in the signature block.
  var seal = document.createElement("span");
  seal.className = "seal";
  seal.setAttribute("aria-hidden", "true");
  var monogram = document.createElement("span");
  monogram.textContent = "BM";
  seal.appendChild(monogram);
  var sheet = document.querySelector(".sheet");
  if (sheet && seal) {
    sheet.appendChild(seal);
  }

  function press() {
    var stamp = document.querySelector(".stamp");
    if (stamp) stamp.classList.add("sealed");
    if (seal) seal.classList.add("sealed");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      setTimeout(press, 350);
    });
  } else {
    setTimeout(press, 350);
  }
})();
