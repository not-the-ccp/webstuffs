// The Stacks — small touches. The page reads fine without this file.
(function () {
  "use strict";

  // "PULLED FROM THE STACKS" stamp, dated to the local visit
  var pulled = document.getElementById("pulled");
  if (pulled) {
    var d = new Date();
    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    pulled.textContent =
      String(d.getDate()).padStart(2, "0") + " " + months[d.getMonth()] + " " + d.getFullYear();
  }

  // Chips: tap-to-flash the division name for touch devices (hover handled by CSS)
  document.querySelectorAll(".chip").forEach(function (chip) {
    chip.addEventListener("click", function () {
      chip.classList.add("flashed");
      setTimeout(function () { chip.classList.remove("flashed"); }, 1400);
    });
  });
})();
