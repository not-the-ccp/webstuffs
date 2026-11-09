// E-BCN-472 — live filtering of the related-entries log.
// The table is fully readable without this; the script only narrows it.
(function () {
  var input = document.getElementById("q");
  var count = document.getElementById("count");
  var rows = Array.prototype.slice.call(document.querySelectorAll("#log tbody tr"));
  var seaButtons = Array.prototype.slice.call(document.querySelectorAll(".sea"));
  var sea = "all";

  function apply() {
    var q = (input.value || "").trim().toLowerCase();
    var shown = 0;
    rows.forEach(function (tr) {
      var text = tr.textContent.toLowerCase();
      var seaOk = sea === "all" || tr.getAttribute("data-sea") === sea;
      var qOk = q === "" || text.indexOf(q) !== -1;
      var visible = seaOk && qOk;
      tr.toggleAttribute("data-hidden", !visible);
      if (visible) shown += 1;
    });
    count.textContent = "Showing " + shown + " of " + rows.length + " entries.";
  }

  input.addEventListener("input", apply);
  seaButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      sea = btn.getAttribute("data-sea");
      seaButtons.forEach(function (b) { b.classList.toggle("is-on", b === btn); });
      apply();
    });
  });

  apply();
})();
