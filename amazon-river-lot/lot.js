(function () {
  'use strict';

  var input = document.getElementById('bidInput');
  var button = document.getElementById('bidBtn');
  var output = document.getElementById('currentBid');
  var help = document.querySelector('.bid-help');

  var reserve = 95000;
  var premiumRate = 0.20;
  var increment = 1000;
  var current = 0;

  function format(amount) {
    return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }

  function update() {
    var premium = Math.round(current * premiumRate);
    var total = current + premium;
    var status = current >= reserve ? 'reserve met' : 'reserve not met';
    output.textContent =
      'Current bid: ' + format(current) +
      ' · premium: ' + format(premium) +
      ' · total: ' + format(total) +
      ' · ' + status;
    if (current >= reserve) {
      button.disabled = true;
      input.disabled = true;
      output.textContent += ' · selling';
      help.textContent = 'Reserve met. The lot is selling.';
    }
  }

  button.addEventListener('click', function () {
    var value = parseInt(input.value, 10) || 0;
    if (value === 0 || value < current + increment) {
      input.focus();
      return;
    }
    current = value;
    input.value = current;
    update();
  });

  update();
})();
