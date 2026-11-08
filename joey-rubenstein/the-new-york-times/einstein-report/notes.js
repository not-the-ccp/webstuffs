/* Form 3B term report — the stamp, delivered with a thump */
(function () {
  var stamp = document.getElementById("stamp");
  if (!stamp) return;
  function thump() {
    if (!stamp.classList.contains("in")) {
      stamp.classList.add("in");
    } else {
      // re-thump on click-free revisit of the sheet: replay once per reload interval
      stamp.classList.remove("in");
      void stamp.offsetWidth;
      stamp.classList.add("in");
    }
  }
  // First thump shortly after the page settles, so the red ink can dry first.
  setTimeout(thump, 500);
  // If the pupil lingers, the examiner stamps again.
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") thump();
  });
})();
