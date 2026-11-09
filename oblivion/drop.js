(function () {
  'use strict';

  var shaft = document.getElementById('drop-shaft');
  var car = document.getElementById('drop-car');
  var armBtn = document.getElementById('arm-drop');
  var releaseBtn = document.getElementById('release-drop');
  var resetBtn = document.getElementById('reset-drop');
  var clock = document.getElementById('drop-clock');
  var verdict = document.getElementById('drop-verdict');

  var HEIGHT_M = 54.9;
  var G = 9.81;
  var FALL_SECONDS = 3.4;
  var raf;
  var start;
  var falling = false;

  function setCarBottom(px) {
    car.style.bottom = px + 'px';
  }

  function reset() {
    if (raf) {
      cancelAnimationFrame(raf);
    }
    falling = false;
    car.style.transition = 'none';
    setCarBottom(shaft.clientHeight - car.offsetHeight);
    clock.textContent = '0.00 s';
    verdict.textContent = 'Held at the brake. Three seconds, if you let it fall.';
    armBtn.disabled = false;
    releaseBtn.disabled = true;
    resetBtn.disabled = true;
  }

  function tick() {
    if (!falling) {
      return;
    }
    var elapsed = (performance.now() - start) / 1000;
    var show = Math.min(elapsed, FALL_SECONDS);
    clock.textContent = show.toFixed(2) + ' s';
    if (elapsed < FALL_SECONDS) {
      raf = requestAnimationFrame(tick);
    } else {
      falling = false;
      clock.textContent = FALL_SECONDS.toFixed(2) + ' s';
      var impact = G * FALL_SECONDS;
      verdict.textContent = 'Down in ' + FALL_SECONDS.toFixed(2) + ' s \u2022 about ' +
        Math.round(impact * 3.6) + ' km/h at the bottom \u2022 ' + HEIGHT_M + ' m dropped.';
      resetBtn.disabled = false;
    }
  }

  function beginFall() {
    falling = true;
    armBtn.disabled = true;
    releaseBtn.disabled = true;
    resetBtn.disabled = true;
    car.style.transition = 'bottom ' + FALL_SECONDS + 's linear';
    setCarBottom(0);
    verdict.textContent = 'Falling\u2026';
    start = performance.now();
    tick();
  }

  armBtn.addEventListener('click', function () {
    reset();
    armBtn.disabled = true;
    releaseBtn.disabled = false;
  });

  releaseBtn.addEventListener('click', beginFall);

  resetBtn.addEventListener('click', reset);

  reset();
})();
