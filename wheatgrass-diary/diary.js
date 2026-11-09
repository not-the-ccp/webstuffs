/* Drifting wheatgrass seeds over the desk */
(function () {
  var field = document.querySelector(".sprigfield");
  if (!field) return;
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;

  var N = 14;
  for (var i = 0; i < N; i++) {
    var s = document.createElement("span");
    s.className = "seed";
    s.style.left = (Math.random() * 100).toFixed(2) + "vw";
    s.style.setProperty("--sway", (Math.random() * 16 - 4).toFixed(1) + "vw");
    var dur = 14 + Math.random() * 18;
    s.style.animationDuration = dur.toFixed(1) + "s";
    s.style.animationDelay = (-Math.random() * dur).toFixed(1) + "s";
    var scale = 0.5 + Math.random() * 0.9;
    s.style.transform = "scale(" + scale.toFixed(2) + ")";
    field.appendChild(s);
  }
})();

/* A soft ink smudge wherever the pen (pointer) rests a moment */
(function () {
  var diary = document.querySelector(".diary");
  if (!diary) return;
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;

  var last = 0;
  diary.addEventListener("pointermove", function (e) {
    var now = Date.now();
    if (now - last < 1400) return;
    last = now;
    var r = diary.getBoundingClientRect();
    var x = e.clientX - r.left;
    var y = e.clientY - r.top;
    if (x < 0 || y < 0 || x > r.width || y > r.height) return;

    var blot = document.createElement("span");
    blot.setAttribute("aria-hidden", "true");
    blot.style.cssText =
      "position:absolute;left:" + x + "px;top:" + y + "px;width:6px;height:6px;" +
      "border-radius:50%;background:rgba(38,51,79,0.5);pointer-events:none;" +
      "transform:translate(-50%,-50%);transition:width .9s ease, height .9s ease, opacity 1.6s ease;";
    diary.appendChild(blot);
    requestAnimationFrame(function () {
      blot.style.width = "34px";
      blot.style.height = "30px";
      blot.style.opacity = "0";
    });
    setTimeout(function () { blot.remove(); }, 1800);
  });
})();
