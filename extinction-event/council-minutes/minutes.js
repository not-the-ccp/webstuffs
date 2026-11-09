/* Minutes No. 231 — the tide bell counts down, and the resolutions get their seals. */
(function () {
  "use strict";

  /* The tide bell rings at 19:11. Count the minutes and seconds until the next one. */
  var bell = document.getElementById("bell-count");
  function toBell() {
    if (!bell) return;
    var now = new Date();
    var next = new Date(now);
    next.setHours(19, 11, 0, 0);
    if (next <= now) next.setDate(next.getDate() + 1);
    var ms = next - now;
    var m = Math.floor(ms / 60000);
    var s = Math.floor((ms % 60000) / 1000);
    if (ms < 90 * 1000) {
      bell.textContent = "the tide bell rings in " + s + " seconds — the kitchen light is going red";
    } else {
      bell.textContent = "the tide bell rings in " + m + " minutes " + (s < 10 ? "0" : "") + s + " seconds";
    }
  }
  toBell();
  setInterval(toBell, 1000);

  /* Each resolution is sealed the moment it enters the light. */
  var resolutions = document.querySelectorAll(".resolution");
  if ("IntersectionObserver" in window) {
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("seen");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });
    resolutions.forEach(function (r) { obs.observe(r); });
  } else {
    resolutions.forEach(function (r) { r.classList.add("seen"); });
  }
})();
