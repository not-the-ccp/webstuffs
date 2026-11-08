/* Museum of the Valley Hours, Cabinet 9 — the dial keeps the true reckoning.
   TAI = UTC + 37 s, whole seconds, since 31 December 2016. */
(function () {
  var TAI_OFFSET = 37;
  var taiEl = document.getElementById("tai-time");
  var utcEl = document.getElementById("utc-time");
  var stamp = document.getElementById("foot-stamp");
  var second = document.getElementById("second-hand");
  var minute = document.querySelector(".hand.minute");
  var hour = document.querySelector(".hand.hour");

  function pad(n) { return (n < 10 ? "0" : "") + n; }

  function tick() {
    var now = new Date();
    var utc = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),
      now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
    var tai = new Date(utc + TAI_OFFSET * 1000);

    if (taiEl) taiEl.textContent = pad(tai.getUTCHours()) + ":" + pad(tai.getUTCMinutes()) + ":" + pad(tai.getUTCSeconds());
    if (utcEl) utcEl.textContent = pad(now.getUTCHours()) + ":" + pad(now.getUTCMinutes()) + ":" + pad(now.getUTCSeconds());

    // set the dial to the TAI hour
    var s = tai.getUTCSeconds();
    var m = tai.getUTCMinutes();
    var h = tai.getUTCHours() % 12;
    if (second) second.style.transform = "rotate(" + s * 6 + "deg)";
    if (minute) minute.setAttribute("transform", "rotate(" + (m * 6 + s * 0.1) + " 60 60)");
    if (hour) hour.setAttribute("transform", "rotate(" + (h * 30 + m * 0.5) + " 60 60)");
  }

  if (stamp) stamp.textContent = "TAI = UTC + " + TAI_OFFSET + " s";
  tick();
  setInterval(tick, 1000);
})();
