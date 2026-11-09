// Gallery 7: the wall of ninety-five. Each cell speaks its number back
// in the three registers the desk keeps: decimal, octal, hex.
(function () {
  var grid = document.getElementById("grid");
  if (!grid) return;

  function pad(s, n) { s = String(s); while (s.length < n) s = "0" + s; return s; }

  for (var code = 32; code <= 126; code++) {
    var cell = document.createElement("div");
    cell.className = "cell";
    cell.tabIndex = 0;

    var ch = document.createElement("span");
    ch.className = "ch";
    ch.textContent = String.fromCharCode(code);
    if (code === 32) ch.innerHTML = "&nbsp;";

    var tag = document.createElement("span");
    tag.className = "code";
    tag.textContent = pad(code, 3) + " · " + pad(code.toString(8), 3) + " · " + pad(code.toString(16).toUpperCase(), 2);

    var tip = document.createElement("span");
    tip.setAttribute("role", "note");
    tip.textContent = "code " + code + ", octal " + pad(code.toString(8), 3) + ", hex " + pad(code.toString(16).toUpperCase(), 2);

    cell.appendChild(ch);
    cell.appendChild(tag);
    cell.appendChild(tip);
    grid.appendChild(cell);
  }
})();
