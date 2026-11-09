/* Council of the Sound Booth — listener counter for Minutes No. 14 */
(function () {
  var digits = document.getElementById("counter-digits");
  var sitdate = document.getElementById("sitdate");
  if (digits) {
    var seed = 31; // signatures since 28 August
    for (var i = 0; i < 4; i++) seed = (seed * 31 + 17) % 1000000;
    digits.textContent = String(100000 + (seed % 900000)).slice(1, 7).padStart(6, "0");
  }
  if (sitdate) {
    sitdate.textContent = new Date().toDateString();
  }
})();
