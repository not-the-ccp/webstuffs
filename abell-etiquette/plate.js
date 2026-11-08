/* A small touch for the chapter: the ledger line is chalked in, one word at a time. */
(function () {
  var ledger = document.querySelector("blockquote.ledger p");
  if (!ledger) return;
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var text = ledger.textContent;
  var words = text.split(" ");
  var i = 0;
  ledger.textContent = "";

  var timer = setInterval(function () {
    if (i < words.length) {
      ledger.textContent += (i ? " " : "") + words[i];
      i++;
    } else {
      clearInterval(timer);
    }
  }, 120);
})();
