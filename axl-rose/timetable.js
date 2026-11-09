/* The Appetite Limited — a little departure-board clock for the platform office */
(function () {
  "use strict";

  var footer = document.querySelector(".foot p");
  if (!footer) return;

  // The office clock: the service is in force from 6 Feb 1962 and is still
  // standing down at Los Angeles, so the board shows the hours of service.
  var start = new Date(1962, 1, 6, 6, 0, 0).getTime();
  var span = document.createElement("span");
  span.className = "dot";
  span.setAttribute("aria-hidden", "true");
  span.textContent = "\u25C6";

  var clock = document.createElement("span");
  clock.style.marginLeft = "0.6em";

  function pad(n) { return (n < 10 ? "0" : "") + n; }

  function tick() {
    var ms = Date.now() - start;
    var days = Math.floor(ms / 86400000);
    var h = Math.floor(ms / 3600000) % 24;
    var m = Math.floor(ms / 60000) % 60;
    var s = Math.floor(ms / 1000) % 60;
    clock.textContent = "in service " + days.toLocaleString("en-US") +
      " days, " + pad(h) + ":" + pad(m) + ":" + pad(s) + " local";
  }

  tick();
  footer.insertBefore(clock, footer.lastChild);
  footer.insertBefore(span, clock);
  setInterval(tick, 1000);

  // Highlight each station row in turn, as if the train were still running.
  var rows = Array.prototype.slice.call(document.querySelectorAll(".tt tbody tr"));
  if (!rows.length) return;
  var i = 0;
  setInterval(function () {
    rows.forEach(function (r) { r.classList.remove("live"); });
    rows[i % rows.length].classList.add("live");
    i += 1;
  }, 3000);
})();
