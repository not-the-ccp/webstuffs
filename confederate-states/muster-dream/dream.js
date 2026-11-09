// Dream Dictionary, Entry 1861 - the counter runs on reserve duty.
(function () {
  var el = document.getElementById("dreamer-count");
  if (!el) return;

  // 3,548 lines in the roll, plus one for you, counting up from the levee en masse.
  var base = 3548;
  var n = base + (new Date().getDay() * 137) + (new Date().getDate() * 7);

  function pad(x) {
    var s = String(x);
    while (s.length < 6) s = "0" + s;
    return s;
  }

  el.textContent = pad(n);

  // the counter ticks while the reserve force is open (i.e. always, on Tuesdays in the dream)
  setInterval(function () {
    n += 1;
    el.textContent = pad(n);
  }, 4000);
})();
