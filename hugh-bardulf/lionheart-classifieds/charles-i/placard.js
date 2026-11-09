/* Placard No. 1068 — the Stuart Case: the reign counter */
(function () {
  var entries = document.querySelectorAll("#entries li");
  var label = document.getElementById("dial-label");
  if (!entries.length || !label) return;

  entries.forEach(function (li, i) {
    li.tabIndex = 0;
    li.setAttribute("role", "button");
    li.setAttribute("aria-pressed", "false");
    function activate() {
      entries.forEach(function (other) {
        other.classList.remove("active");
        other.setAttribute("aria-pressed", "false");
      });
      li.classList.add("active");
      li.setAttribute("aria-pressed", "true");
      var note = li.getAttribute("data-note") || "";
      label.textContent = "Entry " + (i + 1) + " of " + entries.length +
        " · the case reads: " + note;
    }
    li.addEventListener("click", activate);
    li.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        activate();
      }
    });
  });
})();
