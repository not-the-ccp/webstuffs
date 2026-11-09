/* Night Watch Council, Jastorf — place the stars in the sky.
   The minutes read fine without this; the sky simply goes empty. */
(function () {
  var sky = document.getElementById("sky");
  if (!sky) return;
  var count = 90;
  var frag = document.createDocumentFragment();
  for (var i = 0; i < count; i++) {
    var s = document.createElement("span");
    s.className = "star";
    s.style.left = (Math.random() * 100).toFixed(2) + "%";
    s.style.top = (Math.random() * 100).toFixed(2) + "%";
    s.style.animationDelay = (Math.random() * 4.5).toFixed(2) + "s";
    s.style.animationDuration = (3 + Math.random() * 4).toFixed(2) + "s";
    if (Math.random() < 0.18) {
      s.style.width = "3px";
      s.style.height = "3px";
      s.style.boxShadow = "0 0 6px rgba(223, 232, 255, 0.8)";
    }
    frag.appendChild(s);
  }
  sky.appendChild(frag);

  /* the tower light in the ledger: set the reading date like a lamp tag */
  var lamp = document.getElementById("last-read");
  if (lamp) {
    var d = new Date();
    lamp.textContent = (d.getDate() < 10 ? "0" : "") + d.getDate() +
      "." + (d.getMonth() + 1 < 10 ? "0" : "") + (d.getMonth() + 1) +
      "." + d.getFullYear() + " 22:40";
  }
})();
