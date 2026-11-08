// A quiet bid ticker for the catalogue page: the last calls, in order,
// before the hammer fell at FCF 9,200,000.
(function () {
  var bids = [
    "F\u2031 4,800,000 \u2014 the Palais",
    "F\u2031 6,100,000 \u2014 phone, Niamey",
    "F\u2031 7,500,000 \u2014 the committee declines",
    "F\u2031 8,400,000 \u2014 phone, Paris",
    "F\u2031 9,200,000 \u2014 sold"
  ];
  var el = document.createElement("p");
  el.className = "bid-ticker";
  el.setAttribute("aria-hidden", "true");
  var foot = document.querySelector(".lot-foot");
  if (!foot) return;
  foot.insertBefore(el, foot.firstChild);
  var i = 0;
  function show() {
    el.textContent = bids[i];
    el.classList.toggle("flash", i === bids.length - 1);
    i = (i + 1) % (bids.length + 3);
    if (i > bids.length - 1) el.textContent = "";
  }
  show();
  setInterval(show, 3600);
})();
