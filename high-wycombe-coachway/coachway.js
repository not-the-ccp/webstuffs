// High Wycombe Coachway — a small departure-board clock for the plate.
// Text remains fully readable without this script.
(function () {
  var el = document.createElement("p");
  el.id = "clock";
  el.setAttribute("aria-hidden", "true");
  var pad = function (n) { return n < 10 ? "0" + n : "" + n; };
  var tick = function () {
    var d = new Date();
    el.textContent = "Waiting room bell " +
      pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds()) +
      " · first service 6:42 Oxford";
  };
  tick();
  setInterval(tick, 1000);
  var plate = document.querySelector(".plate");
  if (plate) plate.appendChild(el);
})();
