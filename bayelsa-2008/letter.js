// Press the wax seal once the letter has settled on screen.
(function () {
  var seal = document.querySelector(".seal");
  if (!seal) return;
  function press() {
    seal.textContent = "ESP \u00b7 BYLS \u00b7 24\u00b7V\u00b72008";
    seal.classList.add("pressed");
  }
  if (document.readyState === "complete") {
    setTimeout(press, 250);
  } else {
    window.addEventListener("load", function () {
      setTimeout(press, 250);
    });
  }
})();
