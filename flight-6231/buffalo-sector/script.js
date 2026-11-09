(function () {
  var form = document.getElementById('crew-drill');
  var input = document.getElementById('crew-input');
  var out = document.getElementById('drill-out');
  var button = form.querySelector('button');

  button.addEventListener('click', function () {
    var count = Number(input.value);
    if (count === 3) {
      out.className = 'accepted';
      out.textContent = 'Report accepted. Flight 6231 carried three crew: Captain Harold D. Prentiss of Minneapolis, First Officer Samuel K. Okafor of New Rochelle, and Flight Engineer Miriam T. Delgado of Cleveland. Position run to Buffalo International, 1 December 1974; none reached the gate.';
    } else {
      out.className = 'rejected';
      out.textContent = 'Report rejected. Crew count logged: ' + count + '. Recheck the manifest \u2014 Flight 6231 carried three \u2014 and retransmit.';
    }
  });
})();
