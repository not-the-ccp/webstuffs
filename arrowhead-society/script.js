// The Arrowhead Society — No. 9
// VU meters that breathe, an ON AIR lamp that flickers on arrival,
// and the P305 fragment, typed out as if it were coming down the wire.

(function () {
  "use strict";

  // The stylesheet paints each bar's fill from the --lvl custom property.
  var dyn = document.createElement("style");
  dyn.textContent = ".vu span::after { height: var(--lvl, 20%); }";
  document.head.appendChild(dyn);

  // VU meters: each bar eases toward a random level, like a slow signal.
  var meters = document.querySelectorAll(".vu span");
  function breathe() {
    meters.forEach(function (bar) {
      bar.style.setProperty("--lvl", (15 + Math.random() * 78) + "%");
    });
  }
  breathe();
  setInterval(breathe, 900);

  // ON AIR lamp: a quick double-flicker when the page settles.
  var onair = document.getElementById("onair");
  if (onair) {
    var flickStyle = document.createElement("style");
    flickStyle.textContent = ".onair.flicker .lamp { opacity: 0.25; animation: none; }";
    document.head.appendChild(flickStyle);
    setTimeout(function () {
      onair.classList.add("flicker");
      setTimeout(function () { onair.classList.remove("flicker"); }, 420);
      setTimeout(function () {
        onair.classList.add("flicker");
        setTimeout(function () { onair.classList.remove("flicker"); }, 200);
      }, 620);
    }, 400);
  }

  // P305 fragment: typed out slowly, once.
  var frag = document.getElementById("fragment");
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (frag && !reduced) {
    var full = frag.textContent;
    frag.textContent = "";
    var i = 0;
    var timer = setInterval(function () {
      frag.textContent = full.slice(0, ++i);
      if (i >= full.length) clearInterval(timer);
    }, 34);
    // Never leave the line half-typed, whatever happens.
    setTimeout(function () { frag.textContent = full; }, full.length * 34 + 4000);
  }
})();
