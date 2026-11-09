/* Lot 73 — The Oshodi Sale No. 44: counter, ticker, guestbook. */

(function () {
  // Visitor counter: starts where the first printing left off.
  var counterEl = document.getElementById('counter');
  if (counterEl) {
    var n = 104213 + (new Date().getDate() * 7);
    counterEl.textContent = String(n).padStart(6, '0');
  }

  // Ticker: duplicate the text so the -50% loop is seamless.
  var tickerEl = document.getElementById('tickerText');
  if (tickerEl) {
    tickerEl.textContent += tickerEl.textContent;
  }

  // Guestbook: a counter-side signature, no receipt, in the second ink.
  var btn = document.getElementById('gbSign');
  if (btn) {
    btn.addEventListener('click', function () {
      var name = document.getElementById('gb-name').value || 'anonymous bidder';
      var msg = document.getElementById('gbMsg');
      msg.textContent = 'Signed by ' + name + ' — entered in the second-ink column. Thank you.';
      setTimeout(function () { msg.textContent = ''; }, 6000);
    });
  }
})();
