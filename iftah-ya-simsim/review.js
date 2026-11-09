/* Season log for Iftah Ya Simsim: the year buttons spotlight entries. */
(function () {
  var buttons = document.querySelectorAll(".log-year");
  var entries = document.querySelectorAll(".log-entry");
  if (!buttons.length || !entries.length) return;

  function clearAll() {
    buttons.forEach(function (b) { b.setAttribute("aria-pressed", "false"); });
    entries.forEach(function (e) { e.classList.remove("is-active"); });
  }

  function focusYear(year) {
    var target = null;
    entries.forEach(function (e) {
      var on = e.getAttribute("data-year") === year;
      e.classList.toggle("is-active", on);
      if (on) target = e;
    });
    buttons.forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-year") === year));
    });
    if (target && target.scrollIntoView) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  buttons.forEach(function (b) {
    b.addEventListener("click", function () {
      var year = b.getAttribute("data-year");
      if (b.getAttribute("aria-pressed") === "true") {
        clearAll();
      } else {
        clearAll();
        focusYear(year);
      }
    });
  });
})();
