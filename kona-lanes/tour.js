/* The Kona Lanes Walk — tap a stop to check it off, like the shoe-rental ledger. */
(function () {
  var stops = document.querySelectorAll(".stop");
  stops.forEach(function (stop, i) {
    stop.setAttribute("role", "button");
    stop.setAttribute("tabindex", "0");
    stop.setAttribute("aria-pressed", "false");
    stop.title = "Tap to check this stop off";
    function toggle() {
      stop.classList.toggle("done");
      stop.setAttribute("aria-pressed", stop.classList.contains("done") ? "true" : "false");
    }
    stop.addEventListener("click", toggle);
    stop.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle();
      }
    });
  });
})();
