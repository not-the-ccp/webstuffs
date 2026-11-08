// Surplus catalogue — plate loader for item 107.3
(function () {
  var BAR = 20;
  var CHALKED = 196.0;
  var plates = Array.prototype.slice.call(document.querySelectorAll("#plates .plate"));
  var totalEl = document.getElementById("loadout-total");
  var verdictEl = document.getElementById("loadout-verdict");
  var clearBtn = document.getElementById("clear-plates");

  function fmt(n) { return (Math.round(n * 10) / 10).toFixed(1); }

  function recompute() {
    var load = 0;
    plates.forEach(function (p) {
      if (p.getAttribute("aria-pressed") === "true") load += parseFloat(p.dataset.kg);
    });
    var total = BAR + load * 2;
    totalEl.textContent = fmt(total) + " kg";
    totalEl.dataset.total = String(total);
    if (total < CHALKED) {
      verdictEl.textContent = "no chalked figure yet";
      verdictEl.classList.remove("confirm");
    } else if (total === CHALKED) {
      verdictEl.textContent = "the chalked figure of 196.0 kg — the desk will not confirm it";
      verdictEl.classList.add("confirm");
    } else {
      verdictEl.textContent = "above the day's posted maximum; the register would flag it";
      verdictEl.classList.add("confirm");
    }
  }

  plates.forEach(function (p) {
    p.setAttribute("aria-pressed", "false");
    p.addEventListener("click", function () {
      p.setAttribute("aria-pressed", p.getAttribute("aria-pressed") === "true" ? "false" : "true");
      recompute();
    });
  });

  clearBtn.addEventListener("click", function () {
    plates.forEach(function (p) { p.setAttribute("aria-pressed", "false"); });
    recompute();
  });
})();
