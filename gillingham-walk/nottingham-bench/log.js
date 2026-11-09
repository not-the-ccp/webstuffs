// The Nottingham Bench — click a sheet to pin it at the top of the log.
document.addEventListener("DOMContentLoaded", function () {
  var entries = Array.prototype.slice.call(document.querySelectorAll(".entry"));
  entries.forEach(function (entry) {
    entry.style.cursor = "pointer";
    entry.setAttribute("role", "button");
    entry.title = "Click to pin this sheet at the top of the log.";
    entry.addEventListener("click", function (e) {
      if (e.target.closest("a")) return; // let links be links
      var parent = entry.parentElement;
      var first = parent.querySelector(".entry");
      if (first === entry) return; // already on top
      parent.insertBefore(entry, first);
      entry.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
  });
});
