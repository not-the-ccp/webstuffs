/* Board No. 47 — the property room's quiet check-off. */
document.addEventListener("DOMContentLoaded", function () {
  var ledger = document.getElementById("ledger");
  if (!ledger) return;
  var items = ledger.querySelectorAll("li");
  items.forEach(function (item, i) {
    item.title = "Click to mark item " + i + " as checked by the desk";
    item.style.cursor = "pointer";
    item.addEventListener("click", function () {
      item.classList.toggle("claimed");
      item.setAttribute("aria-pressed", item.classList.contains("claimed") ? "true" : "false");
    });
  });
});
