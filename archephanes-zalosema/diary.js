// The lichen breaks its rest when poked, like the real thing.
(function () {
  var moth = document.getElementById("moth");
  if (!moth) return;

  function toggle() {
    moth.classList.toggle("open");
  }

  moth.addEventListener("click", toggle);
  moth.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  });
  moth.setAttribute("tabindex", "0");
  moth.setAttribute("role", "button");
})();
