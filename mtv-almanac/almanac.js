/* Entry 218 — draws the barometer trace for the first night */
(function () {
  var path = document.getElementById("baro");
  var marker = document.getElementById("marker");
  if (!path || !marker || typeof path.getTotalLength !== "function") return;

  var len = path.getTotalLength();
  path.style.strokeDasharray = len;
  path.style.strokeDashoffset = len;
  marker.style.opacity = "0";

  function frame(t) {
    var p = Math.min(1, t / 2400);
    var e = 1 - Math.pow(1 - p, 3);
    path.style.strokeDashoffset = len * (1 - e);
    var pt = path.getPointAtLength(len * e);
    marker.setAttribute("cx", pt.x);
    marker.setAttribute("cy", pt.y);
    marker.style.opacity = e;
    if (p < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
