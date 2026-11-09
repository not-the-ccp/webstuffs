/* In re the Class One Seats — the record is "laid open" on a long press,
   and a record-time clock runs from the moment the reader arrives. */
(function () {
  var record = document.querySelector(".record");
  var open = false;

  function toggle() {
    open = !open;
    record.classList.toggle("laid-open", open);
  }

  // click the seal to lay the record open (or shut it)
  var seal = document.querySelector(".seal");
  if (seal && record) {
    seal.style.cursor = "pointer";
    seal.setAttribute("title", "Lay the record open");
    seal.addEventListener("click", toggle);
  }

  // the record-time clock: half past ten, when the committee came to order
  function pad(n) { return n < 10 ? "0" + n : "" + n; }
  setInterval(function () {
    var d = new Date();
    var minutes = (6 * 60 + 30) + (d.getHours() * 60 + d.getMinutes() + d.getSeconds() / 60) - (10.5 * 60);
    // simpler: show wall-clock as the committee's clock, offset by the record's own hour
    var h = d.getHours(), m = d.getMinutes(), s = d.getSeconds();
    var label = "Record time: " + pad(h % 12 || 12) + ":" + pad(m) + ":" + pad(s) +
      (h < 12 ? " a.m." : " p.m.") + " — the record runs on";
    var el = document.getElementById("recordClock");
    if (!el) {
      el = document.createElement("p");
      el.id = "recordClock";
      el.style.cssText = "text-align:center;font-size:0.78rem;font-style:italic;color:#4d4235;margin:0.5rem 0 0;letter-spacing:0.04em;";
      var footer = document.querySelector(".kept-with");
      if (footer) footer.parentNode.insertBefore(el, footer);
    }
    el.textContent = label;
  }, 1000);
})();
