// Littleton Kettle Book, Card No. 61 — the card settles on the table
document.addEventListener("DOMContentLoaded", function () {
  var card = document.querySelector(".card");
  if (!card) return;
  card.style.transition = "transform 900ms cubic-bezier(0.22, 1, 0.36, 1)";
  requestAnimationFrame(function () {
    card.style.transform = "rotate(0deg)";
  });
});
