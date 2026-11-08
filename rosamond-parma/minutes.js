/* minutes.js — a small touch for the folio: the clerk's red initial
   is drawn in on load, and the ledger quote gets a quiet underline.
   The page reads fine without any of it. */
(function () {
  var quote = document.querySelector(".ledger-quote");
  if (quote) {
    quote.style.transition = "box-shadow 1.2s ease";
    window.addEventListener("scroll", function () {
      var rect = quote.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.7 && rect.bottom > 0) {
        quote.style.boxShadow = "0 1px 0 0 rgba(92,26,26,0.35)";
      }
    }, { passive: true });
  }

  var sigs = document.querySelectorAll(".sig");
  sigs.forEach(function (sig, i) {
    sig.style.opacity = "0";
    sig.style.transition = "opacity 0.9s ease " + (0.4 + i * 0.5) + "s";
    window.addEventListener("load", function () {
      requestAnimationFrame(function () { sig.style.opacity = "1"; });
    });
  });
})();
