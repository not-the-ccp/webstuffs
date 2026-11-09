/* The Low — Dining Table No. 42: light the stars, one by one, as the chandeliers would. */
(function () {
  var stars = document.querySelectorAll("#stars .star");
  var full = 4; // four and a half stars
  Array.prototype.forEach.call(stars, function (star, i) {
    if (i < full) {
      setTimeout(function () { star.classList.add("lit"); }, 250 * (i + 1));
    } else if (star.classList.contains("half")) {
      setTimeout(function () { star.classList.add("lit"); }, 250 * (i + 1));
    }
  });

  // The estamp line ticks gently, like the building's clock, while it is in view.
  var estamp = document.getElementById("estamp");
  if (estamp && "IntersectionObserver" in window) {
    var wobble = setInterval(function () {
      estamp.style.transform =
        "rotate(" + (Math.random() * 2 - 1).toFixed(2) + "deg)";
    }, 900);
    new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) {
          clearInterval(wobble);
          estamp.style.transform = "rotate(-1deg)";
        }
      });
    }, { threshold: 0.1 }).observe(estamp);
  }
})();
