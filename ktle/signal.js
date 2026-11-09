// The Channel Six Signal — a slow tuning needle on the masthead dial.
// Purely decorative; the newsletter reads fine without it.
(function () {
  var needle = document.getElementById("needle");
  if (!needle) return;
  var positions = ["8%", "30%", "52%", "71%", "42%", "15%"];
  var i = 0;
  setInterval(function () {
    i = (i + 1) % positions.length;
    needle.style.marginLeft = positions[i];
  }, 2600);
})();
