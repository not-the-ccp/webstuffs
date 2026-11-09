/* Sale No. 214 — the bidding book counts, but never closes on a Thursday. */
(function () {
  var el = document.getElementById("counter");
  if (!el) return;

  var bids = 118 + new Date().getHours() * 7;

  function pad(n) {
    var s = String(n);
    while (s.length < 6) s = "0" + s;
    return s;
  }

  function tick() {
    bids += 1;
    el.innerHTML = pad(bids);
  }

  tick();
  tick();
  setInterval(tick, 4000);

  var ticker = document.querySelector(".ticker");
  if (ticker && !("requestAnimationFrame" in window)) {
    // keep the marquee line legible even where the fancy bits are absent
    ticker.style.whiteSpace = "normal";
  }
})();
