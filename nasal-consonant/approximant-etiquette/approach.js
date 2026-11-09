/* Plate I — the stricture marker eases to the approximant's place. */
(function () {
  var marker = document.getElementById("stricture-marker");
  var readout = document.getElementById("stricture-readout");
  if (!marker || !readout) return;

  var target = 42; // within the approximant band, between vowel and fricative

  function place() {
    marker.style.left = target + "%";
    readout.textContent = "The class holds at low stricture; the distance is kept.";
  }

  if ("requestAnimationFrame" in window) {
    requestAnimationFrame(function () {
      setTimeout(place, 300);
    });
  } else {
    place();
  }
})();
