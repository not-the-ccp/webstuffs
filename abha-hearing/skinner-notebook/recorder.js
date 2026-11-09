// The Skinner Notebook — the cumulative recorder redraws itself when asked.
// The text of the notebook is complete without it; this only re-runs the pen.
(function () {
  var trace = document.getElementById("rec-trace");
  if (!trace) return;

  function replay() {
    trace.style.animation = "none";
    void trace.offsetWidth; // restart the CSS keyframes
    trace.style.animation = "";
  }

  var fig = trace.closest(".recorder");
  if (fig) {
    fig.setAttribute("title", "Click to run the pen again");
    fig.addEventListener("click", replay);
    fig.style.cursor = "pointer";
  }
})();
