// Duty bell for The Household Board. Text stays fully readable without this.
(function () {
  var btn = document.getElementById("bellBtn");
  var out = document.getElementById("bellReadout");
  if (!btn || !out) return;

  var strikes = 0;

  btn.addEventListener("click", function () {
    strikes += 1;
    btn.classList.add("ringing");
    window.setTimeout(function () { btn.classList.remove("ringing"); }, 120);

    if (strikes === 12) {
      out.textContent = "Twelve. The watch changes — the almanac is copied, the doors are walked, the log is signed.";
      strikes = 0;
    } else {
      out.textContent = "Ding. " + strikes + " strike" + (strikes === 1 ? "" : "s") + " of twelve. The watch changes at twelve.";
    }
  });
})();
