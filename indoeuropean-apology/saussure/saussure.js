/* Register Entry No. 1857 — the sign, and the shelf */
(function () {
  "use strict";

  // The sign: click the circle to test the bond.
  var circle = document.getElementById("signCircle");
  var top = document.getElementById("signTop");
  var bottom = document.getElementById("signBottom");
  if (circle && top && bottom) {
    circle.addEventListener("click", function () {
      circle.classList.toggle("torn");
      // arbitrary bond: the two shores pass through each other
      var t = top.innerHTML;
      top.innerHTML = bottom.innerHTML;
      bottom.innerHTML = t;
    });
  }

  // The shelf: filter the cognate table by branch, and by searched form.
  var bar = document.getElementById("filterbar");
  var tab = document.getElementById("cogtab");
  var search = document.getElementById("formSearch");
  var count = document.getElementById("rowCount");
  if (!bar || !tab || !count) return;

  var buttons = Array.prototype.slice.call(bar.querySelectorAll(".fbtn"));
  var rows = Array.prototype.slice.call(tab.querySelectorAll("tbody tr"));
  var activeBranch = "all";
  var query = "";

  function ord(n) {
    var names = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven"];
    return names[n] || (n + " forms");
  }

  function apply() {
    var shown = 0;
    rows.forEach(function (row) {
      var branch = row.getAttribute("data-branch");
      var text = row.textContent.toLowerCase();
      var ok = (activeBranch === "all" || branch === activeBranch) &&
               (query === "" || text.indexOf(query) !== -1);
      row.classList.toggle("hidden", !ok);
      if (ok) shown++;
    });
    count.textContent = ord(shown) + (shown === 1 ? " form" : " forms") + " on the shelf.";
  }

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      buttons.forEach(function (b) { b.classList.remove("on"); });
      btn.classList.add("on");
      activeBranch = btn.getAttribute("data-branch");
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
