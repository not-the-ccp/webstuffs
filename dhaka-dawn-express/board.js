// Small departure-board ticker for the Dhaka Dawn Express plate.
(function () {
  "use strict";
  var board = document.getElementById("board");
  if (!board) return;

  var messages = [
    "NOW BOARDING · 257",
    "DEPARTED 04:12 · ON TIME",
    "NEXT · 258 KHL 19:12",
    "SALOON 2 · COMMISSION FILES",
    "TONGI 04:20 · NSD 04:41"
  ];
  var i = 0;
  setInterval(function () {
    i = (i + 1) % messages.length;
    board.textContent = messages[i];
  }, 2600);
})();
