// 817 — The Armoured Mess: counter clock and the line at the door.
(function () {
  var clockEl = document.getElementById("clock");
  var lineEl = document.getElementById("line");
  if (!clockEl || !lineEl) return;

  function pad(n) { return n < 10 ? "0" + n : "" + n; }

  function toMin(t) {
    var p = t.split(":");
    return (+p[0]) * 60 + (+p[1]);
  }

  var open = toMin(clockEl.getAttribute("data-open"));
  var close = toMin(clockEl.getAttribute("data-close"));

  function tick() {
    var d = new Date();
    var m = d.getHours() * 60 + d.getMinutes() + d.getSeconds() / 60;
    if (m >= open && m < close) {
      clockEl.textContent = pad(d.getHours()) + ":" + pad(d.getMinutes()) + " — service";
    } else {
      clockEl.textContent = clockEl.getAttribute("data-open") + " — " +
        clockEl.getAttribute("data-close") + " (lamps down)";
    }
  }

  // The line: grows through the midday column, clears by evening.
  function line() {
    var d = new Date();
    var m = d.getHours() * 60 + d.getMinutes();
    if (m < 780) lineEl.textContent = "4";
    else if (m < 840) lineEl.textContent = "14"; // 13:00, bending round the tank
    else if (m < 960) lineEl.textContent = "9";
    else if (m < 1080) lineEl.textContent = "2";
    else lineEl.textContent = "0";
  }

  tick();
  line();
  setInterval(tick, 30000);
  setInterval(line, 60000);
})();
