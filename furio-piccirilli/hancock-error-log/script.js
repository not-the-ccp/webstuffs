/* HANCOCK — Field Error Reference: strike resolved codes in this copy */
(function () {
  var rows = Array.prototype.slice.call(document.querySelectorAll("#err-rows tr"));
  var out = document.getElementById("resolve-count");
  if (!rows.length || !out) return;

  rows.forEach(function (row) {
    row.addEventListener("click", function () {
      row.classList.toggle("resolved");
      var done = rows.filter(function (r) { return r.classList.contains("resolved"); }).length;
      out.textContent = "Codes resolved in this copy: " + done + " of " + rows.length;
    });
  });
})();
