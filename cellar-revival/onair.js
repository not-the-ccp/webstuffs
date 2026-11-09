/* ON AIR lamp: glows while a scene is in view on the page */
(function () {
  var lamp = document.getElementById("onair");
  if (!lamp) return;
  var scenes = Array.prototype.slice.call(document.querySelectorAll(".scene"));
  function update() {
    var y = window.scrollY + window.innerHeight * 0.35;
    var on = scenes.some(function (s) {
      var r = s.getBoundingClientRect();
      return y >= window.scrollY + r.top - 40 && y <= window.scrollY + r.bottom + 40;
    });
    lamp.classList.toggle("lit", on);
  }
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
})();
