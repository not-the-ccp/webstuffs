/* Obituary, Entered Late — reveal the entries one by one, like a minute read aloud. */
(function () {
  var entries = document.querySelectorAll(".entry");
  if (!("IntersectionObserver" in window)) {
    entries.forEach(function (el) { el.classList.add("shown"); });
    return;
  }
  var observer = new IntersectionObserver(function (items) {
    items.forEach(function (item) {
      if (item.isIntersecting) {
        item.target.classList.add("shown");
        observer.unobserve(item.target);
      }
    });
  }, { threshold: 0.12 });
  entries.forEach(function (el) { observer.observe(el); });

  /* The first entry is above the fold: show it without waiting. */
  if (entries[0]) { requestAnimationFrame(function () { entries[0].classList.add("shown"); }); }

  /* Let the candle flicker at its own pace. */
  var flame = document.querySelector(".flame");
  if (flame) {
    var speed = 1.9 + Math.random() * 1.2;
    flame.style.animationDuration = speed.toFixed(2) + "s";
  }
})();
