// Kupres station clock: stands at 02:00, then jumps the borrowed hour to 03:00.
(function () {
  var label = document.getElementById("clock-label");
  var sub = document.getElementById("clock-sub");
  var hour = document.getElementById("hand-hour");
  var minute = document.getElementById("hand-minute");
  if (!label || !sub || !hour || !minute) return;

  var frame = 0;
  function draw(h, m) {
    hour.style.transform = "rotate(" + (h * 30 + m * 0.5) + "deg)";
    minute.style.transform = "rotate(" + (m * 6) + "deg)";
    label.textContent = ("0" + h).slice(-2) + ":" + ("0" + m).slice(-2);
  }

  function tick() {
    frame++;
    // creep through the last minutes of standard time: 01:54 ... 01:59
    var mins = [54, 55, 56, 57, 58, 59];
    if (frame <= 6) {
      draw(1, mins[frame - 1]);
      sub.textContent = "standard time";
    } else if (frame === 7) {
      sub.textContent = "the hour is being spent";
    } else if (frame <= 13) {
      // jump: 03:00, summer ink
      draw(3, 0);
      sub.textContent = "daylight saving";
      label.style.color = "#a4552a";
    } else {
      draw(3, 0);
    }
    if (frame < 14) setTimeout(tick, frame === 7 ? 1600 : 800);
  }
  tick();
})();
