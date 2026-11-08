// Tap the merla: a stiver drops from her beak and lands in the purse.
(function () {
  var bird = document.getElementById("bird");
  var purse = document.getElementById("purse");
  var count = 0;

  function dropStiver(x, y) {
    var coin = document.createElement("span");
    coin.className = "stiver";
    coin.style.left = (x - 9) + "px";
    coin.style.top = (y - 9) + "px";
    document.body.appendChild(coin);
    setTimeout(function () { coin.remove(); }, 1200);
  }

  if (bird && purse) {
    bird.addEventListener("click", function (e) {
      count += 1;
      purse.innerHTML = "the purse holds <strong>" + count + "</strong> stiver";
      dropStiver(e.clientX, e.clientY);
    });
  }
})();
