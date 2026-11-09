// The Press Ban Walk — timeline scrubber, 1863–1904
(function () {
  "use strict";

  var band = document.getElementById("tl-band");
  var fill = document.getElementById("tl-fill");
  var handle = document.getElementById("tl-handle");
  var yearEl = document.getElementById("tl-year");
  var noteEl = document.getElementById("tl-note");
  if (!band || !fill || !handle || !yearEl || !noteEl) return;

  var MIN = 1863, MAX = 1904;

  var events = {
    1863: "The January Uprising fails. Across the borderlands the red flags come down, and with them the last open hope of the year.",
    1864: "The administrative order is issued in Petrograd. It will need a year to bite, but its date is already in the city's memory: no Latin letters, no Lithuanian, in press.",
    1865: "The ban is in force: no Lithuanian in Latin letters may be printed within the Empire. The first seizures enter the customs ledger.",
    1866: "The first single folded leaflet is taken at the Pilies gate and logged on page one of the ledger. The binder's false bottom is fitted that winter.",
    1873: "The Cyrillic press has run its nine years at the university and the wall of specimen sheets is full. The language it was meant to loosen begins to look, to its readers, like a stranger's.",
    1883: "Books printed abroad in Latin letters begin arriving steadily: the crates of forty to sixty leaflets each, in flour sacks and oiled cloth. The peddlers read them before dawn.",
    1890: "Midway through the thirty-nine years. The bindery on Paupio re-cases its fortieth crate of the year, and the ninth lamp post's porter has three ledgers of his own.",
    1900: "The ledger is now 211 pages thick and still opening. The administration watches the border and finds, mostly, the smell of the river.",
    1902: "The Russian courts reverse a conviction in a press-ban case. The first of the two reversals; the city hears of it in the garden before the market does.",
    1903: "A second conviction is reversed. The order is alive but cornered, and the bargemen begin to keep the leaflets in the almanac instead of under the bench.",
    1904: "The setbacks of the Russo-Japanese War bring a loosening the Empire cannot refuse. On 24 April 1904 the ban is lifted; the last dozen crates are logged in haste. Thirty-nine years, ended."
  };

  var fallback = "An unmarked year of the thirty-nine. The gate keeps its porter, the bindery its false bottom, the ledger its page.";

  function setYear(year) {
    year = Math.max(MIN, Math.min(MAX, Math.round(year)));
    var pct = ((year - MIN) / (MAX - MIN)) * 100;
    fill.style.width = pct + "%";
    handle.style.left = pct + "%";
    yearEl.textContent = year;
    noteEl.textContent = events[year] || fallback;
    band.setAttribute("aria-valuenow", String(year));
    band.setAttribute("aria-valuetext", year + ": " + (events[year] || "an unmarked year"));
  }

  function yearFromX(clientX) {
    var rect = band.getBoundingClientRect();
    var frac = (clientX - rect.left) / rect.width;
    return MIN + frac * (MAX - MIN);
  }

  var dragging = false;

  band.addEventListener("pointerdown", function (e) {
    dragging = true;
    band.setPointerCapture(e.pointerId);
    setYear(yearFromX(e.clientX));
    e.preventDefault();
  });

  band.addEventListener("pointermove", function (e) {
    if (dragging) setYear(yearFromX(e.clientX));
  });

  band.addEventListener("pointerup", function () { dragging = false; });
  band.addEventListener("pointercancel", function () { dragging = false; });

  band.addEventListener("keydown", function (e) {
    var cur = parseInt(band.getAttribute("aria-valuenow"), 10);
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") { setYear(cur - 1); e.preventDefault(); }
    else if (e.key === "ArrowRight" || e.key === "ArrowUp") { setYear(cur + 1); e.preventDefault(); }
    else if (e.key === "Home") { setYear(MIN); e.preventDefault(); }
    else if (e.key === "End") { setYear(MAX); e.preventDefault(); }
  });

  setYear(1865);
})();
