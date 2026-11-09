/* The yield dial: a number between the lot's 100 and 1,000 kilotons,
   ticking like a watch bill, settling on 375 — the butter, the median. */
(function () {
  var el = document.getElementById("yield-num");
  if (!el) return;
  var target = 375;
  var n = 100;
  var iv = window.setInterval(function () {
    n += 1 + Math.floor(Math.random() * 6);
    if (n >= target) {
      n = target;
      window.clearInterval(iv);
      el.style.color = "#f4ead8";
    }
    el.textContent = n;
  }, 60);
})();
