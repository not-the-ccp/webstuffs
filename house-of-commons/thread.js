/* Thread 88 — the reads counter keeps moving, the way the tide does */
document.addEventListener('DOMContentLoaded', function () {
  var visit = document.getElementById('last-visit');
  if (visit) {
    var d = new Date();
    visit.textContent = 'your last visit: ' + d.toDateString() + ' ' + d.toTimeString().slice(0, 8);
  }
  var reads = document.getElementById('reads');
  if (reads) {
    var n = 3412;
    setInterval(function () {
      n += 1;
      reads.textContent = n.toLocaleString('en-GB');
    }, 9000);
  }
});
