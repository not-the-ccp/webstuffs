// Counter clock for Notice No. 117/418: days the item has sat unclaimed.
(function () {
  var clock = document.getElementById("unclaimed");
  if (!clock) return;

  // The notice was opened on 9 November, the day of the hammer.
  function foundDate() {
    var now = new Date();
    var d = new Date(now.getFullYear(), 10, 9);
    if (d > now) d = new Date(now.getFullYear() - 1, 10, 9);
    return d;
  }

  function tick() {
    var days = Math.floor((new Date() - foundDate()) / 86400000);
    if (days < 0) days = 0;
    var weeksLeft = Math.max(0, 6 - Math.ceil(days / 7));
    clock.textContent = days + (days === 1 ? " day" : " days")
      + " on the counter, "
      + weeksLeft + (weeksLeft === 1 ? " week" : " weeks")
      + " to the Minority Shelf";
  }

  tick();
  setInterval(tick, 60000);

  var stamp = document.getElementById("stamp");
  if (stamp) {
    stamp.addEventListener("click", function () {
      stamp.classList.add("pressed");
      setTimeout(function () { stamp.classList.remove("pressed"); }, 180);
    });
  }
})();
