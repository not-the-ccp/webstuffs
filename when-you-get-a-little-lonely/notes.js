// Track-list touch: mark a track as played.
document.querySelectorAll("ol.tracks li").forEach(function (li) {
  li.tabIndex = 0;
  var toggle = function () { li.classList.toggle("played"); };
  li.addEventListener("click", toggle);
  li.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
  });
});
