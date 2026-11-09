/* Costa Rica — Notice No. 48 · brochure effects */
(function () {
  "use strict";

  /* rosette field — the register's own rosettes, scattered over the jungle */
  var field = document.getElementById("rosettes");
  if (field) {
    var n = window.innerWidth < 640 ? 9 : 16;
    for (var i = 0; i < n; i++) {
      var r = document.createElement("span");
      r.className = "rosette";
      r.style.setProperty("--s", (26 + Math.random() * 70) + "px");
      r.style.setProperty("--r", (Math.random() * 360).toFixed(1) + "deg");
      r.style.setProperty("--d", (Math.random() * 6).toFixed(2) + "s");
      r.style.left = (Math.random() * 94) + "%";
      r.style.top = (Math.random() * 92) + "%";
      field.appendChild(r);
    }
  }

  /* the dial: the signal follows the lamp from Brasília to the Pacific coast */
  var dial = document.getElementById("dial");
  var value = document.getElementById("dial-value");
  var HOME = 101.2, COAST = 91.9;
  var t = 0;          /* 0 = Brasília, 1 = the coast */
  var target = 0;

  function paint() {
    t += (target - t) * 0.08;
    if (Math.abs(target - t) < 0.002) t = target;
    var f = HOME + (COAST - HOME) * t;
    value.textContent = f.toFixed(1);
    var glow = 10 + 22 * t;
    if (value.style) value.style.textShadow = "0 0 " + glow.toFixed(0) + "px rgba(232,93,31,.8)";
    requestAnimationFrame(paint);
  }
  if (dial && value) {
    dial.addEventListener("click", function () { target = target > 0.5 ? 0 : 1; });
    dial.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); target = target > 0.5 ? 0 : 1; }
    });
    dial.setAttribute("role", "button");
    dial.setAttribute("tabindex", "0");
    dial.setAttribute("aria-label", "Turn the dial between Brasília 101.2 and the Pacific coast 91.9");
    requestAnimationFrame(paint);
  }

  /* the lamp breathes with the page's scroll: the register keeps counting */
  var lamp = document.getElementById("apron-lamp");
  if (lamp) {
    document.addEventListener("scroll", function () {
      var y = window.scrollY || 0;
      var s = 1 + 0.25 * Math.sin(y / 90);
      lamp.style.transform = "scale(" + s.toFixed(3) + ")";
    }, { passive: true });
  }
})();
