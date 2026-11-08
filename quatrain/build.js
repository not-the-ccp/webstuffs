// The Quatrain — Build Log: fade the entries in as they enter view,
// and let the CSS ship take the wind on command. The text reads fine
// with this script absent.

(function () {
  "use strict";

  var entries = Array.prototype.slice.call(document.querySelectorAll(".entry"));

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (report) {
        report.forEach(function (item) {
          if (item.isIntersecting) {
            item.target.classList.add("visible");
            observer.unobserve(item.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    entries.forEach(function (entry) { observer.observe(entry); });
  } else {
    entries.forEach(function (entry) { entry.classList.add("visible"); });
  }

  var sail = document.getElementById("sail");
  var button = document.getElementById("sail-button");
  if (sail && button) {
    button.addEventListener("click", function () {
      var raised = sail.classList.toggle("sailed");
      button.textContent = raised ? "Drop the sails" : "Raise the sails";
    });
  }
})();
