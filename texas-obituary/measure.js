// The Measure of It — register's instrument for the obituary of Texas.
(function () {
  var TEXAS_SQMI = 268596;
  var pick = document.getElementById("measure-pick");
  var out = document.getElementById("measure-out");
  if (!pick || !out) return;

  function roundNice(n) {
    if (n >= 1000) return Math.round(n).toLocaleString("en-US");
    if (n >= 10) return String(Math.round(n));
    return (Math.round(n * 10) / 10).toString();
  }

  function render() {
    var unit = parseFloat(pick.value);
    if (!unit || unit <= 0) return;
    var howMany = TEXAS_SQMI / unit;
    var word;
    if (howMany < 1) {
      word = "the ground of the deceased holds " + roundNice(howMany) +
        " of the chosen measure &mdash; the measure is larger than the state.";
    } else {
      word = "the ground of the deceased holds " + roundNice(howMany) +
        " of the chosen measure, and no more.";
    }
    out.innerHTML = word +
      " <span class='smallprint'>(268,596 square miles &divide; " +
      unit.toLocaleString("en-US") + " square miles.)</span>";
    out.classList.add("measured");
  }

  pick.addEventListener("change", render);
})();
