/* Yellow Fleet Line — platform clock, boarding signal, announcer */
(function () {
  "use strict";

  // Platform clock
  var clock = document.getElementById("clock");
  if (clock) {
    var tick = function () {
      var d = new Date();
      var p = function (n) { return (n < 10 ? "0" : "") + n; };
      clock.textContent = p(d.getHours()) + ":" + p(d.getMinutes()) + ":" + p(d.getSeconds());
    };
    tick();
    setInterval(tick, 1000);
  }

  // Boarding signal: highlight the row currently under the reader
  var rows = Array.prototype.slice.call(document.querySelectorAll("tbody tr[id^='stop-']"));
  if (rows.length && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          rows.forEach(function (r) { r.classList.remove("at"); });
          e.target.classList.add("at");
          var no = e.target.querySelector("td.no");
          var label = document.getElementById("clock-label");
          if (no && label && no.textContent.trim() !== "—") {
            label.textContent = "now boarding stop " + no.textContent.trim();
          }
        }
      });
    }, { threshold: 0.55 });
    rows.forEach(function (r) { io.observe(r); });
  }

  // Announcer line: typewriter, once, on first view
  var ann = document.getElementById("ann-line");
  if (ann) {
    var full = ann.textContent;
    ann.textContent = "";
    var start = function () {
      var i = 0;
      var t = setInterval(function () {
        i += 2;
        ann.textContent = full.slice(0, i);
        if (i >= full.length) clearInterval(t);
      }, 24);
    };
    if ("IntersectionObserver" in window) {
      var seen = false;
      var o2 = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting && !seen) { seen = true; start(); o2.disconnect(); }
        });
      }, { threshold: 0.4 });
      o2.observe(ann);
    } else {
      ann.textContent = full;
    }
  }
})();
