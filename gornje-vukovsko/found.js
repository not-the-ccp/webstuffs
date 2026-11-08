// A small clockwork for the notice: how long it has been up on the wall.
(function () {
  var posted = new Date(2024, 9, 9); // 9 October 2024
  var el = document.querySelector(".notice-no");
  if (!el) return;
  var days = Math.floor((Date.now() - posted.getTime()) / 86400000);
  var span = document.createElement("span");
  span.style.display = "block";
  span.style.marginTop = "0.35rem";
  span.style.fontSize = "0.72rem";
  span.style.letterSpacing = "0.16em";
  span.style.textTransform = "uppercase";
  span.style.color = "#2f4a3a";
  span.textContent = "on the noticeboard " + days + " days";
  el.appendChild(span);
})();
