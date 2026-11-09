/* Lot 41 — the hammer. Optional; the page reads fine without it. */
(function () {
  var hammer = document.getElementById("hammer");
  var word = document.getElementById("hammer-word");
  if (!hammer || !word) return;
  hammer.addEventListener("click", function () {
    hammer.classList.toggle("sold");
    word.textContent = hammer.classList.contains("sold")
      ? "SOLD — £1,401,000, TO THE SYNDICATE ITSELF"
      : "TO BE SOLD";
  });
})();
