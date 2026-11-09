/* Colonial Plaza — a small dial for the browser: the year turns as you scroll. */
(function () {
  "use strict";

  var dial = document.createElement("div");
  dial.id = "year-dial";
  dial.setAttribute("role", "presentation");
  dial.textContent = "1956";
  document.body.appendChild(dial);

  var dialCss = document.createElement("style");
  dialCss.textContent = [
    "#year-dial{position:fixed;right:18px;bottom:18px;z-index:10;",
    "font-family:'Courier New',Courier,monospace;font-weight:bold;font-size:1.05rem;",
    "background:#c9502b;color:#f5eddc;border:2px solid #a53c1e;",
    "padding:6px 14px;letter-spacing:0.1em;box-shadow:0 6px 14px rgba(38,51,58,.3);",
    "transition:background .4s ease;}",
    "#year-dial.vacancy{background:#1f6f66;border-color:#17524b;}"
  ].join("");
  document.head.appendChild(dialCss);

  function update() {
    var doc = document.documentElement;
    var max = doc.scrollHeight - doc.clientHeight;
    var f = max > 0 ? window.scrollY / max : 0;
    var year = Math.round(1956 + f * (2000 - 1956));
    dial.textContent = String(year);
    dial.classList.toggle("vacancy", year >= 1991);
  }

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
})();
