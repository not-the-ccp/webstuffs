// Error MS-531 · milepost diagnostic for MS 531
// Milepost 0.0 = MS 28 near Taylorsville (Smith County)
// Milepost 27.4 = Smith/Jasper county line
// Milepost 42.0 = MS 18 at Bay Springs (Jasper County)
(function () {
  var LINE = 27.4;
  var END = 42.0;
  var input = document.getElementById("mp");
  var button = document.getElementById("run");
  var cells = {
    mp: document.getElementById("d-mp"),
    county: document.getElementById("d-county"),
    bear: document.getElementById("d-bear"),
    surf: document.getElementById("d-surf"),
    term: document.getElementById("d-term"),
    status: document.getElementById("d-status")
  };
  if (!input || !button || !cells.mp) return;

  function fmt(n) { return n.toFixed(1); }

  function run() {
    var v = parseFloat(input.value);
    if (isNaN(v)) {
      cells.status.textContent = "ERROR MS-531 — milepost not a number";
      return;
    }
    v = Math.min(END, Math.max(0, v));
    input.value = fmt(v);

    var dLine = v - LINE;
    var inJasper = v >= LINE;
    cells.mp.textContent = fmt(v) + " of " + fmt(END);
    cells.county.textContent = inJasper
      ? "Jasper County" + (Math.abs(dLine) < 0.05 ? " (line at 27.4)" : "")
      : "Smith County";
    cells.bear.textContent = v === 0 ? "At MS 28 near Taylorsville — bearing northeastward" : "Northeastward";
    cells.surf.textContent = "Asphalt, paved by 1960 (designated 1956, alignment unchanged)";

    var toStart = v;
    var toEnd = END - v;
    var term;
    if (v === 0) {
      term = "Start: MS 28 near Taylorsville, 0.0 mi";
    } else if (v === END) {
      term = "End: MS 18, Bay Springs, 0.0 mi";
    } else if (toStart < Math.abs(dLine)) {
      term = "Taylorsville (MS 28), " + fmt(toStart) + " mi back";
    } else if (Math.abs(dLine) <= toStart && Math.abs(dLine) < toEnd) {
      term = "County line, " + fmt(Math.abs(dLine)) + " mi " + (inJasper ? "back" : "ahead");
    } else {
      term = "Bay Springs (MS 18), " + fmt(toEnd) + " mi ahead";
    }
    cells.term.textContent = term;
    cells.status.textContent = "OK — survey attached (1960)";
  }

  button.addEventListener("click", run);
  input.addEventListener("change", run);
  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") run();
  });
  run();
})();
