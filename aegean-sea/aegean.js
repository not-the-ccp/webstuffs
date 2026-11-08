/* Field Manual FM-9, Chapter 7 — compass interaction */
(function () {
  var needle = document.getElementById("needle");
  if (!needle) return;

  // Clicking the compass gives it a full spin, then it settles on true north.
  needle.addEventListener("click", function () {
    needle.style.animation = "none";
    needle.style.transition = "transform 2.4s cubic-bezier(0.2, 0.8, 0.2, 1.1)";
    needle.style.transform = "rotate(356deg)";
    setTimeout(function () {
      needle.style.transition = "";
      needle.style.transform = "";
      needle.style.animation = "";
    }, 2500);
  });
})();
