// The broadcast days: the first course aired over the quay, one ladle per boat.
(function () {
  var btn = document.getElementById("ladleBtn");
  var msg = document.getElementById("ladleMsg");
  if (!btn || !msg) return;

  var ladles = [
    "One ladle to the salt-kiln barge. It is the family, see the broadcast days.",
    "One ladle to the porgy boat, number nine, which never answers back.",
    "One ladle to the fishmongers' line; the queen's table watches, empty.",
    "One ladle to the cage door across the quay, which takes it like a truce.",
    "One ladle to the palace lamps, course by course, until they all go out."
  ];
  var i = 0;

  btn.addEventListener("click", function () {
    msg.textContent = ladles[i % ladles.length];
    i += 1;
  });
})();
