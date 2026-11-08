// The family ledger visitor counter. Counts since the first feather was pinned.
(function () {
  var el = document.getElementById("visitor-no");
  if (!el) return;

  function digits(n) {
    var s = String(n);
    while (s.length < 6) s = "0" + s;
    return s;
  }

  var base = 3142; // the number on the page when the first feather was pinned
  var extra = 0;
  try {
    extra = parseInt(localStorage.getItem("bird-visit") || "0", 10) || 0;
    localStorage.setItem("bird-visit", String(extra + 1));
  } catch (e) {
    extra = Math.floor(Math.random() * 9);
  }
  el.textContent = digits(base + extra + 1);

  var btn = document.getElementById("sign-btn");
  if (btn) {
    btn.onclick = function () {
      var inputs = btn.parentElement.getElementsByTagName("input");
      var name = inputs[0].value.replace(/</g, "&lt;").trim();
      var line = inputs[1].value.replace(/</g, "&lt;").trim();
      if (!name && !line) return;
      var dl = btn.parentElement.previousElementSibling;
      if (!dl) return;
      var dt = document.createElement("dt");
      dt.textContent = name || "A passer-by";
      var dd = document.createElement("dd");
      dd.textContent = line || "(left a kernel of millet)";
      dl.appendChild(dt);
      dl.appendChild(dd);
      inputs[0].value = "";
      inputs[1].value = "";
    };
  }
})();
