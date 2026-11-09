// Thread 2214 — the lantern by the reply bar.
(function () {
  var lamp = document.getElementById("lamp");
  if (!lamp) return;
  var lit = false;
  lamp.addEventListener("click", function () {
    lit = !lit;
    lamp.classList.toggle("lit", lit);
    lamp.setAttribute("aria-pressed", lit ? "true" : "false");
    lamp.textContent = lit ? "The lantern is lit" : "Light the lantern";
  });
})();
