(function () {
  'use strict';

  var btn = document.getElementById('bidBtn');
  var output = document.getElementById('currentBid');
  var reserve = 3500;
  var increment = 250;
  var bid = 0;

  if (!btn || !output) return;

  btn.addEventListener('click', function () {
    bid += increment;
    output.textContent =
      'Current bid: $' + bid.toLocaleString() +
      ' \u00b7 ' + (bid >= reserve ? 'reserve met' : 'reserve not met');
    btn.textContent =
      bid >= reserve
        ? 'Reserve met \u2014 place bid \u2014 $' + (bid + increment)
        : 'Place bid \u2014 $' + (bid + increment);
  });
})();
