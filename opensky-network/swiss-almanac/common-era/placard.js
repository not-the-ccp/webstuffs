// Helvetic Station, Chronology Room — the on-loan stamp, pressed on the hour
(function () {
  var stamp = document.getElementById("loan-stamp");
  if (!stamp) return;
  function press() {
    stamp.classList.remove("shown");
    // reflow so the transition replays
    void stamp.offsetWidth;
    stamp.classList.add("shown");
  }
  // press shortly after the placard is read, then once an hour on the hour
  window.addEventListener("load", function () {
    setTimeout(press, 400);
    setInterval(function () {
      var now = new Date();
      if (now.getMinutes() === 0 && now.getSeconds() < 3) press();
    }, 1000);
  });
})();
