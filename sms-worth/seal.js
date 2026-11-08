// Strike (or lift) the seal of the Court on the record.
(function () {
  var btn = document.querySelector(".stamp-btn");
  var seal = document.getElementById("seal");
  if (!btn || !seal) return;
  btn.addEventListener("click", function () {
    var on = seal.hidden;
    seal.hidden = !on;
    btn.setAttribute("aria-pressed", on ? "true" : "false");
    btn.textContent = on ? "Lift the seal of the Court" : "Strike the seal of the Court";
  });
})();
