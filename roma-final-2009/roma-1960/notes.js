/* The Rome Tapes — turntable: press the disc, the sides run in order */
(function () {
  "use strict";

  var wrap = document.getElementById("disc-wrap");
  if (!wrap) return;

  var hint = document.getElementById("disc-hint");
  var np = document.getElementById("now-playing");
  var rows = Array.prototype.slice.call(document.querySelectorAll(".tracklist li[data-track]"));
  var names = {
    1: "A1 · Vesuvius (1906)",
    2: "A2 · L’Olimpico, built 1953",
    3: "A3 · Cerimonia di Apertura",
    4: "A4 · Bikila — Marathon, 2:15:16.2",
    5: "A5 · Rudolph — 100m, eleven flat",
    6: "A6 · La Medaglie — the count, gold and overall",
    7: "B1 · Paralimpiadi — the first",
    8: "B2 · Il Tevere, swimming hall",
    9: "B3 · La Chiusura — closing, 11 September",
    10: "B4 · Via Tiburtina — the exit"
  };
  /* each track runs a short measured time so both sides finish in a sitting */
  var durations = { 1: 5, 2: 6, 3: 7, 4: 6, 5: 4, 6: 5, 7: 6, 8: 5, 9: 5, 10: 8 };

  var playing = false;
  var index = -1;
  var timer = null;
  var tLeft = 0;

  function clearAll() {
    rows.forEach(function (r) { r.classList.remove("on"); });
  }

  function tick() {
    tLeft -= 1;
    if (tLeft <= 0) {
      next();
      return;
    }
    np.textContent = "side " + (index < 5 ? "A" : "B") + " · " + names[index] + " · " + tLeft + "s";
  }

  function next() {
    index += 1;
    if (index >= rows.length) {
      stop();
      np.textContent = "flipped — the record is finished, 11 September 1960";
      return;
    }
    var row = rows[index];
    clearAll();
    row.classList.add("on");
    tLeft = durations[index + 1] || 5;
    row.scrollIntoView({ block: "nearest", behavior: "smooth" });
    tick();
  }

  function stop() {
    playing = false;
    clearTimeout(timer);
    timer = null;
    wrap.classList.remove("playing");
    hint.textContent = "press play";
  }

  function play() {
    playing = true;
    wrap.classList.add("playing");
    hint.textContent = "needle down · 33⅓ rpm";
    if (index === -1 || index >= rows.length - 1 && tLeft === 0) { index = -1; }
    next();
    timer = setInterval(tick, 1000);
  }

  wrap.addEventListener("click", function () {
    if (playing) { stop(); } else { play(); }
  });

  wrap.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (playing) { stop(); } else { play(); }
    }
  });
  wrap.setAttribute("tabindex", "0");
  wrap.setAttribute("role", "button");
})();
