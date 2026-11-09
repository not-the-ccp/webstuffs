/* Thread Nº 218 — third-period clock. Runs for the thread's keeping, not the game's. */
(function () {
  var p3 = document.getElementById("p3");
  var ovr = document.getElementById("ovr");
  if (!p3 || !ovr) return;

  var secs = 20 * 60;
  var done = false;

  function fmt(n) {
    var m = Math.floor(n / 60);
    var s = n % 60;
    return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
  }

  setInterval(function () {
    if (done) return;
    if (secs > 0) {
      secs -= 1;
      p3.textContent = "P3 " + fmt(secs);
    } else {
      done = true;
      p3.classList.remove("live");
      p3.classList.add("done");
      p3.textContent = "P3 20:00";
      ovr.textContent = "OT the thread is closed for the night";
      ovr.classList.add("live");
    }
  }, 1000);
})();
