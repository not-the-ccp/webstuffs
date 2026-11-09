/* The Prairie Forum — thread #4127
   Falling maple leaves, a read counter, and a pin stamp on the thread title. */

(function () {
  "use strict";

  // ---- falling maple leaves ------------------------------------------------
  var field = document.getElementById("leaves");
  if (!field) return;

  var LEAF =
    '<svg width="22" height="22" viewBox="0 0 64 64">' +
    '<path d="M32 4 L36 18 L50 12 L42 26 L58 24 L44 34 L56 42 L40 40 L44 56 L32 44 L20 56 L24 40 L8 42 L20 34 L6 24 L22 26 L14 12 L28 18 Z" ' +
    'fill="currentColor" stroke="none"/>' +
    '<line x1="32" y1="44" x2="32" y2="60" stroke="currentColor" stroke-width="3"/>' +
    "</svg>";

  var TINTS = ["#b22234", "#c9872f", "#e8c97a", "#8a1c28"];

  function spawnLeaf() {
    var leaf = document.createElement("div");
    leaf.className = "leaf";
    leaf.innerHTML = LEAF;
    var size = 12 + Math.random() * 18;
    leaf.style.left = Math.random() * 100 + "vw";
    leaf.style.width = size + "px";
    leaf.style.height = size + "px";
    leaf.style.color = TINTS[Math.floor(Math.random() * TINTS.length)];
    leaf.style.setProperty("--sway", (Math.random() * 160 - 80) + "px");
    leaf.style.setProperty("--spin", (180 + Math.random() * 420) + "deg");
    var dur = 7 + Math.random() * 9;
    leaf.style.animationDuration = dur + "s";
    field.appendChild(leaf);
    setTimeout(function () {
      if (leaf.parentNode) leaf.parentNode.removeChild(leaf);
    }, dur * 1000 + 500);
  }

  var reduced = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduced) {
    for (var i = 0; i < 6; i++) setTimeout(spawnLeaf, i * 900);
    setInterval(spawnLeaf, 1700);
  }

  // ---- running read counter -------------------------------------------------
  var sub = document.querySelector(".thread-sub");
  if (sub) {
    var base = 14203;
    var n = base;
    var node = document.createElement("strong");
    node.style.color = "#e8c97a";
    node.textContent = n.toLocaleString("en-CA");
    sub.innerHTML = sub.innerHTML.replace(/14,203 reads/, "reads");
    sub.appendChild(node);
    sub.appendChild(document.createTextNode(" reads"));
    setInterval(function () {
      n += Math.floor(Math.random() * 3) + 1;
      node.textContent = n.toLocaleString("en-CA");
    }, 4000);
  }

  // ---- posts lift gently in view -------------------------------------------
  var posts = document.querySelectorAll(".post");
  posts.forEach(function (p, i) {
    p.style.opacity = "0";
    p.style.transform = "translateY(14px)";
    p.style.transition = "opacity .5s ease " + (i * 60) + "ms, transform .5s ease " + (i * 60) + "ms";
    setTimeout(function () {
      p.style.opacity = "1";
      p.style.transform = "none";
    }, 120 + i * 60);
  });
})();
