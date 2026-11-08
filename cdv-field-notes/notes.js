/* Field-notes touches: the counts tick up like a tally column. */
(function () {
  function tick(el, target, step, delay) {
    if (!el) return;
    var value = 0;
    setTimeout(function () {
      var timer = setInterval(function () {
        value += step;
        if (value >= target) { value = target; clearInterval(timer); }
        el.textContent = value;
      }, delay);
    }, 400);
  }

  document.addEventListener("DOMContentLoaded", function () {
    tick(document.getElementById("count"), 6, 1, 120);
    tick(document.getElementById("rosettes"), 1995, 43, 4);
  });
})();
