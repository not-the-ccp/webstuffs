// Small terminal flourish for the Error Reference: a blinking cursor on
// the document number, and a one-line "console echo" that types itself out
// under the masthead. Purely decorative — the page is complete without it.

(function () {
  "use strict";

  var masthead = document.querySelector(".masthead");
  if (!masthead) return;

  var line = document.createElement("p");
  line.className = "console-line mono";
  line.setAttribute("aria-hidden", "true");
  line.style.cssText =
    "font-family:inherit;font-size:0.78rem;margin:1rem 0 0;color:#2f5d3a;" +
    "white-space:pre-wrap;min-height:1.2em;";

  var text = "> WCL-1959/72 loaded. 3 errors, 1 erratum, 0 repeats. _";
  var i = 0;

  var blink = setInterval(function () {
    line.textContent = text.slice(0, i + 1);
    i += 1;
    if (i >= text.length) {
      clearInterval(blink);
      var hold = text;
      var toggle = setInterval(function () {
        line.textContent = (line.textContent === hold
          ? hold
          : hold.slice(0, -1)) ;
      }, 530);
      // keep the caret breathing forever
      var base = text;
      clearInterval(toggle);
      var t = 0;
      setInterval(function () {
        t += 1;
        line.textContent = t % 2 === 0 ? base : base.slice(0, -1);
      }, 530);
    }
  }, 26);

  masthead.appendChild(line);
})();
