/* Erni & Son — the coppersmiths read the ledger line down */
(function () {
  var line = document.getElementById("ledger");
  var reading = document.getElementById("reading");
  if (!line || !reading) return;

  line.addEventListener("click", function () {
    reading.hidden = !reading.hidden;
    line.setAttribute("aria-expanded", reading.hidden ? "false" : "true");
  });
  line.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      line.click();
    }
  });
  line.setAttribute("tabindex", "0");
  line.setAttribute("role", "button");
  line.setAttribute("aria-expanded", "false");
})();
