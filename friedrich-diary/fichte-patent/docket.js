/* Application No. 1794/0519 — deposits the red seal once the docket has settled */
(function () {
  "use strict";
  var seal = document.getElementById("seal");
  if (!seal) return;

  function stamp() {
    seal.classList.add("sealed");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      setTimeout(stamp, 900);
    });
  } else {
    setTimeout(stamp, 900);
  }
})();
