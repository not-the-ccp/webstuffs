/* Entry No. 214 — a little sky, so the far bank is not empty. */
(function () {
  var holder = document.getElementById("stars");
  if (!holder) return;
  var count = 70;
  for (var i = 0; i < count; i++) {
    var s = document.createElement("span");
    s.style.left = (Math.random() * 100) + "%";
    s.style.top = (Math.random() * 55) + "%";
    var size = Math.random() < 0.8 ? 1 : 2;
    s.style.width = size + "px";
    s.style.height = size + "px";
    s.style.animationDelay = (Math.random() * 4).toFixed(2) + "s";
    s.style.animationDuration = (3 + Math.random() * 4).toFixed(2) + "s";
    holder.appendChild(s);
  }
})();
