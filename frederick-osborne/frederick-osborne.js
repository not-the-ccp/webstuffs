/* The Evans Collection — Product No. EV-11, George Street counter script */

(function () {
  "use strict";

  // --- the order button: a little theatre of stock ---
  var orderBtn = document.getElementById("order-btn");
  var shippingLine = document.getElementById("shipping-line");
  if (orderBtn && shippingLine) {
    var stages = [
      "Freight by secure courier to any address in the Commonwealth, insured to full value, within five clear working days of dispatch from Sydney.",
      "One boxed set has just gone to the counter at 410 George Street. The next set opens for consignment in five clear working days.",
      "The counter at 410 George Street is closed for the day. The glass of water remains, for anyone who is thirsty."
    ];
    var stage = 0;
    orderBtn.addEventListener("click", function () {
      stage = (stage + 1) % stages.length;
      shippingLine.textContent = stages[stage];
      orderBtn.textContent = stage === 0
        ? "Add to the Collection"
        : stage === 1
          ? "Hold the Next Set (Wagga Wagga)"
          : "Send the Glass of Water Instead";
    });
  }

  // --- the tariff sample: a stamped confirmation ---
  var sheetBtn = document.getElementById("sheet-btn");
  if (sheetBtn) {
    sheetBtn.addEventListener("click", function () {
      var pressed = sheetBtn.getAttribute("aria-pressed") === "true";
      sheetBtn.setAttribute("aria-pressed", String(!pressed));
      sheetBtn.textContent = pressed
        ? "Request the 1956 Tariff Sample"
        : "Sample posted — watch for the envelope";
    });
  }

  // --- the fourth glass: fills as the reader descends the page ---
  var water = document.getElementById("water");
  if (water && "requestAnimationFrame" in window) {
    var maxY = 40;   // nearly empty
    var minY = 16;   // nearly full
    var ticking = false;
    function level() {
      var doc = document.documentElement;
      var max = doc.scrollHeight - window.innerHeight;
      var frac = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      var y = maxY - (maxY - minY) * frac;
      water.setAttribute("y", y.toFixed(1));
      water.setAttribute("height", (62 - y).toFixed(1));
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(level); }
    }, { passive: true });
    level();
  }

  // --- duplicate the ticker text so the roll loops seamlessly ---
  var track = document.getElementById("ticker");
  if (track && track.textContent.indexOf("EVANS, NEW SOUTH WALES") !== -1) {
    track.innerHTML = track.innerHTML + track.innerHTML;
  }
})();
