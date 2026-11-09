/* EE-1972 — a cursor that stays the night */
(function () {
  var msg = document.querySelector("pre.msg");
  if (!msg) return;
  var code = msg.querySelector("code");
  if (!code) return;
  var span = document.createElement("span");
  span.className = "cursor";
  span.textContent = " \u2588";
  code.appendChild(span);
})();
