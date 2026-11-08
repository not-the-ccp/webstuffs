/* Strike the 1899 commission: one press = one version, 30 000 dinars each. */
(function () {
  var button = document.getElementById("dinar");
  var tally = document.getElementById("tally");
  if (!button || !tally) return;

  var versions = 0;
  var per = 30000;

  button.addEventListener("click", function () {
    versions = (versions % 7) + 1;
    var total = versions * per;
    tally.textContent =
      "Version " + versions + " of seven struck: " +
      total.toLocaleString("en-GB") + " dinars " +
      (versions === 7 ? "— the full commission of 1899, and the Exposition awaits no longer." : "and counting toward the 1899 commission.");
    tally.classList.toggle("struck", versions === 7);
  });
})();
