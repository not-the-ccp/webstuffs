/* FM-41 ch. 9 — the stamp fades in, the bench marker follows the reader */
(function () {
  var stamp = document.querySelector(".man-stamp");
  if (stamp) {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { stamp.classList.add("in"); });
    });
  }

  // a thin red progress line under the top rule, as the reader moves the chapter
  var bar = document.createElement("div");
  bar.style.cssText =
    "position:fixed;top:0;left:0;height:4px;background:#a52c1c;" +
    "width:0;z-index:99;pointer-events:none;";
  document.body.appendChild(bar);

  function update() {
    var doc = document.documentElement;
    var max = doc.scrollHeight - doc.clientHeight;
    var p = max > 0 ? doc.scrollTop / max : 0;
    bar.style.width = (p * 100) + "%";
  }
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
})();
