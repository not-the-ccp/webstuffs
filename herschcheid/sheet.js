/* The Herscheid sheet — ticker and clock hand */
(function () {
  "use strict";

  var tickerText =
    "insertion deadline wednesday 4:00 p.m. \u00b7 door marked \u201ckleinanzeigen\u201d \u00b7 " +
    "sette & sohne, kirchplatz 3 \u00b7 the crossing remains three seconds \u00b7 " +
    "herbeck steel span, six metres, no planks \u00b7 sheet 214 of 52 \u00b7 ";

  var el = document.getElementById("ticker");
  if (el) {
    // duplicate the line so the translateX(-50%) loop runs without a gap
    el.textContent = (tickerText + " ").repeat(4) + (tickerText + " ").repeat(4);
  }

  var notice = document.getElementById("notice");
  if (notice) {
    // stamp the notice with today's hand: which clock it keeps
    var d = new Date();
    var day = d.getDate();
    notice.textContent += " (Clock hand " + (day % 2 === 0 ? "II" : "I") + ", " +
      (day <= 9 ? "0" + day : day) + "." +
      (d.getMonth() + 1 <= 9 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1) +
      " \u2014 the tower at Kirchplatz keeps us honest.)";
  }
})();
