/* Cold Store seal — one touch breaks the wax; the word under it stays. */
(function () {
  var seal = document.getElementById("seal");
  if (!seal) return;

  var sealed = true;
  seal.setAttribute("role", "button");
  seal.setAttribute("tabindex", "0");
  seal.setAttribute("aria-pressed", "false");
  seal.setAttribute("aria-label", "Seal of the Cold Store, press to break the wax");

  function toggle() {
    sealed = !sealed;
    seal.classList.toggle("unsealed", !sealed);
    seal.setAttribute("aria-pressed", String(!sealed));
  }

  seal.addEventListener("click", toggle);
  seal.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  });
})();
