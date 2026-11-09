/* Entry B-221: the 12:30 bell, struck on the stamp once a minute */
(function () {
  var stamp = document.getElementById("stamp");
  if (!stamp) return;
  // Strike the bell on the 12:30 minute (and any 30), the flat way.
  setInterval(function () {
    var d = new Date();
    if (d.getMinutes() === 30 && d.getSeconds() === 0) {
      stamp.classList.add("belled");
      setTimeout(function () { stamp.classList.remove("belled"); }, 1200);
    }
  }, 1000);
})();
