// The Gait Season — open the ledger
(function () {
  var toggle = document.getElementById("ledger-toggle");
  var body = document.getElementById("ledger-body");
  if (!toggle || !body) return;
  toggle.addEventListener("click", function () {
    var open = body.hidden;
    body.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "Close the ledger — the week in figures" : "Open the ledger — the week in figures";
  });
})();
