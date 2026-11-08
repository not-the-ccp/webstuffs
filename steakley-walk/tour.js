/* The Steakley Walk — mileage ribbon: maps scroll position to 2.1 route miles */
(function () {
  var TOTAL = 2.1;
  var mark = document.getElementById("mileMark");
  if (!mark) return;
  var stops = Array.prototype.slice.call(document.querySelectorAll(".stop"));
  function tick() {
    var doc = document.documentElement;
    var max = doc.scrollHeight - window.innerHeight;
    var t = max > 0 ? window.scrollY / max : 0;
    var mile = (t * TOTAL).toFixed(1);
    var current = "—";
    for (var i = stops.length - 1; i >= 0; i--) {
      if (stops[i].getBoundingClientRect().top < window.innerHeight * 0.4) {
        current = "stop " + (i + 1);
        break;
      }
    }
    mark.textContent = "mile " + mile + " / 2.1 · " + current;
  }
  window.addEventListener("scroll", tick, { passive: true });
  window.addEventListener("resize", tick);
  tick();
})();
