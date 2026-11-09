/* Station No. 714 — chalk line. The entry reads fine without this. */
(function () {
  var line = document.getElementById("chalk-line");
  var count = document.getElementById("chalk-count");
  if (!line || !count) return;

  var n = 3; // three tosses, by the keeper's own tally

  function toss() {
    n += 1;
    count.textContent = String(n);
    line.setAttribute("aria-pressed", "true");
    window.setTimeout(function () {
      line.setAttribute("aria-pressed", "false");
    }, 200);
  }

  line.addEventListener("click", toss);
  line.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toss();
    }
  });
})();
