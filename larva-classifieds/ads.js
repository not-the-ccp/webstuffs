// Brass sorters for the Larva & Change Column: filter the notices by class.
(function () {
  var buttons = document.querySelectorAll(".filterbar button");
  var rows = document.querySelectorAll("#ads tbody tr");
  var count = document.getElementById("count");

  function apply(filter) {
    var shown = 0;
    rows.forEach(function (row) {
      var match = filter === "all" || row.getAttribute("data-cat") === filter;
      row.classList.toggle("hidden", !match);
      if (match) shown++;
    });
    if (count) {
      count.textContent = shown + " of " + rows.length + " notices pinned";
    }
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      buttons.forEach(function (b) { b.classList.remove("on"); });
      button.classList.add("on");
      apply(button.getAttribute("data-filter"));
    });
  });

  apply("all");
})();
