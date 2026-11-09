/* FM 17-47, Chapter 7 — the stare decisis seal */
(function () {
  var btn = document.getElementById("stampBtn");
  var stamp = document.getElementById("stamp");
  if (!btn || !stamp) return;

  var pressed = false;
  btn.addEventListener("click", function () {
    pressed = !pressed;
    stamp.classList.toggle("pressed", pressed);
    btn.textContent = pressed
      ? "Seal pressed — the bench stands by"
      : "Press for the stare decisis seal";
  });
})();
