/* Term Report No. 12 — period filter for the timeline of the account */
(function () {
  "use strict";

  var filters = document.querySelectorAll(".filter");
  var events = document.querySelectorAll("#events li");
  var note = document.getElementById("filter-note");

  function apply(era) {
    var shown = 0;
    events.forEach(function (li) {
      var match = era === "all" || li.getAttribute("data-era") === era;
      li.classList.toggle("hidden", !match);
      if (match) shown++;
    });
    var label = document.querySelector('.filter[data-era="' + era + '"]');
    var name = label ? label.textContent : "All";
    note.textContent =
      (era === "all"
        ? "All periods standing. "
        : "Narrowed to " + name + ". "
      ) +
      shown + " of " + events.length + " entries shown. Press All to set the list out again.";
  }

  filters.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filters.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      apply(btn.getAttribute("data-era"));
    });
  });
})();
