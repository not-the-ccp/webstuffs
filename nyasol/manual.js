/* Chapter 11 — stamp the assay seal, and let the lamp hold. */
(function () {
  var stamp = document.getElementById("stamp");
  if (!stamp) return;

  var reduce = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function press() {
    stamp.classList.add("stamped");
  }

  if (reduce) {
    press();
  } else {
    window.addEventListener("load", function () {
      setTimeout(press, 650);
    });
  }

  /* A second press on click re-stamps, as the bench always has. */
  document.querySelector(".masthead").addEventListener("click", function () {
    stamp.classList.remove("stamped");
    void stamp.offsetWidth; /* restart the transition */
    stamp.classList.add("stamped");
  });
})();
