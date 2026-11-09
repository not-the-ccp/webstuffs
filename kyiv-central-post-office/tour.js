// Itinerary ticket: marks the current stop and counts stops walked.
(function () {
  var items = Array.prototype.slice.call(document.querySelectorAll("#stop-list li"));
  var stops = Array.prototype.slice.call(document.querySelectorAll(".stop"));
  var walked = document.getElementById("walked");

  if (!items.length || !stops.length) return;

  function setIndex(i) {
    items.forEach(function (li, j) {
      li.classList.toggle("current", j === i);
    });
    if (walked) walked.textContent = String(Math.max(0, i));
  }

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var n = stops.indexOf(entry.target);
          if (n !== -1) setIndex(n + 1);
        }
      });
    }, { rootMargin: "-40% 0px -40% 0px" });
    stops.forEach(function (s) { io.observe(s); });
  } else {
    setIndex(1);
  }
})();
