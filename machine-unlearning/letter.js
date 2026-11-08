/* The Marginal — a quiet red pen: a few phrases get struck out as you read,
   and a thin progress line tracks how much of the letter remains. */
(function () {
  "use strict";

  // Phrases the stewardship officer "has already struck out", in order of appearance.
  var STRIKE_TARGETS = [
    "as though the house had simply never been on its route",
    "the machine was asked, by the same logic that taught it the tour",
    "compares to a cat in the boiler room"
  ];

  // Only strike a phrase if it appears verbatim in the letter's paragraphs.
  STRIKE_TARGETS.forEach(function (phrase, i) {
    var paras = document.querySelectorAll(".letter p");
    for (var p = 0; p < paras.length; p++) {
      var node = nodeContaining(paras[p], phrase);
      if (node) {
        strike(node, i * 260);
        break;
      }
    }
  });

  function nodeContaining(root, text) {
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    while (walker.nextNode()) {
      var n = walker.currentNode;
      var at = n.nodeValue.indexOf(text);
      if (at !== -1) return splitAt(n, at, at + text.length);
    }
    return null;
  }

  function splitAt(node, start, end) {
    var a = node.splitText(start);
    var b = a.splitText(end - start);
    return a;
  }

  function strike(target, delay) {
    var mark = document.createElement("span");
    mark.className = "redacted";
    target.replaceWith(mark);
    mark.style.animationDelay = (delay / 1000) + "s";
  }

  // Reading progress — the top of the page, in red ink.
  var bar = document.createElement("div");
  bar.setAttribute("aria-hidden", "true");
  bar.style.cssText =
    "position:fixed;top:0;left:0;height:3px;width:0%;z-index:99;" +
    "background:linear-gradient(90deg,#a4322a,#7c211b);transition:width .15s linear;";
  document.body.appendChild(bar);

  var letter = document.querySelector(".letter");
  function update() {
    var rect = letter.getBoundingClientRect();
    var vh = window.innerHeight;
    var total = rect.height - vh;
    var done = Math.min(Math.max(-rect.top, 0), total > 0 ? total : 1);
    bar.style.width = (total > 0 ? (done / total) * 100 : 100) + "%";
  }
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
})();
