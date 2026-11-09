// The runner's count: log takes at the door.
(function () {
  var note = document.getElementById("takeNote");
  var button = document.getElementById("logTake");
  if (!note || !button) return;
  var takes = 0;
  button.addEventListener("click", function () {
    takes += 1;
    note.textContent =
      "Takes logged at the door today: " + takes +
      (takes === 1
        ? ". The pencil is on the shelf; log them or lose them."
        : ". Good. Bob is counting them too.");
  });
})();
