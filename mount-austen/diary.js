/* The Matanikau Diary — running order: click a date, the entry turns to it. */
(function () {
  "use strict";

  var start = new Date(1942, 11, 15); // 15 December 1942
  var buttons = Array.prototype.slice.call(document.querySelectorAll(".tdate"));
  var entries = Array.prototype.slice.call(document.querySelectorAll(".entry"));
  var flashTimer = null;

  // Compute the day numbers so the printed "Day N of 40" is always true.
  entries.forEach(function (entry) {
    var label = entry.querySelector(".eyday");
    if (!label) return;
    var parts = entry.querySelector(".edate").textContent.trim().split(" ");
    var months = { January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
                  July: 6, August: 7, September: 8, October: 9, November: 10, December: 11 };
    var d = new Date(parseInt(parts[2], 10), months[parts[0]], parseInt(parts[1], 10));
    var day = Math.round((d - start) / 86400000) + 1;
    var last = new Date(1943, 0, 23);
    var total = Math.round((last - start) / 86400000) + 1;
    label.textContent = "Day " + day + " of " + total;
  });

  function clearActive() {
    buttons.forEach(function (b) { b.classList.remove("active"); });
  }

  function flash(entry) {
    entries.forEach(function (e) { e.classList.remove("flash"); });
    entry.classList.add("flash");
    if (flashTimer) clearTimeout(flashTimer);
    flashTimer = setTimeout(function () { entry.classList.remove("flash"); }, 1600);
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      clearActive();
      button.classList.add("active");
      var target = document.getElementById(button.getAttribute("data-target"));
      if (!target) return;
      flash(target);
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  // Without a click, nothing moves: the diary reads top to bottom.
})();
