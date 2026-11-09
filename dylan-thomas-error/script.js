// Error documentation DYL-39-53 · Subsystem Marlais · Rollwatch desk
(function () {
  var pre = document.getElementById("verbatim");
  var alertLight = document.getElementById("alert");
  var clockEl = document.getElementById("clock");
  var fullText;

  if (pre) {
    fullText = pre.textContent;
    pre.textContent = "";
    pre.className = "verbatim flicker-text";
    var wrap = document.createElement("div");
    wrap.className = "pre-wrap";
    pre.parentNode.insertBefore(wrap, pre);
    wrap.appendChild(pre);
  }

  var index = 0;
  function type() {
    if (!pre) return;
    if (index <= fullText.length) {
      pre.textContent = fullText.slice(0, index);
      index += 1;
      setTimeout(type, 28);
    }
  }
  setTimeout(type, 600);

  function tick() {
    var now = new Date();
    var h = String(now.getHours()).padStart(2, "0");
    var m = String(now.getMinutes()).padStart(2, "0");
    var s = String(now.getSeconds()).padStart(2, "0");
    if (clockEl) clockEl.textContent = h + ":" + m + ":" + s;
  }
  tick();
  setInterval(tick, 1000);

  if (alertLight) {
    setInterval(function () {
      alertLight.style.opacity = alertLight.style.opacity === "0.5" ? "1" : "0.5";
    }, 300);
  }
})();
