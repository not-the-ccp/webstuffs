/* Depth indicator: the page descends from spring to the underworld as you scroll. */
(function () {
  var hud = document.getElementById("depthHud");
  var label = document.getElementById("depthLabel");
  var dot = document.getElementById("depthDot");
  if (!hud || !label || !dot) return;

  var layers = [
    { at: 0.0, name: "The Fields of Demeter", color: "#7fae6b" },
    { at: 0.45, name: "The Pomegranate Garden", color: "#c99a3a" },
    { at: 0.8, name: "The Court of Hades", color: "#b3262e" }
  ];

  var current = -1;
  function update() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    var t = max > 0 ? window.scrollY / max : 0;
    t = Math.min(1, Math.max(0, t));
    var idx = 0;
    for (var i = 0; i < layers.length; i++) if (t >= layers[i].at) idx = i;
    if (idx !== current) {
      current = idx;
      label.textContent = layers[idx].name;
      dot.style.background = layers[idx].color;
      dot.style.boxShadow = "0 0 .5rem " + layers[idx].color;
    }
  }
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
})();
