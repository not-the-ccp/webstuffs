/* Restaurant Pages: the four and a half stars pop in sequence, like the flags at the line. */
(function () {
  var stars = document.querySelectorAll("#stars .star");
  if (!stars.length) return;
  var i = 0;
  function lightNext() {
    if (i >= stars.length) return;
    stars[i].classList.add("lit");
    i += 1;
    setTimeout(lightNext, 260);
  }
  var target = document.getElementById("verdict");
  if ("IntersectionObserver" in window && target) {
    var seen = false;
    var obs = new IntersectionObserver(function (entries) {
      if (!seen && entries.some(function (e) { return e.isIntersecting; })) {
        seen = true;
        obs.disconnect();
        lightNext();
      }
    }, { threshold: 0.4 });
    obs.observe(target);
  } else {
    lightNext();
  }
})();
