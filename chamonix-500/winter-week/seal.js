/* Form W-01: the seal takes one press of the thumb. */
(function () {
  var stamp = document.getElementById("stamp");
  if (!stamp) return;

  function press() {
    var on = stamp.classList.toggle("pressed");
    stamp.setAttribute("aria-pressed", on ? "true" : "false");
  }

  stamp.addEventListener("click", press);
  stamp.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      press();
    }
  });
})();
