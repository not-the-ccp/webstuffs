/* Card No. 7 — read the card line once */
(function () {
  var btn = document.getElementById("lineBtn");
  var count = document.getElementById("lineCount");
  if (!btn || !count) return;

  var reads = 0;

  btn.addEventListener("click", function () {
    reads += 1;
    count.textContent =
      reads === 1
        ? "the line has been read once this August; the record is kept"
        : "the line has been read " + reads + " times this August; the record is kept, and is not struck";
    btn.disabled = true;
    btn.textContent = "the line has been read";
  });
})();
