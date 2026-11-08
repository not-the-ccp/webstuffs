/* Press the bench stamp when the log scrolls into view. */
(function () {
  var stamp = document.getElementById("stamp");
  if (!stamp) return;
  var press = function () {
    stamp.classList.add("stamped");
    window.removeEventListener("scroll", onScroll);
  };
  var onScroll = function () {
    var r = stamp.getBoundingClientRect();
    if (r.top < window.innerHeight * 0.9) press();
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("load", onScroll);
  onScroll();
})();
