/* Press the wax seal when the letter is in view; the letter is fully
   readable without this script — it only sets the seal down. */
(function () {
  var seal = document.getElementById("seal");
  if (!seal) return;

  function setDown() {
    seal.classList.add("sealed");
  }

  if ("IntersectionObserver" in window) {
    var seen = false;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting && !seen) {
          seen = true;
          setDown();
          io.disconnect();
        }
      });
    }, { threshold: 0.5 });
    io.observe(seal);
  } else {
    setDown();
  }

  // Re-press the seal if it is tapped: it lifts and lands again.
  seal.addEventListener("click", function () {
    seal.classList.remove("sealed");
    void seal.offsetWidth; // force reflow so the press replays
    seal.classList.add("sealed");
  });
})();
