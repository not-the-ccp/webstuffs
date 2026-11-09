// Lot 507 — telephone bids, by the paddle.
(function () {
  var btn = document.getElementById("paddle-btn");
  var out = document.getElementById("paddle-count");
  if (!btn || !out) return;

  var paddle = 0;
  var base = 507915; // one pound per soul, on the 2025 count

  btn.addEventListener("click", function () {
    paddle += 1;
    if (paddle === 1) {
      out.textContent = "One paddle up: £" + base.toLocaleString("en-GB");
    } else {
      out.textContent = paddle + " paddles up: £" +
        (base + (paddle - 1) * 50).toLocaleString("en-GB") +
        " — the yard is less quiet.";
    }
  });
})();
