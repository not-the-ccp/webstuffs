/* The Little Monsters & Evening Ledger — snap meter & neon, 19 August 2017 */
(function () {
  "use strict";

  var snaps = 0;
  var meter = null;

  function ensureMeter() {
    if (!meter) {
      meter = document.createElement("div");
      meter.id = "snap-meter";
      meter.textContent = "FINGER SNAPS: 0";
      document.body.appendChild(meter);
    }
    return meter;
  }

  function burst(x, y) {
    var glyphs = ["✦", "∴", "✧", "♩"];
    for (var i = 0; i < 3; i++) {
      var s = document.createElement("span");
      s.className = "snap-fx";
      s.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
      s.style.left = (x + (Math.random() * 60 - 30)) + "px";
      s.style.top = (y + (Math.random() * 20 - 10)) + "px";
      document.body.appendChild(s);
      (function (node) {
        setTimeout(function () { node.remove(); }, 950);
      })(s);
    }
  }

  document.addEventListener("click", function (e) {
    snaps += 1;
    var m = ensureMeter();
    m.textContent = "FINGER SNAPS: " + snaps;
    burst(e.clientX || 0, e.clientY || 0);
  });

  // The paper's price is one finger snap; the Ledger pre-pays it.
  window.addEventListener("load", function () {
    snaps += 1;
    var m = ensureMeter();
    m.textContent = "FINGER SNAPS: 1 — THE PAPER'S PRICE, PAID";
    var mast = document.querySelector(".masthead");
    if (mast) {
      var r = mast.getBoundingClientRect();
      burst(r.left + r.width / 2, r.top + r.height / 2);
    }
  });

  // Neon clearance: the headline re-clears its light on a slow interval,
  // held steady between flickers so the page stays readable.
  var neon = document.getElementById("neon");
  if (neon) {
    setInterval(function () {
      neon.style.willChange = "opacity";
      neon.classList.remove("recharge");
      void neon.offsetWidth;
      neon.classList.add("recharge");
    }, 9000);
  }
})();
