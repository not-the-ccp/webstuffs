// The Quiet Practice — flip the record
(function () {
  var btn = document.getElementById("flip-side");
  var disc = document.getElementById("disc");
  if (!btn || !disc) return;

  var side = "A";
  btn.addEventListener("click", function () {
    side = side === "A" ? "B" : "A";
    disc.classList.add("spinning");
    setTimeout(function () { disc.classList.remove("spinning"); }, 4200);
    btn.textContent = "Flip the record \u2014 Side " + side;
  });
})();
