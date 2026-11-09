/* The Thirty-Two — run the 1936 flight */
(function () {
  var lamps = Array.prototype.slice.call(document.querySelectorAll(".board .lamp"));
  var printer = document.getElementById("tprinter");
  var btn = document.getElementById("run");
  if (!lamps.length || !btn) return;

  // the board as left after the flight: 21 blue, 5 red, 1 amber (Nebraska),
  // 3 blue in the vacancy row for the specials, one spare unlit
  var plan = [];
  for (var i = 0; i < 21; i++) plan.push("blue");
  plan.push("red", "red", "red", "red", "red");
  plan.push("amber");
  for (var j = 0; j < 3; j++) plan.push("blue");
  // last lamp stays unlit: the spare

  var lines = [
    "RETURNS 1936 · CLASS 2 · 32 SEATS",
    "WASHINGTON .... WHEELER (D) OVER JONES — MARGIN REPRINTED",
    "NEBRASKA ...... O'MAHEY (D) OVER NORRIS — LAMP 25 SET AMBER",
    "SPECIALS ...... VACANCY ROW LIT — THREE HONORED",
    "NET ........... D +5 · REPUBLICANS REDUCED TO 16",
    "APPOINTMENTS .. FARMER-LABOR INTERIMS HONORED",
    "VACANCIES ..... FURTHER +2 — DEMOCRATS AT 77",
    "FLIGHT COMPLETE · CREDIT FOLLOWED TRADE"
  ];

  var running = false;

  function reset() {
    lamps.forEach(function (l) {
      l.classList.remove("on-blue", "on-red", "on-amber");
    });
    printer.innerHTML = "";
  }

  function step(i) {
    if (i >= plan.length) {
      running = false;
      btn.textContent = "▸ RUN THE 1936 FLIGHT AGAIN";
      return;
    }
    var l = lamps[i];
    l.classList.add("on-" + plan[i]);
    printer.scrollTop = printer.scrollHeight;
    setTimeout(function () { step(i + 1); }, 110);
  }

  btn.addEventListener("click", function () {
    if (running) return;
    running = true;
    btn.textContent = "▸ FLIGHT IN PROGRESS…";
    reset();
    for (var k = 0; k < lines.length; k++) {
      (function (line, delay) {
        setTimeout(function () {
          var li = document.createElement("li");
          li.textContent = line;
          printer.appendChild(li);
          printer.scrollTop = printer.scrollHeight;
        }, 350 + delay * 900);
      })(lines[k], k);
    }
    setTimeout(function () { step(0); }, 300);
  });
})();
