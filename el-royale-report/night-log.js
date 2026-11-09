/* The night at the El Royale — step-through log */
(function () {
  var root = document.getElementById("nightlog");
  if (!root) return;

  var buttons = Array.prototype.slice.call(root.querySelectorAll(".night-time"));
  var entries = Array.prototype.slice.call(root.querySelectorAll(".entry"));
  var readout = document.getElementById("nightreadout");

  function clearAll() {
    buttons.forEach(function (b) { b.classList.remove("active"); });
    entries.forEach(function (e) { e.classList.remove("lit"); });
    if (readout) readout.textContent = "Select a time above, or read the full log as printed.";
  }

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var n = btn.getAttribute("data-n");
      var wasActive = btn.classList.contains("active");
      clearAll();
      if (!wasActive) {
        btn.classList.add("active");
        var entry = entries.filter(function (e) {
          return e.getAttribute("data-entry") === n;
        })[0];
        if (entry) {
          entry.classList.add("lit");
          if (readout) {
            readout.textContent = "Log entry for " + entry.querySelector(".stamp").textContent +
              " — shown above in the highlighted row.";
          }
          entry.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }
    });
  });

  // First entry is lit by default, so the feature announces itself.
  if (buttons[0]) buttons[0].click();
})();
