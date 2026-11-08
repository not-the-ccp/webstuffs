// Exhibit 43.B — small placard touches; the page is fully readable without this.
(function () {
  "use strict";

  var rotated = document.getElementById("rotated-date");
  if (rotated) {
    var d = new Date();
    var months = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    rotated.textContent = "On current display since " +
      d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear() +
      " · next review 2027";
  }

  var temp = document.getElementById("case-temp");
  if (temp) {
    var base = 18, hum = 45;
    setInterval(function () {
      var t = base + (Math.random() < 0.5 ? 0 : 1);
      var h = hum + (Math.random() < 0.5 ? -1 : 1);
      temp.textContent = t + "°C / " + h + "% RH";
    }, 5000);
  }
})();
