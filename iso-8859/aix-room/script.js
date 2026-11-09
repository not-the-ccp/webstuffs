/* The AIX Room — the platform table: call up a sitting.
   The page reads fine without this: every row stays on the plate. */

(function () {
  var buttons = document.querySelectorAll(".filter");
  var rows = document.querySelectorAll("#platform-table tbody tr");

  function show(era) {
    rows.forEach(function (row) {
      row.style.display =
        era === "all" || row.getAttribute("data-era") === era ? "" : "none";
    });
    buttons.forEach(function (button) {
      var pressed = button.getAttribute("data-era") === era;
      button.classList.toggle("active", pressed);
      button.setAttribute("aria-pressed", pressed ? "true" : "false");
    });
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      show(button.getAttribute("data-era"));
    });
  });

  show("all");
})();
