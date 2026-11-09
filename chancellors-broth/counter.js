/* Card No. 42 — visitor counter: the pot counts its own visitors */
(function () {
  "use strict";
  var BASE = 1337;
  var pad = 5;

  function readLocal() {
    try {
      var v = parseInt(window.localStorage.getItem("card42"), 10);
      return isNaN(v) ? BASE : v;
    } catch (e) {
      return BASE;
    }
  }

  function count() {
    var n = readLocal() + 1;
    try { window.localStorage.setItem("card42", String(n)); } catch (e) { /* the ledger forgives */ }
    return n;
  }

  function render(n) {
    var s = String(n);
    while (s.length < pad) s = "0" + s;
    for (var i = 0; i < pad; i++) {
      var el = document.getElementById("d" + i);
      if (el) el.textContent = s.charAt(i);
    }
  }

  if (document.getElementById("d0")) {
    render(count());
  }
})();
