// Claim 4 — the dipping bench: two coats of wax, one long evening's dust.
(function () {
  var specimen = document.getElementById("specimen");
  var readout = document.getElementById("readout");
  var metaLine = document.querySelector(".bench-entry .entry-meta");
  var coat1 = document.getElementById("coat1");
  var coat2 = document.getElementById("coat2");
  var evening = document.getElementById("evening");
  var strike = document.getElementById("strike");
  var coats = 0;
  var settled = false;

  function render() {
    specimen.classList.toggle("coat1", coats >= 1);
    specimen.classList.toggle("coat2", coats >= 2);
    specimen.classList.toggle("settled", settled);
    coat2.disabled = coats < 1;
    evening.disabled = coats < 2 || settled;
    coat1.disabled = coats >= 1;
    strike.disabled = coats === 0 && !settled;

    var status =
      settled
        ? "the specimen holds"
        : coats === 2
        ? "two coats down; the evening is not yet set"
        : coats === 1
        ? "first coat down; the second is waiting"
        : "uncoated";

    readout.textContent =
      "Register: " + coats + " coat" + (coats === 1 ? "" : "s") + " applied, " +
      (settled ? "one long evening set" : "evening not yet set").concat(
        settled ? ". " : ". "
      ) +
      settled
        ? "Two coats of wax and one long evening's dust — entered in the file; the stern line keeps the way a keel keeps."
        : "The specimen is " + status + ".";

    if (metaLine) {
      metaLine.innerHTML =
        '<span class="label">Register:</span> coats ' + coats + " of 2 &middot; " +
        '<span class="label">Evening:</span> ' + (settled ? 1 : 0) + " of 1 &middot; " +
        '<span class="label">Status:</span> ' + (settled ? "holding" : status);
    }
  }

  coat1.addEventListener("click", function () {
    if (coats === 0) { coats = 1; render(); }
  });
  coat2.addEventListener("click", function () {
    if (coats === 1) { coats = 2; render(); }
  });
  evening.addEventListener("click", function () {
    if (coats === 2 && !settled) { settled = true; render(); }
  });
  strike.addEventListener("click", function () {
    coats = 0;
    settled = false;
    render();
  });

  render();
})();
