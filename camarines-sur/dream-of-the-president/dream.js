/* The Back Room Dream Ledger — a little counter, and a guestbook that keeps its own records */
(function () {
  var counterEl = document.getElementById("counter");
  if (counterEl) {
    var count = 14;
    try { count = parseInt(localStorage.getItem("dreamLedgerCount"), 10) || 14; } catch (e) { count = 14; }
    count += 1;
    try { localStorage.setItem("dreamLedgerCount", String(count)); } catch (e) {}
    counterEl.textContent = String(count).replace(/^(\d+)$/, function (_, d) {
      return d.length < 5 ? "00000".slice(d.length) + d : d;
    });
  }

  var form = document.getElementById("gb-form");
  if (form) {
    var list = document.getElementById("gb-list");
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var name = document.getElementById("gb-name").value.trim() || "A dreamer";
      var line = document.getElementById("gb-line").value.trim() || "The jar remains lidded.";
      var li = document.createElement("li");
      li.textContent = "\u2014 " + name + ": \u201C" + line + "\u201D";
      list.insertBefore(li, list.firstChild);
      document.getElementById("gb-name").value = "";
      document.getElementById("gb-line").value = "";
    });
  }
})();
