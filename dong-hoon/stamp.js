/* Tap the seal to turn the door: cycles the three registered spellings. */
(function () {
  var names = ["DONG-HOON", "TONG-HOON", "DONG-HUN"];
  var el = document.getElementById("stamp-name");
  var stamp = el && el.closest(".stamp");
  if (!stamp) return;
  var i = 0;
  function turn() {
    i = (i + 1) % names.length;
    el.textContent = names[i];
    el.animate(
      [{ transform: "rotate(-6deg) scale(0.92)", opacity: 0.3 },
       { transform: "rotate(0deg) scale(1)", opacity: 1 }],
      { duration: 380, easing: "ease-out" }
    );
  }
  stamp.addEventListener("click", turn);
  stamp.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); turn(); }
  });
  stamp.setAttribute("tabindex", "0");
  stamp.setAttribute("role", "button");
  stamp.setAttribute("aria-label", "Turn the seal to cycle the registered spellings");
})();
