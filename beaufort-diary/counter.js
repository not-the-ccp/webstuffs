// The little counter in the colophon. Counts up once when the page loads.
// Without this file the counter simply shows its starting number.
(function () {
  var el = document.getElementById("counter");
  if (!el) return;
  var target = parseInt(el.getAttribute("data-start"), 10) || 0;
  var current = 0;
  var step = Math.max(1, Math.floor(target / 40));
  var timer = setInterval(function () {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = String(current).padStart(6, "0");
  }, 30);
})();
