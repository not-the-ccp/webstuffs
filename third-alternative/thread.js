/* Thread 41 — small touches that never block reading. */
(function () {
  "use strict";

  // Stamp "last viewed" in the page's own date.
  var viewed = document.getElementById("viewed");
  if (viewed) {
    var d = new Date();
    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    viewed.textContent = d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear() +
      ", " + String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
  }

  // Clicking a mangled fragment highlights it once, like marking a page.
  var fragment = document.getElementById("mangled");
  if (fragment) {
    fragment.setAttribute("tabindex", "0");
    var mark = function () {
      var on = fragment.classList.toggle("marked");
      fragment.style.background = on ? "rgba(201, 138, 46, 0.18)" : "";
    };
    fragment.addEventListener("click", mark);
    fragment.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); mark(); }
    });
  }
})();
