/* Scene Shop Diary — small touches; the entry reads plain without this file */
(function () {
  document.documentElement.classList.add("js");

  var entries = Array.prototype.slice.call(document.querySelectorAll(".entry"));

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (batch) {
      batch.forEach(function (item) {
        if (item.isIntersecting) {
          item.target.classList.add("in");
          io.unobserve(item.target);
        }
      });
    }, { threshold: 0.12 });
    entries.forEach(function (el) { io.observe(el); });
  } else {
    entries.forEach(function (el) { el.classList.add("in"); });
  }

  // the candle leans on hover, the way it leans in the shop
  var candle = document.getElementById("candle");
  if (candle) {
    var flame = candle.querySelector(".flame");
    candle.addEventListener("mouseenter", function () {
      flame.style.animationDuration = "0.7s";
    });
    candle.addEventListener("mouseleave", function () {
      flame.style.animationDuration = "2.4s";
    });
  }
})();
