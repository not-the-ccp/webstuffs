/* The 4077th Field Gazette — No. 72: small effects for the obituary sheet */

(function () {
  "use strict";

  // Halftone dots along the masthead band
  var dots = document.getElementById("dots");
  if (dots) {
    var frag = document.createDocumentFragment();
    for (var i = 0; i < 40; i++) {
      var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      c.setAttribute("cx", 3 + i * 5);
      c.setAttribute("cy", 10);
      c.setAttribute("r", i % 3 === 0 ? 2.6 : 1.6);
      frag.appendChild(c);
    }
    dots.appendChild(frag);
  }

  // The letter count, ticking up like the mail clerk's tally
  var count = document.getElementById("letter-count");
  if (count) {
    var target = parseInt(count.getAttribute("data-target"), 10) || 0;
    var start = null;
    var dur = 1800;
    function tick(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      count.textContent = Math.round(target * eased).toLocaleString("en-US");
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  // The obituary name, struck in like it was set by hand
  var name = document.getElementById("obit-name");
  if (name) {
    var text = name.textContent;
    name.textContent = "";
    var i = 0;
    var t = setInterval(function () {
      name.textContent = text.slice(0, ++i);
      if (i >= text.length) clearInterval(t);
    }, 70);
  }

  // A slow "coffee ring" that follows the reader once, gently
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }
  var ring = document.createElement("div");
  ring.style.cssText =
    "position:fixed;border:2px solid rgba(110,31,31,0.35);border-radius:50%;" +
    "width:70px;height:70px;pointer-events:none;transform:translate(-50%,-50%);" +
    "transition:opacity .6s;z-index:4;opacity:0;";
  document.body.appendChild(ring);
  var last = 0;
  document.addEventListener("mousemove", function (e) {
    var now = Date.now();
    if (now - last < 90) return;
    last = now;
    ring.style.left = e.clientX + "px";
    ring.style.top = e.clientY + "px";
    ring.style.opacity = "1";
    ring.style.transform = "translate(-50%,-50%) scale(1)";
    ring.style.transition = "transform .45s ease-out, opacity .6s";
    setTimeout(function () {
      ring.style.transform = "translate(-50%,-50%) scale(1.25)";
      ring.style.opacity = "0";
    }, 120);
  });
})();
