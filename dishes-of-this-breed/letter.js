// The wire gauge: set the dial to whatever temperature the ledger was at.
(function () {
  var rows = document.querySelectorAll("ol.wire li");
  var needle = document.getElementById("needle");
  var label = document.getElementById("gauge-label");
  if (!rows.length || !needle || !label) return;

  var scale = [
    "cold", "cold", "cool", "cool", "warm", "warm",
    "hot", "hot", "wired", "wired", "open fire"
  ];

  function setHeat(li) {
    var heat = parseInt(li.getAttribute("data-heat"), 10);
    if (isNaN(heat)) return;
    needle.style.left = heat * 10 + "%";
    label.innerHTML = "<strong>" + scale[heat] + "</strong> — " +
      heat + " of 10 on the wire, " + li.getAttribute("data-note");
    for (var i = 0; i < rows.length; i++) rows[i].classList.remove("active");
    li.classList.add("active");
  }

  for (var i = 0; i < rows.length; i++) {
    rows[i].addEventListener("click", function () { setHeat(this); });
    rows[i].addEventListener("mouseenter", function () { setHeat(this); });
  }

  // Park the needle on the April 1986 entry: the one this letter answers.
  var home = document.querySelector('ol.wire li[data-year="1986-b"]') ||
             document.querySelector("ol.wire li[data-year='1986-b']");
  setHeat(home || rows[0]);
})();
