// Museum Placard No. 1603 — timeline of the life and reign
(function () {
  "use strict";

  var slider = document.getElementById("tl-slider");
  if (!slider) return;

  var items = Array.prototype.slice.call(
    document.querySelectorAll("#tl-events li")
  );
  var events = items
    .map(function (li) {
      return { year: parseInt(li.dataset.year, 10), text: li.textContent.replace(/^\s+|\s+$/g, "") };
    })
    .sort(function (a, b) { return a.year - b.year; });

  var yearEl = document.getElementById("tl-year");
  var eraEl = document.getElementById("tl-era");
  var eventEl = document.getElementById("tl-event");

  function eraFor(year) {
    if (year < 1558) return "Before the crown · daughter and suspect";
    if (year < 1587) return "The ascent · 1558–1587";
    return "The Armada and after · 1588–1603";
  }

  function render(year) {
    yearEl.textContent = year;
    eraEl.textContent = eraFor(year);
    var current = events[0];
    for (var i = 0; i < events.length; i++) {
      if (events[i].year <= year) current = events[i];
    }
    eventEl.textContent = current.text;
    for (var j = 0; j < items.length; j++) {
      items[j].classList.toggle(
        "active",
        events[j].year === current.year &&
        parseInt(items[j].dataset.year, 10) === current.year &&
        items[j].textContent.replace(/^\s+|\s+$/g, "") === current.text
      );
    }
  }

  slider.addEventListener("input", function () {
    render(parseInt(slider.value, 10));
  });

  items.forEach(function (li) {
    li.addEventListener("click", function () {
      var year = parseInt(li.dataset.year, 10);
      slider.value = year;
      render(year);
    });
  });

  render(1533);
})();
