/* The Tichborne Advertiser — a compositor's pass over the column rules */
(function () {
  var ads = document.querySelectorAll(".ad");
  for (var i = 0; i < ads.length; i++) {
    // A hair of skew, as if each column were set by hand and left to stand.
    var skew = ((i * 37) % 7 - 3) * 0.03;
    ads[i].style.transform = "rotate(" + skew + "deg)";
  }

  var stamp = document.getElementById("stamp");
  if (stamp) {
    // The family seal breathes very slowly; the faith is not in a hurry.
    var t = 0;
    setInterval(function () {
      t += 0.02;
      var o = 0.32 + 0.1 * Math.sin(t);
      stamp.style.opacity = o.toFixed(3);
    }, 40);
  }
})();
