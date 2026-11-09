/* Lot 47 — club filter for the season ledger */
(function () {
  var buttons = document.querySelectorAll(".filter");
  var rows = document.querySelectorAll("#ledger tbody tr");
  var label = document.getElementById("totals-label");
  var totGp = document.getElementById("tot-gp");
  var totG = document.getElementById("tot-g");
  var totA = document.getElementById("tot-a");
  var totP = document.getElementById("tot-p");

  var names = {
    all: "Total, fourteen seasons",
    canadiens: "Total, Montreal Canadiens, six seasons",
    blackhawks: "Total, Chicago Black Hawks, two seasons",
    rangers: "Total, New York Rangers, six seasons"
  };

  function recalc(club) {
    var gp = 0, g = 0, a = 0, p = 0, shown = 0;
    rows.forEach(function (tr) {
      var match = club === "all" || tr.getAttribute("data-club") === club;
      tr.classList.toggle("hidden", !match);
      if (match) {
        shown += 1;
        gp += +tr.children[2].textContent;
        g += +tr.children[3].textContent;
        a += +tr.children[4].textContent;
        p += +tr.children[5].textContent;
      }
    });
    totGp.textContent = gp;
    totG.textContent = g;
    totA.textContent = a;
    totP.textContent = p;
    label.textContent = names[club] || names.all;
    label.title = shown + " seasons shown";
  }

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      buttons.forEach(function (b) { b.setAttribute("aria-pressed", "false"); });
      btn.setAttribute("aria-pressed", "true");
      recalc(btn.getAttribute("data-club"));
    });
  });
})();
