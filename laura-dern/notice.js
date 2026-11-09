/* Hall C concession desk — a small light for the claim number. */
(function () {
  var stamp = document.querySelector(".claim-stamp");
  if (!stamp) return;
  var lit = true;
  setInterval(function () {
    lit = !lit;
    stamp.style.opacity = lit ? "0.9" : "0.65";
  }, 2400);
})();
