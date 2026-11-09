/* The last cask keeps a little of its breath in the margin:
   a slow column of carbonation rising along the right-hand edge. */
(function () {
  var holder = document.getElementById("bubbles");
  if (!holder) return;

  function spawn() {
    var b = document.createElement("span");
    var size = 4 + Math.round(Math.random() * 9);
    b.style.width = size + "px";
    b.style.height = size + "px";
    b.style.left = Math.round(Math.random() * 22) + "px";
    b.style.animationDuration = (7 + Math.random() * 9) + "s";
    holder.appendChild(b);
    b.addEventListener("animationend", function () { b.remove(); });
  }

  setInterval(spawn, 850);
  for (var i = 0; i < 5; i++) setTimeout(spawn, i * 300);
})();
