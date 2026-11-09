/* The Cascadia Table — a light rain for the masthead.
   Decorative only; the newsletter reads fine without it. */
(function () {
  var head = document.querySelector(".masthead");
  if (!head || !window.requestAnimationFrame) return;
  head.style.position = "relative";
  head.style.overflow = "hidden";

  var DROPS = 14;
  var drops = [];
  for (var i = 0; i < DROPS; i++) {
    var d = document.createElement("span");
    d.setAttribute("aria-hidden", "true");
    d.style.cssText =
      "position:absolute;top:-12px;width:1px;height:9px;pointer-events:none;" +
      "background:rgba(91,115,130,0.45);left:" + (Math.random() * 100) + "%;";
    head.appendChild(d);
    drops.push({ el: d, y: -12, speed: 0.4 + Math.random() * 0.8 });
  }

  function tick() {
    for (var i = 0; i < drops.length; i++) {
      var d = drops[i];
      d.y += d.speed;
      if (d.y > head.clientHeight + 20) {
        d.y = -12;
        d.el.style.left = (Math.random() * 100) + "%";
      }
      d.el.style.top = d.y + "px";
    }
    window.requestAnimationFrame(tick);
  }
  window.requestAnimationFrame(tick);
})();
