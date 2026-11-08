// Case 14: the placard keeps a small, polite discharge going.
(function () {
  var volts = document.getElementById("volts");
  var bolt = document.querySelector(".bolt");
  if (!volts) return;

  function jolt() {
    volts.classList.add("flash");
    if (bolt) bolt.classList.add("jolt");
    // the number flickers once, the way the frog flinched in 1775
    volts.textContent = volts.textContent.replace(/^[0-9]+$/, function (n) {
      return String(Math.min(860, Math.max(1, parseInt(n, 10) + (Math.random() < 0.5 ? 1 : -1) * 3)));
    });
    setTimeout(function () {
      volts.classList.remove("flash");
      if (bolt) bolt.classList.remove("jolt");
    }, 140);
    setTimeout(function () { volts.textContent = "860"; }, 900);
  }

  setInterval(jolt, 6000 + Math.random() * 3000);
})();
