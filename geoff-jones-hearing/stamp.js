// Re-stamp the exhibit tab if the page returns to the foreground,
// and let hovering a transcript line darken its ruled margin.
(function () {
  "use strict";
  var stamp = document.getElementById("stamp");
  document.addEventListener("visibilitychange", function () {
    if (document.hidden || !stamp) return;
    stamp.style.animation = "none";
    // force reflow so the animation restarts
    void stamp.offsetWidth;
    stamp.style.animation = "";
  });
  var items = document.querySelectorAll(".record li");
  items.forEach(function (li) {
    li.addEventListener("mouseenter", function () { li.classList.add("hot"); });
    li.addEventListener("mouseleave", function () { li.classList.remove("hot"); });
  });
  var style = document.createElement("style");
  style.textContent = ".record li.hot::after { background: linear-gradient(180deg, #7a1f1f, transparent); } .record li.hot .speaker { color: #7a1f1f; }";
  document.head.appendChild(style);
})();
