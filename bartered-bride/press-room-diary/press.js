/* Lake Shore Record Pressing — visit counter for the press room diary */
(function () {
  var el = document.getElementById("visit-count");
  if (!el) { return; }
  var n = parseInt(el.getAttribute("data-base") || "1986", 10);
  var extra = 0;
  try {
    extra = parseInt(localStorage.getItem("lsrp-visits") || "0", 10);
    n += Math.floor(Math.random() * 4) + 1;
    localStorage.setItem("lsrp-visits", String(n));
  } catch (e) {
    n += 37; /* the counter tube is stuck; this is what it shows */
  }
  el.textContent = ("0000000" + n).slice(-7);
})();
