// Gentle touches for the product page; the page reads fine without this file.
(function () {
  "use strict";

  var stock = document.querySelector(".in-stock");
  if (stock) {
    var n = 214;
    var el = document.createElement("span");
    el.setAttribute("aria-hidden", "true");
    el.style.cssText =
      "display:inline-block;font-size:.7rem;letter-spacing:.15em;text-transform:uppercase;" +
      "color:#c9a13b;margin-left:.55rem;animation:awele-blink 2.4s ease-in-out infinite;";
    el.textContent = "no. 214 of 500 remaining";
    stock.after(el);
    var style = document.createElement("style");
    style.textContent =
      "@keyframes awele-blink { 0%,100%{opacity:.35} 50%{opacity:1} }";
    document.head.appendChild(style);
    void n;
  }

  // The cover straightens as it scrolls into view.
  var cover = document.querySelector(".cover");
  if (cover && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          cover.style.transition = "transform .9s cubic-bezier(.2,.8,.2,1)";
          cover.style.transform = "rotate(0deg)";
          io.disconnect();
        }
      });
    }, { threshold: 0.4 });
    io.observe(cover);
  }
})();
