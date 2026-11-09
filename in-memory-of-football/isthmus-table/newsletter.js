/* The Isthmus & Table — a small tremor for the kitchen seismograph */
(function () {
  var trace = document.querySelector(".seismo .trace");
  if (!trace) return;

  // draw the trace in on load
  trace.style.transition = "stroke-dashoffset 2.4s ease";
  trace.style.strokeDashoffset = "640";
  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      trace.style.strokeDashoffset = "0";
    });
  });

  // a gentle, periodic tremor — the tray is re-stacked
  var card = trace.closest(".geology");
  if (card) {
    setInterval(function () {
      card.animate(
        [
          { transform: "translate(0, 0)" },
          { transform: "translate(0, 1px)" },
          { transform: "translate(-1px, 0)" },
          { transform: "translate(0, -1px)" },
          { transform: "translate(0, 0)" }
        ],
        { duration: 340, iterations: 2 }
      );
    }, 14000);
  }
})();
