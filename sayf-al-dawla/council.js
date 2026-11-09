/* Filter the register of sittings by kind. */
(function () {
  var buttons = document.querySelectorAll("#filter button");
  var rows = document.querySelectorAll("#sittings tbody tr");
  if (!buttons.length || !rows.length) return;

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var kind = btn.getAttribute("data-kind");
      buttons.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      rows.forEach(function (row) {
        row.hidden = kind !== "all" && row.getAttribute("data-kind") !== kind;
      });
    });
  });
})();
