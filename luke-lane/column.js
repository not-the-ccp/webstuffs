// The Small Ads Column — a stamp that can be struck.
(function () {
  var stamp = document.getElementById("stamp");
  if (!stamp) return;

  var strikes = 0;
  var messages = [
    "CENTRAL DIVISION — ON FILE",
    "FILED 11 NOV. 1931",
    "LANE 4473 — CONFIRMED",
    "HYNES SAYS: KEEP IT DRY"
  ];

  stamp.addEventListener("click", function () {
    strikes += 1;
    stamp.textContent = messages[strikes % messages.length];
    stamp.style.transform = "rotate(" + (-4 + (Math.random() * 8 - 4)).toFixed(1) + "deg)";
  });
})();
