// Liner notes for The Thousand-Year Record: put a track under the needle.
(function () {
  var rows = document.querySelectorAll(".track");
  var labelNum = document.getElementById("labelNum");
  var vinyl = document.getElementById("vinyl");
  if (!rows.length || !labelNum) return;

  rows.forEach(function (row) {
    row.setAttribute("role", "button");
    row.setAttribute("tabindex", "0");
    var choose = function () {
      rows.forEach(function (r) { r.classList.remove("now"); r.removeAttribute("aria-pressed"); });
      row.classList.add("now");
      row.setAttribute("aria-pressed", "true");
      labelNum.textContent = row.getAttribute("data-code") || "A1";
      var dur = parseInt(row.getAttribute("data-dur"), 10);
      if (vinyl) vinyl.style.animationDuration = (isNaN(dur) ? 6 : dur) + "s";
    };
    row.addEventListener("click", choose);
    row.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); choose(); }
    });
  });
})();
