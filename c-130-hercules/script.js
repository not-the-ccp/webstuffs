/* Lockheed C-130 Hercules term report — interactive touches.
   All content is present in the HTML; this script only animates around it. */
(function () {
  "use strict";

  function zulu() {
    var now = new Date();
    var parts = [
      String(now.getUTCHours()).padStart(2, "0"),
      String(now.getUTCMinutes()).padStart(2, "0"),
      String(now.getUTCSeconds()).padStart(2, "0")
    ];
    var el = document.getElementById("zulu");
    if (el) el.textContent = parts.join(":") + "Z";
  }
  zulu();
  setInterval(zulu, 1000);

  var lights = document.querySelectorAll(".light");
  lights.forEach(function (light, i) {
    light.style.animationDelay = i * 0.11 + "s";
  });

  var grade = document.getElementById("grade");
  var marks = ["APPROVED", "FILED", "REFILED", "LATE AGAIN", "APPROVED"];
  var n = 0;
  if (grade) {
    grade.addEventListener("click", function () {
      n = (n + 1) % marks.length;
      grade.setAttribute("data-mark", marks[n]);
    });
  }

  var prop = document.querySelector(".prop");
  if (prop) {
    prop.addEventListener("mouseenter", function () {
      prop.style.animationDuration = "0.35s";
    });
    prop.addEventListener("mouseleave", function () {
      prop.style.removeProperty("animation-duration");
    });
  }
})();
