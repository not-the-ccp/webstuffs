/* Artillery — Plate 9 · firing touch (progressive enhancement only) */
(function () {
  var piece = document.querySelector(".piece");
  var counter = document.getElementById("rounds");
  var total = 0;

  if (!piece || !counter) return;

  function fire() {
    piece.classList.add("firing");
    total += 1;
    counter.textContent = total;
    setTimeout(function () {
      piece.classList.remove("firing");
    }, 520);
  }

  piece.addEventListener("click", fire);
  piece.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      fire();
    }
  });
  piece.setAttribute("tabindex", "0");
  piece.setAttribute("role", "button");
  piece.setAttribute("aria-label", "Fire the piece");
})();
