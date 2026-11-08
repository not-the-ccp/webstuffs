/* Twenty-one rounds, fired off like a salute. Text remains readable without this. */
(function () {
  var holder = document.getElementById("salute");
  if (!holder) return;
  var rounds = [];
  for (var i = 0; i < 21; i++) {
    var dot = document.createElement("span");
    holder.appendChild(dot);
    rounds.push(dot);
  }
  var fired = 0;
  function fire() {
    if (fired < rounds.length) {
      rounds[fired].classList.add("fired");
      fired++;
      setTimeout(fire, 420);
    }
  }
  setTimeout(fire, 600);
})();
