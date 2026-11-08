// VR-62 — drop the red APOLOGY FILE stamp when the letter is on screen.
(function () {
  var stamp = document.getElementById("stamp");
  if (!stamp) return;

  function thump() {
    stamp.classList.add("stamped");
    stamp.style.transform = "rotate(-14deg) scale(1)";
  }

  if (document.readyState === "complete") {
    thump();
  } else {
    window.addEventListener("load", thump);
  }

  // a little extra pressure on click, for the file's sake
  stamp.addEventListener("click", function () {
    stamp.style.transition = "transform 0.12s ease";
    stamp.style.transform = "rotate(-12deg) scale(0.96)";
    setTimeout(function () {
      stamp.style.transition = "";
      stamp.style.transform = "rotate(-14deg) scale(1)";
    }, 130);
  });
})();
