/* In re Typhoon Nepartak — typewriter routing line + wax seal button */
(function () {
  "use strict";

  // Typewriter the routing line once it scrolls into view.
  var line = document.getElementById("routing");
  if (line) {
    var full = line.textContent;
    line.textContent = "";
    var done = false;

    function type() {
      if (done) return;
      done = true;
      var i = 0;
      var caret = document.createElement("span");
      caret.className = "caret";
      line.appendChild(caret);
      (function step() {
        if (i >= full.length) {
          setTimeout(function () { caret.remove(); }, 1400);
          return;
        }
        caret.before(document.createTextNode(full.charAt(i)));
        i++;
        var ch = full.charAt(i - 1);
        var delay = ch === "·" ? 220 : ch === "—" ? 160 : 24 + Math.random() * 40;
        setTimeout(step, delay);
      })();
    }

    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            type();
            io.disconnect();
          }
        });
      }, { threshold: 0.4 });
      io.observe(line);
    } else {
      type();
    }
  }

  // Wax seal: stamp once, then the minute counter advances like the record.
  var wax = document.getElementById("wax");
  var minute = document.getElementById("minute");
  if (wax && minute) {
    var base = 214;
    var t = null;
    wax.addEventListener("click", function () {
      wax.classList.toggle("stamped");
      if (wax.classList.contains("stamped")) {
        var word = wax.querySelector("#wax-word");
        if (word) word.textContent = "RECORD SEALED";
        clearInterval(t);
        t = setInterval(function () {
          base += 1;
          minute.textContent = "minute " + base + " · R. S. initials the record";
          if (base >= 221) clearInterval(t);
        }, 450);
      } else {
        var word2 = wax.querySelector("#wax-word");
        if (word2) word2.textContent = "SEAL THE EXCERPT";
        clearInterval(t);
        base = 214;
        minute.textContent = "minute 214 · R. S. initials the record";
      }
    });
  }
})();
