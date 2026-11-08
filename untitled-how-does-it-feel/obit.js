/* Westside Record Bureau — final-broadcast touch.
   Adds a small "ON AIR" lamp above the header; the page reads fine without it. */
(function () {
  "use strict";
  var card = document.querySelector(".card");
  var head = document.querySelector(".head");
  if (!card || !head || !document.createElementNS) return;

  var lamp = document.createElement("p");
  lamp.className = "on-air";
  lamp.textContent = "\u25C9 ON AIR \u2014 final rotation";

  var css = document.createElement("style");
  css.textContent =
    ".on-air{" +
    "margin:0 0 12px;padding:4px 14px;" +
    "font:11px/1.4 Georgia, serif;letter-spacing:.3em;text-transform:uppercase;" +
    "color:#e8b84a;background:#1c1230;border:1px solid #b98a1f;display:inline-block;" +
    "position:relative;left:50%;transform:translateX(-50%);" +
    "animation:onair 2.2s steps(2, end) infinite;}" +
    "@keyframes onair{0%{opacity:1}50%{opacity:.55}100%{opacity:1}}";
  document.head.appendChild(css);

  head.insertBefore(lamp, head.firstChild);
})();
