/* The Atlantic Line, La Caleta edition — the stars keep their own pace */
(function () {
  var stars = document.querySelectorAll("#skyline .star");
  stars.forEach(function (star, i) {
    var duration = 3 + (i % 4) * 0.9 + Math.random() * 1.2;
    var delay = Math.random() * 3;
    star.style.animationDuration = duration + "s";
    star.style.animationDelay = delay + "s";
  });
})();
