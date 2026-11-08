// Stamp the county seal into the record once the page settles,
// and let a reader tap the seal to re-stamp it.
(function () {
  var record = document.querySelector(".record");
  var seal = document.querySelector(".seal");
  if (!record || !seal) return;

  function stamp() {
    record.classList.remove("stamped");
    // force reflow so the transition can replay
    void record.offsetWidth;
    record.classList.add("stamped");
  }

  window.addEventListener("load", function () {
    setTimeout(stamp, 400);
  });

  seal.addEventListener("click", stamp);
  seal.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); stamp(); }
  });
  seal.setAttribute("role", "button");
  seal.setAttribute("tabindex", "0");
})();
