/* The Crossing — the wagon line, run on the bench strip */
(function () {
  var stops = [
    { x: 40,  name: "Palmyra", year: "1820",
      note: "Stop 1 of 7 \u2014 Palmyra, 1820. The steeple is sanded raw: new wood, new fervour, the Second Great Awakening still loud enough to hear from a farm kitchen." },
    { x: 147, name: "Kirtland", year: "1831",
      note: "Stop 2 of 7 \u2014 Kirtland, 1831. The first temple, a small square two-storey thing with a glass cupola, re-glued four times on this bench. Rigdon's line ends here." },
    { x: 253, name: "Independence", year: "1838",
      note: "Stop 3 of 7 \u2014 Independence, Missouri, 1838. The first promised home, lost; the river runs four millimetres of clear epoxy, wider than the region has any right to be." },
    { x: 360, name: "Nauvoo", year: "1839",
      note: "Stop 4 of 7 \u2014 Nauvoo, 1839. The white city on the Mississippi, twenty thousand people. June 27, 1844, Carthage jail, is marked just past it with a square of undecorated wood. The emptiness is the modelling." },
    { x: 467, name: "Winter Quarters", year: "1846",
      note: "Stop 5 of 7 \u2014 Winter Quarters, 1846\u201347. Twelve tents and no weathering, because the weather had already done its part. The company overwinters and gets its shape." },
    { x: 573, name: "the plains", year: "1847",
      note: "Stop 6 of 7 \u2014 the plains, 1847. 1,477 people in 570 covered wagons, fifty-seven of them on this strip, each with a separate axle, following the Platte and the maps that were mostly wrong." },
    { x: 680, name: "the Great Salt Lake", year: "July 24, 1847",
      note: "Stop 7 of 7 \u2014 the Great Salt Lake, July 24, 1847. The water is the right colour, repainted weekly. At its west end the balsa meetinghouse stands beside the brass one from the ledger drawer, the steeple sanded, the debt settled." }
  ];

  var wagon = document.getElementById("wagon");
  var note = document.getElementById("stop-note");
  var run = document.getElementById("run");
  var reset = document.getElementById("reset");
  if (!wagon || !note || !run || !reset) return;

  var i = 0;

  function place(idx) {
    i = Math.max(0, Math.min(stops.length - 1, idx));
    wagon.setAttribute("transform", "translate(" + stops[i].x + " 70)");
    note.textContent = stops[i].note;
    run.textContent = i >= stops.length - 1
      ? "The company has made the lake"
      : "Run the company \u2192";
  }

  run.addEventListener("click", function () {
    place(i >= stops.length - 1 ? 0 : i + 1);
  });

  reset.addEventListener("click", function () { place(0); });

  var stopEls = document.querySelectorAll("#stops .stop");
  Array.prototype.forEach.call(stopEls, function (el) {
    el.addEventListener("click", function () {
      place(parseInt(el.getAttribute("data-i"), 10));
    });
  });

  place(0);
})();
