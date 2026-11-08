/* Grand final build 5.17.2021 — log tail cursor */
(function () {
  var foot = document.querySelector(".doc-foot p");
  if (!foot) return;
  var cursor = document.createElement("span");
  cursor.className = "cursor";
  cursor.setAttribute("aria-hidden", "true");
  foot.insertBefore(cursor, foot.firstChild);
  foot.insertBefore(document.createTextNode("\u00A0"), cursor);
})();
