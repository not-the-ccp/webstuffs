/* Notice LF/2024/117 — the stamp lands, and inquiries are logged. */
(function () {
  "use strict";

  var stamp = document.getElementById("stamp");
  if (stamp) {
    // Let the notice settle, then stamp it.
    window.setTimeout(function () {
      stamp.classList.add("landed");
    }, 350);
  }

  var count = document.getElementById("count");
  var btn = document.getElementById("inquire");
  if (count && btn) {
    var n = parseInt(count.textContent, 10) || 0;
    btn.addEventListener("click", function () {
      n += 1;
      count.textContent = String(n);
      count.style.transition = "none";
      count.style.color = "#8f2f2f";
      window.setTimeout(function () {
        count.style.transition = "color 600ms ease";
        count.style.color = "#7a2e2e";
      }, 20);
    });
  }
})();
