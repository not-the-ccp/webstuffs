/* The Eighteen Local — field clock */
(function () {
  var next = document.getElementById("next-svc");
  var field = document.getElementById("field-time");

  function pad(n) { return n < 10 ? "0" + n : "" + n; }

  function tick() {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    if (field) field.textContent = "Field time: " + pad(h) + ":" + pad(m) + " — platform 18th, doors on schedule";
    if (next) {
      var target = m < 41 ? 41 : 41 + 60;
      var label = target >= 60
        ? pad((h + 1) % 24) + ":41"
        : pad(h) + ":41";
      next.textContent = "Next service departs Ochs Avenue at " + label + " — on the minute to the minute.";
    }
  }

  tick();
  setInterval(tick, 30000);
})();
