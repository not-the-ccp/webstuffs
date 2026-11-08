// The Northwestern Fringe — drop the needle.
// The record spins while the sleeve is in view, and clicking the
// sleeve toggles the needle. Nothing on the page depends on this.
(function () {
  var vinyl = document.getElementById("vinyl");
  var sleeve = document.getElementById("sleeve");
  if (!vinyl || !sleeve) return;

  vinyl.addEventListener("click", function () {
    vinyl.classList.toggle("playing");
  });

  sleeve.addEventListener("click", function () {
    vinyl.classList.toggle("playing");
  });

  // Start the motor the first time the record is seen.
  if ("IntersectionObserver" in window) {
    var seen = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) vinyl.classList.add("playing");
      });
    }, { threshold: 0.4 });
    seen.observe(vinyl);
  } else {
    vinyl.classList.add("playing");
  }
})();
