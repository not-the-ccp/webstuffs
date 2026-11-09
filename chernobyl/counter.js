// Bench instrument: the geiger counter keeps its own count.
(function () {
  var counter = document.getElementById("counter");
  var cpsEl = document.getElementById("cps");
  var totalEl = document.getElementById("total");
  var win = counter.querySelector(".window");
  var total = 0;
  var cps = 0;
  var stamps = [];
  var timer = null;

  function paint() {
    cpsEl.textContent = cps.toFixed(1);
    totalEl.textContent = String(total).padStart(6, "0");
  }

  function flash() {
    win.classList.add("tick");
    setTimeout(function () { win.classList.remove("tick"); }, 70);
  }

  function tick() {
    total += 1;
    stamps.push(Date.now());
    flash();
    paint();
  }

  function arm() {
    if (timer) return;
    var last = Date.now();
    timer = setInterval(function () {
      var now = Date.now();
      stamps = stamps.filter(function (t) { return now - t < 1000; });
      cps = stamps.length;
      paint();
      // the counter keeps ticking while armed; probability fades with time
      if (Math.random() < 0.55) tick();
      if (now - last > 4000 && Math.random() > 0.2) {
        disarm();
      }
    }, 120);
  }

  function disarm() {
    if (!timer) return;
    clearInterval(timer);
    timer = null;
    stamps = [];
    cps = 0;
    paint();
  }

  function pull() {
    for (var i = 0; i < 3; i++) tick();
    arm();
  }

  counter.addEventListener("click", pull);
  counter.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      pull();
    }
  });

  paint();
})();
