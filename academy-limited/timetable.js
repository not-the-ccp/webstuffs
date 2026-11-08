// The Academy Limited — platform ticker
(function () {
  var el = document.getElementById("ticker");
  if (!el) return;
  var lines = [
    "Now boarding, Platform 5: the Honorary Award Special, 20 March 2010",
    "Signal at Sunset & Vine: green since 1929",
    "Next departure: the centenary special, 2029 — timetable in preparation",
    "The Academy Limited is the longest running worldwide entertainment service on this roster",
    "All passengers: one lifetime of credits per carriage, no through luggage"
  ];
  var i = 0;
  setInterval(function () {
    el.style.opacity = "0";
    setTimeout(function () {
      i = (i + 1) % lines.length;
      el.textContent = lines[i];
      el.style.opacity = "1";
    }, 400);
  }, 5200);
})();
