/* Ledger, Series K — small touches; the entry reads fully without this. */
(function () {
  var stamp = document.getElementById("stamp");
  if (stamp) {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { stamp.classList.add("shown"); });
    });
  }
  var flower = document.querySelector(".marigold");
  if (flower) {
    var angle = 0;
    var petals = flower.querySelector(".petals");
    if (petals) {
      setInterval(function () {
        angle += 0.15;
        petals.setAttribute("transform", "rotate(" + angle.toFixed(2) + " 60 60)");
      }, 50);
    }
  }
})();
