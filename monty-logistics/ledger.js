// The Rees Ledger — one small touch: press the group stamp to
// verify the ledger. Everything stays perfectly readable without it.
(function () {
  var stamp = document.querySelector(".cover .stamp");
  var colophon = document.querySelector(".colophon .stamp");
  if (!stamp || !colophon) return;

  stamp.style.cursor = "pointer";
  stamp.title = "Press to close the ledger";

  stamp.addEventListener("click", function () {
    colophon.textContent = "LEDGER CLOSED · TOTALS VERIFIED · 8 MAY 1945";
    colophon.style.transform = "rotate(3deg)";
    colophon.style.opacity = "1";
    stamp.textContent = "21ST ARMY GROUP \u00b7 ACCOUNTS PAID";
    setTimeout(function () {
      stamp.textContent = "21ST ARMY GROUP \u00b7 RASC";
    }, 2200);
  });
})();
