// Golden Rondelle build log — little touches
(function () {
  "use strict";

  // visitor counter: starts where the jar of cards left off, ticks once per visit
  var KEY = "rondelleVisits";
  var el = document.getElementById("visits");
  if (el) {
    var n = 417;
    try {
      n = parseInt(localStorage.getItem(KEY), 10);
      if (isNaN(n)) n = 417;
      n += 1;
      localStorage.setItem(KEY, String(n));
    } catch (e) { /* no storage, keep the printed number */ }
    el.textContent = ("000000" + n).slice(-6);
  }

  // date the guestbook line in the classic format
  var d = new Date();
  var mm = (d.getMonth() + 1);
  var dd = d.getDate();
  var guest = document.querySelector(".guestbook .tiny");
  if (guest) {
    guest.appendChild(document.createTextNode(
      " Last lit " + ("0" + mm).slice(-2) + "/" + ("0" + dd).slice(-2) + "/" + d.getFullYear() + "."
    ));
  }
})();
