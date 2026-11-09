// The thirty-three years, walked: a year-stepper from 1949 to 1984.
(function () {
  var events = {
    1949: "The walk begins. The seat does not exist yet; the stones are laid out in the field, waiting.",
    1950: "The constituency of Huyton is created; Harold Wilson becomes its member and keeps it for the rest of its life.",
    1951: "Election: the seat returns to the same man; the boundary stones are re-counted each May and found exactly where the last count put them.",
    1955: "Election: same man, same stones, same road out of Liverpool's western edge.",
    1959: "Election: the seat holds. The polling station on the Green gains a second spare chair.",
    1963: "The member for Huyton becomes Leader of the Labour Party, from a frontbench seat just beyond Liverpool's borders.",
    1964: "Election, and with it the premiership: Wilson becomes prime minister. The polling station keeps his ballot papers and a spare chair for visitors.",
    1970: "The first premiership ends; the seat returns to its usual weather of terraces and a long road. It is still returned to the same man.",
    1974: "The second premiership begins (it will run to 1976); the boundary stones do not move an inch. Election, again, to the same man.",
    1976: "Wilson leaves Downing Street; the constituency keeps its member, the member keeps the constituency.",
    1979: "The last election the old seat will ever have; the clerks already know, though they say nothing at the table.",
    1983: "The 1983 boundary changes dissolve Huyton, largely replacing it with Knowsley South, the same year Wilson retires from Parliament. The keeper hears the thump: the stone wall, the wall being, I suspect, a drum.",
    1984: "The walk ends. Knowsley South takes the road, the terraces, and the habit of counting the stones. The 1950 map goes under glass; the brochure closes."
  };
  var QUIET = "A quiet year. The terraces go on, the road goes on, and the boundary stones keep their silence.";

  var START = 1949, END = 1984;
  var year = START;

  var out = document.getElementById("year-out");
  var eventOut = document.getElementById("event-out");
  var marker = document.getElementById("marker");
  var back = document.getElementById("back-btn");
  var fwd = document.getElementById("fwd-btn");

  if (!out || !eventOut || !marker || !back || !fwd) return;

  function render() {
    out.textContent = year;
    eventOut.textContent = events[year] || QUIET;
    marker.style.left = ((year - START) / (END - START) * 100) + "%";
    back.disabled = year <= START;
    fwd.disabled = year >= END;
  }

  back.addEventListener("click", function () {
    if (year > START) { year--; render(); }
  });
  fwd.addEventListener("click", function () {
    if (year < END) { year++; render(); }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") back.click();
    if (e.key === "ArrowRight") fwd.click();
  });

  render();
})();
