// Case 7 — the gallery lamp. Text is fully readable with or without it.
(function () {
  var lamp = document.getElementById("lamp");
  if (!lamp) return;
  lamp.addEventListener("click", function () {
    var lit = document.body.classList.toggle("lit");
    lamp.setAttribute("aria-pressed", lit ? "true" : "false");
  });
})();
