/* The Georgia Leg — the little route marker that walks with you */
(function () {
  var needle = document.getElementById("needle");
  if (!needle) return;
  function place() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var frac = max > 0 ? (window.scrollY / max) : 0;
    needle.style.top = (frac * (window.innerHeight - 30) + 10) + "px";
  }
  window.addEventListener("scroll", place, { passive: true });
  window.addEventListener("resize", place);
  place();
})();
