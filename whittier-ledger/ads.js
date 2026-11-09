/* The Whittier Evening Ledger — stamp the ads */
(function () {
  var ads = document.querySelectorAll(".ad");
  ads.forEach(function (ad) {
    var stamp = document.createElement("span");
    stamp.className = "stamp";
    stamp.textContent = "HOLD";
    ad.appendChild(stamp);
    ad.addEventListener("click", function (e) {
      if (e.target.closest("a")) return; // never stamp a link
      ad.classList.toggle("held");
    });
  });
})();
