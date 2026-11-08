/* Ferrovia della Riviera Sammy — station clock */
(function () {
  var board = document.getElementById("board-time");
  if (!board) return;

  function pad(n) { return n < 10 ? "0" + n : String(n); }

  function tick() {
    var now = new Date();
    board.textContent = pad(now.getHours()) + ":" + pad(now.getMinutes());
  }

  tick();
  setInterval(tick, 10000);
})();
