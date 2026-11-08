/* Field notes: a thin margin rule tracks how far down the chapter you are. */
(function () {
  var bar = document.createElement("div");
  bar.id = "progress";
  bar.setAttribute("aria-hidden", "true");
  document.body.insertBefore(bar, document.body.firstChild);

  function update() {
    var doc = document.documentElement;
    var max = doc.scrollHeight - doc.clientHeight;
    bar.style.width = (max > 0 ? (doc.scrollTop / max) * 100 : 0) + "%";
  }

  document.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
})();
