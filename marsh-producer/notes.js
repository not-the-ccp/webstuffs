// Field Notes, Notebook No. 4 — a small tally on the specimen card.
// The notebook stands perfectly well without this; the ink does not.
(function () {
  var card = document.getElementById("specimen");
  var count = document.getElementById("count");
  if (!card || !count) return;

  var n = parseInt(count.getAttribute("data-count"), 10) || 1;

  card.addEventListener("click", function () {
    n += 1;
    count.textContent = String(n);
    count.style.transition = "none";
    count.style.color = "#8a3b2a";
    window.setTimeout(function () {
      count.style.transition = "color 2s";
      count.style.color = "";
    }, 30);
  });
})();
