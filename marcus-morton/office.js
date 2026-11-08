/* Brochure No. 42 — office counter and visitor's book */
(function () {
  var base = 1825 + new Date().getDay() * 37;
  var pad = function (n, w) {
    n = String(n);
    while (n.length < w) n = "0" + n;
    return n;
  };

  var counterEl = document.getElementById("counter");
  if (counterEl) {
    var count = base + 407; /* the 1839 margin, in reverse, as a joke */
    var tick = function () {
      count += 1;
      counterEl.textContent = pad(count, 6);
    };
    tick();
    setInterval(tick, 9000);
  }

  var btn = document.getElementById("sign-btn");
  var input = document.getElementById("sign-name");
  var list = document.getElementById("sign-list");
  if (btn && input && list) {
    btn.onclick = function () {
      var name = input.value.replace(/^\s+|\s+$/g, "");
      if (!name) { name = "A. Traveller, of the South"; }
      var p = document.createElement("p");
      p.textContent = "Signed: " + name + " — " + new Date().getFullYear() +
        ", at the gate on Court Street. The office has filed it.";
      list.insertBefore(p, list.firstChild);
      while (list.childNodes.length > 5) { list.removeChild(list.lastChild); }
      input.value = "";
    };
  }
})();
