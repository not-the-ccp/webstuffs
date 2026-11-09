/* Entry No. 1776 — the ledger keeps its own count */
document.addEventListener("DOMContentLoaded", function () {
  var ledger = document.querySelector(".ledger");
  if (!ledger) return;
  ledger.addEventListener("click", function (e) {
    var li = e.target.closest("li");
    if (!li) return;
    var span = li.querySelector("span");
    if (!span) return;
    var n = parseInt(span.textContent.replace(/[^0-9]/g, ""), 10);
    if (isNaN(n)) return;
    span.textContent = (n + 1).toLocaleString("en-US");
    li.style.transition = "background .6s";
    li.style.background = "rgba(138,59,36,.12)";
    setTimeout(function () { li.style.background = "transparent"; }, 600);
  });
});
