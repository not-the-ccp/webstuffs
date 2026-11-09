/* Error Register No. 4 — severity filter */
(function () {
  var bar = document.getElementById("filterbar");
  if (!bar) return;
  var buttons = bar.querySelectorAll(".filter");
  var entries = document.querySelectorAll(".log .entry");
  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      buttons.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      var sev = btn.getAttribute("data-sev");
      entries.forEach(function (e) {
        e.classList.toggle("hidden", sev !== "all" && e.getAttribute("data-sev") !== sev);
      });
    });
  });
})();
