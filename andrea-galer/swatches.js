// The swatch card: press a corner, the card gives the name.
(function () {
  var card = document.getElementById("swatches");
  if (!card) return;
  var cap = document.getElementById("swatch-cap");
  var rest = cap ? cap.textContent : "";
  card.addEventListener("click", function (e) {
    var btn = e.target.closest(".swatch");
    if (!btn || !cap) return;
    cap.textContent = "The card gives the name: " + btn.dataset.name + ".";
    cap.classList.add("given");
  });
  card.addEventListener("mouseleave", function () {
    if (!cap) return;
    cap.textContent = rest;
    cap.classList.remove("given");
  });
})();
