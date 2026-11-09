/* Well Ledger, FAQ No. 7 — small touches, all optional. */
(function () {
  "use strict";

  // Each question, when clicked, sinks its bucket line a touch and is
  // marked answered in the margin of the ledger.
  document.querySelectorAll(".qa").forEach(function (qa, i) {
    qa.style.transition = "background 0.4s ease";
    qa.addEventListener("click", function () {
      qa.classList.toggle("asked");
      qa.style.background = qa.classList.contains("asked")
        ? "rgba(44, 62, 95, 0.08)"
        : "";
    });
    qa.title = "Ledger question " + (i + 1);
  });

  // The bucket dips on its own by CSS; the rope gets a faint sway if the
  // visitor is present and willing.
  var rope = document.querySelector(".rope");
  if (rope) {
    var phase = 0;
    setInterval(function () {
      phase += 0.08;
      rope.style.transform = "rotate(" + (Math.sin(phase) * 2.2).toFixed(2) + "deg)";
      rope.style.transformOrigin = "top center";
    }, 80);
  }
})();
