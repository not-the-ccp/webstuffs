// The gavel goes: count the bids out of the hall and drop the SOLD stamp.
(function () {
  var count = 7;
  var done = false;
  var bidEl = document.getElementById("bid-count");
  var gavel = document.getElementById("gavel");
  var stamp = document.getElementById("sold-stamp");
  if (!gavel) return;

  gavel.addEventListener("click", function () {
    if (!done) {
      done = true;
      var n = 0;
      var timer = setInterval(function () {
        n += 1;
        if (bidEl) bidEl.textContent = String(n).padStart(3, "0");
        if (n >= 41) {
          clearInterval(timer);
          if (stamp) stamp.hidden = false;
        }
      }, 34);
      gavel.textContent = "at the estimate";
      gavel.disabled = true;
    }
  });
})();
