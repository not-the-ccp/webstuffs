/* The Hankook Ledger — filter the column */
(function () {
  "use strict";

  var buttons = document.querySelectorAll("#filter-row .filter-btn");
  var ads = document.querySelectorAll("#column .ad");
  var hint = document.getElementById("filter-hint");

  if (!buttons.length || !ads.length) return;

  var names = {
    all: "all of the column",
    sale: "For Sale ads",
    lost: "Lost & Found ads",
    wanted: "Wanted ads",
    sports: "Sport ads",
    travel: "Travel ads",
    notice: "Notices"
  };

  function apply(filter) {
    var shown = 0;
    ads.forEach(function (ad) {
      var match = filter === "all" || ad.dataset.category === filter;
      ad.classList.toggle("is-hidden", !match);
      if (match) shown += 1;
    });
    if (hint) {
      hint.textContent = "Showing " + names[filter] + " — " + shown +
        " of " + ads.length + " in the column." +
        (filter === "all" ? " Without the clockwork every ad stands here anyway, in order." : "");
    }
    buttons.forEach(function (btn) {
      btn.classList.toggle("is-active", btn.dataset.filter === filter);
    });
  }

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      apply(btn.dataset.filter || "all");
    });
  });

  apply("all");
})();
