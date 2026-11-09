// Studio light: breathe the ON AIR lamp.
(function () {
  var lamp = document.getElementById("onair");
  if (!lamp) return;
  lamp.classList.add("lit");
  // The light goes out with the announcer's close.
  window.addEventListener("scroll", function () {
    var sheet = document.querySelector(".sheet");
    if (!sheet) return;
    var rect = sheet.getBoundingClientRect();
    if (rect.bottom < window.innerHeight * 1.4) {
      lamp.classList.remove("lit");
    } else {
      lamp.classList.add("lit");
    }
  }, { passive: true });
})();
