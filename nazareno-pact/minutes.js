// A quiet touch: the registry stamp appears after the page settles,
// and the session clock counts the minutes of the day.
(function () {
  "use strict";

  var stamp = document.createElement("div");
  stamp.id = "stamp";
  stamp.textContent = "In Record · 2014-01-18";
  document.body.appendChild(stamp);
  window.addEventListener("load", function () {
    setTimeout(function () { stamp.classList.add("shown"); }, 900);
  });

  // Minutes elapsed in the session, 10:40 to 17:15 = 395.
  var start = 10 * 60 + 40;
  var end = 17 * 60 + 15;
  var target = end - start;
  var el = document.querySelector(".folio-no");
  if (!el) return;
  var base = el.textContent;
  var n = 0;
  var step = Math.max(1, Math.round(target / 90));
  var tick = setInterval(function () {
    n = Math.min(target, n + step);
    el.textContent = base + " · minutes kept: " + n;
    if (n >= target) clearInterval(tick);
  }, 60);
})();
