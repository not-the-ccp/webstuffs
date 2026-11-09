/* The cove dial: walks the azimuths noted in the field book. */
(function () {
  var dial = document.getElementById("dial");
  var needle = document.getElementById("needle");
  if (!dial || !needle) return;

  var sites = [
    { label: "solstice line through the notch", deg: 297 },
    { label: "the relay dish on its mount", deg: 297 },
    { label: "the cairn, from the sand bar", deg: 122 },
    { label: "Puerto Rico, over the bank", deg: 74 }
  ];
  var i = 0;
  var key = dial.querySelector(".dial-key");

  function pointAt(site) {
    // compass bearing: 0 deg = north = up
    needle.style.transform = "translate(-50%, 0) rotate(" + site.deg + "deg)";
    if (key) key.textContent = sites[i].deg + "\u00b0 \u2014 " + sites[i].label +
      " (the two 297\u00b0s agree, as noted). Click to walk the next.";
  }

  dial.addEventListener("click", function () {
    i = (i + 1) % sites.length;
    pointAt(sites[i]);
  });
})();
