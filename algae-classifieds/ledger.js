/* The Pontic Ledger — small counter and stamp */
(function () {
  var ads = document.querySelectorAll(".ad");
  var count = document.getElementById("noticeCount");
  if (count) {
    count.textContent = "This week: " + ads.length + " notices posted";
  }
  var stamp = document.getElementById("stamp");
  if (stamp) {
    stamp.style.cursor = "pointer";
    stamp.addEventListener("click", function () {
      stamp.classList.toggle("paid");
    });
  }
})();
