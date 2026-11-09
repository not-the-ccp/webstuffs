(function () {
  var C = 299792458; // metres per second

  var lenInput = document.getElementById("cable-len");
  var vInput = document.getElementById("v-factor");
  var button = document.getElementById("counter-go");
  var out = document.getElementById("counter-out");

  function fmt(n) {
    if (!isFinite(n) || n <= 0) return "—";
    if (n < 1) {
      return (n * 1e9).toLocaleString("en-GB", { maximumFractionDigits: 1 }) + " ns";
    }
    return n.toLocaleString("en-GB", { maximumFractionDigits: 4 }) + " s";
  }

  button.addEventListener("click", function () {
    var L = parseFloat(lenInput.value);
    var v = parseFloat(vInput.value);
    var fail = function (msg) {
      out.innerHTML = '<p class="counter-fault">' + msg + "</p>";
    };
    if (!(L > 0) || !(v > 0) || v > 1) {
      fail("The line rejects this pair of figures: a positive length, and a velocity factor between 0.01 and 1.00. The signal has not gone.");
      return;
    }
    var delay = (L / v) / C;
    var vWave = v * C;
    out.innerHTML =
      "<p>The signal has gone and come to rest. Over " +
      L.toLocaleString("en-GB", { maximumFractionDigits: 2 }) +
      " metres of pair, at a velocity factor of " + v.toFixed(2) +
      " (a wave speed of " + (vWave / 1e6).toLocaleString("en-GB", { maximumFractionDigits: 1 }) +
      " Mm/s), the travel time is <strong>" + fmt(delay) + "</strong>.</p>" +
      "<p>Meanwhile the soup has been on the table considerably longer, and is, per the card, still en route.</p>";
  });
})();
