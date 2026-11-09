/* FM 21-52 Chapter 4 — shelf page touches */
// Scrolling banner line, 1998 style.
(function () {
  var m = document.getElementById('marquee');
  if (!m) return;
  var x = 0;
  m.textContent = m.textContent + ' ' + m.textContent;
  var w = 780;
  setInterval(function () {
    x -= 1;
    if (x <= -w) x = 0;
    m.style.transform = 'translateX(' + x + 'px)';
  }, 30);
})();

// Visitor counter, kept in the cookie drawer.
(function () {
  var el = document.getElementById('visits');
  if (!el) return;
  var n = 0;
  try { n = parseInt(document.cookie.replace(/^(.*; )?shelf_visits=(\d+).*$/, '$2') || '0', 10); } catch (e) { n = 0; }
  n += 1;
  try { document.cookie = 'shelf_visits=' + n + '; path=/; max-age=31536000'; } catch (e) {}
  if (n < 1) n = 1; // first visit since the dedication
  var s = String(n + 9281);
  while (s.length < 6) s = '0' + s;
  el.textContent = s;
})();
