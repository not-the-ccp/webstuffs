// Studio lamp: lit while the page is visible and near the top of the script,
// dimmed at the foot of the sheet, as the broadcast ends.
(function () {
  var lamp = document.getElementById("lamp");
  if (!lamp) return;

  function update() {
    var atEnd =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 120;
    if (document.hidden || atEnd) {
      lamp.classList.remove("lit");
    } else {
      lamp.classList.add("lit");
    }
  }

  window.addEventListener("scroll", update, { passive: true });
  document.addEventListener("visibilitychange", update);
  update();
})();
