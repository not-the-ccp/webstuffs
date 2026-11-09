// Build Log, Table No. 6 — stamps the entries in on load, like the desk stamps the slips.
(function () {
  var entries = Array.prototype.slice.call(document.querySelectorAll(".entry"));
  entries.forEach(function (entry, i) {
    setTimeout(function () { entry.classList.add("stamped"); }, 200 + i * 180);
  });
})();
