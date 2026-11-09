/* Lot 48 — Hynes & Lane, Auctioneers: the hammer, the dust, the count. */
(function () {
  "use strict";

  /* --- dust in the lamplight --- */
  var dust = document.getElementById("dust");
  if (dust) {
    for (var i = 0; i < 26; i++) {
      var s = document.createElement("span");
      s.style.left = (Math.random() * 100) + "vw";
      s.style.animationDuration = (9 + Math.random() * 14) + "s";
      s.style.animationDelay = (-Math.random() * 20) + "s";
      s.style.opacity = String(0.25 + Math.random() * 0.5);
      var sz = (2 + Math.random() * 3).toFixed(1);
      s.style.width = sz + "px";
      s.style.height = sz + "px";
      dust.appendChild(s);
    }
  }

  /* --- the hammer count, ticking up to $5,120 on arrival --- */
  var priceEl = document.getElementById("hammer-price");
  var HAMMER = 5120;
  var counted = false;

  function fmt(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function countUp() {
    if (counted) return;
    counted = true;
    var start = 2400;
    var t0 = null;
    var DURATION = 2600;
    function step(ts) {
      if (!t0) t0 = ts;
      var p = Math.min((ts - t0) / DURATION, 1);
      p = 1 - Math.pow(1 - p, 3); /* ease out */
      var v = Math.round(start + (HAMMER - start) * p);
      priceEl.textContent = fmt(v);
      if (p < 1) requestAnimationFrame(step);
      else priceEl.textContent = fmt(HAMMER);
    }
    requestAnimationFrame(step);
  }

  if (priceEl) {
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            countUp();
            io.disconnect();
          }
        });
      }, { threshold: 0.4 });
      io.observe(priceEl);
    } else {
      countUp();
    }
  }

  /* --- strike the gavel --- */
  var btn = document.getElementById("gavel-hit");
  var stamp = document.getElementById("sold-stamp");
  var word = document.getElementById("stamp-word");
  var sheet = document.querySelector(".catalogue");
  var sold = false;

  function strike() {
    btn.classList.remove("rung");
    void btn.offsetWidth;
    btn.classList.add("rung");
    if (sheet) {
      sheet.classList.remove("shake");
      void sheet.offsetWidth;
      sheet.classList.add("shake");
    }
    if (!sold && word) {
      word.textContent = "SOLD — $5,120 — THE WOOD IS STILL WEEPING";
      sold = true;
    }
    if (stamp) {
      stamp.classList.remove("sold");
      void stamp.offsetWidth;
      stamp.classList.add("sold");
    }
  }

  if (btn) btn.addEventListener("click", strike);
  if (stamp) stamp.addEventListener("click", strike);

  /* --- the lot number, woken by the door --- */
  var lot = document.getElementById("lot-number");
  if (lot) {
    [document.body, btn, stamp].forEach(function (el) {
      if (!el) return;
      el.addEventListener("mouseenter", function () {
        lot.classList.remove("wiggle");
        void lot.offsetWidth;
        lot.classList.add("wiggle");
      }, { once: true });
    });
  }
})();
