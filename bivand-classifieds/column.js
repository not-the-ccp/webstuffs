/* The compositor's folio tick: the page number on the colophon line
   steps through the Saturday edition's folios, like the press counter. */
(function () {
  var tick = document.getElementById("page-tick");
  if (!tick) return;
  var folios = ["FOLIO 11", "FOLIO 12", "FOLIO 13", "FOLIO 14", "FOLIO 15"];
  var i = 0;
  setInterval(function () {
    i = (i + 1) % folios.length;
    tick.textContent = folios[i];
    tick.style.opacity = 0.35;
    setTimeout(function () { tick.style.opacity = 1; }, 120);
  }, 2400);
})();
