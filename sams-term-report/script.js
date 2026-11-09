// Registrar's stamp: press the stamp slot, the stamp thumps in, then fades.
(function () {
  var slot = document.getElementById("stamp-slot");
  var stamp = document.getElementById("stamp");
  if (!slot || !stamp) return;
  var timer = null;

  function showStamp() {
    stamp.classList.add("shown");
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      stamp.classList.remove("shown");
    }, 1800);
  }

  slot.addEventListener("click", showStamp);
  slot.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); showStamp(); }
  });
  slot.setAttribute("tabindex", "0");
  slot.setAttribute("role", "button");
  slot.setAttribute("aria-label", "Registrar's stamp");
})();
