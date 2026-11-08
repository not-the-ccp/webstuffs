// The two forms of the minuscule, weighed against one another, as in session.
document.addEventListener("DOMContentLoaded", function () {
  var open = document.querySelector(".opentail");
  var loop = document.querySelector(".looptail");
  if (!open || !loop) return;

  var openGlyph = "\u27e8\u0261\u27e9"; // ⟨ɡ⟩ single-storey
  var loopGlyph = "\u27e8g\u27e9";      // ⟨g⟩ double-storey
  var mode = "static";

  function apply() {
    if (mode === "open") {
      open.textContent = openGlyph;
      loop.textContent = loopGlyph + " (held)";
    } else if (mode === "loop") {
      open.textContent = openGlyph + " (held)";
      loop.textContent = loopGlyph;
    } else {
      open.textContent = openGlyph;
      loop.textContent = loopGlyph;
    }
    loop.title = "Click to weigh the two forms, as the council did.";
  }

  open.title = loop.title = "Click to weigh the two forms, as the council did.";
  open.addEventListener("click", function () {
    mode = mode === "open" ? "static" : "open";
    apply();
  });
  loop.addEventListener("click", function () {
    mode = mode === "loop" ? "static" : "loop";
    apply();
  });
  apply();
});
