// The Observer's Almanac — Berlin Station
// A little clockwork for the visitor counter and the guest book.
// The page reads fine without it; the weather is not changed by script.

(function () {
  var el = document.getElementById("counter");
  if (el) {
    var base = 1337;
    try {
      var stored = parseInt(window.localStorage.getItem("almanac-217") || "0", 10);
      if (isNaN(stored)) stored = 0;
      stored += 1;
      window.localStorage.setItem("almanac-217", String(stored));
      base += stored;
    } catch (e) {
      base += 1;
    }
    el.textContent = String(base).replace(/^(\d+)$/, function (m, d) {
      while (d.length < 6) d = "0" + d;
      return d;
    });
  }

  var form = document.querySelector(".guestbook form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.elements["name"].value || "Unknown";
      var obs = form.elements["obs"].value || "The sky was as it was.";
      var line = document.createElement("p");
      line.className = "guestline";
      line.innerHTML = "<em>" + name + ", at this station:</em> &ldquo;" + obs + "&rdquo;";
      form.parentNode.insertBefore(line, form);
      form.reset();
      return false;
    });
  }
})();
