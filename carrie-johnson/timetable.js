/* Platform clock for The Symonds Express */
(function () {
  var nowEl = document.getElementById("now");
  var nextEl = document.getElementById("next");
  if (!nowEl || !nextEl) return;

  var stops = [
    "St John's Wood 05:42", "Acton 05:58", "Godolphin & Latymer 07:15",
    "Coventry 08:47", "Warwick 09:14", "City College 12:03",
    "4 Stafford Street 13:44", "Marylebone 16:51", "10 Downing Street 12:00",
    "The Blue Water Terminus 06:14"
  ];
  var i = 0;

  function pad(n) { return n < 10 ? "0" + n : "" + n; }

  function tick() {
    var d = new Date();
    nowEl.textContent = "Platform time " + pad(d.getHours()) + ":" + pad(d.getMinutes()) + ":" + pad(d.getSeconds());
  }
  tick();
  setInterval(tick, 1000);

  function next() {
    nextEl.textContent = "Next departure: " + stops[i % stops.length];
    i++;
  }
  next();
  setInterval(next, 6000);
})();
