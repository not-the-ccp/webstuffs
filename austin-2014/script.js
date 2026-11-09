// Paddock FAQ: accordion behaviour + timing-board blink, both non-essential.
(function () {
  "use strict";

  document.querySelectorAll(".qa .q").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var body = btn.closest(".qa").querySelector(".a");
      if (!body) return;
      var open = body.style.display !== "none";
      body.style.display = open ? "none" : "";
      btn.setAttribute("aria-expanded", String(!open));
    });
  });

  // Start every answer except the first collapsed, if JS is available.
  document.querySelectorAll(".qa .q").forEach(function (btn, i) {
    if (i === 0) return;
    var body = btn.closest(".qa").querySelector(".a");
    if (body) {
      body.style.display = "none";
      btn.setAttribute("aria-expanded", "false");
    }
  });

  // Timing-board flash, like a lap-time refresh — purely decorative.
  var board = document.getElementById("standings");
  if (board) {
    setInterval(function () {
      board.style.transition = "none";
      board.style.boxShadow = "0 0 0 2px rgba(157, 255, 90, 0.5)";
      setTimeout(function () {
        board.style.transition = "box-shadow 1.2s ease";
        board.style.boxShadow = "none";
      }, 180);
    }, 9000);
  }
})();
