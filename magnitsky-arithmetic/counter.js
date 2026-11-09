// FM-9 Ch. 13 bench counter — kept in the browser's own ledger
(function () {
  var KEY = "arifmetika_visitor_count";
  var el = document.getElementById("viscount");
  if (!el) return;
  var n = 1190; // the book's page count, where the count began
  try {
    var stored = parseInt(window.localStorage.getItem(KEY), 10);
    if (stored >= 1190) n = stored + 1;
    else n = stored + 1 || n + 1;
    window.localStorage.setItem(KEY, String(n));
  } catch (e) { /* no ledger available; read from the bench only */ n += 1; }
  el.textContent = String(n).length < 6 ? ("000000" + n).slice(-6) : String(n);

  // guestbook: your entry, when you type in the URL bar of the past
  var entry = document.getElementById("guest-entry");
  if (entry) {
    setTimeout(function () {
      entry.textContent = "signed at the Neva bench, no date required";
    }, 2600);
  }
})();
