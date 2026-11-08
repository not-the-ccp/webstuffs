/* Case No. 44-41 of 2025 — the record keeps its own count */
(function () {
  var record = document.querySelector(".transcript");
  var out = document.getElementById("wordcount");
  if (!record || !out) return;

  var words = (record.textContent || "").trim().split(/\s+/).filter(Boolean).length;

  // count them the old way: one word per frame, at the ledger's speed
  var shown = 0;
  var step = Math.max(1, Math.ceil(words / 90));
  out.textContent = "The record holds —";
  var timer = setInterval(function () {
    shown = Math.min(words, shown + step);
    out.textContent = "The record holds " + shown + (shown === words ? " words." : "…");
    if (shown === words) clearInterval(timer);
  }, 24);

  // honour readers who do not want the count ticking
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    clearInterval(timer);
    out.textContent = "The record holds " + words + " words.";
  }
})();
