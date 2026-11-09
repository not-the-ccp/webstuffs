// Office of Found Things — Notice BB-0308: claim window
(function () {
  var btn = document.getElementById("claim-btn");
  var status = document.getElementById("claim-status");
  if (!btn || !status) return;

  var states = [
    "Status: open, one copy held, hum before signing.",
    "Status: hum received, hook verified. Sign the ledger, column marked vocal.",
    "Status: ledger signed. Pouch issued — sleeve card and recipe slip, sealed.",
    "Status: closed for the day. The cook has gone home; the pot is fine."
  ];
  var i = 0;

  btn.addEventListener("click", function () {
    i = (i + 1) % states.length;
    status.textContent = states[i];
    btn.classList.remove("stamped");
    // restart the stamp animation
    void btn.offsetWidth;
    btn.classList.add("stamped");
    btn.setAttribute("aria-pressed", i === 2 ? "true" : "false");
  });
})();
