/* Season Book 12 — small mechanics for the field notes */

(function () {
  "use strict";

  // Unit toggle on the specimen card: millimetres / inches
  var card = document.getElementById("specimen");
  var btn = document.getElementById("unitbtn");
  if (card && btn) {
    btn.addEventListener("click", function () {
      var imperial = card.classList.toggle("imperial");
      btn.textContent = imperial ? "measure in: inches" : "measure in: millimetres";
      btn.setAttribute("aria-pressed", imperial ? "true" : "false");
    });
  }

  // The stitch counter: each visit adds one stitch to the cover,
  // kept in the ledger's memory of the season.
  var baseStitches = 5411;
  var key = "scg-stitches";
  var extra = 0;
  try { extra = parseInt(window.localStorage.getItem(key) || "0", 10) || 0; } catch (e) { extra = 0; }
  extra += 1;
  try { window.localStorage.setItem(key, String(extra)); } catch (e) {}

  var hand = document.getElementById("handnote");
  if (hand) {
    var total = baseStitches + extra;
    hand.textContent =
      "count the stitches before you count the leaves — the leather is the older of the two, and the older keeps the count. (" +
      total.toLocaleString("en-GB") + " on the cover, this season.)";
  }

  // A slow field-clock in the colophon, kept to the minute.
  var colophon = document.querySelector(".colophon p");
  function tick() {
    if (!colophon) return;
    var d = new Date();
    var hh = String(d.getHours()).padStart(2, "0");
    var mm = String(d.getMinutes()).padStart(2, "0");
    colophon.dataset.clock = hh + ":" + mm;
    var base = "Season Book 12 · entry nos. 1–5 · kept as found, the 4:41 as reconstructed · the ribbon not pulled";
    colophon.textContent = base + " · the pen down at " + hh + ":" + mm;
  }
  tick();
  setInterval(tick, 60000);
})();
