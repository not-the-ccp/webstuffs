// The Ntwaagae kitchen — tick ingredients off as the pot goes.
document.addEventListener("DOMContentLoaded", function () {
  var items = document.querySelectorAll("#ingredients li");
  var tally = document.getElementById("tally");
  items.forEach(function (li) {
    li.addEventListener("click", function () {
      li.classList.toggle("done");
      var done = document.querySelectorAll("#ingredients li.done").length;
      if (tally) tally.textContent = "12 − " + (items.length - done) + " to buy";
    });
  });
});
