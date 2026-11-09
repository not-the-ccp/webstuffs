// The Rub — spin the record
(function () {
  var disc = document.getElementById("disc");
  var button = document.getElementById("spin");
  if (!disc || !button) return;
  button.addEventListener("click", function () {
    var spinning = disc.classList.toggle("spinning");
    button.textContent = spinning ? "Lift the needle" : "Spin the record";
  });
})();
