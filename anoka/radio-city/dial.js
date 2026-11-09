// Station WANC — the needle wanders the dial, the way a dial does at night.
(function () {
  var needle = document.getElementById("needle");
  if (!needle) return;
  var pos = 50, drift = 0;
  setInterval(function () {
    drift += (Math.random() - 0.5) * 1.6;
    drift = Math.max(-18, Math.min(18, drift));
    pos = 50 + drift;
    needle.style.left = pos + "%";
  }, 180);
})();
