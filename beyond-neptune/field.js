// Beyond Neptune — the blink comparator toy.
// Fills both plates with identical fixed star fields; plate B carries one
// drifting body. The button flips the plates at the comparator rate.

(function () {
  var box = document.getElementById("blinkBox");
  var btn = document.getElementById("blinkBtn");
  var plateA = document.getElementById("plateA");
  var plateB = document.getElementById("plateB");
  if (!box || !btn || !plateA || !plateB) return;

  var stars = [];
  for (var i = 0; i < 46; i++) {
    stars.push({
      x: 4 + Math.random() * 92,
      y: 8 + Math.random() * 84,
      o: 0.4 + Math.random() * 0.6
    });
  }

  function paint(plate, withBody) {
    plate.innerHTML = "";
    stars.forEach(function (s) {
      var sp = document.createElement("span");
      sp.style.left = s.x + "%";
      sp.style.top = s.y + "%";
      sp.style.opacity = s.o;
      plate.appendChild(sp);
    });
    if (withBody) {
      var d = document.createElement("span");
      d.className = "drift";
      d.style.left = "62%";
      d.style.top = "44%";
      plate.appendChild(d);
    }
  }

  paint(plateA, false);
  plateB.innerHTML = plateA.innerHTML;
  paint(plateB, true);

  var timer = null;
  btn.addEventListener("click", function () {
    if (timer) {
      clearInterval(timer);
      timer = null;
      box.classList.remove("flipping");
      btn.textContent = "Run the blink comparator";
      return;
    }
    btn.textContent = "Stop the comparator";
    var on = false;
    timer = setInterval(function () {
      on = !on;
      box.classList.toggle("flipping", on);
    }, 420);
  });
})();
