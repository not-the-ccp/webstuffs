/* Ticket No. 7 — the provisioner's rule. One slice per person per day,
   twelve slices to the loaf, one ticket of the ticket to the loaf. */
(function () {
  var pax = document.getElementById("pax");
  var days = document.getElementById("days");
  var button = document.getElementById("provision");
  var result = document.getElementById("result");
  if (!pax || !days || !button || !result) return;

  function ord(n) {
    var s = ["th", "st", "nd", "rd"], v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  }

  function provision() {
    var p = Math.min(999, Math.max(1, parseInt(pax.value, 10) || 1));
    var d = Math.min(99, Math.max(1, parseInt(days.value, 10) || 1));
    var slices = p * d;
    var loaves = Math.ceil(slices / 12);
    var eggs = loaves * 2;
    var drippings = loaves * 3;
    var sacks = loaves; // one sack of cornmeal per ticket, the boat's weight

    var text =
      "As ruled in the wharf book: " + ord(p) + " persons, " + ord(d) +
      (d === 1 ? " day" : " days") + " — " + ord(loaves) + " loaves (" +
      slices + " boat's slices), " + ord(loaves) + " ticket" +
      (loaves === 1 ? "" : "s") + " of the ticket, " + ord(sacks) +
      " sack" + (sacks === 1 ? "" : "s") + " of cornmeal, " + ord(eggs) +
      " eggs, " + ord(drippings) + " tablespoons of drippings. The line holds.";

    result.textContent = text;
  }

  button.addEventListener("click", provision);
  pax.addEventListener("change", provision);
  days.addEventListener("change", provision);
})();
