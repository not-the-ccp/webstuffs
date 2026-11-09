// I Wanna Go — filter the seven editions of the menu book
(function () {
  var search = document.getElementById("edition-search");
  var courseFilter = document.getElementById("course-filter");
  var table = document.getElementById("edition-table");
  var count = document.getElementById("edition-count");
  if (!search || !courseFilter || !table || !count) return;

  var rows = Array.prototype.slice.call(table.querySelectorAll("tbody tr"));

  function apply() {
    var term = search.value.trim().toLowerCase();
    var courses = courseFilter.value;
    var shown = 0;

    rows.forEach(function (row) {
      var text = row.textContent.toLowerCase();
      var matchesTerm = term === "" || text.indexOf(term) !== -1;
      var matchesCourses = courses === "all" || row.getAttribute("data-courses") === courses;
      var visible = matchesTerm && matchesCourses;
      row.classList.toggle("hidden", !visible);
      if (visible) shown++;
    });

    if (shown === rows.length) {
      count.textContent = "All seven editions are showing.";
    } else if (shown === 1) {
      count.textContent = "One edition matches: " + rows.filter(function (r) {
        return !r.classList.contains("hidden");
      })[0].cells[2].textContent + ".";
    } else if (shown === 0) {
      count.textContent = "No edition matches — the depot's ledger keeps its secrets.";
    } else {
      count.textContent = shown + " of the seven editions match.";
    }
  }

  search.addEventListener("input", apply);
  courseFilter.addEventListener("change", apply);
})();
