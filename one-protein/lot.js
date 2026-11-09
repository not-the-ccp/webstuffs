// Sale No. 47, Lot 7 — the bidding-room counter, kept as found
(function () {
  var el = document.getElementById("counter");
  if (!el) return;
  var count = 41; // June, the two sons, the daughter by telephone, Lot 9, and the rest of the drawing room
  var pad = function (n) {
    return String(n).padStart(6, "0");
  };
  el.textContent = pad(count);
  var ticks = 0;
  var timer = setInterval(function () {
    if (ticks >= 12) { clearInterval(timer); return; }
    ticks += 1;
    count += 1;
    el.textContent = pad(count);
    el.style.color = "#9c3b2a";
    setTimeout(function () { el.style.color = ""; }, 350);
  }, 900);
})();
