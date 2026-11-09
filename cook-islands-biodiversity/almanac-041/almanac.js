/* Season Book · Weather Almanac 2011/041 · Avarua desk */
(function () {
  "use strict";

  // wind rose ticks: 36, one every 10 degrees
  var ticks = document.getElementById("ticks");
  if (ticks) {
    var svgNS = "http://www.w3.org/2000/svg";
    for (var i = 0; i < 36; i++) {
      var a = (i * 10 * Math.PI) / 180;
      var r1 = i % 9 === 0 ? 78 : 86;
      var line = document.createElementNS(svgNS, "line");
      line.setAttribute("x1", (100 + r1 * Math.sin(a)).toFixed(2));
      line.setAttribute("y1", (100 - r1 * Math.cos(a)).toFixed(2));
      line.setAttribute("x2", (100 + 92 * Math.sin(a)).toFixed(2));
      line.setAttribute("y2", (100 - 92 * Math.cos(a)).toFixed(2));
      ticks.appendChild(line);
    }
  }

  // duplicate the ticker text so the drift loops without a seam
  var ticker = document.getElementById("ticker");
  if (ticker && !ticker.querySelector("span")) {
    var text = ticker.textContent;
    ticker.innerHTML = "";
    var track = document.createElement("span");
    track.className = "ticker-track";
    var s1 = document.createElement("span");
    var s2 = document.createElement("span");
    s1.textContent = text + "\u2003\u2003";
    s2.textContent = text + "\u2003\u2003";
    track.appendChild(s1);
    track.appendChild(s2);
    ticker.appendChild(track);
  }
})();
