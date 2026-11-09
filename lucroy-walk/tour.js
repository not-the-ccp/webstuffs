// Route Pamphlet No. 1986-JL — the stop's "walked" mark
(function () {
  var stops = document.querySelectorAll(".stop");
  stops.forEach(function (stop, i) {
    var mark = document.createElement("span");
    mark.className = "vis";
    mark.textContent = "STOP " + (i + 1) + " — NOT WALKED";
    mark.setAttribute("role", "button");
    mark.setAttribute("tabindex", "0");
    function toggle() {
      stop.classList.toggle("won");
      mark.textContent = stop.classList.contains("won")
        ? "STOP " + (i + 1) + " — WALKED"
        : "STOP " + (i + 1) + " — NOT WALKED";
    }
    mark.addEventListener("click", toggle);
    mark.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
    });
    stop.appendChild(mark);
  });
})();
