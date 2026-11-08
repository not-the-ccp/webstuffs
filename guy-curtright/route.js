// The Curtright Circuit — a small counter-stamp for travelers
(function () {
  "use strict";
  var stops = document.querySelectorAll(".stop");
  stops.forEach(function (stop, i) {
    var num = stop.querySelector(".stop-num");
    if (!num) return;
    num.addEventListener("click", function () {
      var visited = stop.classList.toggle("visited");
      num.textContent = visited ? "✓" : String(i + 1);
      if (visited) {
        var stamp = document.createElement("span");
        stamp.className = "stamp";
        stamp.textContent = "SEEN " + (i + 1) + "/3";
        stop.appendChild(stamp);
      }
    });
    num.setAttribute("tabindex", "0");
    num.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        num.click();
      }
    });
  });
})();
