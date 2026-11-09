// SDS-JF-047 — a little life for the sheet
(function () {
  var tickerText = "SDS-JF-047 · JOHN WILLIAM FUQUA · RB-212 · 1969–1976 · MORGAN STATE → NEW YORK GIANTS → PITTSBURGH STEELERS → NEW YORK STARS · KEEP OFF SHELF · ";

  var bar = document.createElement("div");
  bar.className = "ticker";
  bar.setAttribute("aria-hidden", "true");
  var span = document.createElement("span");
  span.textContent = tickerText + tickerText;
  bar.appendChild(span);
  var head = document.querySelector(".sds-head");
  if (head) head.insertBefore(bar, head.firstChild);

  var verdict = document.querySelector(".verdict");
  if (verdict) {
    verdict.addEventListener("click", function () {
      verdict.classList.toggle("held");
    });
  }
})();
