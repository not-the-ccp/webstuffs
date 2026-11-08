/* Station 7 — a live gauge reading, refreshed the way the ledger is kept:
   twice a day, and never more than a quarter degree at a time. */
(function () {
  var el = document.getElementById("live-temp");
  if (!el) return;
  var temp = parseFloat(el.textContent);
  if (isNaN(temp)) temp = 13.8;
  setInterval(function () {
    var drift = (Math.random() - 0.5) * 0.2;
    temp = Math.round((temp + drift) * 10) / 10;
    if (temp < 11.5 || temp > 16.5) temp = 13.8;
    el.textContent = temp.toFixed(1);
  }, 30000);
})();
