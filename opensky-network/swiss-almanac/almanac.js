/* Swiss Weather Almanac &mdash; Helvetic Station: animated snow, live reading,
   and an hourly chime. The text stays readable without it. */
(function () {
  var snow = document.querySelector('.snow');
  var liveTemp = document.getElementById('live-temp');
  if (!snow) return;

  /* Generate flakes across the ornament layer. */
  function makeFlake() {
    var flake = document.createElement('div');
    flake.className = 'flake';
    var size = 3 + Math.random() * 6;
    flake.style.width = size + 'px';
    flake.style.height = size + 'px';
    flake.style.left = Math.random() * 100 + 'vw';
    flake.style.animationDuration = (10 + Math.random() * 12) + 's';
    flake.style.animationDelay = Math.random() * 8 + 's';
    flake.style.top = (Math.random() * 20 - 10) + 'vh';
    snow.appendChild(flake);
  }
  for (var i = 0; i < 44; i++) makeFlake();

  /* Live reading: nudges the temperature gently around the station normal. */
  function nudge() {
    if (!liveTemp) return;
    var current = parseFloat(liveTemp.textContent) || 4;
    var next = current + (Math.random() - 0.5) * 0.6;
    next = Math.max(-6, Math.min(22, next));
    liveTemp.textContent = next.toFixed(1);
  }
  setInterval(nudge, 4500);
  nudge();

  /* Hourly marker: the reading blinks on the hour of the local clock. */
  function hourMark() {
    var now = new Date();
    if (now.getMinutes() === 0 && now.getSeconds() < 2) {
      liveTemp && (liveTemp.style.color = '#d0021b');
    } else {
      liveTemp && (liveTemp.style.color = '');
    }
  }
  setInterval(hourMark, 1000);
  hourMark();
})();
