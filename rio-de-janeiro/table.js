/* The window wall: forty-one cups, eight to the water.
   The soup goes out in order; the eight window cups answer to the horn.
   Purely decorative — the review reads in full without it. */
(function () {
  var wall = document.getElementById("cups");
  if (!wall) return;
  var covers = parseInt(wall.getAttribute("data-covers"), 10) || 41;
  var windows = (wall.getAttribute("data-window") || "").split(/\s+/).filter(Boolean);
  var label = document.getElementById("cupsLabel");

  var cups = [];
  for (var i = 1; i <= covers; i++) {
    var c = document.createElement("span");
    c.className = "cup" + (windows.indexOf(String(i)) !== -1 ? " window" : "");
    c.title = "table " + i;
    c.addEventListener("click", function () {
      this.classList.toggle("lit");
      count();
    });
    wall.appendChild(c);
    cups.push(c);
  }

  function count() {
    var n = 0;
    for (var j = 0; j < cups.length; j++) if (cups[j].classList.contains("lit")) n++;
    label.textContent = n + " of " + covers + " cups sent out" + (n === covers ? " — the count, kept in full" : "") + " · press a cup";
  }

  // service: the soup goes out in order, one cup at a time
  var step = 0;
  var timer = setInterval(function () {
    if (step >= covers) {
      clearInterval(timer);
      horn();
      return;
    }
    cups[step].classList.add("lit");
    step++;
    count();
  }, 130);

  // the horn: the eight window cups interrupt, and stay where the spoon put them
  function horn() {
    for (var k = 0; k < windows.length; k++) {
      (function (idx) {
        setTimeout(function () {
          if (!cups[idx].classList.contains("lit")) return;
          cups[idx].classList.add("rung");
          setTimeout(function () { cups[idx].classList.remove("rung"); }, 500);
        }, 700 + idx * 260);
      })(parseInt(windows[k], 10) - 1);
    }
  }
})();
