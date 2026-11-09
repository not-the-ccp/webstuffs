// Lot 41 — the hammer falls once, on the page
(function () {
  var line = document.getElementById("hammer-amount");
  var head = document.getElementById("hammer");
  if (!line) return;
  setTimeout(function () {
    if (head) head.textContent = "hammer: US$9,850 — gone";
    line.textContent = "US$9,850 (hammered)";
    line.classList.add("hammer-flash");
  }, 1800);
})();
