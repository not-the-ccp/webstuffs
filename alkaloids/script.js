/* Alkaloids — Minutes No. 15 · the seal turns the paper */
(function () {
  var seal = document.getElementById("seal");
  if (!seal) return;
  seal.addEventListener("click", function () {
    document.body.classList.toggle("alkaline");
    var stamp = document.getElementById("stamp");
    if (stamp) {
      stamp.style.opacity = "0.9";
      setTimeout(function () { stamp.style.opacity = "0.55"; }, 650);
    }
  });
})();
