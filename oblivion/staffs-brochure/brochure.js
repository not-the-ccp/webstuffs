/* Brochure No. 47 — visitor counter and update stamp. */
/* The page reads perfectly without this file. */
(function () {
  "use strict";

  var el = document.getElementById("counter");
  if (!el) return;

  // Start the count from the number of residents who have not yet visited.
  var target = 1177578 - 47;
  var current = Math.floor(Math.random() * 900) + 1000;
  var timer = window.setInterval(function () {
    current += Math.floor(Math.random() * 23) + 3;
    if (current >= target) {
      current = target;
      window.clearInterval(timer);
    }
    el.textContent = String(current).padStart(6, "0");
  }, 120);

  var stamp = document.getElementById("stamp");
  if (stamp) {
    var d = new Date();
    var months = ["January", "February", "March", "April", "May", "June",
                  "July", "August", "September", "October", "November", "December"];
    stamp.textContent = "Updated: " + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
  }
})();
