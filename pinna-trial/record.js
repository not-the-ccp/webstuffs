/* In re the Estate of Paul Pinna — record touches */
(function () {
  var exchanges = document.querySelectorAll(".exchange");

  // Re-stamp on tap of the seal, for the reader who likes the ink fresh.
  var stamp = document.querySelector(".stamp");
  if (stamp && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    stamp.style.pointerEvents = "auto";
    stamp.addEventListener("click", function () {
      stamp.style.animation = "none";
      void stamp.offsetWidth;
      stamp.style.animation = "stamp-in 0.5s ease-out forwards";
    });
  }

  // Bring each exchange fully into the light as it reaches the middle of the view.
  if ("IntersectionObserver" in window &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    exchanges.forEach(function (ex) { ex.classList.remove("called"); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) e.target.classList.add("called");
      });
    }, { threshold: 0.35 });
    exchanges.forEach(function (ex) { io.observe(ex); });
  }
})();
