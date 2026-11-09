/* The Family — the chalkboard reckoner */
(function () {
  var input = document.getElementById("calls");
  var btn = document.getElementById("reckon");
  if (!input || !btn) return;

  var GREEN = 5514, RED = 4486; // the ledger ratio, per ten thousand calls

  function reckon() {
    var n = Math.round(Number(input.value));
    if (!(n >= 1 && n <= 100000)) {
      input.value = 1000;
      n = 1000;
    }
    var green = Math.round(n * GREEN / 10000);
    var red = n - green;
    var greenCount = document.getElementById("greenCount");
    var redCount = document.getElementById("redCount");
    var marginCount = document.getElementById("marginCount");
    greenCount.textContent = green.toLocaleString("en-US");
    redCount.textContent = red.toLocaleString("en-US");
    marginCount.textContent = Math.abs(green - red).toLocaleString("en-US");
  }

  btn.addEventListener("click", reckon);
  input.addEventListener("change", reckon);
})();
