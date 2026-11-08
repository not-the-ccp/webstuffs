/* The Bostock Mail — platform board effects */
(function () {
  "use strict";

  var clock = document.getElementById("platform-clock");
  if (clock) {
    var base = clock.textContent;
    var on = true;
    setInterval(function () {
      on = !on;
      clock.style.opacity = on ? "1" : "0.55";
    }, 2200);
  }

  /* Flap-style status ticks: each status cell re-stacks every few seconds,
     like the lettered flaps of an old departure board. */
  var statuses = Array.prototype.slice.call(
    document.querySelectorAll("td[data-status]")
  );
  statuses.forEach(function (cell, i) {
    var text = cell.textContent;
    setInterval(function () {
      cell.style.transition = "none";
      cell.style.transform = "translateY(-3px)";
      cell.style.opacity = "0.35";
      setTimeout(function () {
        cell.style.transition = "transform 0.35s ease, opacity 0.35s ease";
        cell.style.transform = "none";
        cell.style.opacity = "1";
      }, 180);
    }, 5200 + i * 900);
  });

  /* Row-by-row reveal on scroll, so the whole board runs past in order. */
  if ("IntersectionObserver" in window) {
    var rows = Array.prototype.slice.call(
      document.querySelectorAll(".timetable tbody tr")
    );
    rows.forEach(function (r) { r.classList.add("pre-reveal"); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.remove("pre-reveal");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.4 });
    rows.forEach(function (r) { io.observe(r); });
  }

  /* Hover a row: the row's departure time lights up like a platform lamp. */
  var table = document.querySelector(".timetable");
  if (table) {
    table.addEventListener("mouseover", function (ev) {
      var row = ev.target.closest ? ev.target.closest("tr") : null;
      if (row) row.setAttribute("data-lit", "true");
    });
    table.addEventListener("mouseout", function (ev) {
      var row = ev.target.closest ? ev.target.closest("tr") : null;
      if (row) row.removeAttribute("data-lit");
    });
  }
})();
