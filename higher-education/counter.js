/* Visitor counter for Safety Data Sheet No. HE-786.
   Counts once, writes it down, does not return to it. */
(function () {
  var el = document.getElementById("counter");
  if (!el) return;

  var base = parseInt(el.textContent.replace(/\D/g, ""), 10) || 11327;
  var count = base;

  function render() {
    el.textContent = String(count).padStart(6, "0");
  }

  // a slow, honest increment — one step per few seconds, like the tide
  var ticks = 0;
  var timer = setInterval(function () {
    ticks++;
    if (ticks % 4 === 0) {
      count += 1;
      render();
    }
    // stop counting after a while; the discipline of the house
    if (count >= base + 3) {
      clearInterval(timer);
    }
  }, 2500);

  render();
})();
