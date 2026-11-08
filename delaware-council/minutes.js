/* Session Nº 44 — recount slate: mark the roll again, and the motion is ruled again. */
(function () {
  var roll = document.getElementById("roll");
  if (!roll) return;

  var ayeEl = document.getElementById("aye-c");
  var nayEl = document.getElementById("nay-c");
  var absEl = document.getElementById("abs-c");
  var presentEl = document.getElementById("present-c");
  var verdict = document.getElementById("verdict");
  var total = roll.tBodies[0].rows.length;

  function rule(votes) {
    var aye = 0, nay = 0, abs = 0, marked = 0;
    for (var i = 0; i < votes.length; i++) {
      if (!votes[i]) continue;
      marked++;
      if (votes[i] === "aye") aye++;
      else if (votes[i] === "nay") nay++;
      else abs++;
    }
    ayeEl.textContent = aye;
    nayEl.textContent = nay;
    absEl.textContent = abs;
    presentEl.textContent = marked;

    if (marked < total) {
      verdict.textContent = "The slate is not yet full. When it is, the motion will be ruled.";
      return;
    }
    if (aye > nay) {
      verdict.textContent = "Ruled on the slate: " + aye + " aye, " + nay + " nay, " + abs +
        " abstain — the motion carried. The shelf will be kept.";
    } else if (nay > aye) {
      verdict.textContent = "Ruled on the slate: " + aye + " aye, " + nay + " nay, " + abs +
        " abstain — the motion did not carry. The clerk looks up, and looks away.";
    } else {
      verdict.textContent = "Ruled on the slate: the slate is even, at " + aye + " and " + nay +
        ". The motion is held over to the next wet June.";
    }
  }

  var votes = [];

  roll.addEventListener("click", function (e) {
    var btn = e.target.closest("button[data-v]");
    if (!btn) return;
    var row = btn.closest("tr");
    var v = btn.getAttribute("data-v");
    var idx = Array.prototype.indexOf.call(row.parentNode.rows, row);

    votes[idx] = (votes[idx] === v) ? null : v;

    row.classList.remove("voted-aye", "voted-nay", "voted-abs");
    row.querySelectorAll("button").forEach(function (b) { b.classList.remove("chosen"); });
    if (votes[idx]) {
      row.classList.add("voted-" + votes[idx]);
      btn.classList.add("chosen");
    }
    rule(votes);
  });

  document.getElementById("reset").addEventListener("click", function () {
    votes = [];
    roll.querySelectorAll("tr").forEach(function (row) {
      row.classList.remove("voted-aye", "voted-nay", "voted-abs");
      row.querySelectorAll("button").forEach(function (b) { b.classList.remove("chosen"); });
    });
    rule(votes);
  });

  // The slate as the clerk marked it: 7 aye, 1 nay, 1 abstain.
  var clerkSlate = ["aye", "aye", "aye", "aye", "aye", "aye", "abs", "aye", "nay"];
  clerkSlate.forEach(function (v, i) {
    votes[i] = v;
    var row = roll.tBodies[0].rows[i];
    row.classList.add("voted-" + v);
    var btn = row.querySelector('button[data-v="' + v + '"]');
    if (btn) btn.classList.add("chosen");
  });
  rule(votes);
})();
