/* Stamp-in touch for Specification No. 85-0023.
   The page reads fine without this; it only re-inks the seal on click. */
(function () {
  var stamp = document.getElementById("stamp");
  if (!stamp) return;
  stamp.addEventListener("click", function () {
    stamp.style.animation = "none";
    void stamp.offsetWidth; // restart the ink-in animation
    stamp.style.animation = "";
  });
})();
