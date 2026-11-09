/* Studio 4: the tick is the clock, the tick is the money. */
(function () {
  var TOTAL = 1000000; // one million seconds
  var el = document.getElementById("runsec");
  if (!el) return;

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var tickRate = reduce ? 1 : 5; // broadcast seconds advanced per real second
  var count = 0;
  var acc = 0;

  function pad(n) {
    n = String(n % TOTAL);
    while (n.length < 9) n = "0" + n;
    return n;
  }

  function render() {
    el.textContent = "SEC " + pad(count);
  }

  setInterval(function () {
    acc += 1;
    if (acc >= tickRate) {
      acc = 0;
      count = (count + 1) % TOTAL;
      render();
    }
  }, 100);

  render();
})();
