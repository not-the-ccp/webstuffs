/* Small, optional touch: a faint "spotlight" that follows the pointer,
   like a gallery track light. The text is fully readable without it. */
(function () {
  var wall = document.body;
  var spot = document.createElement("div");
  spot.setAttribute("aria-hidden", "true");
  spot.style.cssText =
    "position:fixed;pointer-events:none;width:520px;height:520px;" +
    "border-radius:50%;left:0;top:0;transform:translate(-50%,-50%);" +
    "background:radial-gradient(circle, rgba(255,250,225,0.10) 0%, rgba(255,250,225,0) 62%);" +
    "z-index:0;transition:opacity 0.6s;opacity:0;";
  wall.appendChild(spot);

  var last = 0;
  wall.addEventListener("pointermove", function (e) {
    var now = Date.now();
    if (now - last < 30) return;
    last = now;
    spot.style.opacity = "1";
    spot.style.left = e.clientX + "px";
    spot.style.top = e.clientY + "px";
  });
  wall.addEventListener("pointerleave", function () {
    spot.style.opacity = "0";
  });
})();
