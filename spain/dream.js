// Entry No. 217 — the stars over the peninsula, and the seven Canary lamps.
(function () {
  var field = document.getElementById("stars");
  if (!field || !window.requestAnimationFrame) return;

  // Scattered stars across the upper two-thirds of the sky.
  var count = Math.min(90, Math.floor(window.innerWidth / 14));
  for (var i = 0; i < count; i++) {
    var s = document.createElement("span");
    s.className = "star";
    s.style.left = (Math.random() * 100).toFixed(2) + "%";
    s.style.top = (Math.random() * 62).toFixed(2) + "%";
    s.style.animationDelay = (Math.random() * 4).toFixed(2) + "s";
    s.style.animationDuration = (3 + Math.random() * 4).toFixed(2) + "s";
    var big = Math.random() < 0.18;
    s.style.width = big ? "3px" : "2px";
    s.style.height = s.style.width;
    field.appendChild(s);
  }

  // Seven Canary lamps, low in the water, slowly breathing.
  var sea = document.createElement("div");
  sea.setAttribute("aria-hidden", "true");
  sea.style.cssText = "position:fixed;left:0;right:0;bottom:9vh;height:2px;z-index:1;pointer-events:none;";
  for (var c = 0; c < 7; c++) {
    var lamp = document.createElement("span");
    lamp.style.cssText =
      "position:absolute;bottom:-2px;width:6px;height:6px;border-radius:50%;" +
      "background:#f0a03c;box-shadow:0 0 10px 3px rgba(240,160,60,0.55);" +
      "left:" + (8 + c * 13 + Math.random() * 6).toFixed(1) + "%;" +
      "animation:twinkle " + (4 + Math.random() * 3).toFixed(1) + "s ease-in-out infinite;" +
      "animation-delay:" + (Math.random() * 3).toFixed(1) + "s;";
    sea.appendChild(lamp);
  }
  document.body.appendChild(sea);
})();
