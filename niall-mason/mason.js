/* SDS-NM-03 — Player Movement Office: light interactivity. */
(function () {
  "use strict";

  // Stamp the verified line with the issue date once the sheet has loaded.
  window.addEventListener("load", function () {
    var stamp = document.getElementById("stamp");
    if (!stamp) return;
    stamp.textContent = "VERIFIED \u00b7 PLAYER MOVEMENT OFFICE \u00b7 14 JAN 2019";
  });

  // Section numbers pulse the hazard stripe into a red warning
  // while their section is hovered. Text is untouched.
  var stripe = document.querySelector(".hazard-stripe");
  var sections = document.querySelectorAll(".sec");
  if (stripe && sections.length) {
    sections.forEach(function (sec) {
      sec.addEventListener("mouseenter", function () {
        stripe.style.animationDuration = "3s";
      });
      sec.addEventListener("mouseleave", function () {
        stripe.style.animationDuration = "14s";
      });
    });
  }
})();
