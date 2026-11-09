/* Field Notebook No. 12 — small living touches.
   The notebook remains fully readable with this script disabled. */
(function () {
  "use strict";

  /* Folio marks on each entry: I, II, III ... as Roman numerals */
  var entries = document.querySelectorAll(".entry");
  var romans = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  entries.forEach(function (el, i) {
    el.setAttribute("data-folio", romans[i % romans.length] + " ✦ " + romans[(i + 1) % romans.length]);
  });

  /* An ink blot that lags behind the pointer, like a drop of red ink drying. */
  var blot = document.createElement("span");
  blot.className = "ink-blot";
  document.body.appendChild(blot);
  var bx = -100, by = -100, tx = -100, ty = -100, shown = false;

  function step() {
    bx += (tx - bx) * 0.12;
    by += (ty - by) * 0.12;
    blot.style.transform = "translate(" + bx + "px," + by + "px) rotate(" + (bx % 360) + "deg)";
    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);

  document.addEventListener("mousemove", function (e) {
    tx = e.clientX + 12;
    ty = e.clientY + 18;
    if (!shown) { shown = true; blot.classList.add("show"); }
  });
  document.addEventListener("mouseleave", function () {
    shown = false; blot.classList.remove("show");
  });

  /* When a link is hovered, briefly darken the page edges, as if looking
     through the small telescope at the record it leads to. */
  var vignette = document.createElement("div");
  vignette.style.cssText =
    "position:fixed;inset:0;z-index:3;pointer-events:none;opacity:0;transition:opacity .45s ease;" +
    "background:radial-gradient(ellipse at center, transparent 52%, rgba(29,42,61,.55) 100%);";
  document.body.appendChild(vignette);
  document.addEventListener("mouseover", function (e) {
    if (e.target.closest && e.target.closest("a")) vignette.style.opacity = "1";
  });
  document.addEventListener("mouseout", function (e) {
    if (e.target.closest && e.target.closest("a")) vignette.style.opacity = "0";
  });
})();
