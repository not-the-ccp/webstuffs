// Turf Moor brochure — the Long Red Line timeline
(function () {
  var chips = Array.prototype.slice.call(document.querySelectorAll(".chip"));
  var entries = Array.prototype.slice.call(document.querySelectorAll(".tl-entry"));
  var card = document.getElementById("timeline-card");
  if (!chips.length || !card) return;

  function select(year) {
    var html = "";
    entries.forEach(function (li) {
      if (li.dataset.year === year) html = li.innerHTML;
    });
    card.innerHTML = html;
    chips.forEach(function (c) {
      c.setAttribute("aria-selected", c.dataset.year === year ? "true" : "false");
    });
    card.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  chips.forEach(function (chip) {
    chip.setAttribute("role", "tab");
    chip.addEventListener("click", function () { select(chip.dataset.year); });
  });

  select("1882");
})();
