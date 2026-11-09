/* Series W — register.js: a small stamp for the kept line */
document.addEventListener("DOMContentLoaded", function () {
  var kept = document.querySelector(".kept-line");
  if (!kept) return;
  var stamped = false;
  kept.setAttribute("tabindex", "0");
  kept.title = "click to stamp the resolution: read once, rule around it";
  function stamp() {
    if (stamped) return;
    stamped = true;
    var s = document.createElement("span");
    s.className = "w-stamp";
    s.textContent = "RULED AROUND \u00b7 NOT ERASED \u00b7 OFFICE OF THE PRIME MINISTER";
    kept.appendChild(s);
  }
  kept.addEventListener("click", stamp);
  kept.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); stamp(); }
  });
  var style = document.createElement("style");
  style.textContent =
    ".w-stamp{display:inline-block;margin-top:0.7em;padding:0.2em 0.7em;" +
    "border:2px solid #8c1d28;color:#8c1d28;transform:rotate(-3deg);" +
    "font-size:0.62rem;letter-spacing:0.18em;opacity:0.85;}";
  document.head.appendChild(style);
});
