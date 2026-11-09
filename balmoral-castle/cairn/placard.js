(function () {
  var button = document.getElementById("readButton");
  var stamp = document.getElementById("stamp");
  var clock = document.getElementById("stampClock");
  if (!button || !stamp || !clock) return;

  button.addEventListener("click", function () {
    stamp.hidden = !stamp.hidden;
    if (!stamp.hidden) {
      clock.textContent = "entered at " + new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    } else {
      clock.textContent = "";
    }
  });
})();
