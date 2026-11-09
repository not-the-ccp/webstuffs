/* The Meadowcroft Bench — small touches for the build log */
(function () {
  "use strict";

  // Number the entries' bowls sold, the way the table book kept them:
  // nine by noon, eleven in all.
  var note = document.querySelector(".kitchen-note");
  if (note) {
    note.setAttribute("title", "Copied word for word from the table book at 41 Alder Street, kept by D.O.T.");
  }

  // A quiet running count in the margin: which entry the reader is at.
  var entries = Array.prototype.slice.call(document.querySelectorAll(".entry"));
  var marker = document.createElement("p");
  marker.className = "entry-count";
  marker.setAttribute("aria-hidden", "true");
  marker.style.cssText = "position:fixed;top:1rem;right:1rem;font-family:'Courier New',monospace;font-size:.72rem;letter-spacing:.2em;color:#efe4cd;background:#4a382a;border:1px solid #b4552d;padding:.3rem .7rem;z-index:9;";
  marker.textContent = "ENTRY 1 / " + entries.length;
  document.body.appendChild(marker);

  function update() {
    if (!entries.length) return;
    var current = 1;
    for (var i = 0; i < entries.length; i++) {
      var top = entries[i].getBoundingClientRect().top;
      if (top < window.innerHeight * 0.4) current = i + 1;
    }
    marker.textContent = "ENTRY " + current + " / " + entries.length;
  }

  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
})();
