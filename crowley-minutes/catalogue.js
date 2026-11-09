// Session 7 — filterable catalogue of the black parcel
(function () {
  var body = document.getElementById("catalogue-body");
  if (!body) return;

  var rows = Array.prototype.slice.call(body.querySelectorAll("tr"));
  var buttons = document.querySelectorAll(".filter-btn");
  var search = document.getElementById("catalogue-search");
  var count = document.getElementById("catalogue-count");

  var form = "all";
  var query = "";

  function apply() {
    var shown = 0;
    rows.forEach(function (row) {
      var okForm = form === "all" || row.getAttribute("data-form") === form;
      var okText =
        !query ||
        row.textContent.toLowerCase().indexOf(query) !== -1;
      var show = okForm && okText;
      row.classList.toggle("hidden", !show);
      if (show) shown += 1;
    });
    if (count) {
      if (shown === rows.length) {
        count.textContent = "Showing all " + rows.length + " items of the parcel.";
      } else {
        count.textContent = "Showing " + shown + " of " + rows.length + " items. The rest keep counsel in the cellar.";
      }
    }
  }

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      form = btn.getAttribute("data-form");
      buttons.forEach(function (b) {
        b.classList.toggle("is-on", b === btn);
      });
      apply();
    });
  });

  if (search) {
    search.addEventListener("input", function () {
      query = search.value.trim().toLowerCase();
      apply();
    });
  }

  apply();
})();
