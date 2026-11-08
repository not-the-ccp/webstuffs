// The seal strikes on load; the certified line lands a moment later.
document.addEventListener("DOMContentLoaded", function () {
  var seal = document.querySelector(".seal");
  var stamp = document.querySelector(".stampline");
  if (seal) seal.classList.add("struck");
  if (stamp) {
    // let the ruling be read before the record is certified
    window.setTimeout(function () { stamp.classList.add("struck"); }, 600);
  }
});
