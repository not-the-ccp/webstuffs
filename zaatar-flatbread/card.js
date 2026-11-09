// Card No. 23 — the yard clock. The card is kept under it; the clock runs at UTC+2.
(function () {
  var clockEl = document.querySelector(".foot-line");
  if (!clockEl) return;
  var span = document.createElement("span");
  span.setAttribute("aria-hidden", "true");
  span.style.letterSpacing = "0.06em";
  clockEl.appendChild(document.createTextNode(" · yard clock "));
  clockEl.appendChild(span);

  function pad(n) { return (n < 10 ? "0" : "") + n; }

  function tick() {
    var now = new Date();
    // UTC+2, the yard's hour
    var local = new Date(now.getTime() + (2 * 60 + now.getTimezoneOffset()) * 60000);
    span.textContent = pad(local.getHours()) + ":" + pad(local.getMinutes()) + ":" + pad(local.getSeconds());
  }

  tick();
  setInterval(tick, 1000);
})();
