/* Lot 81 — The Berlin Papers, 1848–1989. A little live auction; the page reads fully without this. */
(function () {
  var gavel = document.getElementById("gavel");
  var amount = document.getElementById("bid-amount");
  var line = document.getElementById("bidline");
  var petals = document.querySelector(".petals");
  if (!gavel || !amount || !line) return;

  var bids = ["€4,200", "€4,400", "€4,600", "€4,850", "€5,100", "€5,300", "€5,600", "€5,800", "€6,100", "€6,400", "€6,750"];
  var i = 0;
  var timer = null;

  gavel.addEventListener("click", function () {
    if (i < bids.length) {
      gavel.disabled = true;
      step(220);
    }
  });

  function step(delay) {
    timer = setInterval(function () {
      if (i < bids.length) {
        i += 1;
        amount.textContent = bids[i - 1];
        if (i === bids.length) {
          clearInterval(timer);
          setTimeout(sold, 900);
        }
      }
    }, delay);
  }

  function sold() {
    line.classList.add("sold");
    var stamp = document.createElement("span");
    stamp.className = "sold-stamp";
    stamp.textContent = "SOLD";
    line.insertBefore(stamp, gavel);
    gavel.disabled = true;
    gavel.textContent = "Hammer down";
  }

  if (petals) {
    var count = 14;
    for (var p = 0; p < count; p++) {
      var petal = document.createElement("span");
      petal.className = "petal";
      petal.style.left = Math.floor(Math.random() * 100) + "%";
      petal.style.animationDelay = Math.random() * 10 + "s";
      petal.style.animationDuration = (10 + Math.random() * 12) + "s";
      petal.style.opacity = 0.5 + Math.random() * 0.5;
      petals.appendChild(petal);
    }
  }
})();
