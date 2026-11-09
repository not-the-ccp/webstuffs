/* New Rome, the Fifth Bell — mark a stop walked as you pass it */
(function () {
  var stops = Array.prototype.slice.call(document.querySelectorAll(".stop"));
  var count = document.getElementById("walked-count");
  if (!count) return;

  function render() {
    var n = stops.filter(function (s) { return s.classList.contains("walked"); }).length;
    count.textContent =
      n === 0
        ? "no stops walked yet"
        : n + " of " + stops.length + " stops walked";
  }

  stops.forEach(function (stop, i) {
    stop.querySelector(".stop-no").addEventListener("click", function () {
      stop.classList.toggle("walked");
      if (stop.classList.contains("walked") && count) {
        var next = stops[i + 1];
        if (next) next.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
      render();
    });
  });

  render();
})();
