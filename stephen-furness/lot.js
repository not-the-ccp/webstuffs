/* Lot 1917 — the hammer falls on a dry afternoon */
(function () {
  var stamp = document.getElementById("stamp");
  var line = document.getElementById("tide-line");
  if (!stamp) return;

  // The hammer falls once, at the moment of first reading of the kept line.
  function fall() {
    stamp.classList.add("fallen");
    if (line) {
      line.removeEventListener("mouseenter", fall);
    }
  }

  if (line) line.addEventListener("mouseenter", fall);

  // Fallback: the hammer falls in time regardless.
  setTimeout(fall, 14000);
})();
