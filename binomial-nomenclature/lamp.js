// The lamp: click to dim it to nothing, click again for 40 watts.
(function () {
  var lamp = document.getElementById("lamp");
  if (!lamp) return;
  var title = "The lamp — 40 watts";
  lamp.addEventListener("click", function () {
    lamp.classList.toggle("off");
    title = lamp.classList.contains("off") ? "The lamp — closed, and the flame, and wait" : "The lamp — 40 watts";
    lamp.setAttribute("title", title);
  });
})();
