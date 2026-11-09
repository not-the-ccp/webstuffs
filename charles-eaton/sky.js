// Charles Eaton Obituary corner — small touches, page reads fine without this.

(function () {
  var counterEl = document.getElementById("counter");
  if (!counterEl) return;

  // The rumoured 1997 counter, restarted daily at dawn.
  var base = 4721;
  var now = new Date();
  var dawn = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 6, 0, 0);
  var hours = Math.floor((now - dawn) / 3600000);
  var visits = base + Math.max(0, hours) * 7 + (now.getSeconds() % 3);

  counterEl.textContent = String(visits).padStart(6, "0");
})();
