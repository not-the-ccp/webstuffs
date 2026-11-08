// A slow counter for the Scrape's miles: the road is never finished counting.
(function () {
  var el = document.getElementById("miles");
  if (!el) return;
  var total = 600;
  var n = 0;
  var timer = setInterval(function () {
    n += 7;
    if (n >= total) {
      n = total;
      clearInterval(timer);
      el.parentElement.innerHTML =
        "Miles covered: <span id='miles'>600</span> — counted, and then counted again";
      return;
    }
    el.textContent = String(n);
  }, 120);
})();
