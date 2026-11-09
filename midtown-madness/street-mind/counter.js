/* Street Mind — corner diner counter: a little visitor count that behaves
   like the bell: it starts at eight, the night we all came in together. */
(function () {
  var el = document.getElementById("visitCount");
  if (!el) return;
  var base = 48213;
  var d = new Date();
  var since = Date.UTC(1999, 7, 1); /* the demo, August 1999 */
  var days = Math.floor((d.getTime() - since) / 86400000);
  var count = base + days;
  el.textContent = String(count).padStart(6, "0");

  /* the bell rings twice for Dale */
  var topbar = document.querySelector(".topbar");
  if (topbar) {
    topbar.title = "the bell rings twice for Dale";
  }
})();
