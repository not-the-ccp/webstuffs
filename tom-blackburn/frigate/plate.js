/* The Frigate — Plate 12: a small touch for the watch bell */
(function () {
  "use strict";
  var sub = document.querySelector(".plate-sub");
  if (!sub) return;
  var base = sub.textContent;
  var lines = [
    base,
    "The bell rings at twelve. The watch changes at twelve.",
    "Moon waning, wind north-west, frost to 2 a.m.",
    "The almanac copies it again at the Cockpit.",
    base
  ];
  var i = 0;
  sub.style.transition = "opacity 0.8s ease";
  setInterval(function () {
    i = (i + 1) % lines.length;
    if (lines[i] === base) return;
    sub.style.opacity = "0";
    setTimeout(function () {
      sub.textContent = lines[i];
      sub.style.opacity = "1";
    }, 800);
  }, 6000);
})();
