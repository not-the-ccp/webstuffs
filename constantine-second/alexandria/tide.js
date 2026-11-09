/* Product No. 40 — the tide line: the harbour keeps its own hour */
(function () {
  var dock = document.querySelector(".blurb");
  if (!dock) return;

  var line = document.createElement("p");
  line.className = "tideline";
  var wave = document.createElement("span");
  wave.className = "wave";
  line.appendChild(wave);
  var status = document.createElement("span");
  line.appendChild(status);
  dock.appendChild(line);

  var t = 0;
  function render() {
    // the tide of Alexandria, taken as twice the hour, rounded to the fathom
    var state = Math.floor(t / 30) % 4;
    var words = ["slack water", "flood, coming in", "full tide, the bell's hour", "ebb, out to the Pharos"];
    status.textContent = "harbour tide " + (t % 60) + " — " + words[state];
  }
  render();
  setInterval(function () {
    t = (t + 1) % 60;
    render();
  }, 1000);

  // the bell: shaken once, and the log notes the hour
  var bell = document.querySelector(".box li:nth-child(5)");
  if (bell) {
    bell.style.cursor = "pointer";
    var struck = false;
    bell.addEventListener("click", function () {
      if (struck) return;
      struck = true;
      bell.style.background = "rgba(185, 138, 47, 0.12)";
      bell.title = "Struck once, at the hour shown in the log. The clause holds: no second time in the same room.";
      status.textContent = "log — the bell struck once, at harbour tide " + (t % 60);
    });
  }
})();
