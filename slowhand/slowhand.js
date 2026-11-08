/* The reel counter on attic unit No. 2 kept running through the night.
   It keeps running here, one revolution at a time, so long as the page is open. */
(function () {
  var counter = 3003040; // 30-03-26, 040 past midnight, for the record
  function pad(n) { return String(n).padStart(8, "0"); }
  var el = document.querySelector(".dates");
  if (!el) return;
  var span = document.createElement("span");
  span.className = "reel";
  span.setAttribute("aria-hidden", "true");
  span.textContent = pad(counter);
  el.insertAdjacentElement("beforeend", document.createTextNode(" · reel "));
  el.appendChild(span);
  window.setInterval(function () {
    counter += 1;
    span.textContent = pad(counter);
  }, 9000);
})();
