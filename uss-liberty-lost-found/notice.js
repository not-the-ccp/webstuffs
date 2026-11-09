/* Notice No. 1405/67 — the counter, Room 214 */

(function () {
  "use strict";

  var TOTAL = 23 * 60; // the attack, in seconds
  var el = document.getElementById("timer");
  if (el) {
    var t = TOTAL;
    function paint() {
      var m = Math.floor(t / 60);
      var s = t % 60;
      el.textContent = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
    }
    paint();
    setInterval(function () {
      t -= 1;
      if (t < 0) t = TOTAL; // the sea keeps its own hours; the count restarts
      paint();
    }, 1000);
  }

  // the stamp, pressed by hand
  var stamp = document.getElementById("stamp");
  if (stamp) {
    stamp.addEventListener("click", function () {
      stamp.classList.remove("thud");
      void stamp.offsetWidth;
      stamp.classList.add("thud");
    });
  }
})();
