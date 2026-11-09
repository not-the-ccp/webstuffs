/* The second drawer keeps its own count, from the equinox, third period. */
(function () {
  var el = document.getElementById('visitors');
  if (!el) return;
  var base = 473;
  var stored = parseInt(window.localStorage && localStorage.getItem('of_acceleration_visits') || '0', 10);
  if (isNaN(stored)) stored = 0;
  stored += 1;
  try { localStorage.setItem('of_acceleration_visits', String(stored)); } catch (e) {}
  var n = base + stored;
  var s = String(n);
  while (s.length < 6) s = '0' + s;
  el.textContent = s;
})();
