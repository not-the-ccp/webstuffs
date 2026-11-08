/* Notice No. 47 — the stamp lands a moment after the paper does */
document.addEventListener("DOMContentLoaded", function () {
  var stamp = document.getElementById("stamp");
  if (!stamp) return;
  // Small delay so the page settles first; harmless if JS never runs.
  setTimeout(function () {
    stamp.classList.add("stamp--landed");
  }, 350);
});
